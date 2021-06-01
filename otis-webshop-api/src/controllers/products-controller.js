/**
 * Module for the ProductsController.
 *
 * @author Jonathan Olsson
 * @version 1.0.0
 */

import { Product } from '../models/product.js'
import { Category } from '../models/category.js'

/**
 * Encapsulates a controller.
 */
export class ProductsController {
  /**
   * Sends a response containing all products.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async load (req, res, next) {
    try {
      const viewData = {
        allProducts: (await Product.find({})).map((products) => ({
          id: products._id,
          productCategory: products.productCategory,
          productID: products.productID,
          title: products.title,
          description: products.description,
          imgSrc: products.imgSrc,
          imgAlt: products.imgAlt,
          price: products.price
        }))
      }
      res.send(viewData)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Sends a response containing all categories.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async loadCategories (req, res, next) {
    try {
      const viewData = {
        allCategories: (await Category.find({})).map((category) => ({
          id: category._id,
          imgSrc: category.categoryImgSrc,
          imgAlt: category.categoryImgAlt,
          title: category.title,
          description: category.description,
          path: category.path
        }))
      }
      res.send(viewData)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Sends a response of a specific product.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
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
      next(error)
    }
  }

  /**
   * Filter and send a response containing products matching search param.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async searchProducts (req, res, next) {
    try {
      const viewData = {
        products: (await Product.find({}))
          .filter((product) =>
            product.title
              .toLowerCase()
              .includes(req.params.search.toLowerCase())
          )
          .map((product) => ({
            id: product._id,
            productID: product.productID,
            title: product.title,
            description: product.description,
            imgSrc: product.imgSrc,
            imgAlt: product.imgAlt,
            price: product.price
          }))
      }
      res.send(viewData)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Sends a response containing a sample of 12 random products.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
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
      next(error)
    }
  }
}
