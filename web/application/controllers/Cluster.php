<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Cluster extends CI_Controller{

    public function __construct() {        
        parent::__construct();        
    }

    public function sequence($cluster_num=NULL){

        if (isset($cluster_num)) {

            $this->load->model("cluster_model");
            $cluster_size = $this->cluster_model->records_total("cluster_sequence", $cluster_num);

            $complex_reference = $this->cluster_model->get_centroid("sequence", $cluster_num)[0];

            if ($cluster_size > 1) {
                
                $main_sequence = $this->cluster_model->get_main_sequence($cluster_num);
                $complex_cluster_list = $this->cluster_model->get_complex_cluster_list("sequence", $cluster_num);
                
                $data = array(
                    "id_complex_reference" => $complex_reference->id_complex,
                    "cluster_num" => $cluster_num,
                    "cluster_size" => $cluster_size,
                    "complex_cluster_list" => $complex_cluster_list,
                    "main_sequence" => $main_sequence->peptide_sequence,                    
                    "scripts" => array(                    
                        "boxsplot_d3.js",
                        "cluster.js",                        
                    ),            
                );
                $this->template->show("cluster_sequence", $data);
            } else if ($cluster_size == 1) {
                redirect("index.php/complex/view/" . $complex_reference->complex);
            } else {
                // CALL CLUSTER EXPLORE
                $data = array(
                    "cluster_type" => "sequence",
                    "alignment_value" => "Identity",
                    "scripts" => array(
                        "boxsplot_d3.js",
                        "cluster.js"
                    ),            
                );
                   
                $this->template->show("cluster_explore", $data); 
            }

        } else {
            // CALL CLUSTER EXPLORE
            $data = array(
                "cluster_type" => "sequence",
                "alignment_value" => "Identity",
                "scripts" => array(
                    "boxsplot_d3.js",
                    "cluster.js"
                ),            
            );               
            $this->template->show("cluster_explore", $data); 
        }  
    }

    public function interface($cluster_num=NULL){

        if (isset($cluster_num)) {

            $this->load->model("cluster_model");            
            $cluster_size = $this->cluster_model->records_total("cluster_interface", $cluster_num);
            
            $complex_reference = $this->cluster_model->get_centroid("interface", $cluster_num)[0];

            if ($cluster_size > 1) {                
                // CENTROID DATA
                                               
                $complex_cluster_list = $this->cluster_model->get_complex_cluster_list("interface", $cluster_num);                
                $data = array(
                    "complex_reference" => $complex_reference,
                    "cluster_num" => $cluster_num,
                    "cluster_size" => $cluster_size,
                    "complex_cluster_list" => $complex_cluster_list,
                    "scripts" => array(                        
                        "boxsplot_d3.js",
                        "cluster.js",
                    ),            
                );
                $this->template->show("cluster_interface", $data);
            } else if ($cluster_size == 1) {                
                redirect("/index.php/complex/view/" . $complex_reference->complex);
                #$this->load->library("complex/view/" . $complex_reference->complex);
            } else {
                // CALL CLUSTER EXPLORE
                $data = array(
                    "cluster_type" => "interface",
                    "alignment_value" => "Inteface RMSD",
                    "scripts" => array(
                        "boxsplot_d3.js",
                        "cluster.js"
                    ),            
                );
                   
                $this->template->show("cluster_explore", $data); 
            }

        } else {
            // CALL CLUSTER EXPLORE
            $data = array(
                "cluster_type" => "interface",
                "alignment_value" => "Inteface RMSD",
                "scripts" => array(
                    "boxsplot_d3.js",
                    "cluster.js"
                ),            
            );
               
            $this->template->show("cluster_explore", $data); 
        }  
    }

    public function binding($cluster_num=NULL){

        if (isset($cluster_num)) {

            $this->load->model("cluster_model");            
            $cluster_size = $this->cluster_model->records_total("cluster_binding", $cluster_num);

            $complex_reference = $this->cluster_model->get_centroid("binding", $cluster_num)[0];

            if ($cluster_size > 1) {                
                // CENTROID DATA
            
                $complex_cluster_list = $this->cluster_model->get_complex_cluster_list("binding", $cluster_num);                
                $data = array(
                    "complex_reference" => $complex_reference,
                    "cluster_num" => $cluster_num,
                    "cluster_size" => $cluster_size,
                    "complex_cluster_list" => $complex_cluster_list,
                    "scripts" => array(                        
                        "boxsplot_d3.js",
                        "cluster.js",
                    ),            
                );
                $this->template->show("cluster_binding", $data);
            } else if ($cluster_size == 1) {
                redirect("/index.php/complex/view/" . $complex_reference->complex);
                #$this->load->library("complex/view/" . $complex_reference->complex);
            } else {
                // CALL CLUSTER EXPLORE
                $data = array(
                    "cluster_type" => "binding",
                    "alignment_value" => "Alignment Score",
                    "scripts" => array(
                        "boxsplot_d3.js",
                        "cluster.js"
                    ),            
                );
                   
                $this->template->show("cluster_explore", $data); 
            }

        } else {
            // CALL CLUSTER EXPLORE
            $data = array(
                "cluster_type" => "binding",
                "alignment_value" => "Alignment Score",
                "scripts" => array(
                    "boxsplot_d3.js",
                    "cluster.js"
                ),            
            );
               
            $this->template->show("cluster_explore", $data); 
        }  
    }

    // AJAX REQUESTS 
    public function ajax_list_cluster_sequence() {

        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }
        
        $id_complex_reference = $this->input->post("id_complex_reference");
        $cluster_num = $this->input->post("cluster_num");
        $cluster_size = $this->input->post("cluster_size");
        $distance_limit_left = $this->input->post("distance_limit_left");
        $distance_limit_right = $this->input->post("distance_limit_right");

        $this->load->model("cluster_model");        
        #$complexes = $this->cluster_model->get_datatable("sequence", $cluster_num);
        $complex_reference = $this->cluster_model->get_complex_cluster($id_complex_reference,
            "sequence", $cluster_num, true)[0];        
    
        $data = array();
        $complex_url = base_url()."complex/view/";
        
        # ADD IN $complex_list_download
        $complex_list_download = array();
        $complex_list_download[] = str_replace("-", "_", $complex_reference->complex);

        # COMPLEX REFERENCE LINE
        $row = array();
        $row[] = str_replace("-", "_", $complex_reference->complex);
        $row[] = "<input type='radio' name='A' onclick='loadPDB(\"A\", \"$complex_reference->complex\")' value='".$complex_reference->complex."'>";
        $row[] = "<input type='radio' name='B' onclick='loadPDB(\"B\", \"$complex_reference->complex\")' value='".$complex_reference->complex."'>";

        if ($complex_reference->centroid == 1) {
            $row[] = "<a href='".$complex_url."$complex_reference->complex' data-bs-placement='top' data-bs-toggle='tooltip' title='Complex centroid'>$complex_reference->complex<i class='fa fa-star icon-d'></i></a>";
        } else {
        $row[] = "<a href='".$complex_url."$complex_reference->complex'>$complex_reference->complex</a>";
        }

        //$row[] = "<div class='very_tiny'>$complex_reference->title</div>";

        $row[] = $complex_reference->size;
        $row[] = "<div class='tiny'>$complex_reference->sequence</div>";
        $row[] = $complex_reference->identity;

        $data[] = $row;

        $complexes = $this->cluster_model->get_complex_cluster($id_complex_reference,
            "sequence", $cluster_num, false, $distance_limit_left, $distance_limit_right);    
        //$query_others = $this->db->last_query();

        #OTHER COMPLEX
        foreach ($complexes as $complex) {                        
            $row = array();
        
            # ADD IN $complex_list_download            
            $complex_list_download[] = str_replace("-", "_", $complex->complex);

            $row[] = str_replace("-", "_", $complex->complex);
            $row[] = "<input type='radio' name='A' onclick='loadPDB(\"A\", \"$complex->complex\")' value='".$complex->complex."'>";
            $row[] = "<input type='radio' name='B' onclick='loadPDB(\"B\", \"$complex->complex\")' value='".$complex->complex."'>";
            
            if ($complex->centroid == 1) {
                $row[] = "<a href='".$complex_url."$complex->complex' data-bs-placement='top' data-bs-toggle='tooltip' title='Complex centroid'>$complex->complex<i class='fa fa-star icon-d'></i></a>";
            } else {
                $row[] = "<a href='".$complex_url."$complex->complex'>$complex->complex</a>";
            }

            //$row[] = "<div class='very_tiny'>$complex->title</div>";

            $row[] = $complex->size;
            $row[] = "<div class='tiny'>$complex->sequence</div>";
            $row[] = $complex->identity;
         
            $data[] = $row;
        }        

        $json = array(
            "draw" => $this->input->post("draw"),
            "recordsTotal" => $cluster_size,
            "recordsFiltered" => count($complex_list_download),
            "complexList" => $complex_list_download,            
            "data" => $data,
            //"query" => $query2
        );

        echo json_encode($json);
    }

    public function ajax_list_cluster_interface() {

        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }

        $id_complex_reference = $this->input->post("id_complex_reference");
        $cluster_num = $this->input->post("cluster_num");
        $cluster_size = $this->input->post("cluster_size");
        $distance_limit_left = $this->input->post("distance_limit_left");
        $distance_limit_right = $this->input->post("distance_limit_right");

        $this->load->model("cluster_model");                
        $complex_reference = $this->cluster_model->get_complex_cluster($id_complex_reference,
            "interface", $cluster_num, true)[0];
        //$query1 = $this->db->last_query();
    
        $data = array();
        $complex_url = base_url()."index.php/complex/view/";
        
        # ADD IN $complex_list_download
        $complex_list_download = array();
        $complex_list_download[] = str_replace("-", "_", $complex_reference->complex);

        # COMPLEX REFERENCE LINE
        $row = array();
        $row[] = str_replace("-", "_", $complex_reference->complex);
        $row[] = "<input type='radio' name='A' onclick='loadPDB(\"A\", \"$complex_reference->complex\")' value='".$complex_reference->complex."'>";
        $row[] = "<input type='radio' name='B' onclick='loadPDB(\"B\", \"$complex_reference->complex\")' value='".$complex_reference->complex."'>";

        if ($complex_reference->centroid == 1) {
            $row[] = "<a href='".$complex_url."$complex_reference->complex' data-bs-placement='top' data-bs-toggle='tooltip' title='Complex centroid'>$complex_reference->complex<i class='fa fa-star icon-d'></i></a>";
        } else {
        $row[] = "<a href='".$complex_url."$complex_reference->complex'>$complex_reference->complex</a>";
        }

        //$row[] = "<div class='very_tiny'>$complex_reference->title</div>";

        $row[] = $complex_reference->irmsd;
        $row[] = $complex_reference->rmsd;
        $row[] = $complex_reference->identity;
        $row[] = $complex_reference->similarity;

        $data[] = $row;

        //$complexes = array();        
        $complexes = $this->cluster_model->get_complex_cluster($id_complex_reference,
            "interface", $cluster_num, false, $distance_limit_left, $distance_limit_right);
        //$query2 = $this->db->last_query();

        #OTHER COMPLEX
        foreach ($complexes as $complex) {                        
            $row = array();

            # ADD IN $complex_list_download            
            $complex_list_download[] = str_replace("-", "_", $complex->complex);

            $row[] = str_replace("-", "_", $complex->complex);
            $row[] = "<input type='radio' name='A' onclick='loadPDB(\"A\", \"$complex->complex\")' value='".$complex->complex."'>";
            $row[] = "<input type='radio' name='B' onclick='loadPDB(\"B\", \"$complex->complex\")' value='".$complex->complex."'>";
            
            if ($complex->centroid == 1) {
                $row[] = "<a href='".$complex_url."$complex->complex' data-bs-placement='top' data-bs-toggle='tooltip' title='Complex centroid'>$complex->complex<i class='fa fa-star icon-d'></i></a>";
            } else {
                $row[] = "<a href='".$complex_url."$complex->complex'>$complex->complex</a>";
            }
            
            //$row[] = "<div class='very_tiny'>$complex->title</div>";
            
            $row[] = $complex->irmsd;
            $row[] = $complex->rmsd;
            $row[] = $complex->identity;
            $row[] = $complex->similarity;

            $data[] = $row;
        }

        $json = array(
            "draw" => $this->input->post("draw"),
            "recordsTotal" => $cluster_size,
            "recordsFiltered" => count($complex_list_download),
            "complexList" => $complex_list_download,            
            "data" => $data,
            //"query1" => $query1,
            //"query2" => $query2
        );

        echo json_encode($json);
    }

    public function ajax_list_cluster_binding() {

        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }

        $id_complex_reference = $this->input->post("id_complex_reference");
        $cluster_num = $this->input->post("cluster_num");
        $cluster_size = $this->input->post("cluster_size");
        $distance_limit_left = $this->input->post("distance_limit_left");
        $distance_limit_right = $this->input->post("distance_limit_right");

        $this->load->model("cluster_model");                
        $complex_reference = $this->cluster_model->get_complex_cluster($id_complex_reference,
            "binding", $cluster_num, true)[0];
    
        $data = array();
        $complex_url = base_url()."index.php/complex/view/";
        
        # ADD IN $complex_list_download
        $complex_list_download = array();
        $complex_list_download[] = str_replace("-", "_", $complex_reference->complex);

        # COMPLEX REFERENCE LINE
        $row = array();
        $row[] = str_replace("-", "_", $complex_reference->complex);
        $row[] = "<input type='radio' name='A' onclick='loadPDB(\"A\", \"$complex_reference->complex\")' value='".$complex_reference->complex."'>";
        $row[] = "<input type='radio' name='B' onclick='loadPDB(\"B\", \"$complex_reference->complex\")' value='".$complex_reference->complex."'>";

        if ($complex_reference->centroid == 1) {
            $row[] = "<a href='".$complex_url."$complex_reference->complex' data-bs-placement='top' data-bs-toggle='tooltip' title='Complex centroid'>$complex_reference->complex<i class='fa fa-star icon-d'></i></a>";
        } else {
        $row[] = "<a href='".$complex_url."$complex_reference->complex'>$complex_reference->complex</a>";
        }

        //$row[] = "<div class='very_tiny'>$complex_reference->title</div>";

        $row[] = $complex_reference->alignment_score;
        $row[] = $complex_reference->z_score;

        $data[] = $row;

        //$complexes = array();
        $complexes = $this->cluster_model->get_complex_cluster($id_complex_reference,
            "binding", $cluster_num, false, $distance_limit_left, $distance_limit_right);
        $query_others = $this->db->last_query();

        #OTHER COMPLEX
        foreach ($complexes as $complex) {                        
            $row = array();

            # ADD IN $complex_list_download            
            $complex_list_download[] = str_replace("-", "_", $complex->complex);

            $row[] = str_replace("-", "_", $complex->complex);
            $row[] = "<input type='radio' name='A' onclick='loadPDB(\"A\", \"$complex->complex\")' value='".$complex->complex."'>";
            $row[] = "<input type='radio' name='B' onclick='loadPDB(\"B\", \"$complex->complex\")' value='".$complex->complex."'>";
            
            if ($complex->centroid == 1) {
                $row[] = "<a href='".$complex_url."$complex->complex' data-bs-placement='top' data-bs-toggle='tooltip' title='Complex centroid'>$complex->complex<i class='fa fa-star icon-d'></i></a>";
            } else {
                $row[] = "<a href='".$complex_url."$complex->complex'>$complex->complex</a>";
            }
            
            //$row[] = "<div class='very_tiny'>$complex->title</div>";
            
            $row[] = $complex->alignment_score;
            $row[] = $complex->z_score;

            $data[] = $row;
        }

        $json = array(
            "draw" => $this->input->post("draw"),
            "recordsTotal" => $cluster_size,
            "recordsFiltered" => count($complex_list_download),
            "complexList" => $complex_list_download,            
            "data" => $data, 
            //"query" => $query_others
        );

        echo json_encode($json);

    }

    public function ajax_list_cluster_explore() {
        
        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }

        $cluster_type = $this->input->post("cluster_type");

        //$cluster_type = "interface";

        $this->load->model("cluster_model");        
        $clusters_info = $this->cluster_model->get_cluster_info($cluster_type);

        # GROUP CLUSTER ARRAY
        $clusters = array();
        foreach ($clusters_info as $cluster_info) {
            
            $cluster_num = $cluster_info->cluster_num;
            if (!array_key_exists($cluster_num, $clusters)) {
                $clusters[$cluster_num] = array(
                    "complex_list" => array(),
                    "centroid_list" => array(),
                );
            }            

            $complex_name = $cluster_info->complex_name;
            $clusters[$cluster_num]["complex_list"][] = $complex_name;
            if ($cluster_info->is_centroid == 1) {
                $clusters[$cluster_num]["centroid_list"][] = $complex_name;
            }
        }

        $data = array();        
        $cluster_url = base_url()."index.php/cluster/$cluster_type/";
        foreach ($clusters as $cluster_num => $cluster_info) {
        
            $row = array();

            $cluster_name = strtoupper($cluster_type[0]) . strval($cluster_num);
            $cluster_size = count($cluster_info["complex_list"]);

            $row[] = $cluster_name;            

            $row[] = "<a href='".$cluster_url."$cluster_num'>$cluster_name</a>";
            $row[] = $cluster_size;

            if ($cluster_size > 2) {
                $row[] = "<svg id='svg_$cluster_name'></svg>
                    <div id='div_$cluster_name'></div>";
            } else {
                $row[] = "";
            }

            $complex_list = implode(", ", $cluster_info["complex_list"]);

            $row[] = "<p class='text-center'>
                <input hidden id='download_cluster_$cluster_num' value='$complex_list'>
                <a onclick='send_to_download($cluster_num)' class='download_cluster' title='Download cluster complex' href='#'
                    data-bs-toggle='modal' data-bs-target='#modal_download_selected'>
                    <i class='fas fa-download'></i>
                </a></p>";

            $row[] = implode(", ", $cluster_info["centroid_list"]);

            $data[] = $row;
        }

        $view = "cluster_explore_" . $cluster_type . "_view";

        $json = array(
            "draw" => $this->input->post("draw"),
            //"recordsTotal" => $this->cluster_model->records_total($view),
            //"recordsFiltered" => $this->cluster_model->records_filtered($cluster_type),
            "data" => $data,
        );

        echo json_encode($json);
    }


    public function in_multiarray($elem, $array,$field)
    {
        $top = sizeof($array) - 1;
        $bottom = 0;
        while($bottom <= $top)
        {
            if($array[$bottom][$field] == $elem)
                return true;
            else 
                if(is_array($array[$bottom][$field]))
                    if(in_multiarray($elem, ($array[$bottom][$field])))
                        return true;

            $bottom++;
        }        
        return false;
    }

    public function ajax_get_cluster_alignments() {

        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }
        
        $cluster_name = $this->input->post("cluster_name");

        $cluster_type = "";
        switch($cluster_name[0]) {          
            case "S":
                $cluster_type = "sequence";
                break;
            case "I":           
                $cluster_type = "interface";
                break;
            case "B":
                $cluster_type = "binding";
                break;
        }
        $cluster_num = substr($cluster_name, 1); 

        $this->load->model("cluster_model");
        $alignment_values = $this->cluster_model->get_cluster_alignment_values(
            $cluster_type, $cluster_num);

        $json = array(            
            "alignment_values" => $alignment_values,            
        );

        echo json_encode($json);

    }
    /*public function ajax_cluster_graph() {

        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }

        $cluster_type = $this->input->post("cluster_type");
        $cluster_num = $this->input->post("cluster_num");

        $this->load->model("cluster_model");
        $id_centroid = $this->cluster_model->get_centroid($cluster_type, $cluster_num)[0]->complex;
        $complexes = $this->cluster_model->get_datatable($cluster_type, $cluster_num);

        $nodes = array();
        $links = array();

        foreach ($complexes as $complex) {                        
            
            if ($complex->complex == $id_centroid) {
                $nodes[] = array(
                    "id" => $complex->complex,
                    "group" => 1,
                );
            } else {
                $nodes[] = array(
                    "id" => $complex->complex,
                    "group" => 2,
                );

                if (!isset($complex->path_to_centroid)) {
                    $links[] = array(
                        "source" => $complex->complex,
                        "target" => $id_centroid,
                        "value" => 1,
                    );
                } else {                    
                    $path = $this->cluster_model->get_complexes_by_path($complex->path_to_centroid);
                    $current_id_complex = $complex->complex;
                    $next_id_complex = NULL;
                    foreach ($path as $p) {
                        $next_id_complex = $p->id_complex;
                        $links[] = array(
                            "source" => $current_id_complex,
                            "target" => $next_id_complex,
                            "value" => 1,
                        );
                        $current_id_complex = $p->id_complex;
                    }
                    $links[] = array(
                        "source" => $current_id_complex,
                        "target" => $id_centroid,
                        "value" => 1,
                    );
                }
            }
        }

        $json = array(
            "nodes" => $nodes,
            "links" => $links,
        );

        echo json_encode($json);
    }*/

}
