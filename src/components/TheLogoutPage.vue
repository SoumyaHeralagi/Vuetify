<template>
  <nav>
    <v-main>
    <v-carousel delimiter-icon="stop" cycle
    prev-icon="mdi-arrow-left"
    next-icon="mdi-arrow-right">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <v-app-bar color="blue darken-4" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase ">
        <span class="font-weight-light">Amusement Park</span>

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/nav" text><v-icon>mdi-logout</v-icon>Logout</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark app class="blue darken-4">
      <v-layout column align-center>
        <v-flex class="mt-1">


        </v-flex>
        <v-flex class="mt-1 mb-1">

        </v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </v-main>
  </nav>
</template>
<script>

export default {
  data: () => ({
    drawer: false,
    links: [
      { icon: 'folder', text: 'Rides', route: '/rides' },
      { icon: 'folder', text: 'Book Ride', route: '/bookRide' },
      { icon: 'folder', text: 'Booking Details', route: '/bookingDetails' },

    ],
    items: [
      {
        src: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/leksumpelxku7kvead8u/PortAventuraParkTicket.jpg'
        
        
      },
      {
        src: 'https://st4.depositphotos.com/1763191/27555/v/1600/depositphotos_275554378-stock-illustration-a-fun-amusement-park-scene.jpg'
      },
      {
        src: 'https://assets3.thrillist.com/v1/image/2681645/1200x600/scale;'
      },
      {
        src: 'https://www.watchmojo.com/uploads/thumbs720/theme.jpg'
      }
    ]

  }),



}
</script>
<style scoped>
.bg{
  background: url('https://st4.depositphotos.com/1763191/27555/v/1600/depositphotos_275554378-stock-illustration-a-fun-amusement-park-scene.jpg');
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
background-size: cover;
background-position: center top;
border-radius: 4px;
}
</style>
