import { Image, Pressable, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Feather from '@expo/vector-icons/Feather'
import { useRouter } from 'expo-router'
import { BASE_URL } from '@/shared/constants/Url'

type Props = {
	address: string
	category: string
	date: string
	description: string
	id: string
	isOnline: boolean
	linkUrl: null | string
	mapUrl: null | string
	name: string
	photoUrl: null | string
	userId: string
	_count: {
		participants?: number
	}
	user: {
		id: string
		username: string
		photoUrl: string
	}
	isJoin?: boolean
	variant: any
}
export default function CardEvent({
	id,
	name,
	photoUrl,
	date,
	category,
	variant,
	address,
	_count,
	user,
	isJoin = false,
}: Props) {
	const router = useRouter()
	if (variant === 'sm') {
		return (
			<Pressable
				onPress={() => router.push(`/event/${id}`)}
				className='h-[220px] w-[200px] rounded-2xl bg-backgroundCard flex-col overflow-hidden'
			>
				<View className='h-10 px-2 w-full flex-row items-center justify-between'>
					<View className='flex-row gap-2 items-center'>
						<View className='h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center'>
							<Text>{user?.username.at(0)}</Text>
						</View>
						<Text className='text-sm text-white'>{user?.username}</Text>
					</View>
				</View>
				<View className='w-full h-[180px] relative'>
					{photoUrl ? (
						<Image
							source={{
								uri: BASE_URL + photoUrl,
							}}
							className='w-full'
							style={{ height: 280 }}
						/>
					) : (
						<View className='w-full h-[185px] rounded-b-[14px] flex-row justify-center items-center'>
							<Feather name='image' size={24} color='#fff' />
						</View>
					)}
					<LinearGradient
						colors={['rgba(33,33,35,0.8)', 'rgba(33,33,35,0)']}
						start={{ x: 0, y: 1 }}
						end={{ x: 0, y: 0 }}
						className='absolute -bottom-[5px] left-0 right-0 h-[185px]'
					/>
					<View className='flex-col justify-between px-4 py-4 absolute h-full w-full'>
						<View className='flex-row justify-end'>
							{isJoin && (
								<View className='rounded-full bg-background px-3 py-1'>
									<Text className='text-primary'>8 hari lagi</Text>
								</View>
							)}
						</View>
						<View className='flex-col items-start gap-2'>
							<View className='bg-background/[0.16] rounded-full blur-md px-3 py-1'>
								<Text className='text-white text-sm'>{category}</Text>
							</View>

							<Text className='text-white text-base'>{name}</Text>
						</View>
					</View>
				</View>
			</Pressable>
		)
	}
	return (
		<Pressable
			onPress={() => router.push(`/event/${id}`)}
			className='rounded-3xl bg-backgroundCard h-[200px] w-full px-3.5 py-4'
		>
			<View className='h-6 w-full flex-row items-center justify-between'>
				<View className='flex-row gap-2 items-center'>
					<View className='h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center uppercase'>
						<Text>{user?.username.at(0)}</Text>
					</View>
					<Text className='text-sm text-white'>{user?.username}</Text>
				</View>
			</View>
			<View className='gap-4 items-center flex-row mt-3.5' style={{ flex: 2 }}>
				<View
					className='basis-[16px] h-full relative overflow-hidden rounded-[14px]'
					style={{ flex: 1 }}
				>
					{photoUrl ? (
						<Image
							source={{
								uri: BASE_URL + photoUrl,
							}}
							className='w-full h-full rounded-[14px]'
						/>
					) : (
						<View className='w-full h-full rounded-[14px] flex-row justify-center items-center'>
							<Feather name='image' size={24} color='#fff' />
						</View>
					)}

					<LinearGradient
						colors={['rgba(33,33,35,0.8)', 'rgba(33,33,35,0)']}
						start={{ x: 0, y: 1 }}
						end={{ x: 0, y: 0 }}
						className='absolute -bottom-[5px] left-0 right-0 h-[185px]'
					/>
					<View className='absolute bottom-4 left-4 bg-white/20 rounded-full blur-md px-3 py-1'>
						<Text className='text-white text-sm'>{category}</Text>
					</View>
				</View>
				<View
					style={{ flex: 1 }}
					className='flex-col justify-center items-start gap-2'
				>
					<Text className='text-base text-white font-medium'>
						{name.length > 20 ? name.slice(0, 24) + '...' : name}
					</Text>
					<View className='flex-row gap-2 items-center'>
						<Feather name='map-pin' size={16} color='#8F8F90' />
						<Text className='text-white/80 text-base'>
							{address?.slice(0, 14)}...
						</Text>
					</View>
					<View className='flex-row gap-2 items-center'>
						<Feather name='calendar' size={16} color='#8F8F90' />
						<Text className='text-white/80 text-base'>{date}</Text>
					</View>
					<View className='flex-row gap-2 items-center'>
						<Feather name='users' size={16} color='#8F8F90' />
						<Text className='text-white/80 text-base'>
							{_count.participants} Pendaftar
						</Text>
					</View>
				</View>
			</View>
		</Pressable>
	)
}
