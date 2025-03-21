import { Stack, Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather'

export default function HomeLayout() {
	return (
		<Tabs
			screenOptions={({ route }) => ({
				tabBarStyle: {
					backgroundColor: '#0D0D0D',
					paddingTop: 8,
					height: 80,
					borderColor: '#0D0D0D',
					alignItems: 'center',
				},
				tabBarShowLabel: true,
				tabBarLabelStyle: { fontSize: 12, marginTop: 6 },
				tabBarActiveTintColor: '#FFD700',
				tabBarInactiveTintColor: '#A5A5A5',
				tabBarIcon: ({ color }) => {
					if (route.name === 'home') {
						return <Feather name='home' size={24} color={color} />
					}

					if (route.name === 'event') {
						return <Feather name='compass' size={24} color={color} />
					}

					if (route.name === 'profile') {
						return <Feather name='user' size={24} color={color} />
					}
				},
			})}
		>
			<Tabs.Screen
				name='home'
				options={{ title: 'Home', headerShown: false }}
			/>
			<Tabs.Screen
				name='event'
				options={{ title: 'Event', headerShown: false }}
			/>
			<Tabs.Screen
				name='profile'
				options={{ title: 'Profile', headerShown: false }}
			/>
		</Tabs>
	)
}
