/*eslint-disable */
// Import mongoose
import mongoose from 'mongoose'

// Import request from supertest
import request from 'supertest'

// Import model
import { Product } from '../src/models/product.js'

// Import object with test data
import { testData } from './mockdata.js'

// Import dotenv
import dotenv from 'dotenv'

// Import app from server.js in testfolder
import { app } from './server.js'
import { appListen } from './server.js'

dotenv.config()


describe('Get testing for database routes', () => {
  // Runs before each test
  beforeEach(async () => {
    await mongoose.connect(process.env.DB_CONNECTION_STRING_TEST, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    // deleteMany drops the database
    await Product.deleteMany()
    // insertMany need one line for each object to test
    await Product.insertMany(testData.productdata)
    await Product.insertMany(testData.productdata2)
    await Product.insertMany(testData.productdata3)
    await Product.insertMany(testData.productdata4)
  })

  it('get existing products returns 200 OK', async () => {
    const res = await request(app)
    .get('/products/load')
    expect(res.statusCode).toEqual(200)
  })

  it('product object contains a category', async () => {
    const res = await request(app)
    .get('/products/load')
    for(let i = 0; i < res.body.allProducts; i++) {
      expect(res.body.allProducts[i].toHaveProperty('productCategory'))
    }
  })

  it('get non-existing resource returns 404 Not Found', async () => {
    const res = await request(app)
    .get('/something')
    expect(res.statusCode).toEqual(404)
    expect(res.body.message).toEqual('Not Found')
  })

  afterAll(async () => {
    await Product.deleteMany()
    await mongoose.connection.close()
    appListen.close()
})
})
