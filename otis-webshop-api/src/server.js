import express from 'express'
import logger from 'morgan'
import helmet from 'helmet'
import { router } from './routes/router.js'
import { connectDB } from './config/mongoose.js'

const PORT = process.env.PORT || 5000

/**
 * The main function of the application.
 */
const main = async () => {
  try {
    await connectDB()
  } catch (err) {
    console.error(err.message)
    process.exitCode = 1
    return
  }
  const app = express()

  app.use(logger('dev'))

  app.use(helmet())

  // Populates the request object with a body object (req.body).
  app.use(express.urlencoded({ extended: false }))

  app.use('/', router)

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`)
    console.log('Press CTRL + C to terminate...')
  })
}

main().catch(console.error)
