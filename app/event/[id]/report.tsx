import TabItem from '@/features/auth/component/tabItem'
import { useReport } from '@/features/event/hook/use-report'
import SafeAreaContainer from '@/shared/component/safe-area-container'
import Feather from '@expo/vector-icons/Feather'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

export default function Report() {
	const router = useRouter()
	const [tab, setTab] = useState<'attendance' | 'feedback'>('attendance')
	const { id } = useLocalSearchParams()

	const { data } = useReport(id as string)

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
							<View className='gap-6'>
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
									<Text className='text-white'>{data?.data.total.present}</Text>
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
										<Text className='text-white'>Tidak Hadir</Text>
									</View>
									<Text className='text-white'>
										{data?.data.total.notPresent}
									</Text>
								</View>
								<Text className='text-white/50'>Detail</Text>
								<View className='gap-4'>
									{data?.data.participants.presence.map((item, index) => (
										<View
											key={index}
											className='flex-row justify-between items-center'
										>
											<Text className='text-white'>{item.fullname}</Text>
											{item.isPresence ? (
												<View
													className='border px-4 py-2 rounded-full'
													style={{
														borderColor: '#51FC9E',
													}}
												>
													<Text style={{ color: '#51FC9E' }}>Hadir</Text>
												</View>
											) : (
												<View
													className='border px-4 py-2 rounded-full'
													style={{
														borderColor: '#FC5151',
													}}
												>
													<Text style={{ color: '#FC5151' }}>Tidak hadir</Text>
												</View>
											)}
										</View>
									))}
								</View>
							</View>
						</>
					) : (
						<>
							<View className='gap-6'>
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
									<Text className='text-white'>
										{data?.data.total.satisfied}
									</Text>
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
									<Text className='text-white'>
										{data?.data.total.notSatisfied}
									</Text>
								</View>

								<Text className='text-white/50'>Detail</Text>
								<View className='gap-4'>
									{data?.data.participants.feedbacks.map((item, index) => (
										<View key={index}>
											<View className='flex-row justify-between items-center'>
												<Text className='text-white'>{item.user.fullname}</Text>
												{item.rating == 1 ? (
													<View
														className='border px-4 py-2 rounded-full'
														style={{
															borderColor: '#51FC9E',
														}}
													>
														<Text style={{ color: '#51FC9E' }}>Puas</Text>
													</View>
												) : (
													<View
														className='border px-4 py-2 rounded-full'
														style={{
															borderColor: '#FC5151',
														}}
													>
														<Text style={{ color: '#FC5151' }}>Tidak Puas</Text>
													</View>
												)}
											</View>
											<View>
												<Text className='text-white/50'>"{item.message}"</Text>
											</View>
										</View>
									))}
								</View>
							</View>
						</>
					)}
				</View>
			</ScrollView>
		</SafeAreaContainer>
	)
}
