<template>
  <div>
    <div class="container">
     
    </div>
  </div>
</template>

<script>
export default {
   head(){
        return {
            title: "Courses Area"
        }
    },
computed: {
  coursesLength(){
    return this.$store.getters.getCourses.length;
  }
}
}
</script>

<style>

</style>
