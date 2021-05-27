/**
 * Seed script for products.
 *
 * @author Jonathan Olsson
 * @version 1.0.0
 */

import { connectDB } from './config/mongoose.js'
import { v4 as uuidv4 } from 'uuid'
import { Product } from './models/product.js'

const products = [
  {
    productID: uuidv4(),
    productCategory: 'pipes',
    title: 'Porsche Pipan',
    description: 'En unik och fin pipa som är handgjord med inspiration av porsche. Märket på pipan och på tygpåsen kommer från en riktig porsche.',
    imgSrc: 'https://i.postimg.cc/XNxfsmbP/porsche3.jpg',
    imgAlt: 'Porsche Pipan',
    price: 1599,
    details: {
      detailOne: {
        material: 'Briar'
      },
      detailTwo: {
        color: 'Röd'
      },
      detailThree: {
        clothbag: 'Ja'
      }
    }
  },
  {
    productID: uuidv4(),
    productCategory: 'pipes',
    title: 'Cylinder pipan',
    description: 'En fin handgjord pipa med en form som en cylinder. Det tillkommer en tygpåse till denna fina pipa.',
    imgSrc: 'https://i.postimg.cc/bJcgjtCF/pipe5.jpg',
    imgAlt: 'Cylinder',
    price: 799
  },
  {
    productID: uuidv4(),
    productCategory: 'pipes',
    title: 'Den naturliga',
    description: 'En fin handgjord pipa med en clean look. Det följer med en fin tygpåse som pipan kan ligga i.',
    imgSrc: 'https://i.postimg.cc/T2j7ftXj/pipe2.jpg',
    imgAlt: 'Naturlig',
    price: 399
  },
  {
    productID: uuidv4(),
    productCategory: 'pipes',
    title: 'Räfflig pipa med märkning',
    description: 'En mörkbrun pipa med en räfflig yta och en ingraverad märkning.',
    imgSrc: 'https://i.postimg.cc/HLjRLXtY/IMG-9124.jpg',
    imgAlt: 'Räfflig pipa',
    price: 599
  },
  {
    productID: uuidv4(),
    productCategory: 'pipes',
    title: 'Räfflig pipa',
    description: 'En svart pipa med en räfflig yta. Tygpåse att förvara pipan i följer med.',
    imgSrc: 'https://i.postimg.cc/FF0q190L/IMG-9126.jpg',
    imgAlt: 'Räfflig svart pipa',
    price: 599
  },
  {
    productID: uuidv4(),
    productCategory: 'pipes',
    title: 'Matt Pipa',
    description: 'En fint handgjord pipa i en matt färg. Den finns i nuläget i tre härliga färger (Gul, Blå och Rosa).',
    imgSrc: 'https://i.postimg.cc/63kDgqn9/IMG-6205.jpg',
    imgAlt: 'Matt pipa',
    price: 499
  },
  {
    productID: uuidv4(),
    productCategory: 'clothbag',
    title: 'Insektspåsen',
    description: 'En handmålad tygkasse med trycket av en insekt. Namnet MÄRTA är ett exempel på en design som går att välja till.',
    imgSrc: 'https://i.postimg.cc/PJfqLSVp/clothbag-Bug.jpg',
    imgAlt: 'Tygkasse insekt',
    price: 299
  },
  {
    productID: uuidv4(),
    productCategory: 'clothbag',
    title: 'Namnpåsen',
    description: 'En handmålad tygkasse med trycket av ett namn. Trycket går att få i ett valfritt namn.',
    imgSrc: 'https://i.postimg.cc/WpDNyJLP/clothbag-Name.jpg',
    imgAlt: 'Tygkasse namn',
    price: 249
  },
  {
    productID: uuidv4(),
    productCategory: 'clothbag',
    title: 'Den stirrande klänningen',
    description: 'En handmålad tygkasse med trycket av en klänning med ett namn och ett öga. Trycket går att få i ett valfritt namn.',
    imgSrc: 'https://i.postimg.cc/rmPHWmQ1/clothbag-Eye.jpg',
    imgAlt: 'Tygkasse klänning',
    price: 349
  },
  {
    productID: uuidv4(),
    productCategory: 'clothbag',
    title: 'Cyklopet OTIS',
    description: 'En handmålad tygkasse med trycket av OTIS som liknar ett cyklop monster i lite annorlunda stil.',
    imgSrc: 'https://i.postimg.cc/5tcLHMBX/tygkasse1.jpg',
    imgAlt: 'Tygkasse cyklop',
    price: 399
  },
  {
    productID: uuidv4(),
    productCategory: 'clothbag',
    title: 'OTIS värld',
    description: 'En handmålad tygkasse med lite gott och blandat från OTIS värld.',
    imgSrc: 'https://i.postimg.cc/8cC68kS0/tygkasse2.jpg',
    imgAlt: 'Tygkasse värld',
    price: 379
  },
  {
    productID: uuidv4(),
    productCategory: 'clothbag',
    title: 'OTIS and the bottle',
    description: 'En handmålad tygkasse med trycket av OTIS och hans favorit flaska.',
    imgSrc: 'https://i.postimg.cc/FRpLnd2S/tygkasse3.jpg',
    imgAlt: 'Tygkasse flaskan',
    price: 299
  },
  {
    productID: uuidv4(),
    productCategory: 'clothbag',
    title: 'Svamparna',
    description: 'En handmålad tygkasse med trycket olika svampar.',
    imgSrc: 'https://i.postimg.cc/90Nqc3XF/tygkasse4.jpg',
    imgAlt: 'Tygkasse svamp',
    price: 299
  },
  {
    productID: uuidv4(),
    productCategory: 'clothbag',
    title: 'Luftballongen',
    description: 'En handmålad tygkasse med trycket av en fin luftballong.',
    imgSrc: 'https://i.postimg.cc/XN25f5KS/tygkasse5.jpg',
    imgAlt: 'Tygkasse luftballong',
    price: 399
  },
  {
    productID: uuidv4(),
    productCategory: 'paintings',
    title: 'The heart',
    description: 'En handmålad tavla som symboliserar ett hjärta.',
    imgSrc: 'https://i.postimg.cc/W4J8Knnk/painting-Heart.jpg',
    imgAlt: 'Tavla hjärta',
    price: 599
  },
  {
    productID: uuidv4(),
    productCategory: 'paintings',
    title: 'OTIS NEIPA',
    description: 'En handmålad tavla med en hejande OTIS-figur.',
    imgSrc: 'https://i.postimg.cc/GtjqKmjg/painting2.jpg',
    imgAlt: 'Tavla neipa',
    price: 699
  },
  {
    productID: uuidv4(),
    productCategory: 'paintings',
    title: 'FULL-SIZE OTIS',
    description: 'En handmålad tavla med OTIS i sin fulla storlek.',
    imgSrc: 'https://i.postimg.cc/wjRDTBmK/tavla2.jpg',
    imgAlt: 'Tavla fullsize',
    price: 849
  },
  {
    productID: uuidv4(),
    productCategory: 'paintings',
    title: 'OTIS Illusion',
    description: 'En handmålad tavla med OTIS i sitt förvirrande hus.',
    imgSrc: 'https://i.postimg.cc/4NdzqP4x/tavla1.jpg',
    imgAlt: 'Tavla förvirrande',
    price: 899
  },
  {
    productID: uuidv4(),
    productCategory: 'paintings',
    title: 'Trassligt',
    description: 'En handmålad tavla som föreställer hur trassligt det kan bli.',
    imgSrc: 'https://i.postimg.cc/PqmZYFy2/tavla3.jpg',
    imgAlt: 'Tavla trassligt',
    price: 599
  },
  {
    productID: uuidv4(),
    productCategory: 'extras',
    title: 'Revolver-Lampa',
    description: 'En egen tappning på en häftig lampa. "Do not kill the light" är en lampa byggd av en revolver stående på en fot.',
    imgSrc: 'https://i.postimg.cc/yYbFHRWX/revolver-lamp.jpg',
    imgAlt: 'Revolver lampa',
    price: 1999
  },
  {
    productID: uuidv4(),
    productCategory: 'extras',
    title: 'Bordslampa',
    description: 'En egendesignad bordlampa som är dimmerbar. Det följer även med en etikett med OTIS på.',
    imgSrc: 'https://i.postimg.cc/NGVh2Nz3/bordslampa.jpg',
    imgAlt: 'OTIS bordslampa',
    price: 799
  },
  {
    productID: uuidv4(),
    productCategory: 'extras',
    title: 'OTIS pipkasse',
    description: 'En egen-designad tygkasse för din pipa.',
    imgSrc: 'https://i.postimg.cc/26DQtfys/pipebag.jpg',
    imgAlt: 'OTIS pipkasse',
    price: 249
  },
  {
    productID: uuidv4(),
    productCategory: 'extras',
    title: 'Mini-OTIS',
    description: 'Ett två-pack med tändstickor med OTIS som tryck.',
    imgSrc: 'https://i.postimg.cc/YjcynPcj/extras3.jpg',
    imgAlt: 'OTIS tändstickor',
    price: 149
  },
  {
    productID: uuidv4(),
    productCategory: 'extras',
    title: 'OTIS on a bottle',
    description: 'Egen designade flaskor för öl och champagne. Kommer i 3-pack och såklart är OTIS-figuren med.',
    imgSrc: 'https://i.postimg.cc/FH52DYmG/extras4.jpg',
    imgAlt: 'OTIS flaskor',
    price: 299
  },
  {
    productID: uuidv4(),
    productCategory: 'extras',
    title: 'OTIS högtalare',
    description: 'En egen-designad högtalare med den omtalande OTIS-mannen.',
    imgSrc: 'https://i.postimg.cc/T1xtnDnW/otis-Speaker.jpg',
    imgAlt: 'OTIS högtalare',
    price: 2999
  }
]

/**
 * Add product objects to the database.
 */
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
