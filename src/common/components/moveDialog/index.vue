<!-- 弹窗组件 -->
<style lang='scss' scope>
  /*
  * 移动窗口公共样式
  */
  .moveAleart{
    background:#00528B;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  /*
  * 添加周边shadow边框
  */
  .allShadow{
    box-shadow: 0px 0px 24px rgba(40, 47, 103, 0.76);
    position:fixed;
    z-index: 1000;
    background:#002f59;
    
  }
  .mainStyle {
    color: black;
  }
  .moveDialogTitle {
    color: white;
    width: 100%;
    padding-left: 50px;
    font-size: 16px;
    letter-spacing: 1px;
  }
  .moveDialogClose {
    font-size: 24px;
    color:white;
    line-height: 50px;
    margin-right: 20px;
  }
</style>
<template>
  <div class="allShadow" id='movealert' v-if='isShow'>
    <header class='moveAleart' @mousedown.prevent="down">          
      <slot name='leftTitle'></slot>
      <h4 class="moveDialogTitle">{{ title }}</h4>
      <slot name='middleTitle'></slot>
      <i class="el-icon-circle-close-outline moveDialogClose" @click="closeAlert"></i>
    </header>
    <main class="mainStyle">
      <slot name='move'></slot>
    </main>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: {
    title: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    down () {
      this.movealert()
    },
    closeAlert () {
      this.isShow = false
    },
    showAlert () {
      this.isShow = true
    },
    movealert () {
      var movealert = document.getElementById('movealert')
      var l = Number(movealert.style.left.slice(0, movealert.style.left.length - 2))
      var t = Number(movealert.style.top.slice(0, movealert.style.top.length - 2))
      var w = Number(movealert.style.width.slice(0, movealert.style.width.length - 2))
      document.onmousemove = function (e) {
        l += e.movementX
        t += e.movementY
        if (l >= window.innerWidth - w || e.clientX >= window.innerWidth - 100) {
          l = window.innerWidth - w
        } else if (l < 0 || e.clientX < 25) {
          l = 0
        }
        if (t < 0 || e.clientY < 25) {
          t = 0
        } else if (t >= window.innerHeight - 50 || e.clientY >= window.innerHeight - 25) {
          t = window.innerHeight - 50
        }
        movealert.style.left = l + 'px'
        movealert.style.top = t + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = null
      }
    }
  }
}
</script>