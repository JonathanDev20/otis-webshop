import './App.css'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'

// Import Components
import NavBar from './components/NavBar'
import MyHeader from './components/MyHeader'
import CategoryCard from './components/CategoryCard'

function App() {
	return (
		<>
			<NavBar />
			<MyHeader />
			<Row className="mx-auto" style={{ textAlign: "center"}}>
				<Col className="m-3">
					<CategoryCard />
				</Col>
				<Col className="m-3">
					<CategoryCard />
				</Col>
				<Col className="m-3">
					<CategoryCard />
				</Col>
				<Col className="m-3">
					<CategoryCard />
				</Col>
			</Row>
		</>
	)
}

export default App
