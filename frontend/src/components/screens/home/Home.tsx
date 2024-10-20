import type { FC } from 'react'
import Meta from '../../../utils/meta/Meta'
import Heading from '../../ui/heading/Heading'
import type { IHome } from '../home/home.interface'

const Home: FC<IHome> = () => {
	console.log('Home component is rendering') // Add this to debug
	return (
		<Meta
			title="Watch movies online"
			description="WatchMovieApp mpviees and TV shows online or strream right to youor browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Meta>
	)
}

export default Home
