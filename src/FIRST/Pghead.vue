<template>
  <div class="h">
    <div class="h1">
    <ul>
      <li><router-link to="/firstpage/index">首页</router-link></li>
      <li><router-link to="/firstpage">通知</router-link></li>
      <li><router-link to="/firstpage">新闻</router-link></li>
      <li><router-link to="/firstpage/people">主页</router-link></li>
    </ul>
    </div>
      <div class="h2">
      <router-view></router-view>
      </div>
  </div>
</template>

<script>

export default {
  name: 'HeaD',
  data () {
    return {
      line: [
        '菜单1',
        '菜单2',
        '菜单3',
        '个人信息'
      ]
    }
  }
}
</script>

<style>
  .h{
    width: 100%;
    height: 100%;
    background-color: #af2b2b;
  }
  .h1{
    position: absolute;
    top: 0;
    margin: 0;
  }
  .h2{
    margin-top:30px;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li{
    width: 25%;
    float: left;
    text-align: center;
    line-height: 30px;
    color: rgb(255, 255, 255);
    background-color: black;
  }
  a{
    text-decoration: none;
    color: rgb(255, 255, 255);
  }
  li a:hover:not(.active){
    display: block;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
  }
  .router-link-exact-active{
    display: block;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
  }
  </style>
