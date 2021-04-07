import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Routing from './components/Routing'

function App() {
	return (
		<>
		<Router>
			<NavBar />
				<Routing />
			<Footer />
		</Router>
		</>
	)
}

export default App
