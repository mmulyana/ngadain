import { Image, Pressable, Text, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Controller } from 'react-hook-form'
import Feather from '@expo/vector-icons/Feather'

export default function ImageUploader({ control }: any) {
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
							<View className='flex-row items-center'>
								<Pressable onPress={pickImage}>
									<Image
										source={{ uri: value?.url || value }}
										className='w-24 h-24 rounded-lg mr-3'
									/>
								</Pressable>

								<Pressable onPress={() => onChange('')}>
									<Text className='text-gray-400 text-sm font-medium'>
										Hapus
									</Text>
								</Pressable>
							</View>
						) : (
							<Pressable
								className='w-24 h-24 border border-dashed border-border rounded-lg bg-backgroundInput flex items-center justify-center gap-1'
								onPress={pickImage}
							>
								<Feather name='image' size={16} color='#FFF' />
								<Text className='text-gray-400 text-sm'>Upload</Text>
							</Pressable>
						)}
					</View>
				)
			}}
		/>
	)
}
