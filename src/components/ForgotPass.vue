<template>
    <v-container>
        <v-row align="center" justify="center" dense>
            <v-col cols="12" sm="8" md="4" lg="4">
                <v-card elevation="0">
                    <div class="text-center">
                        <h1 class="mb-2">Forgot Password</h1>
                        <p>We will send a password reset link to the email address of the connected accounted.</p>
                    </div>
                    <a href="#">
                        <v-img src="https://t4.ftcdn.net/jpg/04/20/32/53/360_F_420325313_0tgC68egfuhtzKf1OhVlZRHG6Dvv36Xt.jpg" alt="vuetify components logo" contain height="200" />
                    </a>
                    <v-form>
                        

                        <v-text-field v-model="users.email" :rules="[v => !!v || 'E-mail is required',
                        v => /.+@.+\..+/.test(v) || 'E-mail must be valid']" type="email" label="Email" placeholder="Email"
                            required></v-text-field>

                        <v-text-field v-model="users.password" :rules="[v => !!v || 'Password is required',
                        v => (v && v.length >= 6) || 'Password must be 6  characters or more!']"
                         label="Password" placeholder="Password"
                            required></v-text-field>
                        <v-btn @click="reset" class="rounded-0" color="black" x-large block dark>Reset Password</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            users: {

               
                email: "",

                password: "",

            },

        }
    },
    methods: {
   
   
   async reset() {
     console.warn("reset",this.userId,
     this.email,this.password)
     const result= await axios.put("http://localhost:8080/user/update",{
        userId: this.userId,
       
       email: this.email,
       password: this.password,
       });
     console.warn(result);
     alert("reset password Successfully..");
     this.$router.push({path:'/login'})
    
   },
     },
     
}
</script>

