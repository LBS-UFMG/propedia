<!-- liase@liase:/scratch/propedia2023/pdb/structures$ ll peptide | wc -l
28581
liase@liase:/scratch/propedia2023/pdb/structures$ ll complex | wc -l
49300
liase@liase:/scratch/propedia2023/pdb/structures$ ll receptor | wc -l
35478
liase@liase:/scratch/propedia2023/pdb/structures$ ll interface | wc -l
49300 -->

<div class="container" style="padding: 50px 0">
   <div id="download">
   <h2>Propedia v2.3 <label class="badge bg-warning">New</label></h2>
      <table class="table table-hover table-striped">
         <thead>
            <tr class="table-primary">
               <th>File</th>
               <th>Description</th>
               <th>File size</th>
               <th>Download</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>Peptides (28,581)</td>
               <td>PDB file (zip)</td>
               <td>97MB</td>
               <td><a target="_blank" href="<?php echo base_url('public/download/peptides2_3.zip'); ?>">peptides2_3.zip</a></td>
            </tr>          
            
            <tr>
               <td>Receptors (35,478)</td>
               <td>PDB file (zip)</td>
               <td>1.6GB</td>
               <td><a target="_blank" href="<?php echo base_url('public/download/receptor2_3.zip'); ?>">repeceptor2_3.zip</a></td>
            </tr>      

            <tr>
               <td>Complexes (49,300)</td>
               <td>PDB file (zip)</td>
               <td>2.4GB</td>
               <td><a target="_blank" href="<?php echo base_url('public/download/complex2_3.zip'); ?>">complex2_3.zip</a></td>
            </tr>      

            <tr>
               <td>Interfaces (49,300)</td>
               <td>PDB file (zip)</td>
               <td>391MB</td>
               <td><a target="_blank" href="<?php echo base_url('public/download/interfaces2_3.zip'); ?>">interfaces2_3.zip</a></td>
            </tr>     
            
            <tr>
               <td>Sequences</td>
               <td>FASTA file (zip)</td>
               <td>38MB</td>
               <td><a target="_blank" href="<?php echo base_url('public/download/sequences2_3.zip'); ?>">sequences2_3.zip</a></td>
            </tr>     
         </tbody>
      </table>
      <h2>Propedia v.1</h2>
      <h3>Download CSV File</h3>
      <table class="table table-hover table-striped">
         <thead>
            <tr class="table-primary">
               <th>File</th>
               <th>Description</th>
               <th>File size</th>
               <th>Download</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>Complexes</td>
               <td>CSV file<br>
                  <!--<code>PDB</code><code>Protein Name</code><code>Resolution</code><code>Classification</code><code>Peptide Chain</code><code>Peptide Size</code><code>Peptide Sequence</code><code>Peptide Description</code><code>Peptide Organism</code><code>Peptide Interface Area</code><code>Peptide Molecular Weight</code><code>Peptide Aromaticity</code><code>Peptide Instability</code><code>Peptide Isoelectric Point</code><code>Receptor Chain</code><code>Receptor Size</code><code>Receptor Sequence</code><code>Receptor Description</code><code>Receptor Organism</code><code>Receptor Interface Area</code><code>Receptor Molecular Weight</code><code>Receptor Aromaticity</code><code>Receptor Instability</code><code>Receptor Isoelectric Point</code><code>Sequence Cluster</code><code>Is Sequence Cluster Centroid</code><code>Interface Cluster</code><code>Is Interface Cluster Centroid</code><code>Binding Cluster</code><code>Is Binding Cluster Centroid</code>-->
               </td>
               <td>12M</td>
               <td><a target="_blank" href="<?php echo base_url(); ?>public/download/complex.csv">complex.csv</a></td>
            </tr>            
         </tbody>
      </table>
      <h3>Download PDB Files</h3>
      <table class="table table-hover table-striped">
         <thead>
            <tr class="table-primary">
               <th>File</th>
               <th>Description</th>
               <th>File size</th>
               <th>Download</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>Complexes</td>
               <td>PDB format</td>
               <td>860M</td>
               <td><a target="_blank" href="<?php echo base_url(); ?>public/download/complex.zip">complex.zip</a>
            </tr>
            <tr>
               <td>Peptides</td>
               <td>PDB format</td>
               <td>43M</td>
               <td><a target="_blank" href="<?php echo base_url(); ?>public/download/peptide.zip">peptide.zip</a>
            </tr>
            <tr>
               <td>Receptors</td>
               <td>PDB format</td>
               <td>592M</td>
               <td><a target="_blank" href="<?php echo base_url(); ?>public/download/receptor.zip">receptor.zip</a>
            </tr>
            <tr>
               <td>Interfaces</td>
               <td>PDB format</td>
               <td>55M</td>
               <td><a target="_blank" href="<?php echo base_url(); ?>public/download/interface.zip">interface.zip</a>
            </tr>
         </tbody>
      </table>
      <h3>Download Fasta Files</h3>
      <table class="table table-hover table-striped">
         <thead>
            <tr class="table-primary">
               <th>File</th>
               <th>Description</th>
               <th>File size</th>
               <th>Download</th>
            </tr>
         </thead>
        <tbody>
            <tr>
               <td>Peptides</td>
               <td>Fasta format</td>
               <td>2.2M</td>
               <td><a target="_blank" href="<?php echo base_url(); ?>public/download/peptide.fasta">peptide.fasta</a></td>
            </tr>
        </tbody>
         <tbody>
            <tr>
               <td>Receptors</td>
               <td>Fasta format</td>
               <td>6.5M</td>
               <td><a target="_blank" href="<?php echo base_url(); ?>public/download/receptor.fasta">receptor.fasta</a>
            </tr>
        </tbody>        
      </table>
      <h3>Download Database (MySQL)</h3>
      <table class="table table-hover table-striped">
         <thead>
            <tr class="table-primary">
               <th>File</th>
               <th>Description</th>
               <th>File size</th>
               <th>Download</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>Database File</td>
               <td>SQL format</td>
               <td>54M</td>
               <td><a target="_blank" href="<?php echo base_url(); ?>public/download/propedia.sql">propedia.sql</a>
            </tr>
        </tbody> 
      </table>
   </div>
</div>