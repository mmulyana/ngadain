import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { Keys } from '@/shared/constants/Keys'
import { api } from '@/shared/lib/api'
import { showErrorToast, showSuccessToast } from '@/shared/utils/toast'
import { useSetAtom } from 'jotai'
import { accounAtom } from '@/shared/store/account'
import { StorageKeys } from '@/shared/constants/StorageKeys'

type Payload = {
	username?: string
	email?: string
	password: string
}
export const useLogin = () => {
	const setAccount = useSetAtom(accounAtom)
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (payload: Payload): Promise<any> => {
			return await api.post('/auth/login', payload)
		},
		onSuccess: async (data) => {
			setAccount(data.data.user)
			if (data.data.token) {
				await AsyncStorage.setItem(StorageKeys.Token, data.data.token)
			}
			queryClient.invalidateQueries({ queryKey: [Keys.Profile] })
			showSuccessToast(data.message)
		},
		onError: (err) => {
			showErrorToast(err.message)
		},
	})
}
