import { useMutation, useQueryClient } from '@tanstack/react-query'
import { showErrorToast, showSuccessToast } from '@/shared/utils/toast'
import { Keys } from '@/shared/constants/Keys'
import { api } from '@/shared/lib/api'
import { useAtomValue } from 'jotai'
import { accounAtom } from '@/shared/store/account'

export const useRegisterEvent = (id?: string) => {
	const queryClient = useQueryClient()
	const account = useAtomValue(accounAtom)
	return useMutation({
		mutationFn: async (payload: any): Promise<any> => {
			return await api.post('/event/register', payload)
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: [Keys.MyParticipant, account?.id, id],
			})
			showSuccessToast(data.message)
		},
		onError: (err) => {
			showErrorToast(err.message)
		},
	})
}
