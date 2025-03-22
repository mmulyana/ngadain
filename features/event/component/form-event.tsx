import { Pressable, Switch, Text, TextInput, View } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'

import PickCategories from '@/shared/component/pick-categories'
import ImageUploader from '@/shared/component/image-uploader'
import DatePickerInput from '@/shared/component/date-picker'
import { useCreateEvent } from '../hook/use-create-event'
import { useAtomValue } from 'jotai'
import { accounAtom } from '@/shared/store/account'
import { showErrorToast } from '@/shared/utils/toast'
import { useRouter } from 'expo-router'

export default function FormEvent() {
	const router = useRouter()

	const account = useAtomValue(accounAtom)
	const [isOnline, setIsOnline] = useState(false)
	const [category, setCategory] = useState('')

	const { mutate } = useCreateEvent()
	const form = useForm({
		defaultValues: {
			name: '',
			description: '',
			date: '',
			linkUrl: '',
			mapUrl: '',
			address: '',
		},
	})

	const submit = () => {
		if (!account?.id) {
			showErrorToast('Harus login dulu')
			return
		}

		const data = form.getValues() as any

		const formData = new FormData()
		formData.append('userId', account.id)
		formData.append('name', data.name)
		formData.append('description', data.description)
		formData.append('date', data.date)
		formData.append('category', category)
		formData.append('isOnline', isOnline.toString())

		if (isOnline) {
			formData.append('linkUrl', data.linkUrl)
		} else {
			formData.append('address', data.address)
			formData.append('mapUrl', data.mapUrl)
		}

		if (data.image) {
			const imageUri = data.image.uri || data.image
			const fileType = imageUri.split('.').pop()
			formData.append('image', {
				uri: imageUri,
				name: `photo.${fileType}`,
				type: `image/${fileType}`,
			} as any)
		}

		mutate(formData, {
			onSuccess: () => {
				router.back()
				form.reset()
			},
		})
	}

	return (
		<View className='gap-6 mt-4'>
			<View className='gap-4'>
				<Text className='text-white/50'>Info Dasar</Text>

				<Controller
					control={form.control}
					name='name'
					render={({
						field: { onChange, onBlur, value },
						fieldState: { error },
					}) => (
						<View className='relative'>
							<TextInput
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
								placeholder='Nama Event'
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
					name='description'
					render={({
						field: { onChange, onBlur, value },
						fieldState: { error },
					}) => (
						<View className='relative'>
							<TextInput
								multiline
								numberOfLines={4}
								onBlur={onBlur}
								style={{ textAlignVertical: 'top' }}
								onChangeText={onChange}
								value={value}
								placeholder='Deskripsi'
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

				<ImageUploader control={form.control} />
			</View>
			<View className='gap-4'>
				<Text className='text-white/50'>Tempat dan tanggal</Text>

				<View className='flex-row items-center gap-2'>
					<Switch value={isOnline} onValueChange={setIsOnline} />
					<Text className='text-white'>Online</Text>
				</View>
				{isOnline ? (
					<>
						<Controller
							control={form.control}
							name='linkUrl'
							render={({
								field: { onChange, onBlur, value },
								fieldState: { error },
							}) => (
								<View className='relative'>
									<TextInput
										onBlur={onBlur}
										onChangeText={onChange}
										value={value}
										placeholder='Link'
										className={[
											'py-4 px-4 bg-backgroundInput rounded-lg border placeholder:text-white/50 valid:text-white',
											error ? 'border-red-500' : 'border-backgroundInput',
										].join(' ')}
									/>
								</View>
							)}
						/>
					</>
				) : (
					<>
						<Controller
							control={form.control}
							name='address'
							render={({
								field: { onChange, onBlur, value },
								fieldState: { error },
							}) => (
								<View className='relative'>
									<TextInput
										multiline
										numberOfLines={4}
										onBlur={onBlur}
										style={{ textAlignVertical: 'top' }}
										onChangeText={onChange}
										value={value}
										placeholder='Alamat'
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
						<Controller
							control={form.control}
							name='mapUrl'
							render={({
								field: { onChange, onBlur, value },
								fieldState: { error },
							}) => (
								<View className='relative'>
									<TextInput
										onBlur={onBlur}
										onChangeText={onChange}
										value={value}
										placeholder='Link google maps'
										className={[
											'py-4 px-4 bg-backgroundInput rounded-lg border placeholder:text-white/50 valid:text-white',
											error ? 'border-red-500' : 'border-backgroundInput',
										].join(' ')}
									/>
								</View>
							)}
						/>
					</>
				)}
				<DatePickerInput control={form.control} />
			</View>
			<PickCategories value={category} setValue={setCategory} />
			<Pressable
				onPress={submit}
				className='mt-4 rounded-full py-4 w-full flex text-center justify-center items-center bg-primary '
			>
				<Text className='font-medium'>Simpan</Text>
			</Pressable>
		</View>
	)
}
