<template>
  <v-layout class="bg-img">
    <v-app-bar color="blue darken-4" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase ">
        <span class="font-weight-light">Amusement Park</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/about" text>About</v-btn>
      <v-btn to="/contact" text>Contact</v-btn>
      <v-btn to="/login" text> <v-icon>mdi-login</v-icon> Login</v-btn>
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
    <v-flex s12 sm6 offset-sm3>
      <v-card>
        <v-img
        height="300px"
          src="https://jurasikparkinn.com/wp-content/uploads/2022/03/Theme_park_AdobeStock_222547272_1.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Amusement Park</h3>
            <div>
              <p>We admit it! Bhavan Park is not our typical amusement or theme park with high-tech 
                or scream-worthy rides. But for years, it has been delighting the little ones (and often the adults too) 
                in the city and for all the right reasons. This park operates as the part of 
                Cubbon Park which is spread over 12.5 acres of land. It was established to
                 encourage intellectual as well as recreational activities for children. 
                 </p>
                 </div>
                 <div><p>
                  A day at this Bhavan with your kid could make them curious to learn new 
                  things while playing along and engaging themselves in various educational
                   and entertaining activities.
                 </p></div>
                <div><p>
                  You can take them for some fun skating to promote physical activities
                   and let them indulge in recreational boating in this amusement park 
                   in Bangalore. Then, there is the toy train that runs through the 
                   Cubbon Park along the Doll Museum. A ride in this colorful toy train
                    is a hot favorite among kids and adults alike.
                  </p></div>
                    
                    <div><p>The Children Little 
                      Theatre screens informational yet interesting movies and plays. 
                      With the sole objective of bringing out the creativity of young ones,
                       Jawahar Bal Bhavan conducts numerous recreational activities and 
                       programs at a very nominal fee. If you feel your kids need some 
                       creative curriculum too, then make them spend their weekends here 
                       to rejuvenate themselves for the week ahead.</p></div>
                    
                
                 
                <div><p>Location of  Bhavan Amusement Park, Bangalore: Kasturba Road, Sampangi Rama Nagar, Ambedkar Veedhi, Bangalore
                  Timings of Jawahar Bal Bhavan Amusement Park, Bangalore:
                  10:30 am to 10:00 pm; closed on Mondays.
                  Entry Fee of Jawahar Bal Bhavan Amusement Park, Bangalore:
                  Adults and Children (Above 10 years) – ₹ 10 per person
                  Children (Below 10 years) – Free</p></div>

          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    </v-main>
   
  </v-layout>
</template>
<script>
  export default {
    data: () => ({
    drawer: false,
    links: [
      { icon: 'home', text: 'Home', route: '/nav' },
      { icon: 'folder', text: 'Facilities', route: '/facilities' }
     

    ],
}),
}
</script>
<style>
.bg-img {
background-image: url("https://www.fabhotels.com/blog/wp-content/uploads/2018/08/crescent.jpg");
background-repeat: no-repeat;
background-size: cover;
background-position: center top;
border-radius: 4px;
}
</style>
