export type PlanNameType = 'arcade' | 'advanced' | 'pro'

export type PlanType = {
  name: PlanNameType | string
  price: number
}

export type Step1Type = {
  name: string
  email: string
  phone: string
}

export type AddonType = {
  id?: number
  title: string
  price: number
  text?: string
}

export type TariffType = {
  id: number
  name: string
  img: string
  price: number
  value: string
  checked: boolean
}