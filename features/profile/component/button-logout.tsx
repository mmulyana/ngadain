import { StorageKeys } from '@/shared/constants/StorageKeys'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function ButtonLogout() {
	const router = useRouter()

	const onLogout = async () => {
		router.replace('/')
		await AsyncStorage.removeItem(StorageKeys.Token)
	}

	return (
		<View className='absolute bottom-4 w-full px-6'>
			<Pressable
				className='rounded-full py-4 px-6'
				style={{ backgroundColor: '#FC5151' }}
				onPress={onLogout}
			>
				<Text className='text-white text-center font-medium'>Logout</Text>
			</Pressable>
		</View>
	)
}
