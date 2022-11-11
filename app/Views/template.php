<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Propedia v2.3 - A database of peptide-protein interactions</title>


  <!-- CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">

  <!-- <link rel="stylesheet" href="<?=base_url('/css/buttons.datatables.min.css')?>"> -->

  <link rel="icon" type="image/png" href="<?php echo base_url('/img/favicon/android-icon-192x192.png'); ?>">

  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>

  <script>
    // <!-- Variáveis importantes -->
    const frontend = "<?= base_url('/') ?>";  // endereço do front-end
    //const backend = "<?= '' #BACKEND_URL ?>";  // endereço do back-end
  </script>

    <link rel="stylesheet" href="<?php echo base_url('/css/jquery-ui.css'); ?>">    
    <link rel="stylesheet" href="<?php echo base_url('/css/all.min.css'); ?>">
    <!-- <link rel="stylesheet" href="<?php echo base_url('/css/estilo.css'); ?>"> -->
    <link rel="stylesheet" href="<?php echo base_url('/css/style.css'); ?>">

</head>
<body>
  <header class="bg-success">
    <div class="container-fluid d-flex flex-wrap justify-content-center">
      <a href="<?=base_url()?>" title="Home" class="d-flex align-items-center mb-md-0 me-md-auto text-decoration-none">
        <img src="<?=base_url('/img/logo_propedia.svg')?>" width="300">
        <label class="badge bg-warning mt-4">v2.3</label>
      </a>

      <ul class="nav nav-pills pt-3" id="menu">
      

            <li><a href="<?php echo base_url('/explore'); ?>" role="button">Explore</a></li>

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
                <li><a style="color:#333;" href="<?php echo base_url('/cluster/sequence'); ?>" role="button">Peptide sequence</a></li>
                <li><a style="color:#333;" href="<?php echo base_url('/cluster/interface'); ?>" role="button">Structure interface</a></li>
                <li><a style="color:#333;" href="<?php echo base_url('/cluster/binding'); ?>" role="button">Binding site</a></li>
              </ul>
            </li>

            <li><a href="<?php echo base_url('download'); ?>" role="button">Download</a></li>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#about">About</a></li>
          </ul>
    </div>
  </header>

  
  <main>
    <?= $this->renderSection('conteudo') ?> 
  </main>

  <footer class="bg-dark py-4 mt-4">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 text-start col-12">

          <div class="row">
            <div style="width: 100px;" class="me-2">
              <img src="<?=base_url('/img/lbs.svg')?>" class="opacity-50" style="width:100px">
            </div>
            <div class="col">
              <!-- descrição -->
              <h5 class="py-2"><strong>Laboratório de Bioinformática e Sistemas (LBS)</strong></h5>
              <p>
                <strong>Universidade Federal de Minas Gerais (UFMG), Brazil</strong><br>
                <span class="small">Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG, 31270-901 | Instituto de Ciências Exatas (ICEx), Departamento de Ciência da Computação (DCC)</span> 
              </p>
              <p class="small">Anexo U, 4º andar, Sala: 4340 | +55 31 3409-5896 | bioinfo.dcc.ufmg[at]gmail.com</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-12 text-end">
          <a target="_blank" alt="UFMG" href="http://ufmg.br">
            <img src="<?=base_url('/img/ufmg_w.svg');?>" class="pt-4" width="250">
          </a>
        </div>

        <div class="col-md-3 col-12">
          <a target="_blank" alt="DCC" href="http://dcc.ufmg.br">
            <img src="<?=base_url('/img/dcc_w.svg');?>" class="p-4" width="250">
          </a>
        </div>
        
        
      </div>
    </div>
  </footer>

  <div id="pos_footer" class="text-center small text-dark py-1 px-4" style="position: relative; background: #a23737; font-size:0.6em">
    <b>©<?php echo date('Y'); ?> LBS</b> | Created by <a target="_blank" href="http://diegomariano.com" class="text-dark"><b>Diego Mariano</b></a> and
    <a target="_blank" href="http://dcc.ufmg.br/~pmartins" class="text-dark"><b>Pedro Martins</b></a> | Maintained by <a href="#" data-bs-toggle="modal" 
    data-bs-target="#lbs_team" class="text-dark"><b>LBS I.T. team</b></a>.
  </div>

  <!-- MODAL -->
  <div class="modal fade" tabindex="-1" id="lbs_team" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><span aria-hid
  den="true">&times;</span></button>
          <h4 class="modal-title"><strong>LBS I.T. Team</strong></h4>
        </div>
              
        <div class="modal-body">
          <p style="text-align:center; padding:20px"><img src="<?=base_url('/img/logo3.svg');?>"></
  p>
          <h1 style="text-align:center">LBS I.T. TEAM</h1>						
          <strong>Admin: </strong>Pedro Martins<br><br>

          <h4>LBS website</h4>
          <strong>Back-end: </strong>Pedro Martins<br>
          <strong>Front-end/design: </strong>Diego Mariano<br>
          <strong>Traducción (Español): </strong>Susana Medina<br>
          <strong>Translation (English): </strong><br>

        </div>
              
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->

