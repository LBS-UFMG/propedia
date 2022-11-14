<div class="container-fluid">

   <div class="row">

      <div class="col-md-5 col-sm-12">
         <div id="3DmolA" style="min-height: 350px; width: 100%; position: relative;">
            <h1 class="text-muted text-center" style="padding:100px 50px 0 50px; color:#ddd">[CLICK ON COLUMN <strong>A</strong><br>TO VISUALIZE THE COMPLEX HERE]</h1>
         </div>    
         <div id="3DmolB" style="min-height: 350px; width: 100%; position: relative;">
            <h1 class="text-muted text-center" style="padding:0 50px; color:#ddd">[CLICK ON COLUMN <strong>B</strong><br>TO VISUALIZE THE COMPLEX HERE]</h1>
         </div>
         <!--<svg id="cluster_viz" style="min-height: 300px; width: 100%; position: relative;"></svg>-->
      </div>

      <div class="col-md-7 col-sm-12" style="overflow: auto; height: 1000px;">
         
         <div class="row">
            
            <div class="col-md-12">
               <div class="thumbnail" style="border-left: #5cb85c 5px solid; color: #ccc; padding:20px">
                  <div class="caption">   
                     <div class="row"> 
                        <h3 class="text-success">Cluster <strong>S<?=$cluster_num?></strong></h3> 

                        <h5 class="text-muted"><strong>Main sequence:</strong> <?=$main_sequence?></h5>
                        <h5 class="text-muted"><strong>Size:</strong><?=$cluster_size?></h5>

                        <p class="text-right"><a class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#alignment">Show multiple alignment</a></p>
                        <img src="<?php echo base_url(); ?>public/img/weblogos/<?=$cluster_num?>.png" class="thumbnail" style="max-width:100%">
                        
                        <h3><strong>Complex reference<sup><a class="tip" href="#"  data-bs-placement="top" data-bs-toggle="tooltip" title="The table and chart (below) shows the alignments values among the complex reference and others complexes in the cluster">?</a></sup></strong></h3>
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
                           <h5 class="text-muted"><strong>Identity</strong>
                              <input readonly type="text" id="input_distance" style="border:0; font-weight:bold;">            
                              <div id="distance_slider"></div>
                           </h5>
                        </div>
                        
                         <div class="row">
                             <div class="col-md-6 col-sm-12">
                                 <a id="btn_download_selected" class="btn btn-info btn-block" href="#" data-bs-toggle="modal" data-bs-target="#modal_download_selected">
                                     Download complex&nbsp;<i class="fas fa-download"></i>
                                 </a>
                             </div>                             
                             <div class="col-md-6 col-sm-12">
                                 <a id="btn_advanced_search" class="btn btn-warning btn-block" href="#" data-bs-toggle="modal">
                                     Advanced search&nbsp;<i class="fas fa-filter"></i>
                                 </a>
                             </div>
                         </div>

                        <input id="id_complex_reference" value="<?=$id_complex_reference?>" hidden></input>
                        <input id="cluster_num" value="<?=$cluster_num?>" hidden></input>
                        <input id="cluster_size" value="<?=$cluster_size;?>" hidden></input>
                        <input id="cluster_type" value="sequence" hidden></input>

                        <input id="datatable_type" value="cluster_sequence" hidden></input>
                     </div>
                  </div>
               </div>
            </div>

            <div class="col-md-12">
               <table id="dt_cluster_sequence" class="table table-striped table-bordered">
                  <thead>
                     <tr class="tableheader">
                        <th class="dt-center">Complex</th>
                        <th class="dt-center">A<sup><a class="tip" href="#"  data-bs-placement="top" data-bs-toggle="tooltip" title="View structure A">?</a></sup></th>
                        <th class="dt-center">B<sup><a class="tip" href="#"  data-bs-placement="top" data-bs-toggle="tooltip" title="View structure B">?</a></sup></th>
                        <th class="dt-center">Complex<sup><a class="tip" href="#"  data-bs-placement="top" data-bs-toggle="tooltip" title="PDB - peptide chain - receptor chain">?</a></sup></th>
                        <!--<th class="dt-center">PDB Title<sup><a class="tip" href="#"  data-bs-placement="top" data-bs-toggle="tooltip" title="PDB Title">?</a></sup></th>-->
                        <th class="dt-center">Size<sup><a class="tip" href="#"  data-bs-placement="top" data-bs-toggle="tooltip" title="Peptide length in amino acids">?</a></sup></th>
                        <th class="dt-center">Sequence<sup><a class="tip" href="#"  data-bs-placement="top" data-bs-toggle="tooltip" title="Peptide sequence">?</a></sup></th>
                        <th class="dt-center">Identity<sup><a class="tip" href="#"  data-bs-placement="top" data-bs-toggle="tooltip" title="Main sequence identity (defined by Clustal-Omega)">?</a></sup></th>
                        <!--<th class="dt-center">Identity</th>
                        <th class="dt-center">Coverage</th>-->
                     </tr>
                  </thead>
                  <tbody></tbody>
               </table>
            </div>

         </div>
      </div>
   </div>
</div>

<!-- MODAL DE ALINHAMENTO -->
<div class="modal fade" tabindex="-1" id="alignment" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-lg" role="document">
   
    <div class="modal-content">
      <div class="modal-header">
         <h2 class="text-success">Multiple alignment <span class="text-muted">Cluster <strong>S<?=$cluster_num?></strong></span></h2> 
      </div>
      <div class="modal-body">
         <pre style="font-size:15px"><strong><?=$main_sequence?></strong>

<?php
            $alignment = fopen(base_url()."public/db/alignments/".$cluster_num.".aln", 'r');
            
            while(!feof($alignment)){
               $line = fgets($alignment); 
               $line_array = explode("\t", $line);               

               $complex = $line_array[0];
               $complex_url = base_url()."index.php/complex/view/";
               $sequence = $line_array[1];

               echo "<a href='" . $complex_url . $complex . "'>"
                        . $complex . "</a>&nbsp;&nbsp;";
               for ($i=0; $i<strlen($sequence); $i++) {                  
                  echo '<span style="color:';
                  switch ($sequence[$i]) {
                     case 'A' : echo '#333333'; break; 
                     case 'C' : echo '#AF5500'; break; 
                     case 'D' : echo 'green'; break; 
                     case 'E' : echo 'green'; break; 
                     case 'F' : echo '#F59B00'; break; 
                     case 'G' : echo '#333333'; break; 
                     case 'H' : echo '#cc0000'; break; 
                     case 'I' : echo '#FF6666'; break; 
                     case 'K' : echo '#cc0000'; break; 
                     case 'L' : echo '#FF6666'; break; 
                     case 'M' : echo '#3366FF'; break; 
                     case 'N' : echo '#3366FF'; break; 
                     case 'P' : echo '#cc33cc'; break; 
                     case 'Q' : echo '#3366FF'; break; 
                     case 'R' : echo '#cc0000'; break; 
                     case 'S' : echo '#333333'; break; 
                     case 'T' : echo '#3366FF'; break; 
                     case 'V' : echo '#FF6666'; break; 
                     case 'W' : echo '#F59B00'; break; 
                     case 'Y' : echo '#F59B00'; break; 
                  }
                  echo '">'.$sequence[$i].'</span>';
               }
            }
         ?></pre>
         <p class="text-muted text-right">* main sequence</p>
      </div>
    </div>
  </div>
</div>