const ChangeSize = ({sizes, setSize, size}) => {
	return (
		<button className='size-btn-container'>
			{sizes.map(({ label, value }) => (
				<span
					className='size-btn'
					style={{
						backgroundColor: size === value ? 'white' : 'transparent',
						color: size === value ? 'black' : 'white',
					}}
					onClick={() => setSize(value)}
					key={label}
				>
					{label}
				</span>
			))}
		</button>
	)
}

export default ChangeSize