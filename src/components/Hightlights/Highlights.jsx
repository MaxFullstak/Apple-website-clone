import { useHightlightsHook } from '../../hooks/Hightlights.hook'
import { rightImg, watchImg } from '../../utils'
import Link from './Link/Link'
import VideoCarousel from './VideoCarousel/VideoCarousel'
import styles from './hightlights.module.css'

const Highlights = () => {
	useHightlightsHook('#title', '.link')

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
