import styles from './videoFeatures.module.css'

const VideoFeatures = ({ videoRef, exploreVideo, id }) => {
	return (
		<div className={styles.container}>
			<video
				playsInline
				id={id}
				className={styles.style_video}
				preload='none'
				muted
				autoPlay
				ref={videoRef}
			>
				<source src={exploreVideo} type='video/mp4' />
			</video>
		</div>
	)
}

export default VideoFeatures
