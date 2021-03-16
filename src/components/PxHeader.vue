<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
         <img src="@/assets/logo.png" class="mr-2" width="50px" height="50px"/>
          <span class="font-semibold text-xl tracking-tight">CriptoMonedas</span>
        </div>
        <div class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
             <ul>
             <router-link class="font-semibold text-xl tracking-tight" to="/">Home</router-link> |
              <router-link class="font-semibold text-xl tracking-tight" to="/about">About</router-link> |
              <router-link  class="font-semibold text-xl tracking-tight" to="/contact">Contact</router-link>
        </ul>
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
export default {
    name:'PxHeader',

}
</script>

<style lang="es">
 
</style>