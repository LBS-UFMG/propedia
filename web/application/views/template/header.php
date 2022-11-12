<!DOCTYPE html>
<html>

<head>
  <title>Propedia v2.3 - A database of peptide-protein interactions</title>
  <meta charset="utf-8">

  <!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

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
      <link href="<?= $href ?>" rel="stylesheet">
  <?php }
  } ?>

  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>

  <script>
    // <!-- Variáveis importantes -->
    const frontend = "<?= base_url('/') ?>"; // endereço do front-end
    //const backend = "<?= '' #BACKEND_URL ?>";  // endereço do back-end
  </script>
</head>

<body>

  <input id="base_url" value="<?php echo base_url(); ?>" hidden></input>

  <header class="bg-success">
    <div class="container-fluid d-flex flex-wrap justify-content-center">
      <a href="<?=base_url()?>" title="Home" class="d-flex align-items-center mb-md-0 me-md-auto text-decoration-none">
        <img src="<?=base_url('public/img/logo_propedia.svg')?>" width="300">
        <label class="badge bg-warning mt-4">v2.3</label>
      </a>

      <ul class="nav nav-pills pt-3" id="menu">
      

            <li><a href="<?php echo base_url('/index.php/explore'); ?>" role="button">Explore</a></li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Search <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a style="color:#333;" href="#" data-bs-toggle="modal" data-bs-target="#blast">by Sequence</a></li>
                <li><a style="color:#333;" href="#" data-bs-toggle="modal" data-bs-target="#probis">by Binding Site</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Clusters <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a style="color:#333;" href="<?php echo base_url('/index.php/cluster/sequence'); ?>" role="button">Peptide sequence</a></li>
                <li><a style="color:#333;" href="<?php echo base_url('/index.php/cluster/interface'); ?>" role="button">Structure interface</a></li>
                <li><a style="color:#333;" href="<?php echo base_url('/index.php/cluster/binding'); ?>" role="button">Binding site</a></li>
              </ul>
            </li>

            <li><a href="<?php echo base_url('index.php/download'); ?>" role="button">Download</a></li>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#about">About</a></li>
          </ul>
    </div>
  </header>