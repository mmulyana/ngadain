import { View } from 'react-native'

import SafeAreaContainer from '@/shared/component/safe-area-container'

import FormRegister from '@/features/auth/component/form-register'
import AuthHeader from '@/features/auth/component/auth-header'

export default function Register() {
	return (
		<SafeAreaContainer>
			<View className='bg-background flex-1 px-6 flex-col'>
				<AuthHeader />
				<FormRegister />
			</View>
		</SafeAreaContainer>
	)
}
