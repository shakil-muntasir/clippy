import { Router } from 'express'

import { index, store, show, update, destroy } from '../controllers/clipboard'

const router = Router()

router.get('/clipboards', index)
router.post('/clipboards', store)
router.get('/clipboards/:id', show)
router.patch('/clipboards/:id', update)
router.delete('/clipboards/:id', destroy)

export default router