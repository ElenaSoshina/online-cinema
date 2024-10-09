import type { ReactNode } from 'react'
import Navigation from '../layout/Navigation/Navigation'
import Sidebar from '../layout/Sidebar/Sidebar'
import styles from './Layout.module.scss'

type LayoutProps = {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>

			<Sidebar />
		</div>
	)
}

export default Layout
