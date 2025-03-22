import { Keys } from '@/shared/constants/Keys'
import { api } from '@/shared/lib/api'
import { accounAtom } from '@/shared/store/account'
import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'

export type Event = {
	status: 'not_register' | 'registered' | 'done'
}
export const useCheckParticipant = (id?: string) => {
	const account = useAtomValue(accounAtom)
	return useQuery({
		queryKey: [Keys.MyParticipant, account?.id, id],
		queryFn: async (): Promise<{ data: Event }> => {
			return await api.get(`/event/${id}/check`, {
				params: {
					userId: account?.id || '',
				},
			})
		},
		enabled:
			id !== null &&
			id !== undefined &&
			id !== '' &&
			account?.id !== null &&
			account?.id !== undefined &&
			account?.id !== '',
	})
}
