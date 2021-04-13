import { connectDB } from './config/mongoose.js'
import { v4 as uuidv4 } from 'uuid'
import { Product } from './models/product.js'

const products = [
  {
    productID: uuidv4(),
    productCategory: 'pipes',
    title: 'Matt Pipa',
    description: 'En fint handgjord pipa i en matt färg. Den finns i nuläget i tre härliga färger (Gul, Blå och Rosa).',
    imgSrc: './images/matt-pipe.jpg',
    imgAlt: 'Matt pipa',
    price: 499
  },
  {
    productID: uuidv4(),
    productCategory: 'pipes',
    title: 'Räfflig pipa med märkning',
    description: 'En mörkbrun pipa med en räfflig yta och en ingraverad märkning.',
    imgSrc: './images/pipe2.jpg',
    imgAlt: 'Räfflig pipa',
    price: 599
  },
  {
    productID: uuidv4(),
    productCategory: 'pipes',
    title: 'Räfflig pipa',
    description: 'En svart pipa med en räfflig yta. Tygpåse att förvara pipan i följer med.',
    imgSrc: './images/pipe3.jpg',
    imgAlt: 'Räfflig svart pipa',
    price: 599
  },
  {
    productID: uuidv4(),
    productCategory: 'clothbag',
    title: 'Insektspåsen',
    description: 'En handmålad tygkasse med trycket av en insekt. Namnet MÄRTA är ett exempel på en design som går att välja till.',
    imgSrc: './images/clothbagBug.jpg',
    imgAlt: 'Tygkasse insekt',
    price: 299
  },
  {
    productID: uuidv4(),
    productCategory: 'clothbag',
    title: 'Namnpåsen',
    description: 'En handmålad tygkasse med trycket av ett namn. Trycket går att få i ett valfritt namn.',
    imgSrc: './images/clothbagName.jpg',
    imgAlt: 'Tygkasse namn',
    price: 249
  },
  {
    productID: uuidv4(),
    productCategory: 'clothbag',
    title: 'Den stirrande klänningen',
    description: 'En handmålad tygkasse med trycket av en klänning med ett namn och ett öga. Trycket går att få i ett valfritt namn.',
    imgSrc: './images/clothbagEye.jpg',
    imgAlt: 'Tygkasse klänning',
    price: 349
  },
  {
    productID: uuidv4(),
    productCategory: 'paintings',
    title: 'The heart',
    description: 'En handmålad tavla som symboliserar ett hjärta.',
    imgSrc: './images/paintingHeart.jpg',
    imgAlt: 'Tavla hjärta',
    price: 599
  },
  {
    productID: uuidv4(),
    productCategory: 'paintings',
    title: 'OTIS NEIPA',
    description: 'En handmålad tavla med en hejande OTIS-figur.',
    imgSrc: './images/painting2.jpg',
    imgAlt: 'Tavla neipa',
    price: 699
  },
  {
    productID: uuidv4(),
    productCategory: 'paintings',
    title: 'FULL-SIZE OTIS',
    description: 'En handmålad tavla med OTIS i sin fulla storlek.',
    imgSrc: './images/painting3.jpg',
    imgAlt: 'Tavla fullsize',
    price: 849
  },
  {
    productID: uuidv4(),
    productCategory: 'extras',
    title: 'Revolver-Lampa',
    description: 'En egen tappning på en häftig lampa. "Do not kill the light" är en lampa byggd av en revolver stående på en fot.',
    imgSrc: './images/revolver-lamp.jpg',
    imgAlt: 'Revolver lampa',
    price: 1999
  },
  {
    productID: uuidv4(),
    productCategory: 'extras',
    title: 'OTIS högtalare',
    description: 'En egen-designad högtalare med den omtalande OTIS-mannen.',
    imgSrc: './images/otisSpeaker.jpg',
    imgAlt: 'OTIS högtalare',
    price: 2999
  },
  {
    productID: uuidv4(),
    productCategory: 'extras',
    title: 'Mini-OTIS',
    description: 'Ett två-pack med tändstickor med OTIS som tryck.',
    imgSrc: './images/extras3.jpg',
    imgAlt: 'OTIS tändstickor',
    price: 149
  },
  {
    productID: uuidv4(),
    productCategory: 'extras',
    title: 'OTIS on a bottle',
    description: 'Egen designade flaskor för öl och champagne. Kommer i 3-pack och såklart är OTIS-figuren med.',
    imgSrc: './images/extras4.jpg',
    imgAlt: 'OTIS flaskor',
    price: 299
  }
]

const seed = async () => {
  try {
    console.log('Seeding started!')
    await connectDB()
    Product.insertMany(products)
  } catch (err) {
    console.error(err.message)
    process.exitCode = 1
  }
}

seed().catch(console.error)
