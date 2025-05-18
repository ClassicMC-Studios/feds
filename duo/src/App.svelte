<script>
  import Draggable from "./lib/Draggable.svelte";
  let text = [
    "Hola","com","estàs"
  ]
  let w = $state()
  let h = $state()
</script>
<style>
  *{
    transition: 0.3s;
    color:white;
    font-family: Arial, Helvetica, sans-serif;
  }
  :global(body){
    display: block;
  }
  .main{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
  }
  .t{
    display:inline;
    padding:20px;
    margin:7px;
    border-radius: 10px;
    background-color: rgb(49, 181, 49);
  }
  .t:hover{
    margin:10px;
    padding:22px;
  }
  .landing{
    position:absolute;
    background-color: antiquewhite;
    left:50%;
    transform: translate(-50%);
    padding:50px;
    border-radius: 10px;
    color:black;
  }
</style>
<div class="landing" bind:clientWidth={w} bind:clientHeight={h}>
    w:{w}, h{h}
  </div>
<div class="main">
  {#each text as t,i}
    <Draggable top={0} left={-150+(100*i)}>
      <div class="t">{t}</div>
    </Draggable>
  {/each}
</div>