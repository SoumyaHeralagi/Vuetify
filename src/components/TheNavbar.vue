<template>
  <nav>
    <v-main>
      <v-carousel cycle>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </v-main>


    <v-app-bar color="blue darken-4" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase ">
        <span class="font-weight-light">Amusement Park</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/about" text>About</v-btn>
      <v-btn to="/contact" text>Contact</v-btn>
      <v-btn to="/login" text> <v-icon>mdi-login</v-icon>Login</v-btn>
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

    <v-flex s12 sm7 offset-sm3>
      <h1>Park Timings</h1>
      <v-card>
        <v-card-title class="justify-center">
          <div>
            <p>Amusement Park Timings:</p>
            <P>* 11:00 am to 6:00 pm (weekdays)</P>
            <p>* 11:00 am to 7:00 pm (weekends/holidays)</p>
          </div>

          <div>
            <p>Water Park Timings</p>
            <p>* 12:30 pm to 5:30 pm (weekdays)</p>
            <p>* 12:00 pm to 6:00 pm (weekends/holidays)</p>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <v-main>
      <h1 class="text-center">Land Rides</h1>
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col cols="4">
            <v-card>
              <v-img
                src="https://assets3.thrillist.com/v1/image/3130707/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg"
                height="300" class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                ROLLER COASTER
                <div>
                  <p>
                    This ride employs a form of elevated railroad track designed with tight turns, steep slopes, and
                    sometimes inversions.
                  </p>
                </div>
              </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img
                src="https://thumbs.dreamstime.com/z/pendulum-ride-fast-spinning-fairground-attraction-adolescents-enjoying-their-ride-fair-attraction-pendulum-ride-fast-spinning-156938077.jpg"
                max-height="300" cover class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                PENDULUM RIDE
                <p> This ride is based on the motion of a fixed pendulum. The configuration of the ride consists of a
                  gondola, arm, and an axle. </p>
              </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img src="https://blog.akbartravels.com/wp-content/uploads/2022/11/Shutterstock_242466877.jpg"
                max-height="300" cover class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                SKY TILT
                <P>Sky Tilt is a new attraction where guests can experience the feeling of a tilt from the top of a
                  150-ft-tall building.</P>
              </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img
                src="https://res.cloudinary.com/simplotel/image/upload/x_0,y_336,w_992,h_745,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/wonderla-bengaluru/PIRATE_SHIP_felafi"
                max-height="300" cover class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                PIRATE SHIP
                <p>This is a swing in the shape of a wooden craft. As it gathers momentum,
                  it swings to an arc of 180 degrees, giving you an accelerating rush of
                  adrenaline. Riders are safely harnessed in their seats. This ride is
                  certainly not for the weak-hearted.</p>
              </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img
                src="https://res.cloudinary.com/simplotel/image/upload/x_89,y_0,w_1423,h_1068,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/bengaluru-park/Toon_Tango_-_Copy_y9c8nz"
                max-height="300" cover class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                TOON TANGO
                <p>This is the ride for all the age groups where two or three of you can
                  squeeze in and seat yourselves in one of the four capsules that emanate
                  from a central pivot and are gently spun around as if in a waltz to the
                  tune of music.</p>
              </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img src="https://cdn.pixabay.com/photo/2022/09/07/21/23/ferris-wheel-7439636__340.jpg" max-height="300"
                cover class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                JOINT WHEEL
                <P>It is a ride consisting of a rotating upright wheel with multiple passenger-carrying components
                  attached
                  to the rim in such a way that as the wheel turns.</P>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-main>

    <v-main>
      <h1 class="text-center">Water Rides</h1>
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col cols="4">
            <v-card>
              <v-img src="https://upload.wikimedia.org/wikipedia/commons/d/db/RWP-Lazy_Wave_River.jpg" height="300" cover
                class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                LAZY RIVER
                <p>Which usually consists of a shallow pool that flows similarly to a river.[1] There is generally a slow
                  current, usually just enough to allow guests to gently ride along lying on rafts. </p>
              </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Cyclone_WWW_interaction.JPG/1280px-Cyclone_WWW_interaction.JPG"
                max-height="300" class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                WATER SLIDE
                <p> It is a type of slide designed for warm-weather. Some slides require riders to sit directly on the
                  slide, or on a raft or tube designed to be used with the slide.</p>
              </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img
                src="https://www.fabhotels.com/blog/wp-content/uploads/2018/07/FeatureImage600x400-8-1280x720.jpg"
                max-height="300" class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                FUN RACERS
                <p>Fun Racers are water slides where you slither down lying prostrate on
                  rubber mats. The downward slide is interspaced with level portions
                  for a wonderful experience. Fun Racers is a very enjoyable
                  ride suitable for all age groups.</p>
              </v-card-title>
            </v-card>
          </v-col>


          <v-col cols="4">
            <v-card>
              <v-img
                src="https://5.imimg.com/data5/SELLER/Default/2020/12/RI/QZ/EV/119016107/28d014f3-da6e-4b9c-b915-f95ec5f4a11b-43690-6869444444-1000x1000.jpg"
                max-height="300" cover class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                BREAK DANCE
                <p>Breakdance consists of a dodecagonal platform with a diameter of 20 meters,The entire ride is on an
                  incline of 7.5°. When the ride is activated, the platform rotates, the hubs rotate in the opposite
                  direction to the platform. </p>
              </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img
                src="https://c8.alamy.com/comp/B3GTRE/family-having-fun-on-the-log-flume-at-skegness-seafront-fairground-B3GTRE.jpg"
                max-height="300" cover class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                LOG FLUMES
                <p>Log flumes are amusement rides consisting of a water flume and hollow logs or boats. Passengers sit in
                  the logs, which are propelled along the flume by the flow of water.</p>
              </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bumper_boats_%282%29.jpg/1200px-Bumper_boats_%282%29.jpg"
                max-height="300" cover class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                BOAT RIDE
                <P>boating is the leisurely activity of travelling by boat</P>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-main>

    <v-main>
      <h1 class="text-center">Wonderous Tips - To make your journey smooth!</h1>
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col cols="6">
            <v-card>
              <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwB7_kk6dJWk5Qwi9mZAofukuFfSybPUIiIzkaXFSCbcm2dJMR76V10bFUym80yMtT4Ng&usqp=CAU" height="300" cover
                class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                FASTRACK
                <p>Buy/upgrade to a Fastrack ticket to skip the long queues and get to the rides faster. </p>
              </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card>
              <v-img src="data:image/png;base64,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" height="300" cover
                class="bg-grey-lighten-2"></v-img>
              <v-card-title class="text-h6">
                LOCKERS
                <p> Keep your possessions and valuables safe in lockers, so you can enjoy rides without worrying. </p>
              </v-card-title>
            </v-card>
          </v-col>
         </v-row>
          </v-fade-transition>
          </v-main>

          <v-main>
          <v-container>
            <v-layout row wrap>
              <h2>For a list of all facilities available at our amusement park, visit the Facilities page.</h2>
              <v-flex>
                <v-btn to="/facilities" class="ml-12 mb-1" color="blue" dark rounded ><span>Know More</span>
                </v-btn>
                </v-flex>
                </v-layout>
                </v-container>
                </v-main>
  </nav>
</template>
<script>

export default {
  data: () => ({
    drawer: false,
    links: [
      { icon: 'folder', text: 'Facilities', route: '/facilities' },


    ],
    items: [
      {
        src: 'https://c8.alamy.com/comp/R0Y0Y5/an-amusement-park-with-rides-at-the-ocean-shore-R0Y0Y5.jpg'
      },
      {
        src: 'https://img.freepik.com/free-vector/outdoor-scene-with-amusement-park_1308-31848.jpg'
      },
      {
        src: 'https://a.cdn-hotels.com/gdcs/production119/d1565/0502c70e-4222-47ec-a85b-0ecbbc08e3e9.jpg?impolicy=fcrop&w=800&h=533&q=medium'
      },
      {
        src: 'https://www.asmag.com/upload/pic/case/59476.4965.jpg'
      }
    ]

  }),



}
</script>
<style scoped>
.bg {
  background: url('https://img.freepik.com/premium-vector/amusement-park-beach_1308-24339.jpg');
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  border-radius: 4px;
}
</style>
