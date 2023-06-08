export interface InformationType{
  address: string,
  phone: string,
  email: string,
  messenger: string
}

export interface HabitantType{
  name: string,
  surname: string,
  middlename?: string,
  phone: string,
  email: string,
  id: number
}

export interface PremisesType{
  id: number,
  number: string,
  floor: number,
  square: string
}