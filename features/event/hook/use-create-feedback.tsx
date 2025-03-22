import { useMutation, useQueryClient } from '@tanstack/react-query'
import { showErrorToast, showSuccessToast } from '@/shared/utils/toast'
import { Keys } from '@/shared/constants/Keys'
import { api } from '@/shared/lib/api'

export const useCreateFeeback = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (payload: any): Promise<any> => {
			return await api.post('/feedback', payload)
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: [Keys.EventFeedback],
			})
			showSuccessToast(data.message)
		},
		onError: (err) => {
			showErrorToast(err.message)
		},
	})
}
