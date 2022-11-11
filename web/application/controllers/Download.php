<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Download extends CI_Controller{

    public function __construct() {        
        parent::__construct();        
    }      
     
    public function index(){
        
        $data = array();               
        $this->template->show("download", $data);
        
    }

}
