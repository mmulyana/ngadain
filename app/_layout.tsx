import { Stack } from 'expo-router'
import '../global.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastProvider } from 'react-native-toastier'

export default function RootLayout() {
	const queryClient = new QueryClient({
		defaultOptions: { queries: { retry: 2 } },
	})
	return (
		<ToastProvider
			contentContainerStyle={{
				maxWidth: 320,
				height: 'auto',
				paddingVertical: 8,
				borderRadius: 50,
				top: 40
			}}
			position='top'
			duration={2000}
		>
			<QueryClientProvider client={queryClient}>
				<Stack screenOptions={{ animation: 'none', headerShown: false }}>
					<Stack.Screen name='index' />
					<Stack.Screen name='login' />
					<Stack.Screen name='register' />
					<Stack.Screen name='event/[id]/index' />
					<Stack.Screen name='event/[id]/edit' />
					<Stack.Screen name='event/[id]/new-documentation' />
					<Stack.Screen name='new-event' />
					<Stack.Screen name='edit-profile' />
				</Stack>
			</QueryClientProvider>
		</ToastProvider>
	)
}
