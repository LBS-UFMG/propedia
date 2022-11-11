<?= $this->extend('template') ?>
<?= $this->section('conteudo') ?>

<div class="container-fluid">
   <div class="row">
      <div class="col-md-6 col-sm-12">
         <div id="3Dmol_query" style="min-height: 350px; width: 100%; position: relative;">
            <h1 class="text-muted text-center" style="padding:100px 50px 0 50px; color:#ddd"></h1>
         </div>    
         <div id="3Dmol_subject" style="min-height: 350px; width: 100%; position: relative;">
            <h1 class="text-muted text-center" style="padding:0 50px; color:#ddd"></h1>
         </div>         
         <!--<svg id="cluster_viz" style="min-height: 800px; margin:10px 0; width: 100%; position: relative;"></svg>-->
      </div>
      <div class="col-md-6 col-sm-12" style="overflow: auto; height: 1000px;">
         <div class="row">
            <div class="col-md-12">

               <div class="thumbnail" style="border-left: #ff1232 5px solid; color: #ccc; padding:20px">
                  <div class="caption">   
                     <div class="row"> 
                        <h3 class="text-info">Project ID: <a href='<?=base_url()?>search/probis/<?=$project_id?>'><strong><?=$project_id?></a></strong></h3>
                        <br>
                        <?php if ($status != 1) {?>
                           <h4><strong>Status</strong></h4>
                           <h5 style="width: 400px; display: inline-block; word-wrap:break-word;" class="text-muted"><?=$log?></h5>
                        <?php } ?>                        
                        
                        <?php if ($status == 1) {?>
                           <h5 style="width: 600px; display: inline-block; word-wrap:break-word;" class="text-muted">
                              <strong>Chain: </strong><?=$query_chain?>
                              <br>
                              <strong>Residues: </strong><?=$query_residues_list?>
                           </h5>               
                           <div id="boxplot">
                              <svg id="svg_boxplot"></svg>
                              <h5 class="text-muted"><strong>Alignment Score</strong>
                                 <input readonly type="text" id="input_distance" style="border:0; font-weight:bold;">            
                                 <div id="distance_slider"></div>
                              </h5>
                           </div>       
                        <?php } ?>

                        <input id="project_id" value="<?=$project_id?>" hidden></input>
                        <input id="query_chain" value="<?=$query_chain?>" hidden></input>
                        <input id="query_residues_list" value="<?=$query_residues_list?>" hidden></input>
                        <input id="status" value="<?=$status?>" hidden></input>
                       
                     </div>
                  </div>
               </div>
            </div>
         </div>
            
         <?php if ($status == 1) {?>
            <div class="row">
               <div class="col-md-4 col-sm-12">
                  <a class="btn btn-success btn-block" href='<?=base_url() . "public/probis/projects/" . $project_id . "/result.csv";?>'>
                  Result CSV&nbsp;<i class="fas fa-download"></i>
                  </a>
               </div>
               <div class="col-md-4 col-sm-12">
                  <a id="btn_download_selected" class="btn btn-info btn-block" href="#" data-toggle="modal" data-target="#modal_download_selected">
                     Download complex&nbsp;<i class="fas fa-download"></i>
                  </a>                  
               </div>            
               <div class="col-md-4 col-sm-12">
                  <a id="btn_advanced_search" class="btn btn-warning btn-block" href="#" data-toggle="modal">
                     Advanced search&nbsp;<i class="fas fa-filter"></i>
                  </a>
               </div>
            </div>
            <div class="row">
               <div class="col-md-12">
                  <table id="dt_probis" class="table table-striped table-bordered">
                     <thead>
                        <tr class="tableheader">
                           
                           <th class="dt-center">Complex</th>

                           <th class="dt-center"><i class="fa fa-eye"></i></th>

                           <th class="dt-center">Complex<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="PDB - peptide chain - receptor chain">?</a></sup></th>

                           <th class="dt-center">Clusters</th>
                           
                           <th class="dt-center">Alignment Score<sup></sup></th>

                           <th class="dt-center">RMSD<sup></sup></th>                     

                        </tr>
                     </thead>
                     <tbody>
                     </tbody>
                  </table>
               </div>
            </div>
         <?php } ?>         
      </div>
   </div>
</div>

<?= $this->endSection() ?>
