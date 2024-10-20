import type { FC } from 'react'
import GenreMenu from '../MenuContainer/genres/GenreMenu'
import Menu from '../MenuContainer/Menu'
import { firstMenu, userMenu } from '../MenuContainer/menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
