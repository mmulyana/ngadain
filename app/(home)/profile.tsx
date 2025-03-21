import { View } from 'react-native'

import UserInfo from '@/features/profile/component/user-info'

import SafeAreaContainer from '@/shared/component/safe-area-container'
import Header from '@/shared/component/header'
import ButtonLogout from '@/features/profile/component/button-logout'

export default function Profile() {
	return (
		<SafeAreaContainer>
			<View className='flex-1 bg-background'>
				<Header />
				<UserInfo />
			</View>
			<ButtonLogout />
		</SafeAreaContainer>
	)
}
