import express from 'express'
import { EmailsController } from '../controllers/emails-controller.js'

export const router = express.Router()

const controller = new EmailsController()

router.post('/specialOrder', controller.specialOrderEmail)

router.post('/orderSpec', controller.orderSpec)
