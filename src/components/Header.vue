<template>
<div class='w-full flex flex-row bg-blue-400 p-4 items-center'>
  <div class='px-4'>
    <span class='text-3xl italic'>Final Fantasy Market</span>
  </div>
  <div class='px-4'>
    <!-- <span class='p-2 mx-2 rounded border cursor-pointer hover:bg-blue-600 hover:text-white' @click='$store.commit("FILTER_PRODUCT")'>All</span>
    <span class='p-2 mx-2 rounded border cursor-pointer hover:bg-blue-600 hover:text-white' @click='$store.commit("FILTER_PRODUCT", "Unrelease")'>Unrelease</span>
    <span class='p-2 mx-2 rounded border cursor-pointer hover:bg-blue-600 hover:text-white' @click='$store.commit("FILTER_PRODUCT", "Release")'>Release</span> -->
    <router-link class='p-2 mx-2 rounded border cursor-pointer hover:bg-blue-600 hover:text-white' to='/page-buyer'>All</router-link>
    <router-link class='p-2 mx-2 rounded border cursor-pointer hover:bg-blue-600 hover:text-white' to='/page-buyer/Unrelease'>Unrelease</router-link>
    <router-link class='p-2 mx-2 rounded border cursor-pointer hover:bg-blue-600 hover:text-white' to='/page-buyer/Release'>Release</router-link>    
  </div>
  <div class='w-full justify-end flex'>
    <span class='p-2 mx-2 rounded border cursor-pointer hover:bg-blue-600 hover:text-white' @click='logout'>Logout</span>
  </div>
</div>
</template>

<script>
export default {
  methods:{
    logout(){
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>