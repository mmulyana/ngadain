import { LinearGradient } from 'expo-linear-gradient'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

import SafeAreaContainer from '@/shared/component/safe-area-container'
import Feather from '@expo/vector-icons/Feather'
import { Color } from '@/shared/constants/Color'
import ButtonAddDoc from '@/features/event/component/button-add-doc'
import { useItem } from '@/features/event/hook/use-item'

export default function DetailEvent() {
	const { id } = useLocalSearchParams()

	const router = useRouter()

	const { data } = useItem(id as string)

	return (
		<SafeAreaContainer>
			<ScrollView className='flex-1 bg-background'>
				<View className='flex-1 pb-20'>
					<View className='relative'>
						<Image
							source={require('@/assets/images/dummy.png')}
							className='w-full'
							style={{ height: 280 }}
						/>
						<LinearGradient
							colors={['rgba(33,33,35,0.8)', 'rgba(33,33,35,0.04)']}
							start={{ x: 0, y: 1 }}
							end={{ x: 0, y: 0 }}
							className='absolute bottom-0 left-0 right-0'
							style={{ height: 280 }}
						/>
						<View className='absolute w-full flex-row justify-between top-4 px-6'>
							<Pressable
								onPress={() => router.back()}
								className='h-10 w-10 rounded-full bg-white flex-row justify-center items-center shadow-lg'
							>
								<Feather name='x' size={20} color={Color.Dark} />
							</Pressable>
							<View className='flex-row gap-4 items-center'>
								<Pressable className='h-10 w-10 rounded-full bg-white flex-row justify-center items-center shadow-lg'>
									<Feather name='edit-2' size={20} color={Color.Dark} />
								</Pressable>
								<Pressable className='h-10 w-10 rounded-full bg-white flex-row justify-center items-center shadow-lg'>
									<Feather name='bar-chart' size={20} color={Color.Dark} />
								</Pressable>
							</View>
						</View>
						<View className='absolute w-full flex items-start gap-2 justify-between bottom-4 px-6'>
							<View className='bg-white/20 rounded-full blur-md px-3 py-1'>
								<Text className='text-white text-base'>
									{data?.data.category}
								</Text>
							</View>
							<Text className='text-xl text-white'>{data?.data.name}</Text>
						</View>
					</View>

					<View className='gap-6 px-6 pt-6'>
						<View className='gap-4'>
							<Text className='text-white/50 text-base'>Penyelenggara</Text>
							<View className='flex-row gap-2 items-center'>
								<View className='h-10 w-10 rounded-full bg-backgroundInput'></View>
								<Text className='text-white text-base'>
									{data?.data.user.username}
								</Text>
							</View>
						</View>

						<View className='gap-4'>
							<Text className='text-white/50 text-base'>Deskripsi</Text>
							<Text className='text-white text-base'>
								{data?.data.description}
							</Text>
						</View>

						<View className='flex-row gap-4 items-center'>
							<Feather
								name='map-pin'
								size={20}
								color='#fff'
								style={{ opacity: 0.5 }}
							/>
							<Text className='text-base text-white'>{data?.data.address}</Text>
						</View>

						<View className='flex-row gap-4 items-center'>
							<Feather
								name='calendar'
								size={20}
								color='#fff'
								style={{ opacity: 0.5 }}
							/>
							<Text className='text-base text-white'>{data?.data.date}</Text>
						</View>
						<View className='flex-row gap-4 items-center'>
							<Feather
								name='users'
								size={20}
								color='#fff'
								style={{ opacity: 0.5 }}
							/>
							<Text className='text-base text-white'>
								{data?.data._count.participant} Pendaftar
							</Text>
						</View>

						<View className='gap-4'>
							<Text className='text-white/50 text-base'>Dokumentasi</Text>
							<View style={{ flex: 4, gap: 4 }}></View>
						</View>

						<Link
							href={`/event/${id}/register-event`}
							className='mt-4 rounded-full py-4 w-full flex text-center justify-center items-center bg-primary'
						>
							<Text className='text-dark text-lg font-medium'>
								Daftar Event
							</Text>
						</Link>
					</View>
				</View>
			</ScrollView>
			<ButtonAddDoc id={id as string} />
		</SafeAreaContainer>
	)
}
