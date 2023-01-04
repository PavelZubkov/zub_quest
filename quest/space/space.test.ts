namespace $ {

	async function make_land( id = '1_1' as $mol_int62_string ) {
		return $hyoo_crowd_land.make({
			id: $mol_const( id ),
			peer: $mol_const( await $hyoo_crowd_peer.generate() ),
		})
	}

	$mol_test( {

		async 'title changing'() {

			const land = await make_land()
			const space = land.chief.as( $zub_quest_space )

			$mol_assert_equal( space.title() , '' )

			space.title( 'space1' )
			$mol_assert_equal( space.title() , 'space1' )

		} ,

		async 'task adding'() {

			const land = await make_land()
			const space = land.chief.as( $zub_quest_space )

			$mol_assert_equal( space.task_list().length, 0 )

			const task = space.task_add()
			$mol_assert_like( space.task_list() , [task] )

			space.task_drop( task )
			$mol_assert_like( space.task_list() , [] )

		} ,

	} )

}
