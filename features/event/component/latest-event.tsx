import CardEvent from '@/features/home/component/card-event'
import { Text, View } from 'react-native'
import { useItems } from '../hook/use-items'

export default function LatestEvent() {
	const { data } = useItems()

	return (
		<View className='gap-6'>
			<View className='flex-row justify-between items-center w-full px-6'>
				<Text className='text-base text-white'>Event Terbaru</Text>
			</View>
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
