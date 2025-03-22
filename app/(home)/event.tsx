import { ScrollView, View } from 'react-native'
import { useRouter } from 'expo-router'
import { useAtomValue } from 'jotai'

import SafeAreaContainer from '@/shared/component/safe-area-container'
import Categories from '@/shared/component/categories'
import Header from '@/shared/component/header'
import { accounAtom } from '@/shared/store/account'
import { Color } from '@/shared/constants/Color'

import LatestEvent from '@/features/event/component/latest-event'
import ButtonAdd from '@/features/event/component/button-add'
import MyEvent from '@/features/event/component/my-event'

export default function Event() {
	const router = useRouter()
	const account = useAtomValue(accounAtom)

	return (
		<SafeAreaContainer>
			<View style={{ flex: 1, backgroundColor: Color.Background }}>
				<ScrollView contentContainerStyle={{ paddingBottom: 20, gap: 16 }}>
					<Header />
					<Categories />
					{account?.role === 'organizer' && <MyEvent />}
					<LatestEvent />
				</ScrollView>
				{account?.role === 'organizer' && (
					<ButtonAdd onPress={() => router.push('/new-event')} />
				)}
			</View>
		</SafeAreaContainer>
	)
}
