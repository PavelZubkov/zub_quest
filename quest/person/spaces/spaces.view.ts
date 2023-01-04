namespace $.$$ {

	export class $zub_quest_person_spaces extends $.$zub_quest_person_spaces {

		@ $mol_mem
		space_list() {
			return this.person().spaces_list().map( obj => this.Space( obj ) )
		}

		space_id( obj: $zub_quest_space ) {
			return obj.land.id()
		}

		space_title( obj: $zub_quest_space ) {
			return obj.title() || super.space_title( obj )
		}

	}

}
