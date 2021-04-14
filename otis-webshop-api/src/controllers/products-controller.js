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
            id: pipe._id,
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

  /**
	 * @param req
	 * @param res
	 * @param next
	 */
  async clothbags (req, res, next) {
    try {
      const viewData = {
        clothbags: (await Product.find({ productCategory: 'clothbag' })).map(
          (clothbag) => ({
            productID: clothbag.productID,
            title: clothbag.title,
            description: clothbag.description,
            imgSrc: clothbag.imgSrc,
            imgAlt: clothbag.imgAlt,
            price: clothbag.price
          })
        )
      }
      res.send(viewData)
    } catch (error) {
      console.log(error)
    }
  }

  /**
	 * @param req
	 * @param res
	 * @param next
	 */
  async paintings (req, res, next) {
    try {
      const viewData = {
        paintings: (await Product.find({ productCategory: 'paintings' })).map(
          (painting) => ({
            productID: painting.productID,
            title: painting.title,
            description: painting.description,
            imgSrc: painting.imgSrc,
            imgAlt: painting.imgAlt,
            price: painting.price
          })
        )
      }
      res.send(viewData)
    } catch (error) {
      console.log(error)
    }
  }

  /**
	 * @param req
	 * @param res
	 * @param next
	 */
  async extras (req, res, next) {
    try {
      const viewData = {
        extras: (await Product.find({ productCategory: 'extras' })).map(
          (extra) => ({
            productID: extra.productID,
            title: extra.title,
            description: extra.description,
            imgSrc: extra.imgSrc,
            imgAlt: extra.imgAlt,
            price: extra.price
          })
        )
      }
      res.send(viewData)
    } catch (error) {
      console.log(error)
    }
  }

  async specificProduct (req, res, next) {
    try {
      const viewData = {
        productData: (await Product.find({ _id: req.params.id })).map(
          (product) => ({
            productID: product.productID,
            title: product.title,
            description: product.description,
            imgSrc: product.imgSrc,
            imgAlt: product.imgAlt,
            price: product.price
          })
        )
      }
      res.send(viewData)
    } catch (error) {
      console.log(error)
    }
  }
}
