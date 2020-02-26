<template>
  <div> bbbb : {{ radom }}</div>
</template>

<script>
export default {
  data() {
    return {
      radom: null
    }
  },
  methods: {
    aaa() {
      this.radom = Math.random(10, 2)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.aaa()
    })
  }
}
</script>

<style>

</style>