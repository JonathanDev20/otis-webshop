/**
 * Module for the ProductsController.
 *
 * @author Jonathan Olsson
 * @version 1.0.0
 */

import { Product } from '../models/product.js'
import { Category } from '../models/category.js'

/**
 *
 */
export class ProductsController {
  /**
	 * @param req
	 * @param res
	 * @param next
	 */
  async load (req, res, next) {
    try {
      const viewData = {
        allProducts: (await Product.find({})).map(
          (products) => ({
            id: products._id,
            productCategory: products.productCategory,
            productID: products.productID,
            title: products.title,
            description: products.description,
            imgSrc: products.imgSrc,
            imgAlt: products.imgAlt,
            price: products.price
          })
        )
      }
      res.send(viewData)
    } catch (error) {
      console.log(error)
    }
  }

  async loadCategories (req, res, next) {
    try {
      const viewData = {
        allCategories: (await Category.find({})).map(
          (category) => ({
            id: category._id,
            imgSrc: category.categoryImgSrc,
            imgAlt: category.categoryImgAlt,
            title: category.title,
            description: category.description,
            path: category.path
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

  async randomProducts (req, res, next) {
    try {
      const viewData = {
        productData: (await Product.aggregate([{ $sample: { size: 12 } }])).map(
          (product) => ({
            id: product._id,
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
