import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { LoginSchema, LoginType } from '../validation'
import { Alert, Image, Pressable, Text, View } from 'react-native'
import { useState } from 'react'
import { TextInput } from 'react-native'
import { Link } from 'expo-router'

export default function FormLogin() {
	const [step, setStep] = useState(0)
	const [mode, setMode] = useState<'email' | 'username'>('email')
	const [eyeOpen, setEyeOpen] = useState(true)

	const form = useForm<LoginType>({
		resolver: zodResolver(LoginSchema),
	})

	const onSubmit = (data: LoginType) => {}

	let formSwith: Record<number, React.ReactNode> = {
		0:
			mode == 'email' ? (
				<View className='flex-col'>
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
										'py-4 px-4 bg-backgroundInput rounded-lg border placeholder:text-white/50 valid:text-white',
										error?.message?.trim().length
											? 'border-red-500'
											: 'border-backgroundInput',
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
					<Pressable
						onPress={() => {
							setMode('username')
							form.clearErrors('username')
							form.reset({
								email: '',
								username: '',
							})
						}}
						className='justify-end flex-row text-left mt-4'
					>
						<Text className='text-primary'>Masuk dengan username</Text>
					</Pressable>
				</View>
			) : (
				<View className='flex-col'>
					<Controller
						control={form.control}
						name='username'
						render={({
							field: { onChange, onBlur, value },
							fieldState: { error },
						}) => (
							<View className='relative'>
								<TextInput
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									placeholder='Username'
									className={[
										'py-4 px-4 bg-backgroundInput rounded-lg border placeholder:text-white/50 valid:text-white',
										error?.message?.trim().length
											? 'border-red-500'
											: 'border-backgroundInput',
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
					<Pressable
						onPress={() => {
							setMode('email')
							form.clearErrors('email')
							form.reset({
								email: '',
								username: '',
							})
						}}
						className='justify-end flex-row text-left mt-4'
					>
						<Text className='text-primary'>Masuk dengan email</Text>
					</Pressable>
				</View>
			),
		1: (
			<Controller
				control={form.control}
				name='password'
				render={({
					field: { onChange, onBlur, value },
					fieldState: { error },
				}) => (
					<View className='relative'>
						<TextInput
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder='Password'
							secureTextEntry={eyeOpen}
							className={[
								'py-4 px-4 bg-backgroundInput rounded-lg border placeholder:text-white/50 valid:text-white',
								error?.message?.trim().length
									? 'border-red-500'
									: 'border-backgroundInput',
							].join(' ')}
						/>
						<Pressable
							className='absolute top-3 right-3'
							onPress={() => setEyeOpen(!eyeOpen)}
						>
							{eyeOpen ? (
								<Image
									source={require('@/assets/images/eye.png')}
									className='h-8 w-8'
								/>
							) : (
								<Image
									source={require('@/assets/images/eye-off.png')}
									className='h-8 w-8'
								/>
							)}
						</Pressable>
						{error && (
							<Text className='text-red-500 absolute -bottom-6'>
								{error.message}
							</Text>
						)}
					</View>
				)}
			/>
		),
	}

	return (
		<View className='flex-1 gap-4 mt-10'>
			<Text className='text-lg text-white mt-2'>Masuk</Text>
			{formSwith[step]}
			<Pressable
				onPress={async () => {
					if (!step) {
						const isValid = await form.trigger(mode)
						if (isValid) {
							form.clearErrors()
							setStep((prev) => prev + 1)
						}
						return
					}
					Alert.alert(
						`${form.getValues('email') || 'email'}-${
							form.getValues('username') || 'username'
						}-${form.getValues('password')}`
					)
				}}
				className='rounded-full bg-primary py-4 mt-6'
			>
				<Text className='text-dark text-center font-medium'>
					{step ? 'Masuk' : 'Selanjutnya'}
				</Text>
			</Pressable>
			<View className='flex gap-1 items-center justify-center flex-row'>
				<Text className='text-white opacity-50'>Belum punya akun? </Text>
				<Link href='/register' className='text-primary'>
					Daftar
				</Link>
			</View>
		</View>
	)
}
