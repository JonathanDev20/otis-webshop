import express from 'express'
import { ProductsController } from '../controllers/products-controller.js'

export const router = express.Router()

const controller = new ProductsController()

router.get('/', controller.index)

router.get('/pipes', controller.pipes)
