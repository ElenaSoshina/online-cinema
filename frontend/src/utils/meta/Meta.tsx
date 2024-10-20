import type { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import logoImage from '../../assets/images/logo.svg'
import { siteName, titleMerge } from '../../config/seo.config'
import { onlyText } from '../../utils/string/clearText'
import type { ISeo } from '../meta/meta.interface'

const Meta: FC<ISeo> = ({ title, image, description, children }) => {
	const location = useLocation()
	const currentUrl = `${process.env.REACT_APP_URL}${location.pathname}`

	return (
		<>
			{description ? (
				<Helmet>
					<title itemProp="headline">{titleMerge(title)}</title>
					<meta
						itemProp="description"
						name="description"
						content={onlyText(description, 152)}
					/>
					<link rel="canonical" href={currentUrl} />
					<meta property="og:locale" content="en" />
					<meta property="og:title" content={titleMerge(title)} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:image" content={image || logoImage} />
					<meta property="og:site_name" content={siteName} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
				</Helmet>
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
			{children}
		</>
	)
}

export default Meta
