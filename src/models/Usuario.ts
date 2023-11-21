import mongoose from 'mongoose';
import { IUsuario } from '../interfaces/models';

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    default: `user-${Date.now()}`,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  token: {
    type: String,
  },
  confirmed: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,
});

const Usuario = mongoose.model<IUsuario>('Usuario', usuarioSchema);

export default Usuario;
