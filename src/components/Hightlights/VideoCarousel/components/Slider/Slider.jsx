import styles from './slider.module.css'

const Slider = ({ videoRef, videoDivRef, videoSpanRef }) => {
	return (
		<div className={styles.slider_style}>
			{videoRef.current.map((_, i) => (
				<span
					key={i}
					className={styles.background_slider}
					ref={el => (videoDivRef.current[i] = el)}
				>
					<span
						className={styles.slider}
						ref={el => (videoSpanRef.current[i] = el)}
					/>
				</span>
			))}
		</div>
	)
}

export default Slider
