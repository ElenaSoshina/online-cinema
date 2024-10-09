import type { FC } from 'react'
import Layout from '../../layout/Layout'
import type { IHome } from '../home/home.interface'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>Home page</h1>
		</Layout>
	)
}

export default Home
