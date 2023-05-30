<template>
  <v-app>
    
    <router-view></router-view>
    <TheFooter />
  </v-app>
</template>

<script>

import TheFooter from '@/components/TheFooter'



export default {
  name: 'App',

  components: {
   
    TheFooter

  },
  data: () => ({
    //
  }),
};
</script>
