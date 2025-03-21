import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function LatestEvent() {
	return (
		<View>
			<View className='flex-row justify-between items-center w-full mb-6'>
				<Text className='text-base text-white'>
					Cari event lainnya
				</Text>
				<Link href='/event' className='text-primary'>
					Lihat semua
				</Link>
			</View>
		</View>
	)
}
