namespace $.$$ {

	export class $zub_quest_app extends $.$zub_quest_app {

		space_opened() {
			return this.$.$mol_state_arg.value( 'space' )
		}

		space() {
			const fund = this.yard().world().Fund( $zub_quest_space )
			return fund.Item( this.space_opened() as $mol_int62_string )
		}

		@ $mol_mem
		home() {
			return this.yard().world().home()
		}

		@ $mol_mem
		user() {
			return this.home().chief.yoke( '$zub_quest' , $zub_quest_person )!
		}

		pages() {
			return [
				this.Spaces(),	
				... this.space_opened() ? [ this.Tasks() ] : [],
			]
		}

	}

}
