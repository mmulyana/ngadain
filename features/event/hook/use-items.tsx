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
		participant?: number
	}
	user: {
		id: string
		username: string
		photoUrl: string
	}
}
export const useItems = () => {
	return useQuery({
		queryKey: [Keys.Events],
		queryFn: async (): Promise<{ data: Event[] }> => {
			return await api.get('/event', {
				auth: true,
			})
		},
	})
}
