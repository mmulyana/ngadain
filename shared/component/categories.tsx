import { FlatList, Pressable, Text, View } from 'react-native'
import { useState } from 'react'

export default function Categories() {
	const [active, setActive] = useState('')
	const data = [
		{
			id: '0',
			name: 'Teknologi',
		},
		{
			id: '1',
			name: 'Olah raga',
		},
		{
			id: '2',
			name: 'Budaya',
		},
		{
			id: '3',
			name: 'Musik',
		},
	]
	return (
		<View>
			<FlatList
				horizontal
				data={data}
				keyExtractor={(item) => item.id}
				contentContainerStyle={{ gap: 16, paddingHorizontal: 24 }}
				renderItem={({ item }) => (
					<Category
						name={item.name}
						onPress={() => setActive(item.name)}
						active={active === item.name}
					/>
				)}
			/>
		</View>
	)
}

type Props = {
	name: string
	active: boolean
	onPress: () => void
}
function Category({ name, active, onPress }: Props) {
	return (
		<Pressable
			onPress={onPress}
			className={[
				'py-2 px-4 border rounded-full',
				active ? 'border-dark bg-dark' : 'border-border',
			].join(' ')}
		>
			<Text className={active ? 'text-primary' : 'text-white/80'}>{name}</Text>
		</Pressable>
	)
}
