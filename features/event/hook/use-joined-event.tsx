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
	documentations: {
		date: string
		description: string
		eventId: string
		id: string
		photoUrl: string
	}[]
}
export const useJoinedEvent = (id?: string) => {
	return useQuery({
		queryKey: [Keys.MyParticipant, id],
		queryFn: async (): Promise<{ data: Event[] }> => {
			return await api.get(`/event/joined/${id}`)
		},
		enabled: id !== null && id !== undefined && id !== '',
	})
}
