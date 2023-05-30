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
            <h2 class="purple--text">Book Your Rides</h2>
          </div>
          <v-form ref="form" lazy-validation>
            <v-card-text>

              <v-flex>
                <v-select v-model="rideName" :items="ridename" label="ride name"
                  :rules="[(v) => !!v || 'Please select ride']"></v-select>
              </v-flex>

              <v-text-field v-model="bookedDate" :min="minDate"  type="Date" required
                :rules="[(v) => !!v || 'Please Enter date']"></v-text-field>

              <v-text-field v-model="price" label="cost of ride" type="number" required :rules="[v => !!v || 'Please Enter cost',
              v => (v && v >= 200) || 'invalid',
              v => (v && v <= 1000) || 'invalid']"></v-text-field>

              <v-text-field v-model="numOfPersons" label="Num of Persons" type="number" required :rules="[v => !!v || 'Please Enter num of persons',
              v => (v && v >= 1) || 'enter num of persons',
              v => (v && v <= 15) || 'cannot book ride for more than 15 members']"></v-text-field>

              <h3>Total Cost: {{ totalCost }} Rs.</h3>

            </v-card-text>

            <v-card-text>

              <v-card-actions class="justify-center">
                <v-btn type="submit" color="success" class="white--text mr-5" rounded @click="submit">
                  Book Ride
                </v-btn>

                <v-btn @click="reset" color="error" rounded class="white--text mr-20">
                  Reset
                </v-btn>

                <v-btn class="ml-10" rounded color="red  lighten-1" to="/logout">
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
      rideName: "",
      ridename: [{
        text: 'Roller Coaster',
        text1: 250,
        value: 'Roller Coaster'
      },
      {
        text: 'Lazy River',
        text1: 200,
        value: 'Lazy River'
      },
      {
        text: 'Water Slide',
        text1: 300,
        value: 'Water Slide'
      },
      {
        text: 'Pendulum Ride',
        text1: 330,
        value: 'Pendulum Ride'
      },
      {
        text: 'Break Dance',
        text1: 200,
        value: 'Break Dance'
      },
      {
        text: 'Log Flumes',
        text1: 350,
        value: 'Log Flumes'
      },
      {
        text: 'Boat Ride',
        text1: 240,
        value: 'Boat Ride'
      },
      {
        text: 'Sky Tilt',
        text1: 200,
        value: 'Sky Tilt'
      },
      {
        text: 'Joint Wheel',
        text1: 430,
        value: 'Joint Wheel'
      }],
      numOfPersons: '',
      bookedDate: null,
      minDate: new Date().toISOString().substr(0, 10),
      message: '',
      get selectedRide() {
        return this.ridename.find(item => item.text == this.rideName);
      },

      get price() {
        return this.selectedRide ?
          this.selectedRide.text1 : '';


      }
    };
  },
  watch: {
    price: function () {
      this.calculate();
    },
    numOfPersons: function () {
      this.calculate();
    }
  },


  methods: {
    calculate() {
      this.totalCost = this.price * this.numOfPersons;
    },
    reset() {
      this.$refs.form.reset()
    },
    submit() {
      console.log('bookRide');
      var data = {
        rideName: this.rideName,
        numOfPersons: this.numOfPersons,
        price: this.price,
        bookedDate: this.bookedDate,
      };
      if (this.$refs.form.validate()) {
        console.log('ride page', data);
        axios.post("http://localhost:8080/ride/addRide", data)
          .then((response) => {
            console.log(response.data);

            alert("Added Ride Successfully..");


          })
        this.$router.push({ path: '/bookingDetails' })
          .catch((e) => {
            console.log(e);
            alert("enter details correctly");
          });
      } else {
        this.message = "All fields are mandatory, please fill all..";
      }
    }
  }
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