import { connectDB } from './config/mongoose.js'
import { Category } from './models/category.js'

const products = [
  {
    categoryImgSrc: './images/pipe2.JPG',
    categoryImgAlt: 'Två pipor',
    title: 'Pipor',
    description: 'Kika gärna in våra egentillverkade pipor. Det finns olika modeller och färger.'
  },
  {
    categoryImgSrc: './images/tygkasse2.jpg',
    categoryImgAlt: 'Tygkasse',
    title: 'Tygkassar',
    description: 'Här hittar du våra fina handgjorda tygkassar som finns med olika tryck och modeller.'
  },
  {
    categoryImgSrc: './images/tavlablandat.JPG',
    categoryImgAlt: 'Tavla och blandat',
    title: 'Tavlor',
    description: 'Klicka in och titta på våra handmålade tavlor som finns i olika storlekar och stilar.'
  },
  {
    categoryImgSrc: './images/blandat.JPEG',
    categoryImgAlt: 'Övrigt',
    title: 'Övrigt',
    description: 'Här hittar du blandade produkter med olika stilar. Det finns något för alla och allt är såklart handgjort.'
  }
]
const seed = async () => {
  try {
    console.log('Seeding started!')
    await connectDB()
    Category.insertMany(products)
  } catch (err) {
    console.error(err.message)
    process.exitCode = 1
  }
}

seed().catch(console.error)
