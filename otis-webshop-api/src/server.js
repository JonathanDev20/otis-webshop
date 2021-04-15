import express from 'express'
import logger from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
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

  const corsOptions = {
    origin: 'http://localhost:3000'
  }

  app.use(cors(corsOptions))

  // Populates the request object with a body object (req.body).
  app.use(express.urlencoded({ extended: false }))

  app.use('/', router)

  // Error handler.
  app.use(function (err, req, res, next) {
    err.status = err.status || 500

    if (req.app.get('env') !== 'development') {
      res
        .status(err.status)
        .json({
          status: err.status,
          message: err.message
        })
      return
    }

    // Development only!
    // Only providing detailed error in development.
    return res
      .status(err.status)
      .json({
        status: err.status,
        message: err.message,
        innerException: err.innerException,
        stack: err.stack
      })
  })

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`)
    console.log('Press CTRL + C to terminate...')
  })
}

main().catch(console.error)
