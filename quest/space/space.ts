namespace $ {

	export class $zub_quest_space extends $hyoo_crowd_struct {
		
		@ $mol_mem
		title( next?: string ) {
			return this.sub( 'title', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		owner( next?: $zub_quest_person ) {
			const str = this.sub( 'owner' , $hyoo_crowd_reg ).str( next && next.head )
			const id = $mol_int62_string_ensure( str )
			return id ? this.world()?.Fund( $zub_quest_person ).Item( id ) : null
		}
		
		@ $mol_mem
		tasks_node() {
			return this.sub( 'tasks', $hyoo_crowd_list ) 
		}

		@ $mol_mem
		task_list() {
			return this.tasks_node().nodes( $zub_quest_task )
		}

		@ $mol_action
		task_add() {
			this.sub( 'tasks', $hyoo_crowd_list ).insert([ {} ])
			const obj = this.task_list().slice( -1 )[0]
			return obj
		}
		
		@ $mol_action
		task_drop( obj: $zub_quest_task ) {
			const index = this.task_list().indexOf( obj )
			this.sub( 'tasks', $hyoo_crowd_list ).cut( index )
		}

	}
	
}
