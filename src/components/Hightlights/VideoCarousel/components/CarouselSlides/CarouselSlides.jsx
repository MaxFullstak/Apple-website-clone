import { hightlightsSlides } from '../../../../../constants'
import styles from './carouselSlides.module.css'

const CarouselSlides = ({
	handleLoadedMetaData,
	handleProcess,
	setVideo,
	videoRef,
}) => {
	return (
		<div className={styles.container}>
			{hightlightsSlides.map((list, i) => (
				<div key={list.id} id='slider' className='sm:pr-20 pr-10'>
					<div className='video-carousel_container'>
						<div className={styles.video_container}>
							<video
								id='video'
								playsInline={true}
								className={`${
									list.id === 2 && 'translate-x-44'
								} pointer-events-none`}
								preload='auto'
								muted
								ref={el => (videoRef.current[i] = el)}
								onEnded={() =>
									i !== 3
										? handleProcess('video-end', i)
										: handleProcess('video-last')
								}
								onPlay={() => setVideo(pre => ({ ...pre, isPlaying: true }))}
								onLoadedMetadata={e => handleLoadedMetaData(i, e)}
							>
								<source src={list.video} type='video/mp4' />
							</video>
						</div>

						<div className={styles.text_container}>
							{list.textLists.map((text, i) => (
								<p key={i} className={styles.text_style}>
									{text}
								</p>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default CarouselSlides
