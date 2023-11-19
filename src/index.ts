import express from 'express';
import postRoutes from './routes/posts'
import rateLimit from 'express-rate-limit';


require('./config/dbconn')

const app = express();
const PORT: number = 4000;

app.use(express.json());

const rateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests'
});

app.use(rateLimiter);
app.use('/api', postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
