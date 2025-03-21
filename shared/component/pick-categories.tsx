import { Pressable, Text, View } from 'react-native'

const options = ['Teknologi', 'Olahraga', 'Budaya', 'Musik']

export default function PickCategories({
	value,
	setValue,
}: {
	value: string
	setValue: (val: string) => void
}) {
	return (
		<View>
			<Text className='text-white'>Kategori</Text>
			<View className='flex-row gap-4 flex-wrap mt-4'>
				{options.map((item, index) => (
					<Pressable
						key={index + item}
						className={[
							'px-4 py-2 rounded-full border',
							value === item
								? 'border-backgroundInput bg-backgroundInput'
								: 'border-border',
						].join(' ')}
                        onPress={() => setValue(item)}
					>
						<Text className={value === item ? 'text-primary' : 'text-white/50'}>
							{item}
						</Text>
					</Pressable>
				))}
			</View>
		</View>
	)
}
