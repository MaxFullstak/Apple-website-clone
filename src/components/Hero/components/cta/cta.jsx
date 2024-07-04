import styles from './cta.module.css'

const Cta = ({ id }) => {
	return (
		<div id={id} className={styles.cta}>
			<a href='#highlights' className='btn'>
				Buy
			</a>
			<p className={styles.cta_paragraph}>From $199/month or $999</p>
		</div>
	)
}

export default Cta
