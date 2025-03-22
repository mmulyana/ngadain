import { ScrollView, View } from 'react-native'

import SafeAreaContainer from '@/shared/component/safe-area-container'
import Header from '@/shared/component/header'

import JoinedEvent from '@/features/home/component/joined-event'
import LatestEvent from '@/features/home/component/latest-event'

export default function Home() {
	return (
		<SafeAreaContainer>
			<ScrollView className='bg-background'>
				<View className='flex-1 gap-6 flex-col pb-5'>
					<Header />
					<JoinedEvent />
					<LatestEvent />
				</View>
			</ScrollView>
		</SafeAreaContainer>
	)
}
