import SafeAreaContainer from '@/shared/component/safe-area-container'
import Feather from '@expo/vector-icons/Feather'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Pressable, Text, TextInput, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { Color } from '@/shared/constants/Color'
import { useAtomValue } from 'jotai'
import { accounAtom } from '@/shared/store/account'
import { useCreateFeeback } from '@/features/event/hook/use-create-feedback'
import { showErrorToast } from '@/shared/utils/toast'

export default function FeedBack() {
	const router = useRouter()
	const { id } = useLocalSearchParams()
	const [feeling, setFeeling] = useState(0)
	const account = useAtomValue(accounAtom)
	const { mutate } = useCreateFeeback()
	const form = useForm()

	const submit = () => {
		if (!feeling) {
			return showErrorToast('Pilih rating dahulu')
		}
		const data = form.getValues()

		mutate(
			{
				userId: account?.id,
				eventId: id,
				rating: feeling,
				message: data.message,
			},
			{
				onSuccess: () => {
					router.replace(`/event/${id}`)
				},
			}
		)
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
						Berikan Feedback
					</Text>
				</View>

				<View className='flex-row justify-between gap-4 mt-6'>
					<Pressable
						onPress={() => setFeeling(1)}
						className={[
							'border-border border gap-2 py-4 px-6 justify-center items-center rounded-lg flex-1',
							feeling === 1 && 'border-primary',
						].join(' ')}
					>
						<FontAwesome6
							name='smile'
							size={20}
							color={feeling === 1 ? Color.Primary : '#fff'}
							opacity={0.5}
						/>
						<Text
							className={[
								'text-lg',
								feeling === 1 ? 'text-primary' : 'text-white',
							].join(' ')}
						>
							Merasa Puas
						</Text>
					</Pressable>
					<Pressable
						onPress={() => setFeeling(2)}
						className={[
							'border-border border gap-2 py-4 px-6 justify-center items-center rounded-lg flex-1',
							feeling === 2 && 'border-primary',
						].join(' ')}
					>
						<FontAwesome6
							name='angry'
							size={20}
							color={feeling === 2 ? Color.Primary : '#fff'}
							opacity={0.5}
						/>
						<Text
							className={[
								'text-lg',
								feeling === 2 ? 'text-primary' : 'text-white',
							].join(' ')}
						>
							Tidak Puas
						</Text>
					</Pressable>
				</View>

				<View className='gap-6 mt-6'>
					<Controller
						control={form.control}
						name='message'
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
									placeholder='Berikan pesan/masukan'
									autoFocus
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
