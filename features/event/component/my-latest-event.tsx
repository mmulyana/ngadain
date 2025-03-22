import { useAtomValue } from 'jotai'
import { useItems } from '../hook/use-items'
import { accounAtom } from '@/shared/store/account'
import { Text, View } from 'react-native'
import CardEvent from '@/features/home/component/card-event'

export default function MyLatestEvent() {
	const account = useAtomValue(accounAtom)
	const { data } = useItems(account?.id)

	return (
		<View className='gap-6'>
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
