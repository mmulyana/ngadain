import { View } from 'react-native'

import SafeAreaContainer from '@/shared/component/safe-area-container'

import AuthHeader from '@/features/auth/component/auth-header'
import FormLogin from '@/features/auth/component/form-login'

export default function Login() {
	return (
		<SafeAreaContainer>
			<View className='flex-1 bg-background h-full px-6 flex-col justify-center'>
				<AuthHeader />
				<FormLogin />
			</View>
		</SafeAreaContainer>
	)
}
