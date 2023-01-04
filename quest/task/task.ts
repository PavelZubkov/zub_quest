namespace $ {

	export class $zub_quest_task extends $hyoo_crowd_struct {

		@ $mol_mem
		title( next?: string ) {
			return this.sub( 'title', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		done( next?: boolean ) {
			return this.sub( 'done' , $hyoo_crowd_reg ).bool( next )
		}

		@ $mol_mem
		owner( next?: $zub_quest_person ) {
			const str = this.sub( 'owner' , $hyoo_crowd_reg ).str( next && next.head )
			const id = $mol_int62_string_ensure( str )
			return id ? this.world()?.Fund( $zub_quest_person ).Item( id ) : null
		}

		@ $mol_mem
		executor( next?: $zub_quest_person ) {
			const str = this.sub( 'executor' , $hyoo_crowd_reg ).str( next && next.head )
			const id = $mol_int62_string_ensure( str )
			return id ? this.world()?.Fund( $zub_quest_person ).Item( id ) : null
		}

	}

}
