<?php

class Complex_model extends CI_Model {

	public function __construct() {
		parent::__construct();
		$this->load->database();
	}

	public function get_complex_number($CCD=FALSE) {
		
		$this->db->select("count(id_complex) complex_number");
		$this->db->from("complex");
		if ($CCD) {
			$this->db->where("is_ccd", "1");
		}

		return $this->db->get()->first_row()->complex_number;
		
	}

	public function get_complex_interface_cluster($complex) {

		list($pdb, $peptide_chain, $receptor_chain) = explode("-", $complex);
		$this->db->select("i.cluster_num");
		$this->db->from("complex c");
		$this->db->join("cluster_interface i", "c.id_complex = i.id_complex", "left");
		$this->db->join("pdb", "pdb.id_pdb = c.id_pdb", "left");
        $this->db->join("peptide p", "p.id_peptide = c.id_peptide", "left");
        $this->db->join("receptor r", "r.id_receptor = c.id_receptor", "left");
		$this->db->where("pdb.pdb",$pdb);
		$this->db->where("p.peptide_chain",$peptide_chain);
		$this->db->where("r.receptor_chain",$receptor_chain);
		return $this->db->get()->first_row();
		
	}

	public function get_complex_binding_cluster($complex) {

		list($pdb, $peptide_chain, $receptor_chain) = explode("-", $complex);
		$this->db->select("b.cluster_num");
		$this->db->from("complex c");
		$this->db->join("cluster_binding b", "c.id_complex = b.id_complex", "left");
		$this->db->join("pdb", "pdb.id_pdb = c.id_pdb", "left");
        $this->db->join("peptide p", "p.id_peptide = c.id_peptide", "left");
        $this->db->join("receptor r", "r.id_receptor = c.id_receptor", "left");
		$this->db->where("pdb.pdb",$pdb);
		$this->db->where("p.peptide_chain",$peptide_chain);
		$this->db->where("r.receptor_chain",$receptor_chain);
		return $this->db->get()->first_row();
		
	}

	public function get_complex_data($complex) {
		
		$complex_explode = explode("-", $complex);
		
		if (sizeof($complex_explode) != 3) {
			return NULL;
		} else {
			list($pdb, $peptide_chain, $receptor_chain) = $complex_explode;
			$this->db->from("complex_explore_view");
			$this->db->where("pdb",$pdb);
			$this->db->where("peptide_chain",$peptide_chain);
			$this->db->where("receptor_chain",$receptor_chain);
			return $this->db->get()->first_row();
		}

	}

	/*IFNULL(i.interface_rmsd, '-') irmsd, 
     IFNULL(co.diff_alignment_score, '-') z_score,*/

	public function get_similar_complexes($id_complex) {

		# GET CLUSTER NUM SEQUENCE 
		$this->db->select("cluster_num");
		$this->db->from("cluster_sequence");
		$this->db->where("id_complex", $id_complex);		
		$result = $this->db->get();
		$cluster_num_sequence = NULL;
		if ($result->num_rows() != 0) {
			$cluster_num_sequence = $result->first_row()->cluster_num;
		}

		# GET CLUSTER NUM BINDING 
		$this->db->select("cluster_num");
		$this->db->from("cluster_binding");
		$this->db->where("id_complex", $id_complex);
		$result = $this->db->get();
		$cluster_num_binding = NULL;
		if ($result->num_rows() != 0) {
			$cluster_num_binding = $result->first_row()->cluster_num;
		}		

		# GET CLUSTER NUM INTERFACE 
		$this->db->select("cluster_num");
		$this->db->from("cluster_interface");
		$this->db->where("id_complex", $id_complex);
		$result = $this->db->get();
		$cluster_num_interface = NULL;	
		if ($result->num_rows() != 0) {
			$cluster_num_interface = $result->first_row()->cluster_num;
		}
		
		if (($cluster_num_sequence !== NULL) or
			($cluster_num_binding !== NULL) or
			($cluster_num_interface !== NULL)) {
			$query = 
				"SELECT 
					CONCAT_WS('-',
				            pdb.pdb,
				            p.peptide_chain,
				            r.receptor_chain) AS complex,
				    IF(s.id_complex IS NULL,
				        'fa-ban text-danger',
				        'fa-check-circle text-success') sequence,
				    IF(b.id_complex IS NULL,
				        'fa-ban text-danger',
				        'fa-check-circle text-success') binding,
				    IF(i.id_complex IS NULL,
				        'fa-ban text-danger',
				        'fa-check-circle text-success') interface,
					IF(s.id_complex IS NULL, 0, 1) + IF(b.id_complex IS NULL, 0, 1) + IF(i.id_complex IS NULL, 0, 1)
				FROM
				    complex c
				JOIN pdb ON c.id_pdb = pdb.id_pdb
				JOIN peptide p ON c.id_peptide = p.id_peptide
				JOIN receptor r ON c.id_receptor = r.id_receptor

				LEFT JOIN
				(SELECT id_complex FROM cluster_sequence
				 WHERE cluster_num = $cluster_num_sequence 
				 AND id_complex <> $id_complex
				 AND cluster_num <> -1) as s
				ON c.id_complex = s.id_complex

				LEFT JOIN
				(SELECT id_complex FROM cluster_binding
				 WHERE cluster_num = $cluster_num_binding
				 AND id_complex <> $id_complex
				 AND cluster_num <> -1) as b
				ON c.id_complex = b.id_complex

				LEFT JOIN
				(SELECT id_complex FROM cluster_interface
				 WHERE cluster_num = $cluster_num_interface
				 AND id_complex <> $id_complex
				 AND cluster_num <> -1) as i
				ON c.id_complex = i.id_complex
				WHERE 
				(IF(s.id_complex IS NULL, 0, 1) + IF(b.id_complex IS NULL, 0, 1) + IF(i.id_complex IS NULL, 0, 1)) <> 0
				ORDER BY 5 DESC , 2 , 3 , 4";
			return $this->db->query($query)->result();
		} else {
			return NULL;
		}

	}

