<?php

namespace App\Controllers;

class Download extends BaseController
{
     
    public function index(){
        
        $data = array();               
        $this->template->show("download", $data);
        
    }

}
