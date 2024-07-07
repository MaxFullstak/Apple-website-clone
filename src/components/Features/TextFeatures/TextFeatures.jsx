const TextFeatures = ({firstText, highlightText, finishText}) => {
	return (
		<div className='flex-1 flex-center'>
			<p className='feature-text g_text'>
				{firstText}{' '}
				<span className='text-white'>
					{highlightText}	
				</span>
				{finishText}
			</p>
		</div>
	)
}

export default TextFeatures