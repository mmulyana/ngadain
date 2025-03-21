import { LinearGradient } from 'expo-linear-gradient'
import { useLocalSearchParams } from 'expo-router'
import { Image, View } from 'react-native'

import SafeAreaContainer from '@/shared/component/safe-area-container'

export default function DetailEvent() {
	const { id } = useLocalSearchParams()

	return (
		<SafeAreaContainer>
			<View className='flex-1 bg-background'>
				<View className='relative'>
					<Image
						source={require('@/assets/images/dummy.png')}
						className='w-full'
						style={{ height: 280 }}
					/>
					<LinearGradient
						colors={['rgba(33,33,35,0.8)', 'rgba(33,33,35,0.04)']}
						start={{ x: 0, y: 1 }}
						end={{ x: 0, y: 0 }}
						className='absolute bottom-0 left-0 right-0'
						style={{ height: 280 }}
					/>
				</View>
			</View>
		</SafeAreaContainer>
	)
}
