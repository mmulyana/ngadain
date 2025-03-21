import { Stack } from 'expo-router'
import '../global.css'

export default function RootLayout() {
	return (
		<Stack screenOptions={{ animation: 'none', headerShown: false }}>
			<Stack.Screen name='index' />
			<Stack.Screen name='login' />
			<Stack.Screen name='register' />
			<Stack.Screen name='event/[id]' />
		</Stack>
	)
}
