const Slider = ({videoRef, videoDivRef, videoSpanRef}) => {
	return (
		<div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
			{videoRef.current.map((_, i) => (
				<span
					key={i}
					className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'
					ref={el => (videoDivRef.current[i] = el)}
				>
					<span
						className='absolute h-full w-full rounded-full'
						ref={el => (videoSpanRef.current[i] = el)}
					/>
				</span>
			))}
		</div>
	)
}

export default Slider
