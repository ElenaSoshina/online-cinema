import type { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link to="/" className="px-layout mb-10 block">
			<img src={logo} alt="logo" width={247} height={34} draggable={false} />
		</Link>
	)
}

export default Logo
