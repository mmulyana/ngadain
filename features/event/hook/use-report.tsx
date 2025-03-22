import { useQuery } from '@tanstack/react-query'
import { Keys } from '@/shared/constants/Keys'
import { api } from '@/shared/lib/api'

type Response = {
    total: {
		present: number
		notPresent: number
		satisfied: number
		notSatisfied: number
	}
	participants: {
		feedbacks: {
			user: {
				fullname: string
			}
			message: string
			rating: number
		}[]
		presence: {
			fullname: string
			isPresence: boolean
		}[]
	}
}
export const useReport = (id?: string) => {
	return useQuery({
		queryKey: [Keys.EventFeedback, id],
		queryFn: async (): Promise<{ data: Response }> => {
			return await api.get(`/event/${id}/report`, {
				auth: true,
			})
		},
		enabled: id !== null && id !== undefined && id !== '',
	})
}
