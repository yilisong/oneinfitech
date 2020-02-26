<template>
  <v-region @values="regionChange"></v-region>
</template>
 
<script>
export default {
  methods: {
    //receive selected region entries
    regionChange(data) {
      console.log(data);
    }
  }
}
</script>