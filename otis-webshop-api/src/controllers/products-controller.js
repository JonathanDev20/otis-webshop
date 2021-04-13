/**
 * Module for the ProductsController.
 *
 * @author Jonathan Olsson
 * @version 1.0.0
 */

import { Product } from '../models/product.js'

/**
 *
 */
export class ProductsController {
  /**
	 * @param req
	 * @param res
	 * @param next
	 */
  async index (req, res, next) {
    res.send('Hello from product index')
  }

  /**
	 * @param req
	 * @param res
	 * @param next
	 */
  async pipes (req, res, next) {
    try {
      const viewData = {
        pipes: (await Product.find({ productCategory: 'pipes' })).map(
          (pipe) => ({
            productID: pipe.productID,
            title: pipe.title,
            description: pipe.description,
            imgSrc: pipe.imgSrc,
            imgAlt: pipe.imgAlt,
            price: pipe.price
          })
        )
      }
      res.send(viewData)
    } catch (error) {
      console.log(error)
    }
  }
}
