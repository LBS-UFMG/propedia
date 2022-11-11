<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Search extends CI_Controller{

    public function __construct() {        
        parent::__construct();        
    }     
    
    public function binding($probis_project_id=NULL) {

        #DIRECTORYS
        $probis_project_folder = "public/probis/projects/";

        # CONSTANTS PROJECTS
        $case_study_projects = array(            
            "covid",
            "covid_old",
            "protease",
            "test"
        );

        # CLEAR OLD PROJECTS (2 DAY OLD UNLESS PROJECT ARE CASE OF STUDY)
        if (file_exists($probis_project_folder)) {
            foreach (new DirectoryIterator($probis_project_folder) as $file_obj) {               
                $case_study_project = in_array($file_obj->getFilename(), $case_study_projects);

                // IF . OR .. AND FOLDER IS A CASE OF STUDY
                if ($file_obj->isDot() || $case_study_project) {
                    continue;
                }

                # 60 DAYS
                $day = (24*60*60);
                $days = 60;
                $time_out = time() - $file_obj->getCTime() >= ($days)*($day);

                if ($file_obj->isDir() && $time_out) {
                    system('rm -rf ' . ($file_obj->getRealPath()), $retval);                    
                }
            }
        }
        
        # CHECK IF project_id WAS PASSED
        if (isset($probis_project_id)) {            

            /*
            $lock_file = $probis_project_folder . ".lock"
            if (file_exists($lock_file)) {
                header('Refresh: 5; URL=' . base_url() . "search/probis/$probis_project_id");
                echo "PROJECT <b>$probis_project_id</b> IN QUEUE.<br><br>Redirecting in 5 seconds...";
                }
            }*/

            $project_dir = $probis_project_folder . $probis_project_id;

            #CHECK IF PROJECT FOLDE EXISTS
            if (file_exists($probis_project_folder . $probis_project_id)) {
                
                # CHECK IF PROJECT AREADY DONE
                $done = FALSE;

                // RESIDUES LIST FILE
                $query_chain_residues = $project_dir . "/query_chain_residues.txt";

                // RESULT FILE
                $result = $project_dir . "/result.csv";
                
                // LOG FILE
                $log = $project_dir . "/log.log";

                // ERROR FILE
                $error = $project_dir . "/error.log";
                                    
                $query_residues_list = "";
                if (file_exists($query_chain_residues)) {
                    $content = explode("\n", trim(file_get_contents($query_chain_residues)));
                    $query_chain = $content[0];
                    $query_residues_list = $content[1];
                }

                $log_content = "";
                if (file_exists($log)) {
                    $log_content = file_get_contents($log);                    
                }

                # STATUS = 2 => RUNNING
                $status = 2;
                clearstatcache();

                # STATUS = -1 => ERROR
                $error_content = "";
                if (file_exists($error)) {
                    $status = -1;
                }

                # STATUS = 0 => NOT FOUND RESULTS
                if (file_exists($result)) {
                    if (!filesize($result)) {
                        $status = 0;
                    }

                    # STATUS = 1 => PROJECT FINISH WITH SUCESS
                    if (filesize($result)) {
                        $status = 1;
                    }
                }

                $data = array(
                    "project_id" => $probis_project_id,
                    "log" => $log_content,
                    "query_chain" => $query_chain,
                    "query_residues_list" => $query_residues_list,
                    "status" => $status
                );

                // PROJECT RUNNING
                if ($status == 2) {
                    $data["log"] .= " RUNNING";
                    # AUTO REFRESH
                    header("Refresh: 5; URL=");
                }
                // PROJECT DONE
                elseif ($status == 1) {
                    $data["scripts"] = array(
                        "boxsplot_d3.js",
                        "probis.js"
                    );                
                // PROJECT ERROR OR NOT RESULTS FOUND
                // PRINT LOG CONTENT ON THE SCREEN
                } else {
                    $data["scripts"] = array(                        
                        "probis.js"
                    );   
                }

                # CARREGAMENTO DA PÁGINA
                $this->template->show("probis", $data);   
            
            #IF PROJECT FOLDER NO EXISTS
            } else {
                header('Refresh: 5; URL=' . base_url() . "explore");
                echo "PROJECT <b>$probis_project_id</b> EXPIRED.<br><br>Redirecting in 5 seconds...";
            }

        } elseif (isset($_POST["input_pdb_file"]) && isset($_POST["residues_list"])) {            
            // CREATE PROBIS PROJECT
            $project_id = md5(uniqid(rand(), true));
            $project_dir = $probis_project_folder . $project_id . "/";            
            mkdir($project_dir);
            
            // MOVE PDB FILE TO PROJECT FOLDER
            rename($_POST["input_pdb_file"], $project_dir . "query.pdb");

            $pdb_file = "query.pdb";
            $chain = $_POST["selected_chain"];
            $residues = str_replace(' ', '', $_POST["residues_list"]);
            $scope = $_POST["scope"];

            // CREATE RESIDUES FILE
            $fp = fopen($project_dir . "query_chain_residues.txt", "w");
            fwrite($fp, $chain . "\n");
            fwrite($fp, $residues);
            fclose($fp);

            // RUN PROBIS
            $cmd = "python3 public/probis/run_probis.py $project_id $scope";
            $cmd .= " > public/probis/logs/" . $project_id . ".log ";
            $cmd .= " 2> public/probis/logs/" . $project_id . ".error &";
            /*echo $cmd;
            die;*/
            exec($cmd);

            redirect("/search/binding/$project_id");
            //header("Refresh: 5; URL=");

        } else {
            // DIRECT ACCESS
            redirect("/explore");
        }
        
    }

    public function sequence(){
        
        if (!isset($_POST["sequence"]) || !isset($_POST["search"])) {
            redirect("/explore");
        }

        $data = array();

        $data['sequence'] = addslashes($_POST["sequence"]);

        $where = addslashes($_POST["search"]);

        if(($where != 'peptides')and($where != 'receptors')){
            $where = 'peptides';
        }

        $fp = fopen('public/db/tmp.fasta', 'w');
        fwrite($fp, $data['sequence']);
        fclose($fp);

        /*print_r('blastp -query public/db/tmp.fasta -subject public/db/'.$where.'.fasta -outfmt="6 qseqid sseqid pident score slen sstart send qlen qstart qend qframe positive"');*/

        $output = shell_exec('blastp -query public/db/tmp.fasta -subject public/db/'.$where.'.fasta -outfmt="6 qseqid sseqid pident score slen sstart send qlen qstart qend qframe positive"');

		$out = explode("\n",$output);
        $i = 0;
        $data['result'] = array();
        $this->load->model("cluster_model");

        //@PMARTINS
        //$bubble_data = array();

        $download_complex = array();

        foreach($out as $o){
            $c = explode("\t", $o);            

            if(isset($c[6]) and isset($c[5]) and isset($c[4]) and isset($c[2])){
                if((($c[6]-$c[5])/$c[4] > 0.5) and ($c[2] > 25)){                    

                    //@PMARTINS
                    //GET CLUSTERS_INFO
                    $complex_name = str_replace("-", "_", explode("|", $c[1])[0]);

                    $download_complex[] = $complex_name;
                    
                    $clusters_info = $this->cluster_model->get_clusters_info($complex_name);
                    $clusters = array();

                    if ($clusters_info->cluster_sequence_num != "") {
                        $cluster_num = $clusters_info->cluster_sequence_num;
                        $is_centroid = $clusters_info->cluster_sequence_centroid;

                        $cluster_url = base_url() . "cluster/sequence/$cluster_num";
                            $a = "<a title='Classified in the sequence cluster number $cluster_num' style='text-decoration:none' href='$cluster_url'>";
                        $span = "<span class='label label-success'>Cluster S" . $cluster_num;
                        
                        if ($is_centroid == 1) {
                            $span .= "&nbsp;<i class='fa fa-star'></i>";
                        }
            

                        $span .= "</span></a>";
                        $clusters[] = $a . $span;
                        $span = "";

                    }

                    // CLUSTER INTERFACE
                    if ($clusters_info->cluster_interface_num != "") {
                        $cluster_num = $clusters_info->cluster_interface_num;
                        $is_centroid = $clusters_info->cluster_interface_centroid;

                        $cluster_url = base_url() . "cluster/interface/$cluster_num";
                            $a = "<a title='Classified in the interface cluster number $cluster_num' style='text-decoration:none' href='$cluster_url'>";
                        $span = "<span class='label label-danger'>Cluster I" . $cluster_num;
                        
                        if ($is_centroid == 1) {
                            $span .= "&nbsp;<i class='fa fa-star'></i>";
                        }
                        $span .= "</span></a>";
                        $clusters[] = $a . $span;
                        $span = "";

                    }                

                    // CLUSTER BINDING
                    if ($clusters_info->cluster_binding_num != "") {
                        $cluster_num = $clusters_info->cluster_binding_num;
                        $is_centroid = $clusters_info->cluster_binding_centroid;

                        $cluster_url = base_url() . "cluster/interface/$cluster_num";
                            $a = "<a title='Classified in the interface cluster number $cluster_num' style='text-decoration:none' href='$cluster_url'>";
                        $span = "<span class='label label-primary'>Cluster B" . $cluster_num;
                        
                        if ($is_centroid == 1) {
                            $span .= "&nbsp;<i class='fa fa-star'></i>";
                        }
                        $span .= "</span></a>";
                        $clusters[] = $a . $span;
                        $span = "";

                    }

                    $c[] = join("<br>",$clusters);
                    array_push($data['result'], $c);
                }
            }

        }

        // Compara se $a é maior que $b
        function cmp($a, $b) {
            return $a[3] < $b[3];
        }

        // Ordena
        usort($data['result'], 'cmp');

        //$data["scripts"] = array("blast.js");
        //$data["bubble_data"] = $bubble_data;

        $data["download_complex"] = $download_complex;

        # CARREGAMENTO DA PÁGINA
        $this->template->show("blast", $data);
    }

    public function ajax_import_pdb() {

        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }

        #DIRECTORYS
        $temp_download_folder = "public/temp_download/";

        # CLEAR OLD FILES (1 DAY OLD)
        if (file_exists($temp_download_folder)) {
            foreach (new DirectoryIterator($temp_download_folder) as $fileInfo) {
                if ($fileInfo->isDot()) {
                    continue;
                }
                if ($fileInfo->isFile() && time() - $fileInfo->getCTime() >= 24*60*60) {

                    unlink($fileInfo->getRealPath());
                }
            }
        }

        $config['upload_path']   = $temp_download_folder;
        $config['allowed_types'] = '*';
        $config['overwrite']     = TRUE;
        $config['encrypt_name'] = TRUE;
        //$config['max_size']      = 10240;

        $this->load->library('upload', $config);

        $json = array();
        $json["status"] = 1;
        
        if (!$this->upload->do_upload('import_file')) {         
            $json["status"] = 0;
            //$json["error"]["title"] = "Erro ao carregar o arquivo!";
            $json["error"]["text"] = $this->upload->display_errors('', '');
        }
        else {
            if ($this->upload->data()["file_size"]) {                
                $file_name = $this->upload->data()["file_name"];
                $json["web_path"] = base_url() . $temp_download_folder . $file_name;
                $json["path"] = $temp_download_folder . $file_name;
            } else {
                $json["status"] = 0;
                //$json["error"]["title"] = "Arquivo vazio!";
                $json["error"]["text"] = "File cannot by empty!";
            }
        }        

        echo json_encode($json);

    }

    public function ajax_create_pdb() {

        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }

        #DIRECTORYS
        $temp_download_folder = "public/temp_download/";

        # CLEAR OLD FILES (1 DAY OLD)
        if (file_exists($temp_download_folder)) {
            foreach (new DirectoryIterator($temp_download_folder) as $fileInfo) {
                if ($fileInfo->isDot()) {
                    continue;
                }
                if ($fileInfo->isFile() && time() - $fileInfo->getCTime() >= 24*60*60) {

                    unlink($fileInfo->getRealPath());
                }
            }
        }

        $pdb_id = $this->input->post("pdb_id");
        $pdb_content = $this->input->post("pdb_content");

        $json = array();
        $json["status"] = 1;

        $file_name = strtolower($pdb_id) . ".pdb";

        $pdb_file = fopen($temp_download_folder . $file_name, "w");        
        fwrite($pdb_file, $pdb_content);        
        fclose($pdb_file);

        $json["web_path"] = base_url() . $temp_download_folder . $file_name;
        $json["path"] = $temp_download_folder . $file_name;

        echo json_encode($json);
        
    }

    public function ajax_show_result() {

        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }

        #DIRECTORYS
        $probis_project_folder = "public/probis/projects/";
        #$complex_folder = base_url() . "public/pdb/structures/complex/";
            
        $probis_project_id = $this->input->post("project_id");
        $distance_limit_left = $this->input->post("distance_limit_left");
        $distance_limit_right = $this->input->post("distance_limit_right");
        $only_ccd = $this->input->post("only_ccd");

        $project_folder  = $probis_project_folder  . $probis_project_id . "/";
        
        // LOAD CLUSTER MODEL
        $this->load->model("cluster_model");

        $total = 0;
        $filter = 0;        
        
        $data = array();
        $complex_list_download = array();
        $complex_url = base_url()."complex/view/";

        // READ CSV DATA
        $handle = fopen($project_folder . "result.csv", "r");
        $header_row = true;
        if ($handle) {
            
            while (($line = fgets($handle)) !== false) {

                # SKIP HEADER ROW
                if ($header_row) {$header_row = false; continue;}

                $line_array = explode(",", trim($line));

                // GET CSV DATA
                $complex_name_user = str_replace("_", "-", $line_array[0]);
                $complex_name = $line_array[0];
                $pep_chain = $complex_name[5];
                $rec_chain = $complex_name[7];
                $alignment_score = $line_array[1];
                $rmsd = $line_array[2];
                $query_aligned_res = str_replace(";", ",", $line_array[3]);
                $subject_aligned_res = str_replace(";", ",", $line_array[4]);

                // FILTER BY ALIGNMENT SCORE
                if ((floatval($distance_limit_left) <= floatval($alignment_score)) && 
                    (floatval($distance_limit_right) >= floatval($alignment_score))) {

                    // ADD TO DOWNLOAD LIST
                    $complex_list_download[] = $complex_name;

                    // GET CLUSTERS INFO
                    $clusters_info = $this->cluster_model->get_clusters_info($complex_name);
                    $clusters = array();

                    // CLUSTER SEQUENCE
                    if ($clusters_info->cluster_sequence_num != "") {
                        $cluster_num = $clusters_info->cluster_sequence_num;
                        $is_centroid = $clusters_info->cluster_sequence_centroid;

                        $cluster_url = base_url() . "cluster/sequence/$cluster_num";
                            $a = "<a title='Classified in the sequence cluster number $cluster_num' style='text-decoration:none' href='$cluster_url'>";
                        $span = "<span class='label label-success'>Cluster S" . $cluster_num;
                        
                        if ($is_centroid == 1) {
                            $span .= "&nbsp;<i class='fa fa-star'></i>";
                        }

                        $span .= "</span></a>";
                        $clusters[] = $a . $span;
                        $span = "";

                    }

                    // CLUSTER INTERFACE
                    if ($clusters_info->cluster_interface_num != "") {
                        $cluster_num = $clusters_info->cluster_interface_num;
                        $is_centroid = $clusters_info->cluster_interface_centroid;

                        $cluster_url = base_url() . "cluster/interface/$cluster_num";
                            $a = "<a title='Classified in the interface cluster number $cluster_num' style='text-decoration:none' href='$cluster_url'>";
                        $span = "<span class='label label-danger'>Cluster I" . $cluster_num;
                        
                        if ($is_centroid == 1) {
                            $span .= "&nbsp;<i class='fa fa-star'></i>";
                        }
                        $span .= "</span></a>";
                        $clusters[] = $a . $span;
                        $span = "";
                    }                

                    // CLUSTER BINDING
                    if ($clusters_info->cluster_binding_num != "") {
                        $cluster_num = $clusters_info->cluster_binding_num;
                        $is_centroid = $clusters_info->cluster_binding_centroid;

                        $cluster_url = base_url() . "cluster/interface/$cluster_num";
                            $a = "<a title='Classified in the interface cluster number $cluster_num' style='text-decoration:none' href='$cluster_url'>";
                        $span = "<span class='label label-primary'>Cluster B" . $cluster_num;
                        
                        if ($is_centroid == 1) {
                            $span .= "&nbsp;<i class='fa fa-star'></i>";
                        }
                        $span .= "</span></a>";
                        $clusters[] = $a . $span;
                        $span = "";
                    }

                    //$pdb_file = $complex_folder . $complex_name;                    

                    // FILL ROW
                    $row = array();
                    $row[] = $complex_name;
                    $row[] = "<input type='radio' name='A' onclick='load_PDB(\"3Dmol_subject\", \"$complex_name\", \"$query_aligned_res\", \"$subject_aligned_res\", \"$rec_chain\", \"$pep_chain\")' value='".$complex_name."'>";
                    $row[] = "<a href='" . $complex_url . $complex_name_user . "'>"
                        . $complex_name_user . "</a>";
                    //$row[] = $complex_name_user;
                    $row[] = join("<br>",$clusters);
                    $row[] = $alignment_score;
                    $row[] = $rmsd;
                    $data[] = $row;

                    $filter++;
                }                
                $total++;                
            }            
            fclose($handle);
        }        

        $json = array(
            "draw" => $this->input->post("draw"),
            "recordsTotal" => $total,
            "recordsFiltered" => $filter,
            "complexList" => $complex_list_download,            
            "data" => $data,            
        );

        echo json_encode($json);

    }    

}

?>