import { atom } from 'jotai'

type User = {
	id: string
	username: string
	email: string
	role: string
	photoUrl: string | null
	fullname: string
}
export const accounAtom = atom<User | null>(null)
