import { useRouter } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
	id: string
	name: string
	photoUrl: string
	date: string
	category: string
	username: string
	userPhotoUrl: string
	variant: any
}
export default function CardEvent({
	id,
	name,
	photoUrl,
	date,
	category,
	userPhotoUrl,
	username,
	variant,
}: Props) {
	const router = useRouter()
	if (variant === 'sm') {
		return (
			<Pressable
				onPress={() => router.push(`/`)}
				className='h-[220px] w-[200px] rounded-2xl bg-backgroundCard flex-col overflow-hidden'
			>
				<View className='h-10 w-full flex-row gap-2 items-center px-2'>
					<View className='h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center'>
						<Text>{username.at(0)}</Text>
					</View>
					<Text className='text-sm text-white'>{username}</Text>
				</View>
				<View className='w-full h-[180px] relative'>
					<Image
						source={require('@/assets/images/dummy.png')}
						className='w-full h-[185px] rounded-b-[14px]'
					/>
					<LinearGradient
						colors={['rgba(33,33,35,0.8)', 'rgba(33,33,35,0)']}
						start={{ x: 0, y: 1 }}
						end={{ x: 0, y: 0 }}
						className='absolute -bottom-[5px] left-0 right-0 h-[185px]'
					/>
					<View className='flex-col justify-between px-4 py-4 absolute h-full w-full'>
						<View className='flex-row justify-end'>
							<View className='rounded-full bg-background px-3 py-1'>
								<Text className='text-primary'>8 hari lagi</Text>
							</View>
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
	return null
}
