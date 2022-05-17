<template>
  <div class="p1">
    <div class="tx">
      <img src="../assets/tx.png" />
    </div>
    <div class="js">
    <p>个人主页</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PeoPle'
}
</script>

<style>
  .p1{
    width: 100%;
    height: 100%;
  }
  .p1 img{
    margin-top: 30px;
    margin-left: 30px;
    float: left;
    width: 200px;
    border-radius: 50%;
    background-color: aliceblue;
  }
  .js{
    color: aliceblue;
    width: 100%;
    font-size: 20px;
    text-align: left;
    margin-left: 300px;
  }
</style>
