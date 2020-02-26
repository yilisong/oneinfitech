<template>
  <div>
    <mobileWin ref="PersonMobileWin" :title="buildName" style="width: 600px;top:100px;left:1000px;">
      <div slot='leftTitle' style="margin-left: 15px;" >
        <el-button title="title" type="text" @click="editWin">编辑</el-button>          
      </div>
      <div slot='move' >
      <!-- .....content -->
      </div>
    </mobileWin>
  </div>
</template>

<script>
import $ from 'jquery'
import mobileWin from '@/common/components/mobileWin/mobileWin' // 浮动窗体
export default {
  components: {
    mobileWin
  },
  data() {
    return {
      residentialQuartersId: '',
      buildName:'',
      regionNode:''
    }
  },
  methods: {
    winLeft() {
      const leftW = window.innerWidth - 440
      return leftW + 'px'
    },
    openWin() {
      this.$refs.PersonMobileWin.showAlert()
    },
    //关闭编辑窗体
    closeEditBuild() {
      this.$refs.personByBuilding.loadByBuild(false)
    },
    //弹出编辑窗体
    editWin() {
      this.$refs.editBuildPanel.setData(this.residentialQuartersId, this.regionNode)
    },
    setData(build, rNode) {
      this.buildName = build.buildName
      this.regionNode = rNode
      this.residentialQuartersId = build.id
      this.$refs.personByBuilding.setData(build.id, rNode)
      this.openWin()
    }
  }
}
</script>
<style scoped>
.el-button--text{
  color: #ffffff;
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
}
</style>
