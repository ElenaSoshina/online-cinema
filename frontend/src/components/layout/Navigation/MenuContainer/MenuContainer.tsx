import type { FC } from 'react'
import Menu from '../MenuContainer/Menu'
import { firstMenu, userMenu } from '../MenuContainer/menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			{/* Geners */}
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
