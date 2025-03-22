import { FlatList, Text, View } from 'react-native'
import { Link } from 'expo-router'

import CardEvent from '@/features/home/component/card-event'
import { useItems } from '../hook/use-items'

export default function MyEvent() {
	const { data } = useItems()

	return (
		<View>
			<View className='flex-row justify-between items-center w-full mb-6 px-6'>
				<Text className='text-base text-white'>Event saya</Text>
				<Link href='/my-event' className='text-primary'>
					Lihat semua
				</Link>
			</View>
			<FlatList
				horizontal
				data={data?.data.slice(0, 4)}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<CardEvent
						key={item.id}
						_count={item._count}
						address={item.address}
						category={item.category}
						date={item.date}
						name={item.name}
						description={item.description}
						id={item.id}
						isOnline={item.isOnline}
						linkUrl={item.linkUrl}
						mapUrl={item.mapUrl}
						photoUrl={item.photoUrl}
						user={item.user}
						userId={item.userId}
						variant='sm'
					/>
				)}
				contentContainerStyle={{ gap: 16, paddingHorizontal: 24 }}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}
