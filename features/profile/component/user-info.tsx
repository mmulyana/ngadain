import { Pressable, Text, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { Color } from '@/shared/constants/Color'

export default function UserInfo() {
	return (
		<View className='px-6 mt-6 gap-6'>
			<View className='flex-row justify-between items-center'>
				<Text className='text-lg text-white'>Profil</Text>
				<Pressable className='flex-row gap-2 items-center'>
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
						<Text className='text-white/50'>Muhamad Mulyana</Text>
					</View>
					<View className='flex-row justify-between items-center'>
						<Text className='text-white'>Username</Text>
						<Text className='text-white/50'>mmulyana</Text>
					</View>
					<View className='flex-row justify-between items-center'>
						<Text className='text-white'>Email</Text>
						<Text className='text-white/50'>mulyan@mail.com</Text>
					</View>
				</View>
			</View>
		</View>
	)
}
