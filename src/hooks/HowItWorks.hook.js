import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import {animateWithGsap} from '../utils/animations'

export const useHowItWorksHook = (id_1, class_1) => {
	const videoRef = useRef()
	useGSAP(() => {
		gsap.from(id_1, {
			scrollTrigger: {
				trigger: id_1,
				start: '20% bottom',
			},
			opacity: 1,
			scale: 2,
			duration: 2,
			ease: 'power2.inOut',
		})

		animateWithGsap(class_1, {
			opacity: 1,
			y: 0,
			duration: 1,
			ease: 'power2.inOut',
		})
	}, [])

	return {
		videoRef,
	}
}
