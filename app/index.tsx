import { ImageBackground, Text, View } from 'react-native'
import { Link } from 'expo-router'

import Logo from '@/shared/component/logo'
import useCheckAccount from '@/features/auth/hook/use-check-account'

export default function Index() {
	useCheckAccount()
	
	return (
		<ImageBackground
			source={require('@/assets/images/background.png')}
			className='flex-1 px-6 flex-col justify-end'
		>
			<View className='flex-col justify-end items-center gap-6 pb-10'>
				<Logo />
				<Text className='text-2xl font-medium text-white max-w-[160px] text-center'>
					Selamat datang di Ngadain
				</Text>
				<Text className='text-white text-center opacity-50 text-lg'>
					Tempatnya buat bikin dan ikut event dengan mudah, perluas networking,
					dan join komunitas!
				</Text>
				<Link
					href='/register'
					className='mt-4 rounded-full py-4 w-full flex text-center justify-center items-center bg-primary'
				>
					<Text className='text-dark text-lg font-medium'>Daftar</Text>
				</Link>
				<View className='flex gap-1 items-center flex-row'>
					<Text className='text-white opacity-50'>Sudah punya akun? </Text>
					<Link href='/login' className='text-primary'>
						Masuk
					</Link>
				</View>
			</View>
		</ImageBackground>
	)
}
