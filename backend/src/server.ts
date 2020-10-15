import express from 'express';
import './database/connection';

const app = express();
const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
    
});

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});