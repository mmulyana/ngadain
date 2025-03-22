import { Pressable, Text, TextInput, View } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import Feather from '@expo/vector-icons/Feather'
import { useRouter } from 'expo-router'
import { useAtomValue } from 'jotai'
import { useEffect } from 'react'

import SafeAreaContainer from '@/shared/component/safe-area-container'
import { accounAtom } from '@/shared/store/account'

export default function NewDocumentation() {
	const router = useRouter()
	const account = useAtomValue(accounAtom)

	const form = useForm()

	useEffect(() => {
		if (!account) return

		form.reset({
			email: account.email,
			fullname: account.fullname,
		})

		return () => form.reset()
	}, [account])

	return (
		<SafeAreaContainer>
			<View className='flex-1 bg-background px-6 pt-4 pb-10'>
				<View className='relative flex-row justify-center items-center'>
					<Pressable
						onPress={() => router.back()}
						className='absolute top-1.5 left-0'
					>
						<Feather name='x' size={16} color='#fff' />
					</Pressable>
					<Text className='text-white text-center text-xl'>Daftar event</Text>
				</View>
				<View className='mt-6 gap-6'>
					<Controller
						control={form.control}
						name='fullname'
						render={({
							field: { onChange, onBlur, value },
							fieldState: { error },
						}) => (
							<View className='relative'>
								<TextInput
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									placeholder='Nama'
									autoFocus
									className={[
										'py-4 px-4 bg-backgroundInput rounded-lg border placeholder:text-white/50 valid:text-white',
										error ? 'border-red-500' : 'border-backgroundInput',
									].join(' ')}
								/>
								{error && (
									<Text className='text-red-500 absolute -bottom-6'>
										{error.message}
									</Text>
								)}
							</View>
						)}
					/>

					<Controller
						control={form.control}
						name='email'
						render={({
							field: { onChange, onBlur, value },
							fieldState: { error },
						}) => (
							<View className='relative'>
								<TextInput
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									placeholder='Email'
									className={[
										'py-4 px-4 h-20 bg-backgroundInput rounded-lg border placeholder:text-white/50 valid:text-white',
										error ? 'border-red-500' : 'border-backgroundInput',
									].join(' ')}
								/>
								{error && (
									<Text className='text-red-500 absolute -bottom-6'>
										{error.message}
									</Text>
								)}
							</View>
						)}
					/>

					<Pressable className='mt-4 rounded-full py-4 w-full flex text-center justify-center items-center bg-primary'>
						<Text className='text-dark text-lg font-medium'>Daftar</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaContainer>
	)
}
