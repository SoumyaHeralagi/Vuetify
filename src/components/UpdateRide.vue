<template>
  <v-app>
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

    <div class="backgruond"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <h2 class="purple--text">Update Rides</h2>
          </div>
          <v-form ref="form" lazy-validation @submit.prevent=" updateride() ">
            <v-card-text>
              
              <v-flex>
                <v-select v-if="updateride" v-model="rideName" name="rideName"   :items="ridename" label="ride name"
                  :rules="[(v) => !!v || 'Please select ride']"></v-select>
              </v-flex>

              <v-text-field v-model="bookedDate" name="bookedate" :min="minDate" type="Date" required
                :rules="[(v) => !!v || 'Please Enter date']"></v-text-field>

              <v-text-field v-model="price" name="price"    label="cost of ride" type="number" required :rules="[v => !!v || 'Please Enter cost',
              v => (v && v >= 200) || 'invalid',
              v => (v && v <= 1000) || 'invalid']"></v-text-field>

              <v-text-field v-model="numOfPersons" name="numOfPersons" label="Num of Persons" type="number" required :rules="[v => !!v || 'Please Enter num of persons',
              v => (v && v >= 1) || 'enter num of persons',
              v => (v && v <= 15) || 'cannot book ride for more than 15 members']"></v-text-field>
            </v-card-text>
            
            <v-card-text>

              <v-card-actions class="justify-center">
                <v-btn type="submit" color="success" class="white--text mr-5" rounded>
                  save
                </v-btn>

                <v-btn @click="reset" color="error" rounded class="white--text mr-20">
                  Reset
                </v-btn>

                <v-btn class="ml-16" rounded color="red lighten-1" to="/bookingDetails">
                  Back
                </v-btn>

              </v-card-actions>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  name: 'BookRide',
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'folder', text: 'Rides', route: '/rides' },
        { icon: 'folder', text: 'Book Ride', route: '/bookRide' },
        { icon: 'folder', text: 'Booking Details', route: '/bookingDetails' },
      ],
       rideId:"",
        rideName: "",
        ridename: ['Roller Coaster', 'Lazy River', 'Water Slide', 'Pendulum Ride','Break Dance',
      'Log Flumes','Boat Ride','Sky Tilt','Joint Wheel'],
        price: "",
        numOfPersons: "",
        bookedDate: null,
      minDate: new Date().toISOString().substr(0, 10),
      message: '',
    };
  },
 

  methods: {
   
    reset() {
      this.$refs.form.reset()
    },
    async updateride() {
      console.warn("updateride",this.rideId,this.rideName,this.price,
      this.bookedDate,this.numOfPersons)
      const result= await axios.put("http://localhost:8080/ride/update",{
        rideId: this.rideId,
        rideName: this.rideName,
        price: this.price,
        bookedDate: this.bookedDate,
        numOfPersons: this.numOfPersons,
        });
      console.warn(result);
      alert("updated Ride Successfully..");
      this.$router.push({path:'/bookingDetails'})
     
    },
      },
      async mounted() {
      console.warn(this.$route.params.rideId);
      const result=await axios.get("http://localhost:8080/ride/rideById/"+this.$route.params.rideId)
      console.warn(result)
      this.rideId=result.data.rideId
      this.rideName=result.data.rideName
      this.price= result.data.price,
      this.bookedDate=result.data.bookedDate,
      this.numOfPersons =result.data.numOfPersons
      },
    };
</script>
<style>
.backgruond {
  background-image: url(https://www.shutterstock.com/image-vector/outdoor-scene-amusement-park-illustration-260nw-1457815091.jpg) !important;
  height: 300px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}
</style>