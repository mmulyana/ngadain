import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import Feather from '@expo/vector-icons/Feather'

export default function DatePickerInput({ control }: { control: any }) {
	const [show, setShow] = useState(false)

	return (
		<Controller
			control={control}
			name='date'
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<View className='gap-2'>
					<Pressable
						className={[
							'flex-row items-center justify-between py-4 px-4 bg-backgroundInput rounded-lg border',
							error ? 'border-red-500' : 'border-backgroundInput',
						].join(' ')}
						onPress={() => setShow(true)}
					>
						<Text className={value ? 'text-white' : 'text-white/50'}>
							{value ? new Date(value).toLocaleDateString() : 'Pilih tanggal'}
						</Text>
						<Feather name='calendar' size={20} color='#FFF' />
					</Pressable>

					{show && (
						<DateTimePicker
							value={value ? new Date(value) : new Date()}
							mode='date'
							display='spinner'
							onChange={(_, selectedDate) => {
								setShow(false)
								if (selectedDate) onChange(selectedDate.toISOString())
							}}
						/>
					)}

					{error && <Text className='text-red-500'>{error.message}</Text>}
				</View>
			)}
		/>
	)
}
