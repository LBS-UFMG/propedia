<?php

namespace App\Models;

use CodeIgniter\Model;
use CodeIgniter\Database\ConnectionInterface;

class ClusterModel extends Model {
	
	protected $db;

	public function __construct() {
		$this->db = \Config\Database::connect();
	}

	public function get_complex_cluster_list($cluster_type, $cluster_num) {
		$this->db->table("complex c");

		$this->db->select("CONCAT_WS('-',pdb.pdb, p.peptide_chain, r.receptor_chain) AS complex, c.id_complex, SUBSTRING(pdb.title,1, 50) AS title, a.is_centroid");
		$this->db->join("pdb", "pdb.id_pdb = c.id_pdb", "left");
        $this->db->join("peptide p", "p.id_peptide = c.id_peptide", "left");
        $this->db->join("receptor r", "r.id_receptor = c.id_receptor", "left");
		switch($cluster_type){			
		    case "sequence":				
				$this->db->join("cluster_sequence a", "c.id_complex = a.id_complex");
		        break;
		    case "interface":
				$this->db->join("cluster_interface a", "c.id_complex = a.id_complex");
		        break;
		    case "binding":
		        $this->db->join("cluster_binding a", "c.id_complex = a.id_complex");
		        break;
		}		
		$this->db->where("a.cluster_num", $cluster_num);
		$this->db->order_by("a.is_centroid", "DESC");
		$this->db->order_by("CONCAT_WS('-',pdb.pdb, p.peptide_chain, r.receptor_chain)");
		return $this->db->get()->result();

	}

	public function get_complex_cluster($id_complex_reference, $cluster_type, $cluster_num,
		$get_complex_reference_data=false, $distance_limit_left=0, $distance_limit_right=100) {
		
		$fields = "";		
		$cluster_table = "";
		$alignment_table = "";
		$distance_field = "";
		$order_by = "";

		switch($cluster_type){			
		    case "sequence":
				if ($get_complex_reference_data) {
					$fields = "100.00 identity, p.peptide_size size, p.peptide_sequence sequence";
				} else {
					$fields = "a.identity_peptide identity, p.peptide_size size, p.peptide_sequence sequence";
				}
				$cluster_table = "cluster_sequence";
				$alignment_table = "alignment_clustal_peptide";
				$distance_field = "a.identity_peptide";
				$order_by = "ORDER BY cluster.is_centroid DESC, $distance_field DESC";
		        break;
		    case "interface":
		    	if ($get_complex_reference_data) {
		    		$fields = "0.00 irmsd, 0.00 rmsd, 
		    	    	       100.00 identity, 100.00 similarity";
		    	} else {
		    		$fields = "a.interface_rmsd irmsd, a.rmsd rmsd, 
		    	    	       a.identity_perc identity, a.similarity_perc similarity";
		    	}		    	
		    	$cluster_table = "cluster_interface";
		    	$alignment_table = "alignment_mustang";
		    	$distance_field = "a.interface_rmsd";
		    	$order_by = "ORDER BY cluster.is_centroid DESC, $distance_field";
		        break;
		    case "binding":
		    	if ($get_complex_reference_data) {
			    	$fields = /*"0.00 delta_alignment_score,
			    			   0.00 delta_z_score";
	    					   "'-' alignment_score, '-' z_score,
	    					   '-' rmsd, '-' sva, '-' aligned_vertices";*/
	    					   "(SELECT alignment_score FROM alignment_probis 
	    					     WHERE id_complex1 = id_complex2 
	    					     AND id_complex1 = $id_complex_reference) alignment_score,
	    					    (SELECT z_score FROM alignment_probis 
	    					     WHERE id_complex1 = id_complex2 
	    					     AND id_complex1 = $id_complex_reference) z_score";
    			} else {
    				$fields = /*"a.delta_alignment_score delta_alignment_score,
			    			   a.delta_z_score delta_z_score";*/
	    					   "a.alignment_score, a.z_score,
	    					   a.rmsd, a.sva, a.aligned_vertices";
    			}    			
		    	$cluster_table = "cluster_binding";
		    	$alignment_table = "alignment_probis";
		    	$distance_field = "a.alignment_score";
		    	$order_by = "ORDER BY cluster.is_centroid DESC, $distance_field";
		        break;
		}
		
