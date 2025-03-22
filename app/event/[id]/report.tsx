import TabItem from '@/features/auth/component/tabItem'
import SafeAreaContainer from '@/shared/component/safe-area-container'
import Feather from '@expo/vector-icons/Feather'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

export default function Report() {
	const router = useRouter()
	const [tab, setTab] = useState<'attendance' | 'feedback'>('attendance')

	return (
		<SafeAreaContainer>
			<ScrollView className='flex-1 bg-background px-6 pt-6'>
				<View className='relative flex-row justify-center items-center'>
					<Pressable
						onPress={() => router.back()}
						className='absolute top-1.5 left-0 h-8 w-8 flex-row justify-center items-center'
					>
						<Feather name='x' size={16} color='#fff' />
					</Pressable>
					<Text className='text-white text-center text-xl'>Laporan</Text>
				</View>
				<View className='flex-2 mt-6 flex-row'>
					<TabItem
						title='Kehadiran'
						active={tab === 'attendance'}
						onPress={() => setTab('attendance')}
					/>
					<TabItem
						title='Survey Kepuasan'
						active={tab === 'feedback'}
						onPress={() => setTab('feedback')}
					/>
				</View>
				<View className='gap-6 mt-6'>
					{tab === 'attendance' ? (
						<>
							<View className='gap-4'>
								<View className='flex-row justify-between items-center'>
									<View className='flex-row gap-2 items-center'>
										<View
											style={{
												height: 12,
												width: 12,
												backgroundColor: '#51FC9E',
											}}
											className='rounded-full'
										></View>
										<Text className='text-white'>Hadir</Text>
									</View>
									<Text className='text-white'>20</Text>
								</View>
								<View className='flex-row justify-between items-center'>
									<View className='flex-row gap-2 items-center'>
										<View
											style={{
												height: 12,
												width: 12,
												backgroundColor: '#FC5151',
											}}
											className='rounded-full'
										></View>
										<Text className='text-white'>Hadir</Text>
									</View>
									<Text className='text-white'>20</Text>
								</View>
							</View>
						</>
					) : (
						<>
							<View className='gap-4'>
								<View className='flex-row justify-between items-center'>
									<View className='flex-row gap-2 items-center'>
										<View
											style={{
												height: 12,
												width: 12,
												backgroundColor: '#51FC9E',
											}}
											className='rounded-full'
										></View>
										<Text className='text-white'>Merasa puas</Text>
									</View>
									<Text className='text-white'>20</Text>
								</View>
								<View className='flex-row justify-between items-center'>
									<View className='flex-row gap-2 items-center'>
										<View
											style={{
												height: 12,
												width: 12,
												backgroundColor: '#FC5151',
											}}
											className='rounded-full'
										></View>
										<Text className='text-white'>Merasa tidak puas</Text>
									</View>
									<Text className='text-white'>20</Text>
								</View>
							</View>
						</>
					)}
				</View>
			</ScrollView>
		</SafeAreaContainer>
	)
}
