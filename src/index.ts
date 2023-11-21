import app from './app';
import connectDB from './config/db';

connectDB();

app.use('/', (req, res) => res.send('Thanks for using this boilerplate :)'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