	public function get_complex_sequence_cluster($complex) {

		list($pdb, $peptide_chain, $receptor_chain) = explode("-", $complex);
		$this->db->select("s.cluster_num");
		$this->db->from("complex c");
		$this->db->join("cluster_sequence s", "c.id_complex = s.id_complex", "left");
		$this->db->join("pdb", "pdb.id_pdb = c.id_pdb", "left");
        $this->db->join("peptide p", "p.id_peptide = c.id_peptide", "left");
        $this->db->join("receptor r", "r.id_receptor = c.id_receptor", "left");
		$this->db->where("pdb.pdb",$pdb);
		$this->db->where("p.peptide_chain",$peptide_chain);
		$this->db->where("r.receptor_chain",$receptor_chain);
		return $this->db->get()->first_row();

	}

	var $column_search = array("pdb.pdb","pdb.title","g.group",
		"CONCAT_WS('-',pdb.pdb, p.peptide_chain, r.receptor_chain)");	

	private function complex_view() {

		$this->db->start_cache();
		$this->db->select("CONCAT_WS('-',pdb.pdb, p.peptide_chain, r.receptor_chain) complex");		
		$this->db->select("p.peptide_size peptide_size");
		$this->db->select("r.receptor_size receptor_size");
		$this->db->select("pdb.title protein_name");
		$this->db->select("pdb.resolution resolution");
		//$this->db->select("o.organism");		
		$this->db->select("pdb.classification classification");
		
		/*$this->db->select("(SELECT COUNT(id_cluster_sequence) FROM cluster_sequence WHERE cluster_num 				  = cl_s.cluster_num) cluster_sequence_size");
		$this->db->select("(SELECT COUNT(id_cluster_interface) FROM cluster_interface WHERE 						cluster_num = cl_i.cluster_num) cluster_binding_size");
		$this->db->select("(SELECT COUNT(id_cluster_binding) FROM cluster_binding WHERE cluster_num = 				  cl_c.cluster_num) cluster_interface_size");*/

		$this->db->select("IFNULL(cl_s.cluster_num,'') cluster_sequence_num");
		$this->db->select("IFNULL(cl_c.cluster_num,'') cluster_binding_num");
		$this->db->select("IFNULL(cl_i.cluster_num,'') cluster_interface_num");
		
		$this->db->select("cl_s.is_centroid cluster_sequence_centroid");
		$this->db->select("cl_c.is_centroid cluster_binding_centroid");
		$this->db->select("cl_i.is_centroid cluster_interface_centroid");
				
		$this->db->select("IF(cl_s.is_centroid OR cl_c.is_centroid OR cl_i.is_centroid, 1, 0) centroid");
		$this->db->stop_cache();

        $this->db->from("complex c");
        $this->db->join("pdb", "pdb.id_pdb = c.id_pdb", "left");
        $this->db->join("peptide p", "p.id_peptide = c.id_peptide", "left");
        $this->db->join("receptor r", "r.id_receptor = c.id_receptor", "left");
        $this->db->join("pdb_groups pg", "pdb.id_pdb = pg.id_pdb", "left");
		$this->db->join("groups g", "g.id_group = pg.id_group", "left");        		
		$this->db->join("organism o_pep", "p.id_organism = o_pep.id_organism", "left");
		$this->db->join("organism o_rec", "r.id_organism = o_rec.id_organism", "left");
		$this->db->join("cluster_sequence cl_s", "c.id_complex = cl_s.id_complex", "left");
		$this->db->join("cluster_binding cl_c", "c.id_complex = cl_c.id_complex", "left");
		$this->db->join("cluster_interface cl_i", "c.id_complex = cl_i.id_complex", "left");
		$this->db->group_by("c.id_complex");

		// modificação diego --------------->
		//$this->db->group_by("protein_name");
		// FIM modificação diego --------------->

		//$this->db->order_by("CONCAT_WS('-',c.pdb, c.peptide_chain, c.receptor_chain)");
		$this->db->order_by("pdb.pdb");
	}

