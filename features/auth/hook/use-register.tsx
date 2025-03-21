import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { showErrorToast, showSuccessToast } from '@/shared/utils/toast'
import { Keys } from '@/shared/constants/Keys'
import { api } from '@/shared/lib/api'

type Payload = {
	fullname?: string
	email?: string
	password: string
	role: string
}
export const useRegister = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (payload: Payload): Promise<any> => {
			return await api.post('/auth/register', payload)
		},
		onSuccess: async (data) => {
			showSuccessToast(data.message)
			if (data.token) {
				await AsyncStorage.setItem('token', data.token)
			}
			queryClient.invalidateQueries({ queryKey: [Keys.Profile] })
		},
		onError: (err) => {
			showErrorToast(err.message)
		},
	})
}
