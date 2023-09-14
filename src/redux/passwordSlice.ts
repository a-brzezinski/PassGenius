import { createSlice } from '@reduxjs/toolkit'

interface State {
	settings: {
		uppercase: boolean
		lowercase: boolean
		numbers: boolean
		symbols: boolean
		length: number
	}
	password: string
}

const initialState: State = {
	settings: {
		uppercase: false,
		lowercase: false,
		numbers: false,
		symbols: false,
		length: 12,
	},
	password: '',
}

export const passwordSlice = createSlice({
	name: 'password',
	initialState,
	reducers: {
		setSettings: (state, action) => {
			const [setting, value] = action.payload
			state.settings = {
				...state.settings,
				[setting]: value,
			}
		},
		setPassword: (state, action) => {
			state.password = action.payload
		},
	},
})

export const { setSettings, setPassword } = passwordSlice.actions

export default passwordSlice.reducer
