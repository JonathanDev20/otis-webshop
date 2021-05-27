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
    const from = req.body.from_email
    const category = req.body.category_pick
    const pipesModel = req.body.pipes_model
    const pipesColor = req.body.pipes_color
    const pipesDetail = req.body.pipes_details
    const file = req.body.file
    const pipesExtras = req.body.pipes_extras
    const bagPaintingSize = req.body.bag_paint_size
    const bagPaintDesign = req.body.bag_paint_design
    const extrasDetails = req.body.extras_details

    const contactEmail = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS
      }
    })

    // Verify credentials for email
    contactEmail.verify((error) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Ready to send!')
      }
    })

    // The mail to be sent
    const mail = {
      from: from,
      to: process.env.AUTH_USER,
      subject: 'Special-Beställning',
      html: `<p><b>Från</b>: ${from}</p>
             <p><b>Kategori</b>: ${category}</p>
             <p><b>Pipa Modell</b>: ${pipesModel}</p>
             <p><b>Pipa Färg</b>: ${pipesColor}</p>
             <p><b>Pipa Detaljer</b>: ${pipesDetail}</p>
             <p><b>Pipa Övrigt</b>: ${pipesExtras}</p>
             <p><b>Tygkasse/Tavla Storlek</b>: ${bagPaintingSize}</p>
             <p><b>Tygkasse/Tavla Design</b>: ${bagPaintDesign}</p>
             <p><b>Övrigt Detaljer</b>: ${extrasDetails}</p>
             <p><b>Fil</b>: ${file}</p>`
    }
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: 'Något gick fel, vänligen försök igen!' })
      } else {
        res.json({
          status: 'Din beställning kommer nu granskas och du får ett svar på mejlen inom 1-4 dagar.'
        })
      }
    })
  }

  /**
   * Sends an email with data from an order.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async orderSpec (req, res, next) {
    const contactEmail = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS
      }
    })

    // Verify credentials for email
    contactEmail.verify((error) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Ready to send!')
      }
    })

    // The mail to be sent
    const mail = {
      from: req.body.payerEmail,
      to: process.env.AUTH_USER,
      subject: 'Order: ' + req.body.id,
      html: `<h1>Bekräftelse på en lagd order från kund!</h1>
             <p><b>Kundens namn</b>: ${req.body.payerName}</p>
             <p><b>Kundens e-post</b>: ${req.body.payerEmail}</p>
             <p><b>Belopp</b>: ${req.body.amount} SEK</p>
             <p><b>Gatuadress</b>: ${req.body.payerAddressStreet}</p>
             <p><b>Stad</b>: ${req.body.payerAddressCity}</p>
             <p><b>Postnummer</b>: ${req.body.payerAddressPostalCode}</p>
             <p><b>Land</b>: ${req.body.payerAddressCountry}</p>
             <hr></hr>
             <p><b>Produkter</b>: ${req.body.products.map((item) => item.quantity + 'st ' + item.product.title + ', ID: ( ' + item.product.productID + ' ) ')} </p>
             <p><b>Totalt Pris</b>: ${req.body.totalPrice}kr</p>
             `
    }
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: 'Något gick fel.. ' + error.message })
      } else {
        res.json({ status: 'Beställningsbekräftelse skickad.' })
      }
    })
  }
}
