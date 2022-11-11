<!DOCTYPE html>
<html>	
<head>
    <title>Propedia v2.3 - A database of peptide-protein interactions</title>    
    <meta charset="utf-8">    
    
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

    <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/DataTables/datatables.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/jquery-ui.css">    
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/all.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/style.css">
    
    <link rel="icon" href="<?php echo base_url('public/img/favicon/favicon-32x32.png'); ?>">
    
    <link rel="manifest" href="<?php echo base_url(); ?>public/img/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?php echo base_url(); ?>public/img/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
        
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <?php if (isset($styles)) {
        foreach ($styles as $style_name) {
            $href = base_url() . "public/css/" . $style_name; ?>
            <link href="<?=$href?>" rel="stylesheet">
        <?php }
    } ?>

</head>
<body>

    <input id="base_url" value="<?php echo base_url(); ?>" hidden></input>
	<header>
    	<nav class="navbar navbar-fixed-top">
    	  <div class="container-fluid">
    	    <div class="navbar-header">
    	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" aria-expanded="false" style="margin-top:20px">
    	        <span class="sr-only">Toggle navigation</span>
    	        <span class="icon-bar" style="background-color:#11d57b"></span>
    	        <span class="icon-bar" style="background-color:#11d57b"></span>
    	        <span class="icon-bar" style="background-color:#11d57b"></span>
    	      </button>
    	      <a href="<?php echo base_url(); ?>" title="Propedia"><img height="70px" src="<?php echo base_url(); ?>public/img/logo_propedia.svg"></a>
    	    </div>

    	    <div class="collapse navbar-collapse" id="menu">
    	      
    	      <ul class="nav navbar-nav navbar-right">                
                <li><a href="<?php echo base_url(); ?>explore" role="button">Explore</a></li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Search <span class="caret"></span></a>
                    <ul class="dropdown-menu">                         
                        <li><a style="color:#333;" href="#" data-toggle="modal" data-target="#blast">by Sequence</a></li>
                        <li><a style="color:#333;" href="#" data-toggle="modal" data-target="#probis">by Binding Site</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Clusters <span class="caret"></span></a>
                    <ul class="dropdown-menu">                         
                        <li><a style="color:#333;" href="<?php echo base_url(); ?>cluster/sequence" role="button">Peptide sequence</a></li>
                        <li><a style="color:#333;" href="<?php echo base_url(); ?>cluster/interface" role="button">Structure interface</a></li>
                        <li><a style="color:#333;" href="<?php echo base_url(); ?>cluster/binding" role="button">Binding site</a></li>
                    </ul>
                </li>                

                <li><a href="<?php echo base_url(); ?>download" role="button">Download</a></li>
                <li><a href="#" data-toggle="modal" data-target="#about">About</a></li>
    	      </ul>
    	    </div>
    	  </div>
    	</nav>
    </header><!-- HERO: main div in home -->
    
        