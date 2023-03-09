<template>
    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" >
          <v-col cols="5" sm="3" md="2" lg="6">
            <v-toolbar-title >
              <v-space></v-space>
              <v-header>
                <div class="ma-1">
                  
                </div>
              </v-header>
            </v-toolbar-title>
          </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
              <v-card class="elevation-12">
                <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-row>
                      <v-col cols="12" md="8">
                        <v-card-text class="mt-12">
                          <h1
                            class="text-center display-2 pink--text text--accent-3"
                          >Login to Amusement Park</h1>
                        <v-form>
                            <v-text-field
                              label="Name"
                              name="name"
                             prepend-icon="mdi-account-circle"
                              type="text"
                              color="blue accent-3"
                            />
                            <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        :type="passwordShow?'text':'password'"
                        label="Password"
                        placeholder="Password"
                        prepend-inner-icon="mdi-lock"
                        :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                        @click:append="passwordShow = !passwordShow"
                        required
                />
                            <v-switch label="Remember me" color="indigo"></v-switch>
                          </v-form>
                        </v-card-text>
                        <div class="text-center mt-2">
                          <v-btn rounded color="blue accent-3" dark>Login</v-btn>
                        </div>
                      </v-col>
                      <v-col cols="12" md="4" class="pink accent-3">
                        <v-card-text class="white--text mt-14">
                          <h1 class="text-center display-1">Welocme to Amusement Park</h1>
                          <h4
                            class="text-center"
                          >Enter your personal details and start journay with us</h4>
                        </v-card-text>
                        <div class="text-center mt-3  ">
                          <v-btn rounded color="green accent-3" @click="step++">SIGN UP</v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                  <v-window-item :value="2">
                    <v-row class="fill-height">
                      <v-col cols="12" md="4" class="pink accent-3">
                        <v-card-text class="white--text mt-18">
                          <h1 class="text-center display-1">Welcome Back!</h1>
                          <h4
                            class="text-center"
                          >To Keep connected with us please login with your personnel info</h4>
                        </v-card-text>
                        <div class="text-center mt-3" >
                          <v-btn rounded color="blue accent-3" @click="step--">Login</v-btn>
                        </div>
                      </v-col>
  
                      <v-col cols="12" md="8">
                        <v-card-text class="mt-10">
                          <h1 class="text-center display-2 pink--text text--accent-3">Create Account</h1>
                          <div class="text-center mt-4">
                           
                          </div>
                          <v-form @submit.prevent="submitHandler" ref="form">
                            <v-text-field
                              label="Name"
                              name="Name"
                              type="text"
                              color="teal accent-3"
                            />
                            <v-text-field
                              label="Age"
                              name="age"
                              type="text"
                              color="teal accent-3"
                            />
                            <v-text-field
                            v-model="email"
                            :rules="emailRules"
                              label="Email"
                              name="Email"
                              type="email"
                              color="teal accent-3"
                            />
  
                            <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            :type="passwordShow?'text':'password'"
                              id="password"
                              label="Password"
                              name="password"
  
                              color="teal accent-3"
                            />
                          </v-form>
                        </v-card-text>
                        <div class="text-center mt-n5">
                          <v-card-actions class="justify-center">
                            <v-btn :loading="loading" type="submit" rounded color="green">
                              <span class="white--text px-8">SIGN UP</span>
                            </v-btn>
                          </v-card-actions>
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-col>
          </v-row>
          <v-snackbar top color="green" v-model="snackbar">
            Registered Successfully
          </v-snackbar>
        </v-container>
      </v-content>
    </v-app>
  </template>
  <script>
  export default {
    data: () => ({
      step: 1,
      passwordShow:false,
      loading:false,
      snackbar:false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be 6  characters or more!',
      ],
    }),
    methods:{
      submitHandler(){
        if (this.$refs.form.validate()){
            this.loading = true
          setTimeout(()=> {
            this.loading = false
            this.snackbar = true
          },3000)
        }
      }
    },
    props: {
      source: String
    }
  };
  </script>
  <style scoped>
  div[data-app='true'] {
    background: url('https://www.fabhotels.com/blog/wp-content/uploads/2018/08/kanha.jpg')  fixed !important;
    background-size: cover
  }
  </style>
  