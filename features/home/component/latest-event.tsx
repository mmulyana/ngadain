import Categories from '@/shared/component/categories'
import { Link } from 'expo-router'
import { FlatList, ScrollView, Text, View } from 'react-native'
import CardEvent from './card-event'

export default function LatestEvent() {
	const events = [
		{
			id: '1',
			name: 'JogjaJS Meetup Feb 2023 1222222',
			photoUrl: '',
			date: '2025-04-01',
			category: 'Technology',
			username: 'John Doe',
			userPhotoUrl: '',
			variant: 'lg',
			address: 'Jln baru bukan lama',
		},
		{
			id: '2',
			name: 'Art Exhibition',
			photoUrl: '',
			date: '2025-04-05',
			category: 'Art',
			username: 'Bambang',
			userPhotoUrl: '',
			variant: 'lg',
			address: 'Jln baru bukan lama',
		},
		{
			id: '3',
			name: 'Art Exhibition',
			photoUrl: '',
			date: '2025-04-05',
			category: 'Art',
			username: 'Jane Smith',
			userPhotoUrl: '',
			variant: 'lg',
			address: 'Jln baru bukan lama',
		},
		{
			id: '4',
			name: 'Art Exhibition',
			photoUrl: '',
			date: '2025-04-05',
			category: 'Art',
			username: 'Jane Smith',
			userPhotoUrl: '',
			variant: 'lg',
			address: 'Jln baru bukan lama',
		},
	]
	return (
		<View className='gap-6'>
			<View className='flex-row justify-between items-center w-full px-6'>
				<Text className='text-base text-white'>Cari event lainnya</Text>
				<Link href='/event' className='text-primary'>
					Lihat semua
				</Link>
			</View>
			<Categories />
			<FlatList
				data={events}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <CardEvent {...item} />}
				contentContainerStyle={{
					gap: 12,
					paddingHorizontal: 24,
					paddingBottom: 80,
				}}
				style={{ maxHeight: 500 }}
			/>
		</View>
	)
}
