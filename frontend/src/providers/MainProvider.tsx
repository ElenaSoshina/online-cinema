import type { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '../components/layout/Layout'

interface MainProviderProps {
	children: ReactNode
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider = ({ children }: MainProviderProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}

export default MainProvider
