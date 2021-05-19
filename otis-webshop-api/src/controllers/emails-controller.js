/**
 * Module for the EmailsController.
 *
 * @author Jonathan Olsson
 * @version 1.0.0
 */

import nodemailer from 'nodemailer'

/**
 * Encapsulates a controller.
 */
export class EmailsController {
  /**
   * Sends an email with data from a special order.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async specialOrderEmail (req, res, next) {
    console.log(await req.body)
    const testAccount = await nodemailer.createTestAccount()

    const contactEmail = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    })

    contactEmail.verify((error) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Ready to send!')
      }
    })
  }
}
