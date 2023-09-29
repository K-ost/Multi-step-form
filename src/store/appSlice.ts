import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AddonType, PlanType, Step1Type } from '../types'

// Define a type for the slice state
interface appState {
  name: string
  email: string
  phone: string
  plan: PlanType | null
  period: boolean
  addons: AddonType[]
}

// Define the initial state using that type
const initialState: appState = {
  name: '',
  email: '',
  phone: '',
  plan: null,
  period: false,
  addons: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setStep1: (state, action: PayloadAction<Step1Type>) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.phone = action.payload.phone
    },
    setPlan: (state, action: PayloadAction<PlanType>) => {
      state.plan = action.payload
    },
    setPeriod: (state, action: PayloadAction<boolean>) => {
      state.period = action.payload
    },
    setAddon: (state, action: PayloadAction<AddonType>) => {
      let exists = state.addons.find(el => el.title === action.payload.title)
      if (!exists) {
        state.addons.push(action.payload)
      } else {
        state.addons = state.addons.filter(el => el.title !== action.payload.title)
      }
    }
  },
})

export const { setStep1, setPlan, setPeriod, setAddon } = appSlice.actions

// Other code such as selectors can use the imported `RootState` type
export default appSlice.reducer