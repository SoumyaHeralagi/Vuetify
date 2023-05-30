<template>
  <v-app>

    <v-app-bar color="blue darken-4" dark app>
      <v-toolbar-title class="text-uppercase ">
        <span class="font-weight-light">Amusement Park</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/about" text>About</v-btn>
      <v-btn to="/contact" text>Contact</v-btn>
      <v-btn to="/login" text>Login</v-btn>
    </v-app-bar>

    <div class="backgruond"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <h2 class="purple--text">Welcome to Amusement Park</h2>
          </div>
          <h4 class="text-center">To Keep connected with us please register with your personnel info</h4>
          <v-form ref="form" lazy-validation>
            <v-card-text>
              <v-text-field label=" name" type="text" class="mt-3" v-model="users.name"
                :rules="[(v) => !!v || 'Please Enter  Name']" />

              <v-text-field v-model="users.age" :rules="[v => !!v || 'age  is required',
              v => (v && v >= 10) || 'age should be above 10',
              v => (v && v <= 65) || 'age should not be above 65']" type="number" label="age" required></v-text-field>

              <v-text-field v-model="users.email" :rules="[v => !!v || 'E-mail is required',
              v => /.+@.+\..+/.test(v) || 'E-mail must be valid']" type="email" label="Email" placeholder="Email"
                required></v-text-field>

              <v-text-field v-model="users.password" :rules="[v => !!v || 'Password is required',
              v => (v && v.length >= 6) || 'Password must be 6  characters or more!']"
                :type="passwordShow ? 'text' : 'password'" label="Password" placeholder="Password"
                required></v-text-field>
            </v-card-text>
          </v-form>

          <v-container>
            <v-layout row wrap>
              <v-flex>
                <v-btn class="ml-12 mb-1" color="success" rounded
                  @click="createUser"><v-icon>mdi-account-plus-outline</v-icon><span> Register</span>
                </v-btn>

                <p class="red">{{ message }}</p>
              </v-flex>

              <v-spacer></v-spacer>

              <v-flex>
                <v-btn class="ml-15" rounded color="red lighten-1"
                  @click="resetUser"><v-icon>mdi-cached</v-icon>reset</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
          <v-row>
            <p class="mx-auto mt-10">

              If you have an account please Login!

              <v-btn to="/login" rounded class="primary ml-2"> sign in</v-btn>
            </p>
          </v-row>
        </v-card>
      </v-col>
    </v-main>
  </v-app>
</template>
<script>
import axios from "axios";
export default {

  data() {

    return {

      users: {

        name: "",

        age: "",

        email: "",

        password: "",

      },

      showPassword: false,

      message: "",

    };

  },

  methods: {

    createUser() {

      var data = {

        name: this.users.name,

        age: this.users.age,

        email: this.users.email,

        password: this.users.password,

      };

      if (this.$refs.form.validate()) {
        axios

          .post("http://localhost:8080/user/registration", data)

          .then((response) => {



            console.log(response.data);

            alert("Registered Successfully..");

            this.$router.push("/login");

          })

          .catch((e) => {

            console.log(e);
            alert("user has already registered");



          });

      } else {

        this.message = "All fields are mandatory, please fill all..";

      }

    },

    resetUser() {

      this.users = !this.users;

    },

  },

};

</script>

  
 