import { Router } from 'express'

import clipboard from './clipboard'

const router = Router()

export const home = router.get('/', (req, res) => {
    return res.status(405).send('Beep Boop! I am Robot!')
})

router.use(clipboard)

export default router