<!-- MODAL -->
<div class="modal fade" tabindex="-1" id="about" role="dialog">
   <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <div style="text-align: center">
               <img src="<?php echo base_url('/img/logo3.svg'); ?>">
            </div>
            <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
         </div>
         <div class="modal-body">
            <div class="row">

              <div class="alert alert-success small">
                <h5><b>Please, cite: </b></h5>
                Pedro M. Martins, Lucianna H. Santos, Diego Mariano, Felippe C. Queiroz, Luana L. Bastos, Isabela de S. Gomes, Pedro H. C. Fischer, Rafael E. O. Rocha, Sabrina A. Silveira, Leonardo H. F. de Lima, Mariana T. Q. de Magalhães, Maria G. A. Oliveira & Raquel C. de Melo-Minardi (2021). <b>Propedia: a database for protein–peptide identification based on a hybrid clustering algorithm. </b>Bioinformatics, 22(1), 1-20.</div>
               <div class="col-md-7">
                  <p style="padding-top:10px">
                     <strong>Designed by: </strong><br>
                     <a href="#" target="_blank">Dr Pedro Martins</a><br>
                     <a href="#" target="_blank">Dr Lucianna H. Santos</a><br>
                     <a href="http://diegomariano.com" target="_blank">Dr Diego Mariano</a><br>
                     <a href="http://www.dcc.ufmg.br/~raquelcm" target="_blank">Prof. Dr Raquel de Melo-Minardi</a><br><br>
                     <strong>Back-end: </strong><br>
                     <a href="#" target="_blank">Dr Pedro Martins</a><br><br>
                     <strong>Front-end: </strong><br>
                     <a href="#" target="_blank">Dr Pedro Martins / Dr Diego Mariano</a><br>
                     <a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by freepik - www.freepik.com</a><br><br>
                     <strong>Financing and support: </strong><br>
                     <a href="http://www.capes.gov.br" target="_blank">CAPES</a> / <a href="http://ufmg.br" target="_blank">UFMG</a> / <a href="http://bioinfo.dcc.ufmg.br" target="_blank">LBS</a><br><br>
                  </p>
               </div>
               <div class="col-5">
                <h5>Propedia v2.3</h5>
                <p class="text-muted">Update log</p>
                <ul class="small">
                  <li>Protein-peptide complexes updated</li>
                  <li>Clustering method based on structural signatures included</li>
                  <li>New navigation resource add: browse by specific datasets</li>
                  <li>Performance improvements</li>
                  <li>Inner engine updated to CodeIgniter 4</li>
                  <li>Back-end: PHP 8 support added</li>
                  <li>Front-end: Bootstrap 5 support added</li>
                </ul>
               </div>
            </div>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
         </div>
      </div>
      <!-- /.modal-content -->
   </div>
   <!-- /.modal-dialog -->
</div>
<!-- /.modal -->
<div class="modal fade" tabindex="-1" id="blast" role="dialog">
   <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
         <form id="form_blast_run" action="<?php echo base_url('search/sequence'); ?>" method="post" enctype="multipart/form-data">
            <div class="modal-header">
               <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
               <div>
                  <h3><b>Search for similar sequences</b></h3>
               </div>
            </div>
            <div class="modal-body">
               <div class="row">
                  <div class="col-md-12">
                     <h5><b>Input sequence</b></h5>
                     <textarea id="txt_sequence" class="form-control" form="form_blast_run" name="sequence" rows="10" placeholder="Insert the sequence here"></textarea>
                     <div hidden id="feedback_blast" class="alert alert-danger" role="alert">
                        Sequence cannot be empty!
                     </div>
                     <br>
                     <h5><b>Search sequence from</b></h5>
                     <label class="radio-inline">
                     <input type="radio" name="search" value="peptides" checked>Peptides
                     </label>
                     <label class="radio-inline">
                     <input type="radio" name="search" value="receptors" checked>Proteins
                     </label>                           
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <input type="submit" class="btn btn-success" value="Run BLAST">
               <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
            </div>
         </form>
      </div>
   </div>
