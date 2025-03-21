import { Text, View } from 'react-native'

import Categories from '@/shared/component/categories'
import Header from '@/shared/component/header'

import SafeAreaContainer from '@/shared/component/safe-area-container'
import MyEvent from '@/features/event/component/my-event'
import LatestEvent from '@/features/event/component/latest-event'

export default function Event() {
	return (
		<SafeAreaContainer>
			<View className='flex-1 bg-background gap-6'>
				<Header />
				<Categories />
				<MyEvent />
				<LatestEvent />
			</View>
		</SafeAreaContainer>
	)
}
