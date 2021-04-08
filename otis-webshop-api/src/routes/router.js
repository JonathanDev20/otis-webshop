/**
 * The routes
 *
 * @author Jonathan Olsson
 * @version 1.0.0
 */

import express from 'express'
import { router as productRouter } from './product-router.js'

export const router = express.Router()

router.use('/', productRouter)

router.use('*', (req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
