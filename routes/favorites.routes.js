import { Router } from "express";
import * as favoritesController from '../controllers/favorites.controller'

const router = Router()

router.get('/', favoritesController.getFavorites)
router.post('/', favoritesController.createFavorites)
router.delete('/:id', favoritesController.deleteFavorites)

export default router;