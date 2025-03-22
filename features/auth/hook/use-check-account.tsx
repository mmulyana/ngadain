import { StorageKeys } from '@/shared/constants/StorageKeys'
import { api } from '@/shared/lib/api'
import { accounAtom } from '@/shared/store/account'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

export default function useCheckAccount() {
	const setAccount = useSetAtom(accounAtom)
	const router = useRouter()

	useEffect(() => {
		async function checkAccount() {
			const res: any = await api.get('/account/me', {
				auth: true,
			})
			if (res.data.user.id) {
				setAccount(res.data.user)
				router.push('/home')
			}
		}

		checkAccount()
	}, [])
}
