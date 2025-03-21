import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import { useState } from 'react'

import { RegisterSchema, RegisterType } from '../validation'
import TabItem from './tabItem'
import { Link } from 'expo-router'

export default function FormRegister() {
	const [tab, setTab] = useState<'participant' | 'organizer'>('participant')
	const [password, setPassword] = useState(true)
	const [confirmPassword, setConfirmPassword] = useState(true)

	const form = useForm<RegisterType>({
		resolver: zodResolver(RegisterSchema),
	})

	return (
		<View className='flex-1 gap-4 mt-10'>
			<View className='flex-2 flex-row'>
				<TabItem
					title='Peserta'
					active={tab === 'participant'}
					onPress={() => setTab('participant')}
				/>
				<TabItem
					title='Penyelenggara'
					active={tab === 'organizer'}
					onPress={() => setTab('organizer')}
				/>
			</View>
			<Text className='text-xl text-white mt-2'>
				Daftar sebagai {tab === 'organizer' ? 'Penyelenggara' : 'Peserta'}
			</Text>
			<View className='flex-col gap-6 mt-4'>
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
				</View>

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
				</View>

				<View className='flex-col'>
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
									secureTextEntry={password}
									className={[
										'py-4 px-4 bg-backgroundInput rounded-lg border placeholder:text-white/50 valid:text-white',
										error?.message?.trim().length
											? 'border-red-500'
											: 'border-backgroundInput',
									].join(' ')}
								/>
								<Pressable
									className='absolute top-3 right-3'
									onPress={() => setPassword(!password)}
								>
									{password ? (
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
				</View>

				<View className='flex-col'>
					<Controller
						control={form.control}
						name='confirmPassword'
						render={({
							field: { onChange, onBlur, value },
							fieldState: { error },
						}) => (
							<View className='relative'>
								<TextInput
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									placeholder='Konfirmasi Email'
									secureTextEntry={confirmPassword}
									className={[
										'py-4 px-4 bg-backgroundInput rounded-lg border placeholder:text-white/50 valid:text-white',
										error?.message?.trim().length
											? 'border-red-500'
											: 'border-backgroundInput',
									].join(' ')}
								/>
								<Pressable
									className='absolute top-3 right-3'
									onPress={() => setPassword(!password)}
								>
									{password ? (
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
				</View>

				<Pressable
					onPress={() => {}}
					className='rounded-full bg-primary py-4 mt-6'
				>
					<Text className='text-dark text-center font-medium'>Daftar</Text>
				</Pressable>
				<View className='flex gap-1 items-center justify-center flex-row'>
					<Text className='text-white opacity-50'>Sudah punya akun? </Text>
					<Link href='/login' className='text-primary'>
						Masuk
					</Link>
				</View>
			</View>
		</View>
	)
}
