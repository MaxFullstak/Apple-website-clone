import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { animateWithGsap } from '../utils/animations'

export const useFeaturesHook = (id_1, id_2, class_1, class_2) => {
	const videoRef = useRef()
	useGSAP(() => {
		gsap.to(id_1, {
			scrollTrigger: {
				trigger: id_1,
				toggleActions: 'play pause reverse restart',
				start: '-10% bottom',
			},
			onComplete: () => {
				videoRef.current.play()
			},
		})

		animateWithGsap(id_2, { y: 0, opacity: 1 })
		animateWithGsap(
			class_1,
			{ scale: 1, opacity: 1, ease: 'power1' },
			{ scrub: 5.5 }
		)
		animateWithGsap(class_2, {
			y: 0,
			opacity: 1,
			ease: 'power2.inOut',
			duration: 1,
		})
	}, [])

	return {
		videoRef
	}
}
