import Logo from '@/shared/component/logo'
import { useAtomValue } from 'jotai'
import { Text, View } from 'react-native'
import { accounAtom } from '../store/account'

export default function Header() {
	const account = useAtomValue(accounAtom)
	return (
		<View className='px-6 mt-2'>
			<View className='flex-row w-full justify-between items-center'>
				<Logo />
				<View className='w-10 h-10 rounded-full bg-backgroundInput flex items-center justify-center'>
					<Text className='text-white uppercase'>{account?.fullname[0]}</Text>
				</View>
			</View>
		</View>
	)
}
