import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
    async list(req: Request, res: Response) {
        try {
            const orphanagesRepository = getRepository(Orphanage);
    
            const orphanages = await orphanagesRepository.find();
    
            res.status(200).json({ orphanages });
        } catch (error) {
            res.status(500).json({ error });
        }
    },

    async create(req: Request, res: Response) {
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
    }
}