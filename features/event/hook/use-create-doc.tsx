import { Keys } from '@/shared/constants/Keys'
import { api } from '@/shared/lib/api'
import { showErrorToast, showSuccessToast } from '@/shared/utils/toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateDoc = (id?: string) => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (payload: any): Promise<any> => {
			return await api.post('/doc', payload, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				isMultipart: true,
			})
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: [Keys.Event, id] })
			showSuccessToast(data.message)
		},
		onError: (err) => {
			showErrorToast(err.message)
		},
	})
}
