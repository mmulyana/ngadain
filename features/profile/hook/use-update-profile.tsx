import { useMutation, useQueryClient } from '@tanstack/react-query'
import { showErrorToast, showSuccessToast } from '@/shared/utils/toast'
import { Keys } from '@/shared/constants/Keys'
import { api } from '@/shared/lib/api'

export const useUpdateProfile = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (payload: any): Promise<any> => {
			return await api.patch('/account/update', payload, {
				auth: true,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				isMultipart: true,
			})
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: [Keys.Profile] })
			showSuccessToast(data.message)
		},
		onError: (err) => {
			showErrorToast(err.message)
		},
	})
}
