import './App.css'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'

// Import Components
import NavBar from './components/NavBar'
import MyHeader from './components/MyHeader'
import CategoryCard from './components/CategoryCard'
import Product from './components/Product'
import Footer from './components/Footer'

function App() {
	return (
		<>
			<NavBar />
			<MyHeader />
			<Container fluid>
				<Row style={{ textAlign: 'center' }}>
					<Col className="mb-3">
						<CategoryCard />
					</Col>
					<Col className="mb-3">
						<CategoryCard />
					</Col>
					<Col className="mb-3">
						<CategoryCard />
					</Col>
					<Col className="mb-3">
						<CategoryCard />
					</Col>
				</Row>
			</Container>
			<div className="m-4" style={{ textAlign: 'center' }}>
			<p style={{ color: 'blue' }}>Produkter</p>
			<h1>Våra Produkter</h1>
			</div>
			<Container fluid>
				<Row style={{ textAlign: 'center' }}>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
				</Row>
				<Row style={{ textAlign: 'center' }}>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
				</Row>
				<Row style={{ textAlign: 'center' }}>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}

export default App
