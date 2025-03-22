import MyLatestEvent from '@/features/event/component/my-latest-event'
import Header from '@/shared/component/header'
import SafeAreaContainer from '@/shared/component/safe-area-container'
import { Color } from '@/shared/constants/Color'
import { Link } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

export default function MyEvent() {
	return (
		<SafeAreaContainer>
			<View style={{ flex: 1, backgroundColor: Color.Background }}>
				<ScrollView contentContainerStyle={{ paddingBottom: 20, gap: 16 }}>
					<Header />
					<View className='flex-row justify-between items-center w-full px-6'>
						<Text className='text-base text-white'>Event saya</Text>
						<Link href='/event' className='text-primary'>
							Lihat laporan
						</Link>
					</View>
					<MyLatestEvent />
				</ScrollView>
			</View>
		</SafeAreaContainer>
	)
}
