import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Color } from '../constants/Color'

export default function SafeAreaContainer({
	children,
}: React.PropsWithChildren) {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>{children}</View>
			<StatusBar backgroundColor={Color.background} />
		</SafeAreaView>
	)
}
