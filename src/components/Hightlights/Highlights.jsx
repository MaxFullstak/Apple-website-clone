import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../../utils'
import Link from './Link/Link'
import VideoCarousel from './VideoCarousel/VideoCarousel'
import styles from './hightlights.module.css'

const Highlights = () => {
	useGSAP(() => {
		gsap.to('#title', { opacity: 1, y: 0 })
		gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
	}, [])
	
	return (
		<section id='highlights' className={styles.container}>
			<div className='screen-max-width'>
				<div className={styles.container_content}>
					<h1 id='title' className='section-heading'>
						Get thee highlights.
					</h1>

					<div className={styles.container_links}>
						<Link image={watchImg} title='film' styleName='link' />
						<Link image={rightImg} title='event' styleName='link' />
					</div>
				</div>

				<VideoCarousel />
			</div>
		</section>
	)
}

export default Highlights
