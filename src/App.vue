<template>
  <v-app>
    <TheNavbar/> 
    <TheContactUs />
    <TheAbout/>
    <v-content class="ma-4">
       <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheContactUs from '@/components/TheContactUs'
import TheAbout from '@/components/TheAbout'


export default {
  name: 'App',

  components:{
       TheNavbar,
       TheContactUs,
       TheAbout
      
  },
  data: () => ({
    //
  }),
};
</script>
