import {Router} from 'express'
import * as boardController from '../controllers/boardgames.controller'

const router = Router()

router.get('/', boardController.getBoardGame)
router.get('/:id', boardController.getBoardGameById)
router.post('/', boardController.createBoardGame)
router.put('/:id', boardController.updateBoardGameById)
router.delete('/:id', boardController.deleteBoardGameById)

export default router