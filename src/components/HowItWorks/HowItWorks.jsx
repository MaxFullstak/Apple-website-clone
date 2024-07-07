import { useHowItWorksHook } from '../../hooks/HowItWorks.hook'
import { chipImg, frameImg, frameVideo } from '../../utils'
import CPU from './CPU/CPU'
import HonkaiVideo from './HonkaiVideo/HonkaiVideo'
import TextHIT from './TextHIT/TextHIT'
import Titles from './Titles/Titles'

const HowItWorks = () => {
	const { videoRef } = useHowItWorksHook('#chip', '.g_fadeIn')

	return (
		<section className='common-padding'>
			<div className='screen-max-width'>
				<CPU chipImg={chipImg} />

				<Titles />

				<HonkaiVideo
					frameImg={frameImg}
					frameVideo={frameVideo}
					videoRef={videoRef}
				/>
				
				<TextHIT />
			</div>
		</section>
	)
}

export default HowItWorks
