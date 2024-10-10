import cn from 'classnames'
import type { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MaterialIcon from '../../../ui/MaterialIcon'
import type { IMenuItem } from '../MenuContainer/menu.interface'
import styles from './Menu.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const location = useLocation()

	return (
		<li
			className={cn({
				[styles.active]: location.pathname === item.link,
			})}
		>
			<Link to={item.link}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
