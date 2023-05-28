import { Request, Response } from 'express'

import Clipboard from '../models/clipboard'

export const index = async (req: Request, res: Response) => {
    const clipboards = await Clipboard.find().sort('-createdAt')

    return res.status(200).json(clipboards)
}

export const store = async (req: Request, res: Response) => {
    const { body } = req.body

    const clipboard = await Clipboard.create({ body })

    return res.status(200).json(clipboard)
}

export const show = async (req: Request, res: Response) => {
    const { id } = req.params
    
    try {
        const clipboard = await Clipboard.findById(id)
    
        if (clipboard) {
            return res.status(200).json(clipboard)
        }
    } catch(error) {
        if (error.name == 'CastError') {
            return res.status(500).json({ message: 'Clipboard not found.' })
        }

        return res.status(500).json({ message: error.message })
    }
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req.body
    
    try {
        let clipboard = await Clipboard.findByIdAndUpdate(id, { body }, { new: true })
    
        if (clipboard) {
            return res.status(200).json(clipboard)
        }
    } catch(error) {
        if (error.name == 'CastError') {
            return res.status(500).json({ message: 'Clipboard not found.' })
        }

        return res.status(500).json({ message: error.message })
    }
}

export const destroy = async (req: Request, res: Response) => {
    const { id } = req.params
    
    try {
        let deleted = await Clipboard.findByIdAndRemove(id)
    
        if (deleted) {
            return res.status(200).json({ message: 'Clipboard deleted successfully.' })
        }
    } catch(error) {
        if (error.name == 'CastError') {
            return res.status(500).json({ message: 'Clipboard not found.' })
        }

        return res.status(500).json({ message: error.message })
    }
}