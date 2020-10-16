import express from 'express';
import './database/connection';
import routes from './routes';

import path from 'path';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads' )));

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});