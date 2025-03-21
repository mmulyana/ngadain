import { Stack } from 'expo-router'
import '../global.css'

export default function RootLayout() {
	return (
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
	)
}
