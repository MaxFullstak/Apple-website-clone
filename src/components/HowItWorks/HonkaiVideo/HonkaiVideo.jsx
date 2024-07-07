import styles from './honkaiVideo.module.css'

const HonkaiVideo = ({ frameImg, videoRef, frameVideo }) => {
	return (
		<div className={styles.container}>
			<div className={styles.container_video}>
				<div className='overflow-hidden'>
					<img src={frameImg} alt='frame' className={styles.image_style} />
				</div>
				<div className='hiw-video'>
					<video
						className='pointer-events-none'
						playsInline
						preload='none'
						muted
						autoPlay
						ref={videoRef}
					>
						<source src={frameVideo} type='video/mp4' />
					</video>
				</div>
			</div>

			<p className={styles.text_style}>Honkai: Star Rail</p>
		</div>
	)
}

export default HonkaiVideo
