import express from 'express';
import './database/connection';

import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.get('/orphanages', async (req, res) => {
    try {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find();

        res.status(200).json({ orphanages });
    } catch (error) {
        res.status(500).json({ error });
    }
});

app.post('/orphanages', async (req, res) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    } = req.body;

    try {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        });

        await orphanagesRepository.save(orphanage);

        res.status(201).json(orphanage);
    } catch (error) {
        res.status(400).json({ error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});