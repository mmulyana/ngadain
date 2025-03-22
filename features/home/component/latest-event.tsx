import { Text, View } from 'react-native'
import { Link } from 'expo-router'

import Categories from '@/shared/component/categories'
import CardEvent from './card-event'
import { useItems } from '@/features/event/hook/use-items'

export default function LatestEvent() {
	const { data } = useItems()

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
				{data?.data?.map((item) => (
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
						variant='lg'
					/>
				))}
			</View>
		</View>
	)
}
