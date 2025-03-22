import { Pressable, Text, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { useRouter } from 'expo-router'
import { useAtomValue } from 'jotai'

import { accounAtom } from '@/shared/store/account'
import { Color } from '@/shared/constants/Color'

export default function UserInfo() {
	const account = useAtomValue(accounAtom)
	const router = useRouter()

	return (
		<View className='px-6 mt-6 gap-6'>
			<View className='flex-row justify-between items-center'>
				<Text className='text-lg text-white'>Profil</Text>
				<Pressable
					onPress={() => router.push('/edit-profile')}
					className='flex-row gap-2 items-center'
				>
					<Feather name='edit-2' size={16} color={Color.Primary} />
					<Text className='text-primary'>Ubah</Text>
				</Pressable>
			</View>
			<View
				className='bg-dark flex-row rounded-full justify-center items-center'
				style={{ height: 104, width: 104 }}
			>
				<Feather name='image' size={32} color='#fff' />
			</View>
			<View>
				<Text className='text-white/50 mb-4'>Informasi</Text>
				<View className='gap-6'>
					<View className='flex-row justify-between items-center'>
						<Text className='text-white'>Nama Lengkap</Text>
						<Text className='text-white/50'>{account?.fullname}</Text>
					</View>
					<View className='flex-row justify-between items-center'>
						<Text className='text-white'>Username</Text>
						<Text className='text-white/50'>{account?.username}</Text>
					</View>
					<View className='flex-row justify-between items-center'>
						<Text className='text-white'>Email</Text>
						<Text className='text-white/50'>{account?.email}</Text>
					</View>
				</View>
			</View>
		</View>
	)
}
