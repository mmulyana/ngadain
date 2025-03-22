import { Keys } from '@/shared/constants/Keys'
import { api } from '@/shared/lib/api'
import { useQuery } from '@tanstack/react-query'

export type Event = {
	address: string
	category: string
	date: string
	description: string
	id: string
	isOnline: boolean
	linkUrl: null | string
	mapUrl: null | string
	name: string
	photoUrl: null | string
	userId: string
	_count: {
		participants?: number
	}
	user: {
		id: string
		username: string
		photoUrl: string
	}
}
export const useItems = (userId?: string) => {
	const params = {
		...(userId && { userId }),
	}
	return useQuery({
		queryKey: [Keys.Events, userId],
		queryFn: async (): Promise<{ data: Event[] }> => {
			return await api.get('/event', {
				params,
			})
		},
	})
}
