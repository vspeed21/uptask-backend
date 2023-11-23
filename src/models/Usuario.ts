import mongoose from 'mongoose';
import { IUsuario } from '../interfaces/models';
import bcrypt from 'bcrypt';

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

usuarioSchema.pre('save', async function (next) {
  if (!this.isModified(this.password)) {
    next();
  }
  const salt = await bcrypt.genSalt(20);
  this.password = await bcrypt.hash(this.password, salt);
});

export default Usuario;
