import { footerLinks } from '../../../constants'

const LinksFooter = () => {
	return (
		<>
			<p className='font-semibold text-gray text-xs'>
				Copyright @ 2024 Apple Inc. All rights reserved
			</p>
			<div className='flex'>
				{footerLinks.map((link, i) => (
					<p key={link} className='font-semibold text-gray text-xs'>
						{link}{' '}
						{i !== footerLinks.length - 1 && <span className='mx-2'>|</span>}
					</p>
				))}
			</div>
		</>
	)
}

export default LinksFooter
