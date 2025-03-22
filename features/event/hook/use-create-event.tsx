import { useMutation, useQueryClient } from '@tanstack/react-query'
import { showErrorToast, showSuccessToast } from '@/shared/utils/toast'
import { Keys } from '@/shared/constants/Keys'
import { api } from '@/shared/lib/api'

type Payload = {
	userId: string
	name: string
	description: string
	date: string
	address: string
	category: string
	isOnline?: boolean
	mapUrl?: string
	linkUrl?: string
}

export const useCreateEvent = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (payload: any): Promise<any> => {
			return await api.post('/event', payload, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				isMultipart: true,
			})
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: [Keys.Events] })
			showSuccessToast(data.message)
		},
		onError: (err) => {
			showErrorToast(err.message)
		},
	})
}
