import { Pressable, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import Feather from '@expo/vector-icons/Feather'

import SafeAreaContainer from '@/shared/component/safe-area-container'

export default function Attendance() {
	const router = useRouter()

	return (
		<SafeAreaContainer>
			<View className='flex-1 bg-background px-6 pt-4 pb-10'>
				<View className='relative flex-row justify-center items-center'>
					<Pressable
						onPress={() => router.back()}
						className='absolute top-1.5 left-0 h-8 w-8 flex-row justify-center items-center'
					>
						<Feather name='x' size={16} color='#fff' />
					</Pressable>
					<Text className='text-white text-center text-xl'>Presensi</Text>
				</View>
			</View>
		</SafeAreaContainer>
	)
}
