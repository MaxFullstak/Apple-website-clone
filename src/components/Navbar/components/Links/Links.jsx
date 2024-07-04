import { navLists } from '../../../../constants'
import styles from './links.module.css'

const Links = () => {
	return (
		<div className={styles.container}>
			{navLists.map(nav => (
				<div key={nav} className={styles.link_style}>
					{nav}
				</div>
			))}
		</div>
	)
}

export default Links
