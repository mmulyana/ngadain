import { Image, View } from 'react-native'
import { Link } from 'expo-router'

import Logo from '@/shared/component/logo'

export default function AuthHeader() {
	return (
		<View className='h-9 mt-6'>
			<View className='flex-row items-center justify-center relative'>
				<Link href='/' className='absolute left-0'>
					<Image
						source={require('@/assets/images/chevron-left.png')}
						className='w-6 h-6'
					/>
				</Link>
				<Logo />
			</View>
		</View>
	)
}
