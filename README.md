# Propedia v2.3

Welcome to **Propedia - A database of peptide-protein interactions**. PROPEDIA is a database of peptide-protein complexes clusterized in three methodologies: based on peptide sequences, based on structure interface, and based on binding sites. PROPEDIA's main goal is to give new insights into the peptide design of biotechnological interests.

In this repository, we present the source code of PROPEDIA v2.3 - the new free and open-access version. This page describes how to use PROPEDIA and construct your instance of PROPEDIA.

## About this repository
This GIT repository contains the Propedia's web source code.

### web (v2.3)
This directory contains the main version of the web application. Developed with CodeIgniter 3.

### beta_version
Trial version updated with CodeIgniter 4 (in development).

## Using Propedia web

PROPEDIA is a web tool. Thus, it can basically be accessed by a web browser via the internet.

You can access Propedia 2 at <a href="http://bioinfo.dcc.ufmg.br/propedia2/">http://bioinfo.dcc.ufmg.br/propedia2/</a>. Propedia v2.3 is free, and its source code is open-access.

Propedia v1 is free but is not open access. The first version is available at <a href="http://bioinfo.dcc.ufmg.br/propedia">http://bioinfo.dcc.ufmg.br/propedia</a>. 

If you use Propedia, please cite: 

~~~
Pedro M. Martins, Lucianna H. Santos, Diego Mariano, Felippe C. Queiroz, Luana L. Bastos, Isabela de S. Gomes, Pedro H. C. Fischer, Rafael E. O. Rocha, Sabrina A. Silveira, Leonardo H. F. de Lima, Mariana T. Q. de Magalhães, Maria G. A. Oliveira & Raquel C. de Melo-Minardi (2021). Propedia: a database for protein–peptide identification based on a hybrid clustering algorithm. BMC Bioinformatics, 22(1), 1-20.
~~~

PROPEDIA was developed by the LBS team (Laboratory of Bioinformatics and Systems - Department of Computer Science from Universidade Federal de Minas Gerais). For more details, please access <a href="http://bioinfo.dcc.ufmg.br">http://bioinfo.dcc.ufmg.br</a>

### Downloading data

You can download the whole Propedia dataset in different formats through the link: <a href="http://bioinfo.dcc.ufmg.br/propedia2/index.php/download">http://bioinfo.dcc.ufmg.br/propedia2/download</a>. Additionally, below we listed the main formats available.

<h2>Propedia v2.3</h2>
<table>
    <thead>
    <tr>
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
        <td><a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/peptides2_3.zip">peptides2_3.zip</a></td>
    </tr>          
    <tr>
        <td>Receptors (35,478)</td>
        <td>PDB file (zip)</td>
        <td>1.6GB</td>
        <td><a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/receptor2_3.zip">repeceptor2_3.zip</a></td>
    </tr>      
    <tr>
        <td>Complexes (49,300)</td>
        <td>PDB file (zip)</td>
        <td>2.4GB</td>
        <td><a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/complex2_3.zip">complex2_3.zip</a></td>
    </tr>      
    <tr>
        <td>Interfaces (49,300)</td>
        <td>PDB file (zip)</td>
        <td>391MB</td>
        <td><a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/interfaces2_3.zip">interfaces2_3.zip</a></td>
    </tr>     
    <tr>
        <td>Sequences</td>
        <td>FASTA file (zip)</td>
        <td>38MB</td>
        <td><a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/sequences2_3.zip">sequences2_3.zip</a></td>
    </tr>     
    </tbody>
</table>

<hr class="my-5">

<h2>Propedia v.1</h2>
<h3>Download CSV File</h3>
<table>
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
        <td>CSV file</td>
        <td>12M</td>
        <td><a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/complex.csv">complex.csv</a></td>
    </tr>            
    </tbody>
</table>
<h3>Download PDB Files</h3>
<table>
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
        <td><a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/complex.zip">complex.zip</a>
    </td></tr>
    <tr>
        <td>Peptides</td>
        <td>PDB format</td>
        <td>43M</td>
        <td><a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/peptide.zip">peptide.zip</a>
    </td></tr>
    <tr>
        <td>Receptors</td>
        <td>PDB format</td>
        <td>592M</td>
        <td><a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/receptor.zip">receptor.zip</a>
    </td></tr>
    <tr>
        <td>Interfaces</td>
        <td>PDB format</td>
        <td>55M</td>
        <td><a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/interface.zip">interface.zip</a>
    </td></tr>
    </tbody>
</table>
<h3>Download Fasta Files</h3>
<table>
    <thead>
    <tr>
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
        <td><a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/peptide.fasta">peptide.fasta</a></td>
    </tr>
</tbody>
    <tbody>
    <tr>
        <td>Receptors</td>
        <td>Fasta format</td>
        <td>6.5M</td>
        <td><a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/receptor.fasta">receptor.fasta</a>
    </td></tr>
</tbody>        
</table>
<h3>Download Database (MySQL)</h3>
<table>
    <thead>
    <tr>
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
        <td><a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/propedia.sql">propedia.sql</a>
    </td></tr>
</tbody> 
</table>

## Creating your own Propedia instance

As before introduced, Propedia v2.3 is free and open-access. Hence, you can download the PROPEDIA source code and install it on your computer.

Creating your own PROPEDIA instance requires advanced knowledge in web application development, as well as knowledge in maintaining relational databases. If you do not have such knowledge, we recommend using the web version provided by the LBS team, available at http://bioinfo.dcc.ufmg.br/propedia2.

We cannot provide complete support for the process of installing and maintaining web servers, but we provide a basic installation guide below. You may use the code at your own risk. Please, check the requirements below.

### Requirements 
- PHP 7.4 or 8 (https://www.php.net/)
- Git (https://git-scm.com/)
- Composer (https://getcomposer.org/) - required for the beta version
- MySQL or MariaDB (we recommend using XAMPP: https://www.apachefriends.org/pt_br/index.html)

Additionally, we recommend Ubuntu 22.04 operational system. 

### Installing

Firstly, clone this repository:

    git clone https://github.com/LBS-UFMG/propedia.git

Set the config file available at web/application/config/config.php. Change line 30 to:

    $config['base_url'] = "http://localhost:8080";

Then, copy the file "database.php.example" available in the same folder of config.php and rename it as "database.php".
Set lines 83 to 86 with your database server configurations:

	'hostname' => 'localhost',
	'username' => '',
	'password' => '',
	'database' => 'propedia',

**IMPORTANT:** in your database management tool (we recommend MySQL Workbench), create a new dataset called "propedia" and import  PROPEDIA's SQL dataset. You can download the SQL database at <a target="_blank" href="http://bioinfo.dcc.ufmg.br/propedia2/public/download/propedia.sql">propedia.sql</a>. 

Then, access the main folder by the command line terminal and start the web server running:

	cd web
	php -S localhost:8080

You will see the following message:

	PHP 8.1.10 Development Server (http://localhost:8080) started


Access http://localhost:8080 in your favorite browser.

### Installing the beta version
The beta version uses CodeIgniter 4. Thus, it requires Composer to install.

Firstly, clone this repository:

	git clone https://github.com/LBS-UFMG/propedia.git

Then, access the beta_version folder and install the library's dependencies:

	cd beta_version
	composer install

Set your basic configurations in the ".env" file. Change the base URL and the database configurations.

Lastly, run the web server with the command:

	php spark serve

**IMPORTANT:** Note that the "beta_version" is in development. You can help to improve this version and contribute to PROPEDIA's development community by downloading the code and submitting your pull requests.


