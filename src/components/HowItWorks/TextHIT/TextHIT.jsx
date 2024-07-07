import styles from './textHIT.module.css'

const TextHIT = () => {
	return (
		<div className='hiw-text-container'>
			<div className={styles.text_container}>
				<p className='hiw-text g_fadeIn'>
					A17 Pro is an entirely new class of IPhone chip that delivers our{' '}
					<span className='text-white'>best graphic performance by far</span>.
				</p>

				<p className='hiw-text g_fadeIn'>
					Mobile{' '}
					<span className='text-white'>
						games will look and feel so immersive
					</span>
					, with incredibly detailed environments and characters.
				</p>
			</div>

			<div className='flex-1 flex justify-center flex-col g_fadeIn'>
				<p className='hiw-text'>New</p>
				<p className='hiw-bigtext'>Pro-class GPU</p>
				<p className='hiw-text'>with 6 cores</p>
			</div>
		</div>
	)
}

export default TextHIT
