import { Pressable, Text, TextInput, View } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import Feather from '@expo/vector-icons/Feather'

import SafeAreaContainer from '@/shared/component/safe-area-container'
import { Controller, useForm } from 'react-hook-form'
import ImageUploader from '@/shared/component/image-uploader'
import { useCreateDoc } from '@/features/event/hook/use-create-doc'

export default function NewDocumentation() {
	const router = useRouter()
	const { id } = useLocalSearchParams()

	const { mutate } = useCreateDoc(id as string)
	const form = useForm()

	const submit = () => {
		const data = form.getValues() as any

		const formData = new FormData()
		formData.append('description', data.description)
		formData.append('eventId', id as string)
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
				form.reset()
				router.replace(`/event/${id}`)
			},
		})
	}
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
					<Text className='text-white text-center text-xl'>
						Tambah Dokumentasi
					</Text>
				</View>

				<View className='mt-6 gap-6'>
					<ImageUploader control={form.control} variant='lg' />
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
					<Pressable
						onPress={() => submit()}
						className='mt-4 rounded-full py-4 w-full flex text-center justify-center items-center bg-primary'
					>
						<Text className='text-dark text-lg font-medium'>Simpan</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaContainer>
	)
}
