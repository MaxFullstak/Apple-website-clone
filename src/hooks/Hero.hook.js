import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'

export function useHeroHook(id_1, id_2) {
	const [videoSrc, setVideoSrc] = useState(
		window.innerWidth < 760 ? smallHeroVideo : heroVideo
	)

	const handleVideoSrcSet = () => {
		if (window.innerWidth < 760) {
			setVideoSrc(smallHeroVideo)
		} else {
			setVideoSrc(heroVideo)
		}
	}
	useEffect(() => {
		window.addEventListener('resize', handleVideoSrcSet)

		return () => {
			window.removeEventListener('resize', handleVideoSrcSet)
		}
	}, [])

	useGSAP(() => {
		gsap.to(id_1, { opacity: 1, delay: 2 })
		gsap.to(id_2, { opacity: 1, y: -50, delay: 2 })
	}, [])

	return {
		videoSrc,
	}
}
