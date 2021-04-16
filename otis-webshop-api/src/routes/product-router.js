import express from 'express'
import { ProductsController } from '../controllers/products-controller.js'

export const router = express.Router()

const controller = new ProductsController()

router.get('/load', controller.load)

router.get('/random', controller.randomProducts)

router.get('/loadCategories', controller.loadCategories)

router.get('/:id', controller.specificProduct)
