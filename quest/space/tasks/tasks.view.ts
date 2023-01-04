namespace $.$$ {

	export class $zub_quest_space_tasks extends $.$zub_quest_space_tasks {

		task_list() {
			return this.space().task_list()
				.filter( $mol_match_text( this.filter() , obj => [ obj.done().toString() ] ) )
				.map( obj => this.Task( obj ) )
		}

		task_title( obj: $zub_quest_task, next?: string ) {
			return obj.title( next )
		}
		
		task_done( obj: $zub_quest_task, next?: boolean ) {
			return obj.done( next )
		}

	}

}
