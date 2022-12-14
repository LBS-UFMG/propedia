<?php

namespace App\Controllers;
use App\Models\ClusterModel; 
use App\Models\ComplexModel; 


class Home extends BaseController{

    public function index(){
        
        $cluster_info = ClusterModel::get_cluster_numbers(); // acessa um método estático e pega a contagem
        $complex_number = ComplexModel::get_complex_number();

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

        return view('home',$data);
    }

    // AJAX REQUESTS 
    public function ajax_get_bubble_data() {

        $this->load->model("explore_model");
        $bubble_data = $this->explore_model->get_bubble_data();

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
