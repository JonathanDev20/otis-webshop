/*eslint-disable */
import mongoose from 'mongoose'

import request from 'supertest'

import { Product } from '../src/models/product.js'

import { testData } from './mockdata.js'

//importera dotenv
import dotenv from 'dotenv'

//importera app från server.js i testmappen
import { app } from './server.js'

import { appListen } from './server.js'

dotenv.config()


describe('Get testing for database routes', () => {
  // Innan varje test körs denna, Om det skapas flera testfiler så ska describe/beforeEach/afterAll finns i alla filer.
  beforeEach(async () => {
    await mongoose.connect(process.env.DB_CONNECTION_STRING_TEST, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    // deleteMany tar bort databasen inför varje test
    await Product.deleteMany()
    // insertMany behöver en rad för varje data som ska läsas in i databasen inför varje test
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
