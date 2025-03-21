import { Image } from 'react-native'

export default function Logo() {
	return (
		<Image source={require('@/assets/images/logo.png')} className='w-9 h-9' />
	)
}
