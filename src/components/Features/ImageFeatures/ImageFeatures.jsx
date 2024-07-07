const ImageFeatures = ({img, alt}) => {
	return (
		<div className='overflow-hidden flex-1 h-[50vh]'>
			<img src={img} alt={alt} className='feature-video g_grow' />
		</div>
	)
}

export default ImageFeatures
