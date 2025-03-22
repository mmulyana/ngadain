import Header from '@/shared/component/header'
import SafeAreaContainer from '@/shared/component/safe-area-container'
import { Color } from '@/shared/constants/Color'
import { ScrollView, View } from 'react-native'

export default function MyEvent() {
	return (
		<SafeAreaContainer>
			<View style={{ flex: 1, backgroundColor: Color.Background }}>
				<ScrollView contentContainerStyle={{ paddingBottom: 20, gap: 16 }}>
					<Header />
				</ScrollView>
			</View>
		</SafeAreaContainer>
	)
}
