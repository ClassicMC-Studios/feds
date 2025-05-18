<script>
  import { T, useTask } from '@threlte/core'
  import { interactivity } from '@threlte/extras'
  import { Spring } from 'svelte/motion'
  import { useLoader } from '@threlte/core'
  import { TextureLoader } from 'three'
  const { load } = useLoader(TextureLoader)

  interactivity()

  const scale = new Spring(1)

  let rotation = 0
  useTask((delta) => {
    rotation += delta
  })
  const onSomeEvent = async () => {
    // Load an asset and await the result.
    const texture = await load('lib/phonestation.fbx')
  }
</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  oncreate={(ref) => {
    ref.lookAt(0, 1, 0)
  }}
/>

<T.Mesh
  rotation.y={rotation}
  position.y={1}
  scale={scale.current}
  onpointerenter={() => {
    scale.target = 1.5
  }}
  onpointerleave={() => {
    scale.target = 1
  }}
>
  <T.BoxGeometry args={[1, 2, 1]} />
  <T.MeshBasicMaterial color="lightgreen" />
</T.Mesh>
{#await load('lib/phonestation.fbx') then map}
  <T.MeshStandardMaterial {map} />
{/await}