/**
 * The routes
 *
 * @author Jonathan Olsson
 * @version 1.0.0
 */

import express from 'express'
import { router as productRouter } from './product-router.js'
import { router as emailRouter } from './email-router.js'

export const router = express.Router()

router.use('/products', productRouter)

router.use('/sendEmails', emailRouter)

router.use('*', (req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
