import { Text, TouchableOpacity, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

import { Color } from '@/shared/constants/Color'

type Props = {
	onPress: () => void
}
export default function ButtonAddDoc({ onPress }: Props) {
	return (
		<TouchableOpacity
			style={{
				position: 'absolute',
				bottom: 20,
				left: 0,
				right: 0,
				alignItems: 'center',
			}}
			activeOpacity={0.8}
			onPress={onPress}
		>
			<View
				style={{
					backgroundColor: Color.BackgroundInput,
					borderRadius: 30,
					flexDirection: 'row',
					alignItems: 'center',
					paddingVertical: 12,
					paddingHorizontal: 16,
				}}
			>
				<Feather name='plus' size={16} color={Color.Primary} />
				<Text style={{ color: Color.Primary, marginLeft: 8 }}>
					Tambah Dokumentasi
				</Text>
			</View>
		</TouchableOpacity>
	)
}
