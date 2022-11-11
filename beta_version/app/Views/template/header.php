<!DOCTYPE html>
<html>

<head>
  <title>Propedia</title>
  <meta charset="utf-8">

  <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/bootstrap.min.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/bootstrap-select.min.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>public/DataTables/datatables.min.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/jquery-ui.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/all.min.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/style.css">

  <link rel="apple-touch-icon" sizes="57x57" href="<?php echo base_url(); ?>public/img/favicon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="<?php echo base_url(); ?>public/img/favicon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="<?php echo base_url(); ?>public/img/favicon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="<?php echo base_url(); ?>public/img/favicon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="<?php echo base_url(); ?>public/img/favicon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="<?php echo base_url(); ?>public/img/favicon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="<?php echo base_url(); ?>public/img/favicon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="<?php echo base_url(); ?>public/img/favicon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo base_url(); ?>public/img/favicon/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192" href="<?php echo base_url(); ?>public/img/favicon/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?php echo base_url(); ?>public/img/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="<?php echo base_url(); ?>public/img/favicon/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo base_url(); ?>public/img/favicon/favicon-16x16.png">
  <link rel="manifest" href="<?php echo base_url(); ?>public/img/favicon/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="<?php echo base_url(); ?>public/img/favicon/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <link rel="shortcut icon" href="#" />

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <?php if (isset($styles)) {
    foreach ($styles as $style_name) {
      $href = base_url() . "public/css/" . $style_name; ?>
      <link href="<?= $href ?>" rel="stylesheet">
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