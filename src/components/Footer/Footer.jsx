import styles from './footer.module.css'
import LinksFooter from './Links/LinksFooter'
import WaysToShop from './WaysToShop/WaysToShop'

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className='screen-max-width'>
				<WaysToShop />

				<div className={styles.border} />

				<div className={styles.links_footer}>
					<LinksFooter />
				</div>
			</div>
		</footer>
	)
}

export default Footer
