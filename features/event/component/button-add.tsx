import { Color } from '@/shared/constants/Color'
import Feather from '@expo/vector-icons/Feather'
import { Text, View } from 'react-native'

export default function ButtonAdd() {
	return (
		<View className='absolute w-full flex-row justify-center bottom-4 left-0'>
			<View className='bg-dark rounded-full py-3 px-3 flex-row items-center gap-1'>
				<Feather name='plus' size={16} color={Color.Primary} />
				<View className='px-1'>
					<Text className='text-primary shadow-lg'>Tambah Event</Text>
				</View>
			</View>
		</View>
	)
}
