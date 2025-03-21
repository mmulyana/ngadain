import Logo from '@/shared/component/logo'
import { Text, View } from 'react-native'

export default function Header() {
	return (
		<View className='px-6'>
			<View className='flex-row w-full justify-between items-center'>
				<Logo />
				<View className='w-10 h-10 rounded-full bg-backgroundInput flex items-center justify-center'>
					<Text className='text-white uppercase'>M</Text>
				</View>
			</View>
		</View>
	)
}
