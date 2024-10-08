import type { FC } from 'react'
import Logo from '../Navigation/Logo'
import MenuContainer from '../Navigation/MenuContainer/MenuContainer'
import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
