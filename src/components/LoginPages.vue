<template>
  <v-app>
   
    <v-app-bar color="blue darken-4" dark app>
      <v-toolbar-title class="text-uppercase ">
        <span class="font-weight-light">Amusement Park</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/about" text>About</v-btn>
      <v-btn to="/contact" text>Contact</v-btn>
      <v-btn to="/login" text><v-icon>mdi-logout</v-icon>Login</v-btn>
    </v-app-bar>
    
    <div class="backgruond"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <v-avatar size="100" color="indigo lighten-4">
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar>
            <h2 class="purple--text">Login to Amusement Park</h2>
          </div>
          <v-form ref="form">

            <v-text-field v-model="email" label="email Id" prepend-icon="mdi-account-circle"
              :rules="[(v) => !!v || 'please enter your email id.']" type="text" required
              class="pt-2 pb-5"></v-text-field>

            <v-text-field v-model="password" label="Password" :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock" :rules="[(v) => !!v || 'please enter password.']" required
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"
              class="pb-3"></v-text-field>
            <v-switch label="Remember me" color="indigo"></v-switch>

          </v-form>
          <v-container>
            <v-layout row wrap>
              <v-flex>
                <v-btn class="ml-8" color="success" rounded @click="login">
                  <v-icon>mdi-login</v-icon><span>login</span>
                </v-btn>

                <p class="deep-orange mt-2 mx-auto">{{ message }}</p>

              </v-flex>
               <v-spacer></v-spacer>

              <v-flex>
                <v-btn to="/nav" class="ml-16" rounded color="red lighten-1" >
                  back</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

        <v-row class="mt-8" align="center" justify="space-around"> </v-row>

        <v-row>
          <p class="mx-auto">
            If you don't have an account! please Register.
            <v-btn to="/signup" text> sign up</v-btn>
          </p>
        </v-row>
      </v-col>
    </v-main>
  </v-app>
</template>   
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      message: "",
      showPassword: false,
    };
  },
methods: {
    async login() {
      var data = {
        email: this.email,
        password: this.password,
      };
      if (this.$refs.form.validate()) {
        await axios
          .post("http://localhost:8080/user/login", data)
          .then((response) => {
            console.log(response.data);
            alert("Login successfully")
            this.$router.push("/logout");
          })
          .catch((e) => {
            console.log(e);
            alert(" email/password is incorrect")
          });
      } else {
        this.message = "Please Enter All Fields..";
      }

    },

  },

};

</script>
    
     