import UserInfo from '@/features/profile/component/user-info'
import Header from '@/shared/component/header'
import SafeAreaContainer from '@/shared/component/safe-area-container'
import { Text, View } from 'react-native'

export default function Profile() {
	return (
		<SafeAreaContainer>
			<View className='flex-1 bg-background'>
				<Header />
				<UserInfo />
			</View>
		</SafeAreaContainer>
	)
}
