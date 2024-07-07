import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Highlights from './components/Hightlights/Highlights'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Model from './components/Model/Model'
import Navbar from './components/Navbar/Navbar'

const App = () => {
	return (
		<main className='bg-black'>
			<Navbar />
			<Hero />
			<Highlights />
			<Model />
			<Features />
			<HowItWorks />
			<Footer />
		</main>
	)
}

export default App
