import express from 'express'
import Tasks from '../models/tasks';
import { Request, Response } from "express";
import Faq from '../models/faq';
import Glossary from '../models/glossary';
const router = express.Router();


router.get('/tasks', async (req: Request, res: Response) => {
    try {

        const tasks = await Tasks.query();
        if (!tasks) {
            throw new Error("Error fetching the tasks")
        }
        res.status(200).json({
            message: "success",
            data: {
                tasks
            }

        })
    }
    catch (err: any) {
        res.status(404).json({
            message: err.message
        })
    }
})
router.get('/faqs', async (req: Request, res: Response) => {
    try {

        const faqs = await Faq.query();
        if (!faqs) {
            throw new Error("Error fetching the faqs")
        }
        res.status(200).json({
            message: "success",
            data: {
                faqs
            }

        })
    }
    catch (err: any) {
        res.status(404).json({
            message: err.message
        })
    }
})
router.get('/glossary', async (req: Request, res: Response) => {
    try {

        const glossary = await Glossary.query();
        if (!glossary) {
            throw new Error("Error fetching the projects")
        }
        res.status(200).json({
            message: "success",
            data: {
                glossary
            }

        })
    }
    catch (err: any) {
        res.status(404).json({
            message: err.message
        })
    }
})

module.exports = router