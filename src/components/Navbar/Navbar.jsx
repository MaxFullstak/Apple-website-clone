import { appleImg, bagImg, searchImg } from '../../utils'
import Links from './components/Links/Links'
import styles from './navbar.module.css'

const Navbar = () => {
	return (
		<header className={styles.container}>
			<nav className='flex w-full screen-max-width'>
				<img src={appleImg} alt='Apple' width={14} height={18} />
				<Links />
				<div className={styles.images}>
					<img src={searchImg} alt='search' width={18} height={18} />
					<img src={bagImg} alt='bag' width={18} height={18} />
				</div>
			</nav>
		</header>
	)
}

export default Navbar
