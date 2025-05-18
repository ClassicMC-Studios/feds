<script>
	let {left,top} = $props();
    let firstLeft= $state(left);
    let firstTop= $state(top);
	
	let moving = $state(false);
	
	function onMouseDown() {
		moving = true;
	}
	
	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}
	
	function onMouseUp() {
		moving = false;
        left=firstLeft;top=firstTop;
	}
	
// 	$: console.log(moving);
</script>

<style>
	.draggable {
		user-select: none;
		cursor: move;
		/* border: solid 1px gray; */
		position: absolute;
	}
</style>

<section on:mousedown={onMouseDown} style="left: {left}px; top: {top}px;" class="draggable">
	<slot></slot>
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />