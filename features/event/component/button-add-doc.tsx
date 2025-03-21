import { Text, TouchableOpacity, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { useRouter } from 'expo-router'

import { Color } from '@/shared/constants/Color'

type Props = {
	id: string
}
export default function ButtonAddDoc({ id }: Props) {
	const router = useRouter()
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
			onPress={() => router.push(`/event/${id}/new-documentation`)}
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
