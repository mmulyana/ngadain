import { Text, View } from 'react-native'
import { Link } from 'expo-router'

import Categories from '@/shared/component/categories'
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
			<View className='gap-2 px-6'>
				{events.map((item) => (
					<CardEvent key={item.id} {...item} />
				))}
			</View>
		</View>
	)
}