	private function _startsWith($string, $startString)  { 
    	$len = strlen($startString); 
    	return (substr($string, 0, $len) === $startString); 
	} 

	private function _get_datatable($wheres) {

		$search = NULL;
		if ($this->input->post("search")) {
			$search = $this->input->post("search")["value"];
		}
		$order_column = NULL;
		$order_dir = NULL;
		$order = $this->input->post("order");
		if (isset($order)) {
			$order_column = $order[0]["column"];
			$order_dir = $order[0]["dir"];
		}
		
		$this->complex_view();

		if (isset($wheres)) {			
			foreach ($wheres as $group) {
				// GROUP WHERE
				if (is_array($group)) {
					$first = TRUE;
					foreach ($group as $where) {
						if ($first) {
							$this->db->group_start();
							$this->db->where($where);
							$first = FALSE;
						} else {
							$this->db->or_where($where);
						}
					}
					if (!$first) {
						$this->db->group_end();
					}
				// SIMPLE STRING WHERE
				} else {
					$this->db->where($group);
				}
			}					
		}
		
		if (isset($search)) {
			$first = TRUE;
			foreach ($this->column_search as $field) {
				if ($first) {
					$this->db->group_start();
					$this->db->like($field, $search);
					$first = FALSE;
				} else {
					$this->db->or_like($field, $search);
				}
			}
			if (!$first) {
				$this->db->group_end();
			}
		}

		if (isset($order)) {
			$this->db->order_by($this->column_order[$order_column], $order_dir);
		}

	}

	public function get_datatable($wheres) {

		$length = $this->input->post("length");
		$start = $this->input->post("start");
		$this->_get_datatable($wheres);
		if (isset($length) && $length != -1) {
			$this->db->limit($length, $start);
		}
		return $this->db->get()->result();
	}

	public function records_filtered($wheres) {

		$response = array();

		# ALL COMPLEX
		$this->_get_datatable($wheres);
		$this->db->flush_cache();
		
		$this->db->select("CONCAT_WS('_',pdb.pdb, p.peptide_chain, r.receptor_chain) complex");
		$this->db->select("cl_s.is_centroid cluster_sequence_centroid");
		$this->db->select("cl_c.is_centroid cluster_binding_centroid");
		$this->db->select("cl_i.is_centroid cluster_interface_centroid");
		$this->db->select("IFNULL(cl_s.cluster_num,'') cluster_sequence_num");
		$this->db->select("IFNULL(cl_c.cluster_num,'') cluster_binding_num");
		$this->db->select("IFNULL(cl_i.cluster_num,'') cluster_interface_num");
		$response = array_map(
			function($value) {
				return array(
					"complex" => $value['complex'],
					"sequence_centroid" => $value['cluster_sequence_centroid'],
					"binding_centroid" => $value['cluster_binding_centroid'],
					"interface_centroid" => $value['cluster_interface_centroid'],
					"cluster_sequence_num" => $value['cluster_sequence_num'],
					"cluster_interface_num" => $value['cluster_interface_num'],
					"cluster_binding_num" => $value['cluster_binding_num'],					
				);
			}, 
			$this->db->get()->result_array()
		);

		return $response;

	}

	public function records_total() {

		$this->complex_view();
		return $this->db->count_all_results();

	}

}