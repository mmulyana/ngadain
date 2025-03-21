import { View } from 'react-native'

import SafeAreaContainer from '@/shared/component/safe-area-container'
import HomeHeader from '@/features/home/component/home-header'
import JoinedEvent from '@/features/home/component/joined-event'
import LatestEvent from '@/features/home/component/latest-event'

export default function Home() {
	return (
		<SafeAreaContainer>
			<View className='flex-1 bg-background gap-6 flex-col'>
				<HomeHeader />
				<JoinedEvent />
				<LatestEvent />
			</View>
		</SafeAreaContainer>
	)
}
