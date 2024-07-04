import { useHeroHook } from '../../hooks/Hero.hook'
import Cta from './components/cta/cta'
import VideoHero from './components/VideoHero/VideoHero'
import styles from './hero.module.css'

const Hero = () => {
	const { videoSrc } = useHeroHook('#hero', '#cta')

	return (
		<section className={styles.container}>
			<VideoHero videoSrc={videoSrc} id='hero' />
			<Cta id='cta' />
		</section>
	)
}

export default Hero
