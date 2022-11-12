<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Explore extends CI_Controller{

    public function __construct() {        
        parent::__construct();        
    }      
     
    public function index(){
        
        $this->load->model("explore_model");
        $organisms = $this->explore_model->get_organisms();
        
        $groups = [];        
        $groups_selected = $this->input->post("groups_selected");
        if (!empty($groups_selected)) {
            $groups = $this->explore_model->get_groups($groups_selected);
        } else {
            $groups = $this->explore_model->get_groups();
        }
                
        $complex_list = $this->input->post("complex_list");        

        $data = array(
            "organisms" => $organisms, 
            "groups" => $groups,            
            "complex_list" => $complex_list,            
            "scripts" => array(
                // "all_datatable_buttons_requires",
                "explore.js"
            )
        );
               
        $this->template->show("explore", $data);        
    }

    // AJAX REQUESTS 
    public function ajax_list_complex() {

        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }

        $this->load->model("complex_model");

        $wheres = NULL;
        if ($this->input->post("wheres")) {
            $wheres = $this->input->post("wheres");
        }

        $complexes = $this->complex_model->get_datatable($wheres);
        $query = $this->db->last_query();

        $data = array();        
        $complex_url = base_url()."index.php/complex/view/";        

        // modificacao diego
        //$unicos = array();
        
        foreach ($complexes as $complex) {

            // modificacao diego ---> remove proteinas com mesmo nome
            //if(!in_array($complex->protein_name, $unicos)){

                //array_push($unicos, $complex->protein_name);
                // fim modificação diego
            
                $row = array();                
                
                if ($complex->centroid == 1) {
                    $row[] = "<a href='".$complex_url."$complex->complex' data-placement='top' data-toggle='tooltip' title='Complex centroid'>$complex->complex &nbsp; <i class='fa fa-star icon-d'></i></a>";
                } else {
                    $row[] = "<a href='".$complex_url."$complex->complex'>$complex->complex</a>";
                }

                $row[] = $complex->peptide_size;
                $row[] = $complex->receptor_size;
                $row[] = number_format($complex->resolution,1);
                $row[] = "<div class='tiny'>$complex->protein_name</div>";
        
                //$complex->organism = ucfirst(strtolower($complex->organism));
                //$row[] = "<div class='organism'>$complex->organism</div>";
                $row[] = "<div class='tiny'>$complex->classification</div>";

                $clusters = array();

                // CLUSTER SEQUENCE
                if ($complex->cluster_sequence_num != "") {
                    $cluster_num = $complex->cluster_sequence_num;
                    $cluster_size = 0;//$complex->cluster_sequence_size;
                    $is_centroid = $complex->cluster_sequence_centroid;

                    # SINGLETONS
                    if ($cluster_size == 1) {
                        
                        $cluster_url = $complex_url."$complex->complex";
                        $a = "<a title='Classified in the sequence singleton'  style='text-decoration:none' href='$cluster_url'>";                    
                        //$span = "<span class='badge bg-success'>Singleton S";
                    } else {                        
                        $cluster_url = base_url() . "cluster/sequence/$cluster_num";
                        $a = "<a title='Classified in the sequence cluster number $cluster_num' style='text-decoration:none' href='$cluster_url'>";
                    }
                
                    $span = "<span class='badge bg-success'>Cluster S" . $cluster_num;
                    //}                

                    # SINGLETONS
                    /*if ($cluster_size == 1) {
                         //$span .= "&nbsp;<i class='fa fa-star'>1</i>";                        
                    } else {*/
                        # CENTROID
                        if ($is_centroid == 1) {
                            $span .= "&nbsp;<i class='fa fa-star'></i>";
                        }
                    //}

                    $span .= "</span></a>";
                    $clusters[] = $a . $span;
                    $span = "";
                }
                
                // CLUSTER INTERFACE
                if ($complex->cluster_interface_num != "") {
                    $cluster_num = $complex->cluster_interface_num;
                    $cluster_size = 0;//$complex->cluster_interface_size;
                    $is_centroid = $complex->cluster_interface_centroid;

                    # SINGLETONS
                    if ($cluster_size == 1) {
                        
                        $cluster_url = $complex_url."$complex->complex";
                        $a = "<a title='Classified in the interface singleton'  style='text-decoration:none' href='$cluster_url'>";                    
                        //$span = "<span class='badge bg-success'>Singleton S";
                    } else {                        
                        $cluster_url = base_url() . "cluster/interface/$cluster_num";
                        $a = "<a title='Classified in the interface cluster number $cluster_num' style='text-decoration:none' href='$cluster_url'>";
                    }
                
                    $span = "<span class='badge bg-danger'>Cluster I" . $cluster_num;
                    //}                

                    # SINGLETONS
                    /*if ($cluster_size == 1) {
                         $span .= "&nbsp;<i class='fa fa-star'>1</i>";                        
                    } else {*/
                        # CENTROID
                        if ($is_centroid == 1) {
                            $span .= "&nbsp;<i class='fa fa-star'></i>";
                        }
                    //}

                    $span .= "</span></a>";
                    $clusters[] = $a . $span;
                    $span = "";
                }

                // CLUSTER BINDING
                if ($complex->cluster_binding_num != "") {
                    $cluster_num = $complex->cluster_binding_num;
                    $cluster_size = 0;//$complex->cluster_binding_size;
                    $is_centroid = $complex->cluster_binding_centroid;

                    # SINGLETONS
                    if ($cluster_size == 1) {
                        
                        $cluster_url = $complex_url."$complex->complex";
                        $a = "<a title='Classified in the binding singleton'  style='text-decoration:none' href='$cluster_url'>";                    
                        //$span = "<span class='badge bg-success'>Singleton S";
                    } else {                        
                        $cluster_url = base_url() . "cluster/binding/$cluster_num";
                        $a = "<a title='Classified in the binding cluster number $cluster_num' style='text-decoration:none' href='$cluster_url'>";
                    }
                
                    $span = "<span class='badge bg-primary'>Cluster B" . $cluster_num;
                    //}                

                    # SINGLETONS
                    /*if ($cluster_size == 1) {
                         //$span .= "&nbsp;<i class='fa fa-star'>1</i>";                        
                    } else {*/
                        # CENTROID
                        if ($is_centroid == 1) {
                            $span .= "&nbsp;<i class='fa fa-star'></i>";
                        }
                    //}

                    $span .= "</span></a>";
                    $clusters[] = $a . $span;
                    $span = "";
                }


                $row[] = join("<br>",$clusters);

                /*$group_row = array();
                foreach (array_unique(explode("|",$complex->group)) as $group) {

                    $group_row[] = "<div class='tiny'>$group</div>";
                }            
                $row[] = join("<br>",$group_row);*/

                $aux = $complex->complex;
                $pdb_name = strtolower(substr($aux, 0, 4)).'_'.substr($aux, 5, 1).'_'.substr($aux, 7, 1).'.pdb';

                $row[] = "<p class='text-right'><a title='Download PDB' href='".base_url()."public/pdb/structures/complex/$pdb_name'><i class='fas fa-download'></i></a></p>";
                
                $data[] = $row;

            //} // fim if diego 
        }

        $cluster_sequence_nums = array();
        $sequence_centroids = array();

        $cluster_interface_nums = array();
        $interface_centroids = array();

        $cluster_binding_nums = array();
        $binding_centroids = array();

        $complex_filtered = array();
        $response = $this->complex_model->records_filtered($wheres);

        foreach ($response as $c) {
            $complex = $c["complex"];
            
            $sequence_centroid = $c["sequence_centroid"];            
            $interface_centroid = $c["interface_centroid"];
            $binding_centroid = $c["binding_centroid"];

            $cluster_sequence_num = $c["cluster_sequence_num"];
            $cluster_interface_num = $c["cluster_interface_num"];
            $cluster_binding_num = $c["cluster_binding_num"];

            if ($sequence_centroid == "1" && !in_array($cluster_sequence_num, $cluster_sequence_nums)) {
                $cluster_sequence_nums[] = $cluster_sequence_num;
                $sequence_centroids[] = $complex;
            }

            if ($interface_centroid == "1" && !in_array($cluster_interface_num, $cluster_interface_nums)) {
                $cluster_interface_nums[] = $cluster_interface_num;
                $interface_centroids[] = $complex;
            }

            if ($binding_centroid == "1" && !in_array($cluster_binding_num, $cluster_binding_nums)) {
                $cluster_binding_nums[] = $cluster_binding_num;
                $binding_centroids[] = $complex;
            }

            $complex_filtered[] = $complex;

        }

        $json = array(
            "draw" => $this->input->post("draw"),
            "recordsTotal" => $this->complex_model->records_total(),
            "recordsFiltered" => count($complex_filtered),
            "complexList" => $complex_filtered,
            "data" => $data,
            #"query" => $query,
            #"wheres" => $wheres,
            "response" => $response,
            "sequenceCentroids" => $sequence_centroids,
            "interfaceCentroids" => $interface_centroids,
            "bindingCentroids" => $binding_centroids,
        );
        
        echo json_encode($json);
    }

    public function ajax_add_zip() {

        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }
        
        // IN REQUEST        
        $add_files = implode(" ", $this->input->post("add_files"));
        $zip_file = $this->input->post("zip_file");
        
        $cmd = "cd public/pdb/; zip -ur ../../" . $zip_file . " " . $add_files;
        $output = shell_exec($cmd);

        $json = array(
            "zip_file" => $zip_file,
            "cmd" => $cmd
        );

        echo json_encode($json);


    }

    public function ajax_create_download_file() {

        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }

        #DIRECTORYS
        $temp_download_folder = "public/temp_download/";

        # CLEAR OLD FILES
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

        // IN REQUEST        
        $complex_list = explode(", ", $this->input->post("complex_list"));
        $download_folder = $this->input->post("download_folder");

        $token = md5(uniqid(rand(), true));

        // CREATE EMPTY FOLDER ZIP (TO ADD FILES IN ajax_add_zip)
        $zip_file = "public/temp_download/" . $token . ".zip";
        $cmd = "cd public/pdb/; zip ../../" . $zip_file . " " . $download_folder;
        $output = shell_exec($cmd);

        $files = array();

        # SEQUENCES OR STRCTURES
        $format = NULL;
        if (strpos($download_folder, "sequences") === false) {
            $format = ".pdb";
        } else {
            $format = ".fasta";
        }        
        
        foreach ($complex_list as $complex) {

            list($pdb, $peptide, $receptor) = explode("_", $complex);
            
            if ((!strpos($download_folder, "receptor")) && (!strpos($download_folder, "peptide"))) {
                $files[] = $download_folder . $pdb . "_" . $peptide . "_" . $receptor . $format;
            } else {
                if (strpos($download_folder, "receptor") !== false) {
                    $files[] =  $download_folder . $pdb . "_" . $receptor . $format;                    
                } 
                //(strpos($folders, "peptide") !== false)
                else
                {
                    $files[] = $download_folder . $pdb . "_" . $peptide . $format;
                }
            }


        }

        $json = array(
            "zip_file" => $zip_file,
            "files" => $files,
            "total" => count($files),
            "download_folder" => $download_folder
        );

        echo json_encode($json);
    }

    public function ajax_sizes_limits() {

        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }

        $element = $this->input->post("element");

        $this->load->model("explore_model");
        $sizes = $this->explore_model->get_sizes_limits($element);

        $json = array(
            "min" => $sizes->min,
            "max" => $sizes->max
        );

        echo json_encode($json);        

    }
}