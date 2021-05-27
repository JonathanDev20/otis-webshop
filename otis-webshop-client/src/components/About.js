// Import React
import React from 'react'

// Import Bootstrap
import { Image, Jumbotron, Container } from 'react-bootstrap'

// Import Icons
import { FiPhone, FiMail } from 'react-icons/fi'

/**
 * Represents an about-page with information about the seller.
 * 
 * @returns {JSX} - Information about seller and contact. 
 */
const About = () => {
	return (
			<Container>
				<Jumbotron
					style={{
						background: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'
					}}>
					<Container className="m-2">
						<h1 className="logo mb-2">Om oss</h1>
						<p>
							Här hittar du information om företaget som står bakom produkterna.
						</p>
					</Container>
				</Jumbotron>
				<div className="aboutContainer">
					<Image src="../images/blandat.JPEG" rounded className="aboutImage" />
					<div className="aboutText">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Consequatur beatae sapiente molestias nesciunt dolorem quas porro
							aperiam, cumque tempore blanditiis voluptatibus, accusamus,
							incidunt maxime voluptas mollitia sequi magnam optio laudantium!
							Autem, ratione necessitatibus. Sint adipisci sed perferendis!
							Rerum numquam, veniam eaque fugiat dignissimos adipisci voluptates
							voluptas blanditiis beatae non neque vitae distinctio commodi quo
							quam, sint illo corporis minima iusto? Perferendis, facilis velit
							ab nobis laborum minus illo omnis doloremque cum provident,
							explicabo eaque mollitia odio non rerum consequuntur sit ut
							nostrum modi. Natus laborum debitis eos, assumenda voluptas
							perspiciatis. Voluptate magni tempore sit voluptatibus impedit
							quae assumenda eum quisquam doloribus consectetur fugiat laborum
							cum ipsam nam nihil, praesentium quia quod doloremque recusandae
							ex nesciunt obcaecati! Non nulla quae veniam. Molestias similique
							nisi minima, expedita facere quae eum est omnis nobis. Illum
							architecto tenetur, error quaerat repudiandae ea ex dolores
							eligendi, voluptas accusamus mollitia optio minus. Nesciunt
							inventore explicabo excepturi. Quia animi, reprehenderit vel
							voluptates eos voluptatum soluta doloribus totam cum architecto
							tempore rerum repellat provident. Enim officia voluptate nisi
							provident. Animi at molestiae nemo soluta natus possimus eius
							explicabo? Sunt quos quisquam facilis doloribus voluptatum autem
							nisi qui illum tempore totam, magni aliquid dolore, assumenda fuga
							perspiciatis error nulla eos expedita quia. Harum voluptatum
							praesentium atque quae! Rem, dicta. Et praesentium dolores
							delectus dolorem temporibus ut perspiciatis rem doloribus, maxime
							rerum adipisci deserunt harum vero! Dolorum vero odit
							exercitationem voluptatem quos repudiandae maiores blanditiis
							consequuntur reiciendis. Aut, optio ex! Autem sequi dolores vero
							cumque deserunt odio in, ipsa labore dolore exercitationem
							voluptas quis temporibus eum saepe asperiores, aspernatur eveniet
							dicta quia! Architecto eligendi saepe ratione itaque dicta ut
							consectetur! Quasi nulla possimus eum obcaecati, rerum modi, eaque
							aperiam maxime delectus aspernatur nesciunt provident quam fuga
							temporibus, porro distinctio dolor expedita sequi nihil accusamus
							perspiciatis? Aut fugiat nesciunt asperiores incidunt!
						</p>
            <div className="m-5" style={{ textAlign: 'center', fontStyle: 'italic' }}>
            <h1 className="mb-4">Kontakta oss</h1>
            <h5 className="mb-4"><FiMail size={30} color="#007FFF" /> E-post: fakedata@gmail.com</h5>
            <h5><FiPhone size={30} color="#17B169" /> Telefon: 0123456789</h5>
            </div>
					</div>
				</div>
			</Container>
	)
}

export default About
