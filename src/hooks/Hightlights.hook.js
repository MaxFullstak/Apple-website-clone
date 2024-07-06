import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const useHighlightsHook = ({ id_, className_ }) => {
	useGSAP(() => {
		gsap.to(id_, { opacity: 1, y: 0 })
		gsap.to(className_, { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
	}, [])
}
