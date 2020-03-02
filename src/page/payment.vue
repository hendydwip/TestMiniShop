<template>
  <div class='flex items-center justify-center bg-gray-500 h-screen'>
    <div class='border w-1/2 rounded-md bg-white p-4'>
      <div>PAYMENT</div>
      <div class='flex w-full justify-between w-full border-b' v-for='(index,key) in cart' :key='key'>
        <span>{{index.name}} x {{index.amount}}</span>
        <span>{{index.total}} GIL</span>
      </div>
      <div class='flex w-full justify-end'>
        TOTAL : {{total}} GIL
      </div>
      <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-4' type='submit' @click='pay'>PAY</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name:'payment',
  mounted(){
    if(this.cart.length == 0){
      this.$router.push('/page-buyer')
    }
  },
  computed:{
    ...mapGetters([
      'cart',
      'total',
    ])
  },
  methods:{
    ...mapMutations([
      'clearCart'
    ]),
    pay(){
      this.clearCart()
      this.$store.commit("FILTER_PRODUCT")
      this.$router.push('/page-buyer')
    }
  }
}
</script>

<style>

</style>