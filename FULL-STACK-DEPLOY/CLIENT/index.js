import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors(
  {
    origin: [
            'http://localhost:5173',
            'http://localhost:3000',
            'http://localhost:5174'
            //ADD PRODUCTION URL HERE

    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
     
  }
));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello from the CLIENT server!');
});     

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`CLIENT server is running on port http://localhost:${PORT}`);
}); 