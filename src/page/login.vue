<template>
  <div class='flex items-center justify-center bg-gray-500 h-screen'>
    <div class='border w-1/5 rounded-md bg-white p-4'>
      <div class='mb-4 bg-blue-400 justify-center flex text-white flex-grow p-2 text-xl rounded-lg'>LOGIN</div>
      <div class='flex w-full justify-between items-center w-full border-b'>
        <div class='w-1/3'>username</div>
        <input type="text" class='border-4 w-full' v-model='username'>
      </div>
      <div class='flex w-full justify-between items-center w-full border-b'>
        <div class='w-1/3'>password</div>
        <input type="password" class='border-4 w-full' v-model='pass'>
      </div>      
      <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-4' type='submit' @click='login'>Login</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name:'login',
  mounted(){
    if(localStorage.getItem('userinfo') !== null){
      this.$store.dispatch('fectUser')
      this.$router.push('/page-buyer')
    }else{
      this.$store.dispatch('fectUser')
    }    
  },
  data(){
    return{
      username: '',
      pass: ''
    }
  },
  computed:{
    ...mapGetters([
      'user',
    ])
  },
  methods:{
    ...mapMutations([
      'clearCart'
    ]),
    login(){
      if(this.user.username == this.username && this.user.password == this.pass){
        localStorage.setItem('userinfo', JSON.stringify(this.user))
        this.$router.push('/page-buyer')
      }else{
        alert('username dan password itu admin')
      }
    }
  }
}
</script>

<style>

</style>