		if ($get_complex_reference_data) {
            # COMPLEX REFERENCE
            $query = "SELECT c.id_complex,            	
    				  CONCAT_WS('-',pdb.pdb, p.peptide_chain, r.receptor_chain) AS complex,
    				  pdb.title title,
    				  cluster.is_centroid centroid,
    				  $fields
    				  FROM complex c
    				  JOIN pdb ON c.id_pdb = pdb.id_pdb
				  	  JOIN peptide p ON c.id_peptide = p.id_peptide
				      JOIN receptor r ON c.id_receptor = r.id_receptor
    				  JOIN $cluster_table cluster ON cluster.id_complex = c.id_complex
    				  WHERE c.id_complex = $id_complex_reference";
		} else {			
    		$query = "SELECT c.id_complex,
    		          CONCAT_WS('-',pdb.pdb, p.peptide_chain, r.receptor_chain) AS complex,
    				  pdb.title title,
    				  cluster.is_centroid centroid,
    				  $fields				 				   
    				  FROM $alignment_table a
    				  JOIN complex c    				  
    				  ON c.id_complex = IF(a.id_complex1 = $id_complex_reference, a.id_complex2, a.id_complex1)
    				  JOIN pdb ON c.id_pdb = pdb.id_pdb
				      JOIN peptide p ON c.id_peptide = p.id_peptide
				      JOIN receptor r ON c.id_receptor = r.id_receptor
    				  JOIN $cluster_table cluster
    				  ON cluster.id_complex = IF(a.id_complex1 = $id_complex_reference, a.id_complex2, a.id_complex1)
    				  WHERE $distance_field BETWEEN $distance_limit_left AND $distance_limit_right
    				  AND ((a.id_complex1 IN
    				  	  (SELECT c.id_complex FROM complex c
    					   JOIN $cluster_table cluster ON c.id_complex = cluster.id_complex
    				       WHERE cluster.cluster_num = $cluster_num) 
                           AND id_complex2 = $id_complex_reference)
    				  OR (a.id_complex2 IN 
    					  (SELECT c.id_complex FROM complex c
    					   JOIN $cluster_table cluster ON c.id_complex = cluster.id_complex
    				       WHERE cluster.cluster_num = $cluster_num) 
                           AND id_complex1 = $id_complex_reference))
                      AND a.id_complex1 <> a.id_complex2
    				  $order_by";
        }
		return $this->db->query($query)->result();
	}

	public function get_centroid($cluster_type, $cluster_num) {
		
		$this->db->select("CONCAT_WS('-',pdb.pdb, p.peptide_chain, r.receptor_chain) AS complex, c.id_complex");
		$this->db->from("complex c");
		$this->db->join("pdb", "pdb.id_pdb = c.id_pdb", "left");
        $this->db->join("peptide p", "p.id_peptide = c.id_peptide", "left");
        $this->db->join("receptor r", "r.id_receptor = c.id_receptor", "left");
		switch($cluster_type){			
		    case "sequence":				
				$this->db->join("cluster_sequence a", "c.id_complex = a.id_complex");
		        break;
		    case "interface":
				$this->db->join("cluster_interface a", "c.id_complex = a.id_complex");
		        break;
		    case "binding":
		        $this->db->join("cluster_binding a", "c.id_complex = a.id_complex");
		        break;
		}
		$this->db->where("a.is_centroid", 1);
		$this->db->where("a.cluster_num", $cluster_num);
		return $this->db->get()->result();
	}

	public static function get_cluster_numbers() {

		$conexao = \Config\Database::connect();

		$db = $conexao->table('cluster_sequence');
		$db->select("count(distinct cluster_num) as number_cluster_sequence");
		$number_cluster_sequence = $db->get()->getResult()[0]->number_cluster_sequence;

		$db = $conexao->table('cluster_sequence');
		$db->select("count(cluster_num) number_singletons_sequence");
		$db->where("cluster_num", -1);
		$number_singletons_sequence = $db->get()->getResult()[0]->number_singletons_sequence;

		$db = $conexao->table('cluster_interface');
		$db->select("count(distinct cluster_num) as number_cluster_interface");
		$number_cluster_interface = $db->get()->getResult()[0]->number_cluster_interface;

		$db = $conexao->table('cluster_interface');
		$db->select("count(cluster_num) number_singletons_interface");
		$db->where("cluster_num", -1);
		$number_singletons_interface = $db->get()->getResult()[0]->number_singletons_interface;

		$db = $conexao->table('cluster_binding');
		$db->select("count(distinct cluster_num) as number_cluster_binding");
		$number_cluster_binding = $db->get()->getResult()[0]->number_cluster_binding;

		$db = $conexao->table('cluster_binding');
		$db->select("count(cluster_num) number_singletons_binding");
		$db->where("cluster_num", -1);
		$number_singletons_binding = $db->get()->getResult()[0]->number_singletons_binding;

		return array(
			"number_cluster_sequence" => $number_cluster_sequence + $number_singletons_sequence, 
			"number_cluster_interface" => $number_cluster_interface + $number_singletons_interface, 
			"number_cluster_binding" => $number_cluster_binding + $number_singletons_binding
		);

	}

	public function get_main_sequence($cluster_num) {

		$query = "SELECT distinct p.peptide_sequence
				  FROM cluster_sequence cs
				  JOIN complex c ON cs.id_complex = c.id_complex
				  JOIN pdb ON c.id_pdb = pdb.id_pdb
				  JOIN peptide p ON c.id_peptide = p.id_peptide
				  WHERE cluster_num = $cluster_num AND is_centroid = 1";

		return $this->db->query($query)->first_row();
	}

	public function get_clusters_info($complex_name) {

		$query = "SELECT 
					IFNULL(cs.cluster_num,'') cluster_sequence_num,
				    IFNULL(ci.cluster_num,'') cluster_interface_num,
				    IFNULL(cb.cluster_num,'') cluster_binding_num,
					cb.is_centroid cluster_sequence_centroid,
				    ci.is_centroid cluster_interface_centroid,
				    cb.is_centroid cluster_binding_centroid
				  FROM complex c
				  JOIN pdb ON c.id_pdb = pdb.id_pdb
				  JOIN peptide p ON c.id_peptide = p.id_peptide
				  JOIN receptor r ON c.id_receptor = r.id_receptor
				  LEFT JOIN cluster_sequence cs 
				  ON c.id_complex = cs.id_complex
				  LEFT JOIN cluster_interface ci
				  ON c.id_complex = ci.id_complex
				  LEFT JOIN cluster_binding cb
				  ON c.id_complex = cb.id_complex
				  WHERE LOWER(CONCAT_WS('_', pdb.pdb, p.peptide_chain, r.receptor_chain)) 
				  	= LOWER('$complex_name')";

		return $this->db->query($query)->first_row();

	}

	public function records_total($from, $cluster_num=NULL) {

		$this->db->from($from);
		if (isset($cluster_num)) {
			$this->db->where("cluster_num", $cluster_num);
		}
		return $this->db->count_all_results();

	}

	public function get_cluster_info($cluster_type) {
		
		# $this->db->select("cluster_num, cluster_size");
		
		switch($cluster_type){
			case "sequence":				
				$this->db->from("cluster_sequence_view");					
				break;
			case "interface":				
				$this->db->from("cluster_interface_view");					
				break;
			case "binding":				
				$this->db->from("cluster_binding_view");					
				break;
		}
		return $this->db->get()->result();
	}

	public function get_cluster_alignment_values($cluster_type, $cluster_num) {

		$cluster_table = "";
		$alignment_table = "";
		$alignment_value = "";

		switch($cluster_type){			
			case "sequence":
				$cluster_table = "cluster_sequence";
				$alignment_table = "alignment_clustal_peptide";
				$alignment_value = "identity_peptide";
		        break;
		    case "interface":	    	
		    	$cluster_table = "cluster_interface";
		    	$alignment_table = "alignment_mustang";
		    	$alignment_value = "interface_rmsd";
		        break;
		    case "binding":
		    	$cluster_table = "cluster_binding";
		    	$alignment_table = "alignment_probis";
		    	$alignment_value = "alignment_score";
		        break;
		}

		$query = "SELECT $alignment_value
				  FROM $alignment_table
				  WHERE id_complex1 <> id_complex2
				  AND (id_complex1 in (SELECT id_complex FROM $cluster_table WHERE cluster_num = $cluster_num)
				  OR id_complex2 in (SELECT id_complex FROM $cluster_table WHERE cluster_num = $cluster_num))";
        
        $array = $this->db->query($query)->result_array();
		return array_map('floatval', array_column($array, $alignment_value));
	}
}