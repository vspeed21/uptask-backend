/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import Usuario from '../models/Usuario';

export async function createUser(req: Request, res: Response) {
  // Avoid duplicate users
  const { email } = req.body;

  const userFound = await Usuario.findOne({ email });

  if (userFound) {
    res.status(400).json({
      errorResponse: {
        error: true,
        code: 400,
        msg: 'Este email ya esta registrado en UpTask',
        details: 'Intente recuperar su contraseña si olvidó sus credenciales',
      }
    });
    return;
  }

  try {
    const user = new Usuario(req.body);
    const userSaved = await user.save();
    res.status(200).json({
      usuario: userSaved,
      errorResponse: {
        error: false,
        code: 200,
        msg: 'Cuenta creada correctamente',
        details: 'Revise su email para confirmar su cuenta',
      },
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      errorResponse: {
        error: true,
        code: 400,
        msg: 'Se produjo un error',
        details: error.message,
      }
    });
  }

}
