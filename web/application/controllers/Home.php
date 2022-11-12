<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller{

    public function __construct() {        
        parent::__construct();        
    }      
     
    public function index(){

        $this->load->model("cluster_model");
        $cluster_info = $this->cluster_model->get_cluster_numbers();

        $this->load->model("complex_model");
        $complex_number = $this->complex_model->get_complex_number();

        $data = array(
            "cluster_info" => $cluster_info,
            "complex_number" => $complex_number,
            "styles" => array(
                "bubble_chart.css"
            ),
            "scripts" => array(
                "home.js",
                "bubble_chart_tooltip.js",
                "bubble_chart.js"
            ),            
        );
               
        $this->template->show("home", $data);        
    }

    // AJAX REQUESTS 
    public function ajax_get_bubble_data() {

        /*if (!$this->input->is_ajax_request()) {
            exit("Direct access not premitted!");
        }*/

        // $this->load->model("explore_model");
        // $bubble_data = $this->explore_model->get_bubble_data();

        return $bubble_data = ["name"=> [
            "ANTIMICROBIAL", 
            "VIRAL", 
            "ENZYME", 
            "MEMBRANE", 
            "HORMONE", 
            "PLANT"],
          "value"=>[
            100, 2000, 200, 300, 50, 1000
            ]
        ];

        if (!empty($bubble_data)) {

            $data = array();
            
            // HEADER
            $data[] = implode(",", array_keys($bubble_data[0]));

            foreach ($bubble_data as $b) {            
                $data[] = implode(",",array_values($b));
            }
            echo implode("\n",$data);

        }

    }



}
