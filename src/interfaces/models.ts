import { Schema } from 'mongoose';

export interface IUsuario {
  _id?: Schema.Types.ObjectId
  name: string
  username: string
  email: string
  password: string
  token: string | null
  confirmed: boolean
  save: () => void
}
