<template>
    <v-layout>
      <v-app-bar color="blue darken-4" dark app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase ">
          <span class="font-weight-light">Amusement Park</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/about" text>About</v-btn>
        <v-btn to="/contact" text>Contact</v-btn>
        <v-btn to="/login" text><v-icon>mdi-login</v-icon>Login</v-btn>
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
          <v-fade-transition mode="out-in">
            <v-row>
              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_3613,h_2710,r_0,c_crop/q_80,w_533,dpr_1,f_auto,fl_progressive,c_limit/wonderla-amusement-parks-resort/Yellow_and_blue_lockers_xiy5po"
                    height="300"
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6" >
                    LOCKER  & CHANGING ROOMS
                <p>To safely store personal belongings and change into park-friendly clothes</p>
                  </v-card-title>
                </v-card>
              </v-col>
      
              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://res.cloudinary.com/simplotel/image/upload/x_27,y_0,w_4395,h_3296,r_0,c_crop/q_80,w_533,dpr_1,f_auto,fl_progressive,c_limit/wonderla-amusement-parks-resort/Water_tap_v64n4v"
                    height="300"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                    DRINKING WATER
                    <p>Free RO purified drinking water near prominent attractions</p>
                  </v-card-title>
                </v-card>
              </v-col>
      
              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://res.cloudinary.com/simplotel/image/upload/x_315,y_0,w_2984,h_2239,r_0,c_crop/q_80,w_533,dpr_1,f_auto,fl_progressive,c_limit/wonderla-amusement-parks-resort/First_aid_hip69q"
                    max-height="300"
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                    FIRST AID
                    <p>Excellent first aid facility in case of emergencies</p>
                  </v-card-title>
                </v-card>
              </v-col>
      
              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_3674,h_2756,r_0,c_crop/q_80,w_533,dpr_1,f_auto,fl_progressive,c_limit/wonderla-amusement-parks-resort/Car_parking_area_sibgwb"
                    max-height="300"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                    PARKING VEHICLES
                    <p>Free guest parking space</p>
                  </v-card-title>
                </v-card>
              </v-col>

              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://res.cloudinary.com/simplotel/image/upload/x_277,y_0,w_4440,h_3334,r_0,c_crop/q_80,w_533,dpr_1,f_auto,fl_progressive,c_limit/kochi-park/ATM_Counter_hljugs"
                    max-height="300"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                    ATM COUNTER 
                    <p>Cash Dispensing Machines available at park entrance</p>              
                  </v-card-title>
                </v-card>
              </v-col>

              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://res.cloudinary.com/simplotel/image/upload/x_187,y_0,w_756,h_566,r_0,c_crop/q_80,w_533,dpr_1,f_auto,fl_progressive,c_limit/kochi-park/Student_briefing_at_Wonderla_zuul5b"
                    max-height="300"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                    STUDENT BRIEFING 
                    <p>Student groups from schools are well briefed by our park staff before entry.</p>              
                  </v-card-title>
                </v-card>
              </v-col>

              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://res.cloudinary.com/simplotel/image/upload/x_0,y_107,w_1713,h_964,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/wonderla-bengaluru/Veg_Hakka_Noodles_with_Chicken_Manchurian_at_Courtyard_Restaurant_Wonderla_ge1lqr"
                    max-height="300"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                  <v-card-title class="text-h6">
                    FOOD-
                    Buffet lunch is also available            
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
      { icon: 'home', text: 'Home', route: '/nav' },

    ],
}),
 }
</script> 
