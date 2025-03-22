import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { showErrorToast, showSuccessToast } from '@/shared/utils/toast'
import { Keys } from '@/shared/constants/Keys'
import { api } from '@/shared/lib/api'
import { accounAtom } from '@/shared/store/account'
import { useSetAtom } from 'jotai'
import { StorageKeys } from '@/shared/constants/StorageKeys'

type Payload = {
	fullname?: string
	email?: string
	password: string
	role: string
}
export const useRegister = () => {
	const setAccount = useSetAtom(accounAtom)
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (payload: Payload): Promise<any> => {
			return await api.post('/auth/register', payload)
		},
		onSuccess: async (data) => {
			setAccount(data.data.user)
			showSuccessToast(data.message)
			if (data.data.token) {
				await AsyncStorage.setItem(StorageKeys.Token, data.data.token)
			}
			queryClient.invalidateQueries({ queryKey: [Keys.Profile] })
		},
		onError: (err) => {
			showErrorToast(err.message)
		},
	})
}
