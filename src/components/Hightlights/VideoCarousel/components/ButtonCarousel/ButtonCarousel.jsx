import { pauseImg, playImg, replayImg } from '../../../../../utils'

const ButtonCarousel = ({ isLastVideo, isPlaying, handleProcess }) => {
	return (
		<button className='control-btn'>
			<img
				src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
				alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
				onClick={
					isLastVideo
						? () => handleProcess('video-reset')
						: !isPlaying
						? () => handleProcess('play')
						: () => handleProcess('pause')
				}
			/>
		</button>
	)
}

export default ButtonCarousel
