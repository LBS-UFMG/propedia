<?php

class Explore_model extends CI_Model {

	public function __construct() {
		parent::__construct();
		$this->load->database();
	}

	public function get_organisms() {
	
		$this->db->from("organism");	

		return $this->db->get()->result();
		
	}

	public function get_groups($groups_selected="(0)") {
			
		$this->db->select("g.id_group, g.group, IF(g.id_group in $groups_selected ,1,0) selected");
		$this->db->from("groups g");		
		return $this->db->get()->result();
	
	}

	public function get_bubble_data() {

		$this->db->select("g.id_group, g.group, count(g.group) count, d.id_dataset, d.dataset");
		$this->db->from("complex c");
		$this->db->join("pdb p", "p.id_pdb = c.id_pdb", "left");
		$this->db->join("pdb_groups pg", "p.id_pdb = pg.id_pdb", "left");
		$this->db->join("groups g", "g.id_group = pg.id_group", "left");		
		$this->db->join("dataset d", "d.id_dataset = g.id_dataset", "left");
		$this->db->group_by(array("g.id_group", "g.group", "d.id_dataset", "d.dataset"));
		$this->db->having("count(g.group) > 0");
		return $this->db->get()->result_array();
		
	}

	# ELEMENT CAN BY 'peptide' OR 'receptor'
	public function get_sizes_limits($element) {
		
		$this->db->select("min(" . $element ."_size) min");
		$this->db->select("max(" . $element ."_size) max");
		$table = $element;
		$this->db->from($table);		
		return $this->db->get()->first_row();
		
	}	

}