import { useVideoCarouselHook } from '../../../hooks/VideoCarousel.hook'
import ButtonCarousel from './components/ButtonCarousel/ButtonCarousel'

import CarouselSlides from './components/CarouselSlides/CarouselSlides'
import Slider from './components/Slider/Slider'

const VideoCarousel = () => {
	const {
		videoRef,
		videoSpanRef,
		videoDivRef,
		video,
		setVideo,
		handleProcess,
		handleLoadedMetaData,
	} = useVideoCarouselHook('#slider', '#video')
	const { isLastVideo, isPlaying } = video
	return (
		<>
			<CarouselSlides
				handleLoadedMetaData={handleLoadedMetaData}
				handleProcess={handleProcess}
				setVideo={setVideo}
				videoRef={videoRef}
			/>

			<div className='relative flex-center mt-10'>
				<Slider
					videoRef={videoRef}
					videoDivRef={videoDivRef}
					videoSpanRef={videoSpanRef}
				/>

				<ButtonCarousel
					isLastVideo={isLastVideo}
					isPlaying={isPlaying}
					handleProcess={handleProcess}
				/>
			</div>
		</>
	)
}

export default VideoCarousel
