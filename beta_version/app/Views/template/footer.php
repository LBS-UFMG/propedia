<footer>
   <div class="container">
      <div class="row">
         <div class="col-md-6">
            <p><strong>Laboratório de Bioinformática e Sistemas (LBS)</strong></p>
            <p style="font-size: 12px"><strong>Universidade Federal de Minas Gerais</strong> <br>Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG, 31270-901 </p>
            <p style="font-size: 12px">Instituto de Ciências Exatas (ICEx), Departamento de Ciência da Computação (DCC)</p>
            <p style="font-size: 12px">Anexo U, 4º andar, Sala: 4340 | Telefone +55 31 3409-5896</p>
         </div>
         <div class="col-md-6 right">
            <br>
            <div style="float:right; margin-bottom:20px"><a target="_blank" alt="DCC" href="http://dcc.ufmg.br"><img src="<?php echo base_url(); ?>public/img/dcc.png"></a></div>
            <div style="float:right; margin-bottom:20px"><a target="_blank" alt="UFMG" href="http://ufmg.br"><img src="<?php echo base_url(); ?>public/img/ufmg.png"></a></div>
            <div style="clear:both"></div>
         </div>
      </div>
   </div>
</footer>



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
         <form id="form_blast_run" action="<?php echo base_url(); ?>search/sequence" method="post" enctype="multipart/form-data">
            <div class="modal-header">
               <div>
                  <h3><b>Search for similar sequences</b></h3>
               </div>
               <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

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
               <button type="button" class="btn btn-light " data-bs-dismiss="modal">Cancel</button>
            </div>
         </form>
      </div>
   </div>
</div>
<div class="modal fade" tabindex="-1" id="tutorial" role="dialog">
   <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <div>
               <h3><b>Tutorial</b></h3>
            </div>
            <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

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
                  <form id="form_download_selected" action="<?php echo base_url(); ?>explore" method="post" enctype="multipart/form-data">
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
                        <button type="button" class="btn btn-light  btn-block" data-bs-dismiss="modal">Cancel</button>
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
         <form id="form_probis_run" action="<?php echo base_url(); ?>search/binding" method="post" enctype="multipart/form-data">
            <div class="modal-header">
               <div>
                  <h3><b>Search for similar binding sites</b></h3>
               </div>
               <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

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
                     <input type="radio" name="scope" value="ccd" checked>Only CCD <sup><a class="tip" href="#"  data-bs-placement="top" data-bs-toggle="tooltip" title="Search in <?=number_format($ccd_number)?> complex of Clustered Complex Dataset (faster).">?</a></sup>
                     </label>                               
                     <label class="radio-inline">
                     <input type="radio" name="scope" value="all">Whole database <sup><a class="tip" href="#"  data-bs-placement="top" data-bs-toggle="tooltip" title="Search in <?=number_format($complex_number)?> complex (slower).">?</a></sup>
                     </label>                  
                     <div hidden id="feedback_probis" class="alert alert-danger" role="alert">
                        PDB file and residue list cannot by empty!
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <input id="run_probis_btn" type="submit" class="btn btn-success" value="Run ProBiS NOW" style="display: none;">
               <button type="button" class="btn btn-light " data-bs-dismiss="modal">Cancel</button>
            </div>
         </form>
      </div>
   </div>
</div>