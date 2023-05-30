<template>
    <v-footer
      class=" text-center d-flex flex-column white--text" height="auto"  color="#1A237E"
    >
    <div>
        <v-btn 
          v-for="icon in icons" 
          :key="icon"
          class="mx-3 ehite--text"
          icon
          
          variant="text"
        ></v-btn>
      </div>
   
  
      <div class="pt-0">
        We are so much more than any other park - a world where everyone comes together and enjoys the little moments.
        A life of fun is what everyone deserves, so come on down to the Amusement Park closest to you!
      </div>
  
      <v-divider></v-divider>
  
      <div>
        {{ new Date().getFullYear() }} — <strong>Amusement Park</strong>
      </div>
    </v-footer>
  </template>
  <script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>