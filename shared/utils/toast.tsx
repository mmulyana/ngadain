import { TouchableOpacity } from 'react-native'
import { ToastService } from 'react-native-toastier'
import Feather from '@expo/vector-icons/Feather'

export const showSuccessToast = (message: string) => {
	ToastService.show({
		message,
		contentContainerStyle: { backgroundColor: '#12B76A' },
		titleStyle: { color: '#FFF', fontSize: 20 },
		right: (
			<TouchableOpacity onPress={() => ToastService.clear()}>
				<Feather name='x' size={20} color='#B6EBC5' />
			</TouchableOpacity>
		),
	})
}

export const showErrorToast = (message: string) => {
	ToastService.showError({
		message,
		contentContainerStyle: { backgroundColor: '#EF4437' },
		titleStyle: { color: '#FFF', fontSize: 20 },
		right: (
			<TouchableOpacity onPress={() => ToastService.clear()}>
				<Feather name='x' size={20} color='#EFB6C2' />
			</TouchableOpacity>
		),
	})
}
