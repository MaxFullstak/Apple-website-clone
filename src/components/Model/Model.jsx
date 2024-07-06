import ModelView from './ModelView'
import styles from './model.module.css'

import { View } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { models, sizes } from '../../constants'
import { useModelHook } from '../../hooks/Model.hook'
import ChangeSize from './ChangeSize'
import ColorChange from './ColorChange'

const Model = () => {
	const {
		size,
		setSize,
		model,
		setModel,
		cameraControlSmall,
		cameraControlLarge,
		setSmallRotation,
		setLargeRotation,
		small,
		large,
	} = useModelHook('#view1', '#view2', '#heading')

	return (
		<section className='common-padding'>
			<div className='screen-max-width'>
				<h1 id='heading' className='section-heading'>
					Take a closer look.
				</h1>

				<div className={styles.container}>
					<div className={styles.model_container}>
						<ModelView
							index={1}
							groupRef={small}
							gsapType='view1'
							controlRef={cameraControlSmall}
							setRotationState={setSmallRotation}
							item={model}
							size={size}
						/>
						<ModelView
							index={2}
							groupRef={large}
							gsapType='view2'
							controlRef={cameraControlLarge}
							setRotationState={setLargeRotation}
							item={model}
							size={size}
						/>

						<Canvas
							className='w-full h-full'
							style={{
								position: 'fixed',
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								overflow: 'hidden',
							}}
							eventSource={document.getElementById('root')}
						>
							<View.Port />
						</Canvas>
					</div>

					<div className={styles.another_container}>
						<p className={styles.title_model}>{model.title}</p>
						<div className='flex-center'>
							<ColorChange models={models} setModel={setModel} />

							<ChangeSize sizes={sizes} setSize={setSize} size={size} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Model
