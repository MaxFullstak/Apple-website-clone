import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const useHightlightsHook = (id_1, class_1) => {
	useGSAP(() => {
		gsap.to(id_1, { opacity: 1, y: 0 })
		gsap.to(class_1, { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
	}, [])
}
