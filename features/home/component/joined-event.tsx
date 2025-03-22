import { FlatList, Text, View } from 'react-native'
import { Link } from 'expo-router'

import CardEvent from './card-event'
import { useJoinedEvent } from '@/features/event/hook/use-joined-event'
import { useAtomValue } from 'jotai'
import { accounAtom } from '@/shared/store/account'

export default function JoinedEvent() {
	const account = useAtomValue(accounAtom)

	const { data } = useJoinedEvent(account?.id)
	console.log('__JOINED__', data)
	return (
		<View>
			<View className='flex-row justify-between items-center w-full mb-6 px-6'>
				<Text className='text-base text-white'>Event yang saya ikuti</Text>
				<Link href='/' className='text-primary'>
					Lihat semua
				</Link>
			</View>
			<FlatList
				horizontal
				data={data?.data}
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
