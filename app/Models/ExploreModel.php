<?php

namespace App\Models;

use CodeIgniter\Model;

class ExploreModel extends Model {

	public static function get_organisms() {
	
		$conexao = \Config\Database::connect();
		$db = $conexao->table('organism');

		return $db->get()->getResult();
	}

	public static function get_groups($groups_selected="(0)") {

		$conexao = \Config\Database::connect();
		$db = $conexao->table('groups g');
		$db->select("g.id_group, g.group, IF(g.id_group in $groups_selected ,1,0) selected");
		
		return $db->get()->getResult();
	}

	public function get_bubble_data() {

		$db->select("g.id_group, g.group, count(g.group) count, d.id_dataset, d.dataset");
		$db->from("complex c");
		$db->join("pdb p", "p.id_pdb = c.id_pdb", "left");
		$db->join("pdb_groups pg", "p.id_pdb = pg.id_pdb", "left");
		$db->join("groups g", "g.id_group = pg.id_group", "left");		
		$db->join("dataset d", "d.id_dataset = g.id_dataset", "left");
		$db->group_by(array("g.id_group", "g.group", "d.id_dataset", "d.dataset"));
		$db->having("count(g.group) > 0");
		return $db->get()->result_array();
		
	}

	# ELEMENT CAN BY 'peptide' OR 'receptor'
	public function get_sizes_limits($element) {
		
		$db->select("min(" . $element ."_size) min");
		$db->select("max(" . $element ."_size) max");
		$table = $element;
		$db->from($table);		
		return $db->get()->first_row();
		
	}	

}