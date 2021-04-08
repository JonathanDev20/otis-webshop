/**
 * Module for the ProductsController.
 *
 * @author Jonathan Olsson
 * @version 1.0.0
 */

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
}
