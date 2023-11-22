import app from './app';
import connectDB from './config/db';
import usuarioRoutes from './routes/usuarioRoutes';

connectDB();

// Routes
app.use('/api/users', usuarioRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
