<template>
  <div>
    <Navbar/>
    <Nuxt />
  </div>
</template>


<script>
import Navbar from '../components/Navbar'

export default {
  components: {
    Navbar
  },
  created(){
    this.$store.dispatch('fetchCourse');
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #666;
}
</style>
