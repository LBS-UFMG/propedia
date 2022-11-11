<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Template {

	function show($view, $data=array()){

		$CI = & get_instance();

		$CI->load->model("complex_model");
		$complex_number = $CI->complex_model->get_complex_number();
		
		$CCD = TRUE;
		$ccd_number = $CI->complex_model->get_complex_number($CCD);

		$data["complex_number"] = $complex_number;
		$data["ccd_number"] = $ccd_number;
		
		// Load header
		$CI->load->view('template/header',$data);

		// Load content
		$CI->load->view($view,$data);

		// Load footer
		$CI->load->view('template/footer',$data);

		// Scripts
		$CI->load->view('template/scripts',$data);
	}
}

/* End of file Template.php */
/* Location: ./system/application/libraries/Template.php */
?>