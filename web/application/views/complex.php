<div class="container-fluid">     

    <?php 
    # DEFINE COMPLEX URL
    $complex_url = base_url()."index.php/complex/view/" . join("-", array($complex_data->pdb, $complex_data->peptide_chain, $complex_data->receptor_chain));
    ?>

    <div class="row">
        <div class="col-md-5 col-sm-12">
            <input id="pdb" value="<?=$complex_data->pdb?>" hidden></input>
            <input id="peptide_chain" value="<?=$complex_data->peptide_chain?>" hidden></input>
            <input id="receptor_chain" value="<?=$complex_data->receptor_chain?>" hidden></input>

            <!--<input id="receptor_sequence" value="<?=$complex_data->receptor_sequence?>" hidden></input>
            <input id="peptide_sequence" value="<?=$complex_data->peptide_sequence?>" hidden></input>-->

            <div id="3DmolViewerComplex" style="min-height: 800px; margin:10px 0; width: 100%; position: relative;"></div>       
        </div>        

        <div class="col-md-7 col-sm-12" style="overflow: auto; height: 800px;">
            <div class="row">
                <div class="col-md-12">
                    <div class="thumbnail" style="border-left: #5cb85c 5px solid; color: #ccc">
                        <div class="caption">   
                            <?php 
                                $complex_name = $complex_data->pdb . "_" . $complex_data->peptide_chain . "_" . $complex_data->receptor_chain;
                                $complex_name_html = strtoupper($complex_data->pdb . "-" . $complex_data->peptide_chain . "-" . $complex_data->receptor_chain);
                            ?>
                            <h1 class="pt-1 m-1 ms-2 display-2 text-success"><strong style="padding-right: 3px"><?=$complex_name_html?></strong> <a title='Download PDB' href='<?=base_url()?>public/pdb/structures/complex/<?=$complex_name?>.pdb'><i class="fas fa-arrow-alt-circle-down"></i></a></h1>

                            <div style="margin: 10px 0 30px 0">
                                <a target="_blank" style='text-decoration:none' title="Search in PDB" href="https://www.rcsb.org/structure/<?=$complex_data->pdb?>">
                                    <span class="badge bg-dark text-light ms-2">PDB</span>
                                </a>

                                <a target="_blank" style='text-decoration:none' title="Search in UniProt" href="https://www.uniprot.org/uniprot/?query=<?=$complex_data->pdb?>+database:pdb">
                                    <span class="badge bg-info">UniProt</span>
                                </a>

                                <a target="_blank" style='text-decoration:none' title="Search in PubMed" href="https://www.ncbi.nlm.nih.gov/pubmed/?term=<?=$complex_data->pdb?>">
                                    <span class="badge bg-warning">PubMed</span>
                                </a>

                                <?php if (isset($cluster_data["sequence"]->cluster_num)) {
                                    
                                    $cluster_num =$cluster_data["sequence"]->cluster_num;
                                    # SINGLETON SEQUENCE
                                    if ($cluster_num == -1) {                                        
                                        echo "<a title='Classified in the sequence singleton' style='text-decoration:none' href='".$complex_url."'><span class='badge bg-success'>Singleton S</span></a>";
                                    } else {
                                        $cluster_url = base_url()."cluster/sequence/";
                                        echo "<a title='Classified in the sequence cluster number $cluster_num' style='text-decoration:none' href='".$cluster_url."$cluster_num'><span class='badge bg-success'>Cluster S";
                                        echo "$cluster_num";
                                        echo '</span></a>';
                                    }
                                } ?>

                                <?php if (isset($cluster_data["binding"]->cluster_num)) {
                                    
                                    $cluster_num =$cluster_data["binding"]->cluster_num;
                                    # SINGLETON CONTACT
                                    if ($cluster_num == -1) {                                        
                                        echo "<a title='Classified in the binding singleton' style='text-decoration:none' href='".$complex_url."'><span class='badge bg-primary'>Singleton C</span></a>";
                                    } else {
                                        $cluster_url = base_url()."cluster/binding/";
                                        echo "<a title='Classified in the binding cluster number $cluster_num' style='text-decoration:none' href='".$cluster_url."$cluster_num'><span class='badge bg-primary'>Cluster C";
                                        echo "$cluster_num";
                                        echo '</span></a>';
                                    }
                                } ?>

                                <?php if (isset($cluster_data["interface"]->cluster_num)) {                                    
                                    $cluster_num =$cluster_data["interface"]->cluster_num;
                                    # SINGLETON CONTACT
                                    if ($cluster_num == -1) {                                        
                                        echo "<a title='Classified in the interface singleton' style='text-decoration:none' href='".$complex_url."'><span class='badge bg-danger'>Singleton I</span></a>";
                                    } else {
                                        $cluster_url = base_url()."cluster/interface/";
                                        echo "<a title='Classified in the interface cluster number $cluster_num' style='text-decoration:none' href='".$cluster_url."$cluster_num'><span class='badge bg-danger'>Cluster I";
                                        echo "$cluster_num";
                                        echo '</span></a>';
                                    }
                                } ?>
                            </div>
                            
                            <table class="table table-condensed table-striped">  
                                <tr>
                                    <th>PDB Title</th>
                                    <td><?=$complex_data->protein_name?></td>
                                </tr>
                                <tr>
                                    <th>Resolution (&#8491;)</th>
                                    <td><?=$complex_data->resolution?></td>
                                </tr>
                                <!--<tr>
                                    <th>Organism</th>
                                    <td><i><?=ucfirst(strtolower($complex_data->organism));?></i></td>
                                </tr>
                                
                                <tr>
                                    <th>Expression system</th>
                                    <td><i><?=ucfirst(strtolower($complex_data->expression_system));?></i></td>
                                </tr>-->
                    
                                <tr>
                                    <th>Classification</th>
                                    <td><?=$complex_data->classification?></td>
                                </tr>
                            </table>   
                        </div>
                    </div>
                </div>
            
                <div class="col-md-12 col-lg-12">
                    <div class="thumbnail" style="border-left: #d9534f 5px solid; color: #ccc">
                        <div class="caption">    
                            <h4 class="text-danger m-2"><strong>Protein</strong></h4>   
                            <table class="table table-condensed table-striped">  
                                <!--<tr>
                                    <th>PDB ID</th>
                                    <td><a target="_blank" href="https://www.rcsb.org/structure/<?=$complex_data->pdb?>"><?=$complex_data->pdb?></a></td>
                                </tr>-->
                                <tr>
                                    <th>Description</th>
                                    <td style="width: 450px; display: inline-block; word-wrap:break-word;"><?=$complex_data->receptor_desc?></td>
                                </tr>
                                <tr>
                                    <th>Organism</th>
                                    <td style="width: 450px; display: inline-block; word-wrap:break-word;"><?=$complex_data->receptor_organism?></td>
                                </tr>
                                <tr>
                                    <th>Chain</th>
                                    <td><?=$complex_data->receptor_chain?></td>
                                </tr>
                                <tr>
                                    <th>Length</th>
                                    <td><?=$complex_data->receptor_size?></td>
                                </tr>
                                <tr>
                                    <th>Binding Area (&#8491;<sup>2</sup>)</th>
                                    <td><?=$complex_data->receptor_interface_area?></td>
                                </tr>                                
                                <tr>
                                    <th>Molecular Weight</th>
                                    <td><?=$complex_data->receptor_molecular_weight?></td>
                                    <!-- PROTPARAM
                                    <td id="receptor_molecular_weight"></td>-->
                                </tr>
                                <tr>
                                    <th>Aromaticity</th>
                                    <td><?=$complex_data->receptor_aromaticity?></td>
                                    <!-- PROTPARAM 
                                    <td id="receptor_aromaticity"></td>-->
                                </tr>
                                <tr>
                                    <th>Instability</th>
                                    <td><?=$complex_data->receptor_instability?></td>
                                    <!-- PROTPARAM 
                                    <td id="receptor_instability_index"></td>-->
                                </tr>
                                <tr>
                                    <th>Isoelectric Point</th>
                                    <td><?=$complex_data->receptor_isoelectric_point?></td>
                                    <!-- PROTPARAM
                                    <td id="receptor_isoelectric_point"></td>-->
                                </tr>
                                <tr>
                                    <th>Sequence</th>
                                    <td style="width: 450px; display: inline-block; word-wrap:break-word;"><strong>
                                    <?php 
                                        $seq = $complex_data->receptor_sequence;
                                        for ($i=0; $i<strlen($seq); $i++) {
                                            if ($seq[$i] == "X")
                                                echo '<span style="color:#999999">' . $seq[$i] . '</span>';
                                            else
                                                echo $seq[$i];
                                        }
                                    ?></strong></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 col-lg-12">
                    <div class="thumbnail" style="border-left: #337ab7 5px solid; color: #ccc">
                        <div class="caption">         
                            <h4 class="text-primary m-2"><strong>Peptide</strong></h4>
                            <table class="table table-condensed table-striped">  
                                <tr>
                                    <th>Description</th>
                                    <td style="width: 450px; display: inline-block; word-wrap:break-word;"><?=$complex_data->peptide_desc?></td>
                                </tr>
                                <tr>
                                    <th>Organism</th>
                                    <td style="width: 450px; display: inline-block; word-wrap:break-word;"><?=$complex_data->peptide_organism?></td>
                                </tr>
                                <tr>
                                    <th>Chain</th>
                                    <td><?=$complex_data->peptide_chain?></td>
                                </tr>
                                <tr>
                                    <th>Length</th>
                                    <td><?=$complex_data->peptide_size?></td>
                                </tr>
                                <tr>
                                    <th>Binding Area (&#8491;<sup>2</sup>)</th>
                                    <td><?=$complex_data->peptide_interface_area?></td>
                                </tr>
                                <tr>
                                    <th>Hydrophobic (% a.a.)</th>
                                    <td>
                                        <div class="progress">
                                            <?php 
                                            $seq = $complex_data->peptide_sequence;
                                            $st = strlen($seq); 
                                            $ht = substr_count($seq, 'A') 
                                                + substr_count($seq, 'I') 
                                                + substr_count($seq, 'L') 
                                                + substr_count($seq, 'M') 
                                                + substr_count($seq, 'F') 
                                                + substr_count($seq, 'V')
                                                + substr_count($seq, 'P')
                                                + substr_count($seq, 'G'); 
                                            $hydro = 100*$ht/$st; $hydro = (int)$hydro;
                                            ?>
                                          <div class="progress-bar" role="progressbar" style="width: <?=$hydro?>%;"><?=$hydro?>%</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Molecular Weight</th>
                                    <td><?=$complex_data->peptide_molecular_weight?></td>
                                    <!-- PROTPARAM
                                    <td id="peptide_molecular_weight"></td>-->
                                </tr>
                                <tr>
                                    <th>Aromaticity</th>
                                    <td><?=$complex_data->peptide_aromaticity?></td>
                                    <!-- PROTPARAM 
                                    <td id="peptide_aromaticity"></td>-->
                                </tr>
                                <tr>
                                    <th>Instability</th>
                                    <td><?=$complex_data->peptide_instability?></td>
                                    <!-- PROTPARAM 
                                    <td id="peptide_instability_index"></td>-->
                                </tr>
                                <tr>
                                    <th>Isoelectric Point</th>
                                    <td><?=$complex_data->peptide_isoelectric_point?></td>
                                    <!-- PROTPARAM
                                    <td id="peptide_isoelectric_point"></td>-->
                                </tr>
                                <tr>
                                    <th>Sequence</th>
                                    <td style="width: 200px; display: inline-block; word-wrap:break-word;"><strong>
                                    <?php 
                                        $seq = $complex_data->peptide_sequence;
                                        for ($i=0; $i<strlen($seq); $i++) {
                                            if ($seq[$i] == "X")
                                                echo '<span style="color:#999999">' . $seq[$i] . '</span>';
                                            else
                                                echo $seq[$i];
                                        }
                                    ?></strong></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="thumbnail" style="border-left: orange 5px solid; color: #ccc">
                        <div class="caption">         
                            <h4 class="text-warning m-2"><strong>Clustering Classification</strong></h4>   
                            <table class="table table-condensed table-striped">  
                                <tr>
                                    <th>Sequence cluster</th>
                                    <td>
                                        <?php 
                                            if (isset($cluster_data["sequence"]->cluster_num)) {

                                                $cluster_num = $cluster_data["sequence"]->cluster_num;
                                                # SINGLETON SEQUENCE
                                                if ($cluster_num == -1) {                           
                                                    echo "<a  href='".$complex_url."'><strong>Singleton S</strong></a>";
                                                } else {             
                                                    $cluster_url = base_url()."cluster/sequence/";          
                                                    echo "<a href='".$cluster_url."$cluster_num'><strong>S $cluster_num</strong></a>";
                                                }
                                            } else {
                                                echo "Not calculated.";
                                            }
                                        ?>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Contact cluster</th>
                                    <td>
                                        <?php 
                                            if (isset($cluster_data["binding"]->cluster_num)) {

                                                $cluster_num = $cluster_data["binding"]->cluster_num;
                                                # SINGLETON SEQUENCE
                                                if ($cluster_num == -1) {                           
                                                    echo "<a  href='".$complex_url."'><strong>Singleton C</strong></a>";
                                                } else {
                                                    $cluster_url = base_url()."cluster/binding/";          
                                                    echo "<a href='".$cluster_url."$cluster_num'><strong>C$cluster_num</strong></a>";
                                                }
                                            } else {
                                                echo "Not calculated.";
                                            }
                                        ?>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Interface cluster</th>
                                    <td>
                                        <?php 
                                            if (isset($cluster_data["interface"]->cluster_num)) {

                                                $cluster_num = $cluster_data["interface"]->cluster_num;
                                                # SINGLETON SEQUENCE
                                                if ($cluster_num == -1) {                           
                                                    echo "<a  href='".$complex_url."'><strong>Singleton I</strong></a>";
                                                } else {
                                                    $cluster_url = base_url()."cluster/interface/";          
                                                    echo "<a href='".$cluster_url."$cluster_num'><strong>I$cluster_num</strong></a>";
                                                }
                                            } else {
                                                echo "Not calculated.";
                                            }
                                        ?>                                                
                                    </td>
                                </tr>
                               
                            </table>
                        </div>
                    </div>
                </div>

                <?php if (isset($similar_complexes)): ?>
                <div class="col-md-12 col-lg-12">
                    <div class="thumbnail" style="border-left: #ccc 5px solid; color: #ccc">
                        <div class="caption">         
                            <h4 class="text-muted m-2"><strong>Similar complexes</strong></h4> 
                            <p class="text-muted">Is the complex classified in the same cluster?</p>
                            <table class="table table-striped table-hover text-center">
                                <tr>
                                    <th>Complex</th>
                                    <th class="text-center">
                                        Sequence cluster <br>
                                        <?php 
                                            if (isset($cluster_data["sequence"]->cluster_num)) {
                                                $cluster_num =$cluster_data["sequence"]->cluster_num;
                                                # SINGLETON SEQUENCE
                                                if ($cluster_num == -1) {                           
                                                    echo "<a  href='".$complex_url."'><strong>Singleton S</strong></a>";
                                                } else {
                                                    $cluster_url = base_url()."cluster/sequence/";
                                                    echo "(<a href='".$cluster_url."$cluster_num'><strong>S$cluster_num</strong></a>)";
                                                }
                                            } else {
                                                echo "-";
                                            }
                                        ?> 
                                    </th>                                    
                                    <th class="text-center">
                                        Contact cluster <br>
                                        <?php 
                                            if (isset($cluster_data["binding"]->cluster_num)) {
                                                $cluster_num =$cluster_data["binding"]->cluster_num;
                                                # SINGLETON SEQUENCE
                                                if ($cluster_num == -1) {                           
                                                    echo "<a  href='".$complex_url."'><strong>Singleton C</strong></a>";
                                                } else {
                                                    $cluster_url = base_url()."cluster/binding/";
                                                    echo "(<a href='".$cluster_url."$cluster_num'><strong>C$cluster_num</strong></a>)";
                                                }
                                            } else {
                                                echo "-";
                                            }
                                        ?>
                                    </th>
                                    <th class="text-center">
                                        Interface cluster <br>
                                        <?php 
                                            if (isset($cluster_data["interface"]->cluster_num)) {
                                                $cluster_num =$cluster_data["interface"]->cluster_num;
                                                # SINGLETON SEQUENCE
                                                if ($cluster_num == -1) {                           
                                                    echo "<a  href='".$complex_url."'><strong>Singleton I</strong></a>";
                                                } else {
                                                    $cluster_url = base_url()."cluster/interface/";
                                                    echo "(<a href='".$cluster_url."$cluster_num'><strong>I$cluster_num</strong></a>)";
                                                }
                                            } else {
                                                echo "-";
                                            }
                                        ?>  
                                    </th>
                                </tr>
                                <?php foreach ($similar_complexes as $similar_complex): ?>
                                    <tr>
                                        <td class="text-left"><strong><a href="<?=base_url().'complex/view/'.$similar_complex->complex?>"><?=$similar_complex->complex?></a></strong></td>
                                        <td><i class="fas <?=$similar_complex->sequence?>" style="font-size: 30px"></i></td>
                                        <td><i class="fas <?=$similar_complex->binding?>" style="font-size: 30px"></i></td>
                                        <td><i class="fas <?=$similar_complex->interface?>" style="font-size: 30px"></i></td>
                                        <!--<td><?=$similar_complex->z_score?></td>
                                        <td><?=$similar_complex->irmsd?></td>-->
                                    </tr>
                                <?php endforeach; ?>
                            </table>
                        </div>
                    </div>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
