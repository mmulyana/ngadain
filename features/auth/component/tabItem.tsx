import { Pressable, Text, View } from 'react-native'

type Props = {
	title: String
	active: boolean
	onPress?: () => void
}
export default function TabItem({ title, active, onPress }: Props) {
	return (
		<Pressable
			onPress={onPress}
			className={[
				'flex-1 border-b-2 pb-4',
				active ? 'border-primary' : 'border-white',
			].join(' ')}
		>
			<Text
				className={[
					'text-lg text-center',
					active ? 'text-primary' : 'text-white',
				].join(' ')}
			>
				{title}
			</Text>
		</Pressable>
	)
}