</div>
<div class="modal fade" tabindex="-1" id="tutorial" role="dialog">
   <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div>
               <h3><b>Tutorial</b></h3>
            </div>
         </div>
         <div class="modal-body">
            <div class="row">
               <div class="col-md-12">
                  <p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/oM1RTQlB7WY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<div class="modal fade" tabindex="-1" id="modal_download_selected" role="dialog">
   <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div>
               <h3><b>Download</b></h3>
            </div>
         </div>
         <div class="modal-body">
            <div class="row">
               <div class="col-md-12">
                  <form id="form_download_selected" action="<?php echo base_url('explore'); ?>" method="post" enctype="multipart/form-data">
                     <!-- $download_complex FROM search/sequence -->
                     <textarea id="txt_complex_list" class="form-control" name="complex_list" rows="10" readonly><?php if(isset($download_complex)) echo implode(", ", $download_complex); ?></textarea>
                     <textarea style="display:none;" id="txt_sequence_centroid_list" class="form-control" readonly></textarea>
                     <textarea style="display:none;" id="txt_interface_centroid_list" class="form-control" readonly></textarea>
                     <textarea style="display:none;" id="txt_binding_centroid_list" class="form-control" readonly></textarea>
                     <small id="number_complex" class="text-muted"></small>
                     <br>
                     <br>
                     <div class="row">
                        <div class="col-md-6 col-sm-12">
                           <legend>Structures</legend>
                           <div class="radio"><label><input type="radio" name="download_folder" value="structures/complex/" checked>Complex</label></div>
                           <div class="radio"><label><input type="radio" name="download_folder" value="structures/receptor/">Receptor</label></div>
                           <div class="radio"><label><input type="radio" name="download_folder" value="structures/peptide/">Peptide</label></div>
                           <div class="radio"><label><input type="radio" name="download_folder" value="structures/interface/">Interface</label></div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                           <legend>Sequences</legend>
                           <div class="radio"><label><input type="radio" name="download_folder" value="sequences/receptor/">Receptor</label></div>
                           <div class="radio"><label><input type="radio" name="download_folder" value="sequences/peptide/">Peptide</label></div>
                           <!--<div class="radio"><label><input type="radio" name="download_folder" value="sequences/interface/">Interface</label></div>-->
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div class="modal-footer">
            <div class="row">
               <div class="col-md-8 col-sm-12">
                  <p id="feedback_download" class="text-left" style="display: block;"></p>
                  <div id="progress_bar_div" class="progress" style="display: block;">
                     <div id="progress_bar_value" class="progress-bar progress-bar-success progress-bar-striped active" aria-valuenow="0" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:0%">
                        0%
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-12">
                  <div class="row">
                     <div class="col-md-12 col-sm-12">
                        <button id="btn_download_modal" type="button" class="btn btn-success btn-block">Download</button>
                     </div>
                     <div class="col-md-12 col-sm-12">
                        <button type="button" class="btn btn-primary btn-block" data-bs-dismiss="modal">Cancel</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- /.modal-content -->
   </div>
   <!-- /.modal-dialog -->
