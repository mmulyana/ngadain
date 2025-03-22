import { Image, Pressable, Text, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Controller } from 'react-hook-form'
import Feather from '@expo/vector-icons/Feather'

type Props = {
	control: any
	variant?: 'sm' | 'lg'
}
export default function ImageUploader({ control, variant = 'sm' }: Props) {
	return (
		<Controller
			control={control}
			name='image'
			render={({ field: { onChange, value } }) => {
				const pickImage = async () => {
					let result = await ImagePicker.launchImageLibraryAsync({
						mediaTypes: ImagePicker.MediaTypeOptions.Images,
						allowsEditing: true,
						quality: 1,
					})
					if (!result.canceled) {
						onChange(result.assets[0].uri)
					}
				}

				return (
					<View className='gap-2'>
						<View className='flex-row gap-1'>
							<Text className='text-white text-base'>Foto</Text>
							<Text className='text-white/50 text-base'>(opsional)</Text>
						</View>

						{value?.url || value ? (
							<View
								className='relative gap-4'
								style={{
									flexDirection: variant === 'sm' ? 'row' : 'column',
									alignItems: variant === 'lg' ? 'flex-start' : 'center',
								}}
							>
								<Pressable
									onPress={pickImage}
									style={{
										height: variant === 'sm' ? 96 : 200,
										width: variant === 'sm' ? 96 : '100%',
										borderRadius: variant === 'lg' ? 32 : 8,
									}}
								>
									<Image
										source={{ uri: value?.url || value }}
										className='mr-3'
										style={{
											height: variant === 'sm' ? 96 : 200,
											width: variant === 'sm' ? 96 : '100%',
											borderRadius: variant === 'sm' ? 32 : 8,
										}}
									/>
								</Pressable>

								<Pressable
									onPress={() => onChange('')}
									className='bg-backgroundInput px-4 py-2 rounded-full'
								>
									<Text className='text-primary text-sm font-medium'>
										Hapus Gambar
									</Text>
								</Pressable>
							</View>
						) : (
							<Pressable
								className='border border-dashed border-border rounded-lg bg-backgroundInput flex items-center justify-center gap-1'
								style={{
									height: variant === 'sm' ? 96 : 200,
									width: variant === 'sm' ? 96 : '100%',
								}}
								onPress={pickImage}
							>
								<Feather
									name='image'
									size={variant === 'lg' ? 40 : 16}
									color='#FFF'
								/>
								<Text className='text-gray-400 text-sm'>
									{variant === 'sm' ? 'Upload' : 'Upload gambar'}
								</Text>
							</Pressable>
						)}
					</View>
				)
			}}
		/>
	)
}
