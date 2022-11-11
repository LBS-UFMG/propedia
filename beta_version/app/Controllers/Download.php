<?php

namespace App\Controllers;

class Download extends BaseController
{
     
    public function index(){
        
        $data = array();               
        return view("download", $data);
        
    }

}
