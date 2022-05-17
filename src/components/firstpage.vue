<template>
  <div>
    <div class="h1">
      <ph></ph>
    </div>
    <div class="b1">
      <pb></pb>
    </div>
  </div>
</template>

<script>
import ph from '../FIRST/Pghead.vue'
import pb from '../FIRST/Pgbody.vue'
export default {
  name: 'FirstPage',
  components: {
    ph,
    pb
  }
}
</script>

<style>
  .h1{
    width:100%;
    height:100%;
    position: fixed;
  }
  .b1{
    width:100%;
  }
</style>
