<div class="container-fluid">
   
   <div class="row">
      
      <div class="col-md-5 col-sm-12">
         <div id="3DmolA" style="min-height: 350px; width: 100%; position: relative;">
            <h1 class="text-muted text-center" style="padding:100px 50px 0 50px; color:#ddd">[CLICK ON COLUMN <strong>A</strong><br>TO VISUALIZE THE COMPLEX HERE]</h1>
         </div>    
         <div id="3DmolB" style="min-height: 350px; width: 100%; position: relative;">
            <h1 class="text-muted text-center" style="padding:0 50px; color:#ddd">[CLICK ON COLUMN <strong>B</strong><br>TO VISUALIZE THE COMPLEX HERE]</h1>
         </div>
         <!--<svg id="cluster_viz" style="min-height: 800px; margin:10px 0; width: 100%; position: relative;"></svg>-->
      </div>

      <div class="col-md-7 col-sm-12" style="overflow: auto; height: 1000px;">
      
         <div class="row">
            
            <div class="col-md-12">

               <div class="thumbnail" style="border-left: #06A2F7 5px solid; color: #ccc; padding:20px">
                  <div class="caption">   
                     <div class="row"> 
                        <h3 class="text-primary">Cluster <strong>B<?=$cluster_num?></strong></h3>
                        <h5 class="text-muted"><strong>Centroid:</strong> <?=$complex_reference->complex;?></h5>
                        <h5 class="text-muted"><strong>Size:</strong><?=$cluster_size;?></h5>

                        <!--<h5 class="text-muted"><strong>Alignemt Score Reference:</strong> <?=$alignment_score_ref?></h5>-->

                        <h3><strong>Complex reference<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="The table and chart (below) shows the alignments values among the complex reference and others complexes in the cluster">?</a></sup></strong></h3>
                        <select id="select_complex_reference" class="form-control selectpicker" style="width: 100%" data-size="5" data-live-search="true">
                           <?php 
                              if (isset($complex_cluster_list)) {
                                 foreach ($complex_cluster_list as $complex) {
                                    echo "<option value=$complex->id_complex>$complex->complex - $complex->title</option>";                                       
                                 }                                    
                              } 
                           ?>
                        </select>
                        </div>

                        <div id="boxplot">
                           <svg id="svg_boxplot"></svg>
                           <h5 class="text-muted"><strong>Alignment Score</strong>
                              <input readonly type="text" id="input_distance" style="border:0; font-weight:bold;">            
                              <div id="distance_slider"></div>
                           </h5>
                        </div>
                        
                        <div class="row">
                           <div class="col-md-6 col-sm-12">
                              <a id="btn_download_selected" class="btn btn-info btn-block" href="#" data-toggle="modal" data-target="#modal_download_selected">
                                 Download complex&nbsp;<i class="fas fa-download"></i>
                              </a>
                           </div>                             
                           <div class="col-md-6 col-sm-12">
                              <a id="btn_advanced_search" class="btn btn-warning btn-block" href="#" data-toggle="modal">
                                 Advanced search&nbsp;<i class="fas fa-filter"></i>
                              </a>
                           </div>
                         </div>

                        <input id="id_complex_reference" value="<?=$complex_reference->id_complex?>" hidden></input>
                        <input id="cluster_num" value="<?=$cluster_num?>" hidden></input>
                        <input id="cluster_size" value="<?=$cluster_size;?>" hidden></input>
                        <input id="cluster_type" value="binding" hidden></input>

                        <input id="datatable_type" value="cluster_binding" hidden></input>                  
                     </div>
                  </div>
               </div>               
            </div>

            <div class="col-md-12">
               <table id="dt_cluster_binding" class="table table-striped table-bordered">
                  <thead>
                     <tr class="tableheader">
                        <th class="dt-center">Complex</th>
                        <th class="dt-center">A<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="View structure A">?</a></sup></th>
                        <th class="dt-center">B<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="View structure B">?</a></sup></th>                        
                        <th class="dt-center">Complex<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="PDB - peptide chain - receptor chain">?</a></sup></th>
                        <!--<th class="dt-center">&Delta; Alignment Score<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="Alignment Score reference (complex reference alignment score with itself) - Alignment Score">?</a></sup></th>
                        <th class="dt-center">&Delta; Z-Score<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="Z-Score reference (complex reference z-score with itself) - Z-Score">?</a></sup></th>-->
                        <th class="dt-center">Alignment Score<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="Alignment Score">?</a></sup></th>
                        <th class="dt-center">Z-Score<sup><a class="tip" href="#"  data-placement="top" data-toggle="tooltip" title="Z-Score">?</a></sup></th>
                     </tr>
                  </thead>
                  <tbody>
                  </tbody>
               </table>
            </div>

         </div>
      </div>
   </div>
</div>