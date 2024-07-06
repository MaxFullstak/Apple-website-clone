import { hightlightsSlides } from '../../../../../constants'

const CarouselSlides = ({ handleLoadedMetaData, handleProcess, setVideo, videoRef }) => {
	return (
		<div className='flex items-center'>
			{hightlightsSlides.map((list, i) => (
				<div key={list.id} id='slider' className='sm:pr-20 pr-10'>
					<div className='video-carousel_container'>
						<div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
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

						<div className='absolute top-12 left-[5%] z-10'>
							{list.textLists.map((text, i) => (
								<p key={i} className='md:text-2xl text-xl font-medium'>
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