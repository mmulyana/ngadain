import FormEvent from '@/features/event/component/form-event'
import SafeAreaContainer from '@/shared/component/safe-area-container'
import Feather from '@expo/vector-icons/Feather'
import { useRouter } from 'expo-router'
import { Pressable, ScrollView, Text, View } from 'react-native'

export default function NewEvent() {
	const router = useRouter()

	return (
		<SafeAreaContainer>
			<ScrollView className='flex-1 bg-background'>
				<View className='flex-1 px-6 pt-4 pb-10'>
					<View className='relative flex-row justify-center items-center'>
						<Pressable
							onPress={() => router.back()}
							className='absolute top-1.5 left-0'
						>
							<Feather name='x' size={16} color='#fff' />
						</Pressable>
						<Text className='text-white text-center text-xl'>Tambah Event</Text>
					</View>
					<FormEvent />
				</View>
			</ScrollView>
		</SafeAreaContainer>
	)
}
