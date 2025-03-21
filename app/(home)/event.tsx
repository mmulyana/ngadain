import { ScrollView, View } from 'react-native'

import SafeAreaContainer from '@/shared/component/safe-area-container'
import Categories from '@/shared/component/categories'
import Header from '@/shared/component/header'
import { Color } from '@/shared/constants/Color'

import LatestEvent from '@/features/event/component/latest-event'
import ButtonAdd from '@/features/event/component/button-add'
import MyEvent from '@/features/event/component/my-event'
import { useRouter } from 'expo-router'

export default function Event() {
	const router = useRouter()

	return (
		<SafeAreaContainer>
			<View style={{ flex: 1, backgroundColor: Color.Background }}>
				<ScrollView contentContainerStyle={{ paddingBottom: 20, gap: 16 }}>
					<Header />
					<Categories />
					<MyEvent />
					<LatestEvent />
				</ScrollView>
				<ButtonAdd onPress={() => router.push('/new-event')} />
			</View>
		</SafeAreaContainer>
	)
}
