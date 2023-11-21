import mongoose from 'mongoose';
import config from './environment';

async function connectDB() {
  try {
    const conn = await mongoose.connect(config.MONGO_URI);

    const url = `${conn.connection.host}:${conn.connection.port}`;

    console.log(`Mongodb conectado en: ${url}`);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(`Error al conectar a mongo: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;
