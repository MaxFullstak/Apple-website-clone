import {
	finishText_1,
	finishText_2,
	firstText_1,
	firstText_2,
	mainText_1,
	mainText_2,
} from '../../constants'
import { useFeaturesHook } from '../../hooks/Features.hook'
import { explore1Img, explore2Img, exploreVideo } from '../../utils'
import styles from './features.module.css'
import ImageFeatures from './ImageFeatures/ImageFeatures'
import TextFeatures from './TextFeatures/TextFeatures'
import VideoFeatures from './VideoFeatures/VideoFatures'

const Features = () => {
	const { videoRef } = useFeaturesHook(
		'#exploreVideo',
		'#features_title',
		'.g_grow',
		'.g_text'
	)

	return (
		<section className={styles.container}>
			<div className='screen-max-width'>
				<div className='mb-12 w-full'>
					<h1 id='features_title' className='section-heading'>
						Explore the full story.
					</h1>
				</div>

				<div className={styles.another_container}>
					<div className={styles.text_container}>
						<h2 className={styles.style_title}>IPhone</h2>
						<h2 className={styles.style_subtitle}>Forged in titanium.</h2>
					</div>

					<div className={styles.container_video_image}>
						<VideoFeatures
							videoRef={videoRef}
							exploreVideo={exploreVideo}
							id='exploreVideo'
						/>

						<div className={styles.container_image}>
							<div className='feature-video-container'>
								<ImageFeatures img={explore1Img} alt='titanium' />
								<ImageFeatures img={explore2Img} alt='titanium 2' />
							</div>

							<div className='feature-text-container'>
								<TextFeatures
									firstText={firstText_1}
									highlightText={mainText_1}
									finishText={finishText_1}
								/>
								<TextFeatures
									firstText={firstText_2}
									highlightText={mainText_2}
									finishText={finishText_2}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
