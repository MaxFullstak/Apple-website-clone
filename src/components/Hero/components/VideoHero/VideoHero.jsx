import styles from './videoHero.module.css'

const VideoHero = ({ videoSrc, id }) => {
	return (
		<div className={styles.container}>
			<p id={id} className='hero-title'>
				iPhone 15 Pro
			</p>
			<div className={styles.video_container}>
				<video
					className='pointer-events-none'
					autoPlay
					muted
					playsInline={true}
					key={videoSrc}
				>
					<source src={videoSrc} type='video/mp4' />
				</video>
			</div>
		</div>
	)
}

export default VideoHero
