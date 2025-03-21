import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Alert } from 'react-native'

import { Keys } from '@/shared/constants/Keys'
import { api } from '@/shared/lib/api'

type Payload = {
	username?: string
	email?: string
	password: string
}
export const useLogin = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (payload: Payload): Promise<any> => {
			return await api.post('/auth/login', payload)
		},
		onSuccess: async (data) => {
			if (data.token) {
				await AsyncStorage.setItem('token', data.token)
			}
			queryClient.invalidateQueries({ queryKey: [Keys.Profile] })
			Alert.alert('Welcome back')
		},
		onError: (err) => {
			Alert.alert(err.message)
		},
	})
}
