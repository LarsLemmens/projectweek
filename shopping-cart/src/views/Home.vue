<template>
    <h1>PRODUCTEN</h1>
    <h2>{{products}}</h2>
</template>
	
<script>
// @ is an alias to /src
	
export default {
  name: 'Home',
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  components: {
    
  }
}
</script>