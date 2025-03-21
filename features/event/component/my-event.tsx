import CardEvent from '@/features/home/component/card-event'
import { Link } from 'expo-router'
import { FlatList, Text, View } from 'react-native'

export default function MyEvent() {
	const events = [
		{
			id: '1',
			name: 'Tech Meetup',
			photoUrl: '',
			date: '2025-04-01',
			category: 'Technology',
			username: 'John Doe',
			userPhotoUrl: '',
			variant: 'sm',
			showEdit: true,
		},
		{
			id: '2',
			name: 'Art Exhibition',
			photoUrl: '',
			date: '2025-04-05',
			category: 'Art',
			username: 'Jane Smith',
			userPhotoUrl: '',
			variant: 'sm',
			showEdit: true,
		},
	]
	return (
		<View>
			<View className='flex-row justify-between items-center w-full mb-6 px-6'>
				<Text className='text-base text-white'>Event saya</Text>
				<Link href='/' className='text-primary'>
					Lihat semua
				</Link>
			</View>
			<FlatList
				horizontal
				data={events}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <CardEvent {...item} />}
				contentContainerStyle={{ gap: 16, paddingHorizontal: 24 }}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}
