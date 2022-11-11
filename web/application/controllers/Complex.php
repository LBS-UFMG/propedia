<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


class Complex extends CI_Controller{

    public function __construct() {        
        parent::__construct();        
    }

    public function view($complex=NULL){

        if (isset($complex)) {

            $this->load->model("complex_model");
            $complex_data = $this->complex_model->get_complex_data($complex);

            if (isset($complex_data)) {
                $sequence_cluster_num = $this->complex_model->get_complex_sequence_cluster($complex);
                $interface_cluster_num = $this->complex_model->get_complex_interface_cluster($complex);
                $bindings_cluster_num = $this->complex_model->get_complex_binding_cluster($complex);
                $similar_complexes = $this->complex_model->get_similar_complexes($complex_data->id_complex);

                $data = array(
                    "complex_data" => $complex_data,
                    "cluster_data" => array(
                        "sequence" => $sequence_cluster_num,
                        "interface" => $interface_cluster_num,
                        "binding" => $bindings_cluster_num,
                    ),
                    "similar_complexes" => $similar_complexes,
                    "styles" => array(),
                    "scripts" => array(                        
                        "complex.js"
                    ),            
                );

                $this->template->show("complex", $data); 
                
            } else {
                // CALL explore
                redirect("/explore");
            }

        } else {
            // CALL explore
            redirect("/explore");
        }  
    }

    // AJAX REQUESTS 
    /*public function ajax_get_protparam() {

        if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }

        $sequence = $this->input->post("sequence");

        if (!(isset($sequence))) {
            
            echo "NO SEQUENCE PASSED!";
        
        } else {

            // FCPATH = scratch/html/propedia/

            // CALL protparam.py
            $cmd = "python3 " . FCPATH . "public/scripts/protparam.py " . $sequence;
            $json = exec($cmd);
            echo $json;
        }

    }*/
}