</div>
<!-- /.modal -->
<!-- /.modal -->
<div class="modal fade" tabindex="-1" id="probis" role="dialog">
   <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
         <form id="form_probis_run" action="<?php echo base_url('search/binding'); ?>" method="post" enctype="multipart/form-data">
            <div class="modal-header">
               <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
               <div>
                  <h3><b>Search for similar binding sites</b></h3>
               </div>
            </div>
            <div class="modal-body">
               <div id="3DmolViewer" style="min-height: 400px; margin:10px 0; width: 100%;"></div>
               <div class="row">
                  <div class="col-md-5">
                     <div class="form-group row">
                        <label class="col-sm-5 col-form-label col-spacing_custom">
                           <h5><b>Search from PDB:</b></h5>
                        </label>
                        <div class="col-sm-3 col-spacing_custom">
                           <input id="search_pdb_id" class="form-control"  placeholder="1a1m">
                        </div>
                        <div class="col-sm-4 col-spacing_custom">
                           <label id="btn_pdb_id" class="btn btn-block btn-primary">
                           <i class="fa fa-search"></i>
                           </label>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-2">
                     <div class="text-center">
                        <h4><b>OR</b></h4>
                     </div>
                  </div>
                  <div class="col-md-5">
                     <label class="btn btn-block btn-info">
                     <i class="fa fa-upload"></i>&nbsp;Upload PDB
                     <input type="file" id="btn_pdb_file" accept=".pdb" style="display: none;">
                     </label>
                     <input id="input_pdb_file" name="input_pdb_file" hidden>                        
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-12">
                     <small><label id="loading_covid" class="btn-small btn-block btn-link">Loading sample: SARS-CoV-2 main protease (6lu7)</label></small>
                  </div>
               </div>
               <div id="feedback_upload" class="alert" role="alert" hidden></div>
               <div id="fields" class="row" hidden>
                  <div class="col-md-12">
                     <h4><b>Protein chain select</b></h4>
                     <select id="selected_chain" name="selected_chain" class="form-control" style="width: 100%"></select>
                     <h4><b>Input residues id</b></h4>
                     <p style="color:gray;font-size:12px;">Separated by comma (',')</p>
                     <div class="row">
                        <div class="col-md-8">
                           <textarea id="residues_list" class="form-control" form="form_probis_run" name="residues_list" rows="3" placeholder=""></textarea>
                        </div>
                        <div class="col-md-4">
                           <label id="highlight_residues" class="btn btn-block btn-primary">Highlight residues surface
                           <br>
                           <i class="fa fa-eye"></i>
                           </label>
                        </div>
                     </div>
                     <h4><b>Search scope</b></h4>
                     <label class="radio-inline">
                     <input type="radio" name="scope" value="ccd" checked>Only CCD <sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="Search in <//?=number_format($ccd_number)?> complex of Clustered Complex Dataset (faster).">?</a></sup>
                     </label>                               
                     <label class="radio-inline">
                     <input type="radio" name="scope" value="all">Whole database <sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="Search in <//?=number_format($complex_number)?> complex (slower).">?</a></sup>
                     </label>                  
                     <div hidden id="feedback_probis" class="alert alert-danger" role="alert">
                        PDB file and residue list cannot by empty!
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <input id="run_probis_btn" type="submit" class="btn btn-success" value="Run ProBiS NOW" style="display: none;">
               <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
            </div>
         </form>
      </div>
   </div>
</div>


    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
    integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"
    integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous">
    </script>


    <!-- <script src="<?=base_url('/js/3dmol.js')?>"></script>principal script -->

    <!-- <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script> -->

    <!-- <script src="<?=base_url('/js/dataTables.buttons.min.js')?>"></script>
    <script src="<?=base_url('/js/buttons.html5.min.js')?>"></script>
    <script src="<?=base_url('/js/buttons.print.min.js')?>"></script>
    <script src="<?=base_url('/js/jszip.min.js')?>"></script>
    <script src="<?=base_url('/js/pdfmake.min.js')?>"></script>
    <script src="<?=base_url('/js/vfs_fonts.js')?>"></script> -->



        <!-- Bootstrap core JavaScript
            ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="<?php echo base_url('/js/bootstrap-select.min.js'); ?>"></script>

        <!--<script src="http://3Dmol.csb.pitt.edu/build/3Dmol-min.js"></script>-->
        <script src="<?php echo base_url('/js/3Dmol-nojquery.js'); ?>"></script>

        <script src="<?php echo base_url('/js/jquery-ui.js'); ?>"></script>
        <script src="<?php echo base_url('/js/util.js'); ?>"></script>
        <script src="<?php echo base_url('/js/d3.v4.min.js'); ?>"></script>

        <script src="<?php echo base_url('/js/font_awesome_5.js'); ?>"></script>
        

        <?php if (isset($scripts)) {
            foreach ($scripts as $script_name) {
                if ($script_name == "all_datatable_buttons_requires") {?>
        <!-- DATATABLE'S BUTTONS REQUIRED SCRIPTS -->
        <script src="https://cdn.datatables.net/buttons/1.6.2/js/dataTables.buttons.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.6.2/js/buttons.flash.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.6.2/js/buttons.html5.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.6.2/js/buttons.print.min.js"></script>
                <?php
                } else {
                    $src = base_url() . "public/js/" . $script_name; ?>
        <script src="<?=$src?>"></script>
                <?php }
             }
        } ?>



    <!-- <script src="<?=base_url('/js/main.js')?>"></script>principal script -->
    <!-- FIM Scripts -->

</body>
</html>