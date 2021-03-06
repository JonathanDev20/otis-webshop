/**
 * Product routes.
 *
 * @author Jonathan Olsson
 * @version 1.0.0
 */

import express from 'express'
import { ProductsController } from '../controllers/products-controller.js'

export const router = express.Router()

const controller = new ProductsController()

router.get('/load', controller.load)

router.get('/random', controller.randomProducts)

router.get('/loadCategories', controller.loadCategories)

router.get('/search/:search', controller.searchProducts)

router.get('/:id', controller.specificProduct)
