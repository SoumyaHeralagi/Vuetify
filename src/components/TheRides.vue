<template>
    <v-layout>
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
      
     
    <v-main>
      
        <v-container
          class="fill-height"
          fluid
          style="min-height: 500px"
        >
        <h1>Ride Details</h1>
          <v-fade-transition mode="out-in">
            <v-row>
              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://assets3.thrillist.com/v1/image/3130707/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg"
                    height="300"
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6" >
                    ROLLER COASTER
                    <div><p>
                        This ride employs a form of elevated railroad track designed with tight turns, steep slopes, and sometimes inversions.Passengers ride along the track in open car.
                    </p>
                    <p>Cost - 250Rs.</p>
                </div>
                
                  </v-card-title>
                </v-card>
              </v-col>
      
              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/db/RWP-Lazy_Wave_River.jpg"
                    height="300"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                    LAZY RIVER
                    <p>Which usually consists of a shallow pool that flows similarly to a river.[1] There is generally a slow current, usually just enough to allow guests to gently ride along lying on rafts. </p>
                    <p>Cost - 200Rs.</p>
                  </v-card-title>
                </v-card>
              </v-col>
      
              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Cyclone_WWW_interaction.JPG/1280px-Cyclone_WWW_interaction.JPG"
                    max-height="300"
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                    WATER SLIDE
                    <p> It is a type of slide designed for warm-weather. Some slides require riders to sit directly on the slide, or on a raft or tube designed to be used with the slide.</p>
                    <p>Cost - 300Rs.</p>
                  </v-card-title>
                </v-card>
              </v-col>
      
              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://thumbs.dreamstime.com/z/pendulum-ride-fast-spinning-fairground-attraction-adolescents-enjoying-their-ride-fair-attraction-pendulum-ride-fast-spinning-156938077.jpg"
                    max-height="300"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                    PENDULUM RIDE
                    <p> This ride is based on the motion of a fixed pendulum. The configuration of the ride consists of a gondola, arm, and an axle. </p>
                    <p>Cost-330Rs.</p>
                  </v-card-title>
                </v-card>
              </v-col>

              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://5.imimg.com/data5/SELLER/Default/2020/12/RI/QZ/EV/119016107/28d014f3-da6e-4b9c-b915-f95ec5f4a11b-43690-6869444444-1000x1000.jpg"
                    max-height="300"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                   BREAK DANCE
                    <p>Breakdance consists of a dodecagonal platform with a diameter of 20 meters,The entire ride is on an incline of 7.5°. When the ride is activated, the platform rotates, the hubs rotate in the opposite direction to the platform. </p>
                    <P>Cost-200Rs.</P>              
                  </v-card-title>
                </v-card>
              </v-col>

              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://c8.alamy.com/comp/B3GTRE/family-having-fun-on-the-log-flume-at-skegness-seafront-fairground-B3GTRE.jpg"
                    max-height="300"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                    LOG FLUMES
                    <p>Log flumes are amusement rides consisting of a water flume and hollow logs or boats. Passengers sit in the logs, which are propelled along the flume by the flow of water.</p> 
                    <p>Cost -350Rs.</p>             
                  </v-card-title>
                </v-card>
              </v-col>

              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bumper_boats_%282%29.jpg/1200px-Bumper_boats_%282%29.jpg"
                    max-height="300"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                    BOAT RIDE 
                    <P>boating is the leisurely activity of travelling by boat</P>
                    <P>Cost-240Rs.</P>
                  </v-card-title>
                </v-card>
              </v-col>

              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://blog.akbartravels.com/wp-content/uploads/2022/11/Shutterstock_242466877.jpg"
                    max-height="300"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                    SKY TILT
                    <P>Sky Tilt is a new attraction where guests can experience the feeling of a tilt from the top of a 150-ft-tall building.</P>
                    <P>Cost-200Rs.</P>
                  </v-card-title>
                </v-card>
              </v-col>

              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://cdn.pixabay.com/photo/2022/09/07/21/23/ferris-wheel-7439636__340.jpg"
                    max-height="300"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                    JOINT WHEEL
                    <P>It is a ride consisting of a rotating upright wheel with multiple passenger-carrying components  attached to the rim in such a way that as the wheel turns.</P>
                    <P>Cost-430Rs.</P>
                  </v-card-title>
                </v-card>
              </v-col>

              
            </v-row>
          </v-fade-transition>
        </v-container>
      
        </v-main>
    
    </v-layout>
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
}),
 }
</script> 
