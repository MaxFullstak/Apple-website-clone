import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { yellowImg } from '../utils'

import * as THREE from 'three'
import { animateWithGsapTimeline } from '../utils/animations'

export const useModelHook = (id_1, id_2, id_3) => {
	const [size, setSize] = useState('small')
	const [model, setModel] = useState({
		title: 'iPhone 15 pro in Natural Titanium',
		color: ['#8f8A81', '#FFE7B9', '#6F6C64'],
		img: yellowImg,
	})

	//camera control for model view
	const cameraControlSmall = useRef()
	const cameraControlLarge = useRef()

	// model
	const small = useRef(new THREE.Group())
	const large = useRef(new THREE.Group())

	// rotation
	const [smallRotation, setSmallRotation] = useState(0)
	const [largeRotation, setLargeRotation] = useState(0)

	const tl = gsap.timeline()

	useEffect(() => {
		if (size === 'large') {
			animateWithGsapTimeline(tl, small, smallRotation, id_1, id_2, {
				transform: 'translateX(-100%)',
				duration: 2,
			})
		}

		if (size === 'small') {
			animateWithGsapTimeline(tl, large, largeRotation, id_2, id_1, {
				transform: 'translateX(0)',
				duration: 2,
			})
		}
	}, [size])

	useGSAP(() => {
		gsap.to(id_3, { y: 0, opacity: 1 })
	}, [])

	return {
		size,
		setSize,
		model,
		setModel,
		cameraControlSmall,
		cameraControlLarge,
		smallRotation,
		setSmallRotation,
		largeRotation,
		setLargeRotation,
		small,
		large,
	}
}

/* '#view1', '#view2', '#heading', */
