import { Image, Text, View } from 'react-native'
import { useAtomValue } from 'jotai'

import Logo from '@/shared/component/logo'

import { accounAtom } from '../store/account'
import { BASE_URL } from '../constants/Url'

export default function Header() {
	const account = useAtomValue(accounAtom)
	return (
		<View className='px-6 mt-2'>
			<View className='flex-row w-full justify-between items-center'>
				<Logo />
				{account?.photoUrl ? (
					<Image
						source={{
							uri: BASE_URL + account?.photoUrl,
						}}
						style={{ height: 40, width: 40 }}
						className='rounded-full'
					/>
				) : (
					<View className='w-10 h-10 rounded-full bg-backgroundInput flex items-center justify-center'>
						<Text className='text-white uppercase'>{account?.fullname[0]}</Text>
					</View>
				)}
			</View>
		</View>
	)
}
