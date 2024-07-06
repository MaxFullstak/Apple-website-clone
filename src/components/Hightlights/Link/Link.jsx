const Link = ({ title, image, styleName }) => {
	return (
		<p className={styleName}>
			Watch the {title}
			<img src={image} alt={title} className='ml-2' />
		</p>
	)
}

export default Link
