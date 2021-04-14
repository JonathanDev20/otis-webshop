import express from 'express'
import { ProductsController } from '../controllers/products-controller.js'

export const router = express.Router()

const controller = new ProductsController()

router.get('/', controller.index)

router.get('/pipes', controller.pipes)
router.get('/clothbags', controller.clothbags)
router.get('/paintings', controller.paintings)
router.get('/extras', controller.extras)

router.get('/:id', controller.specificProduct)
