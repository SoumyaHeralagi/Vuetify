<template>
    <nav>
        <v-app-bar  color="purple" dark app >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase ">
                <span class="font-weight-light">AMUSEMENT PARK</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
       <template v-slot:activator="{ on }">
         <v-btn
           text
           v-on="on"
         >
           <v-icon left>expand_more</v-icon>
             <span>Menu</span>
         </v-btn>
       </template>
       <v-list flat>
         <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
           <v-list-item-title >{{link.text}}</v-list-item-title>
         </v-list-item>
       </v-list>
             </v-menu>


             <v-btn to="/contact" text>
                <span>Contact Us</span>
            </v-btn>
            
            <v-btn to="/about" text>
                <span>About</span>
            </v-btn>

             <v-btn text>
                 <span>Logout</span>
                 <v-icon right>exit_to_app</v-icon>
              </v-btn>
        </v-app-bar>
       <v-navigation-drawer  v-model="drawer" dark app class="purple darken-4">
           <v-layout column align-center>
                <v-flex class="mt-5"> 
                     <v-avatar size="100">
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwBZ8Iw21Add2Eyn6WcP3lK-bttGmuc6_0g&usqp=CAU" alt="">
                     </v-avatar>
                     
                </v-flex>
                <v-flex class="mt-4 mb-4">
                 
                </v-flex>
           </v-layout>
           <v-list flat>
               <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
                   <v-list-item-action>
                      <v-icon >{{link.icon}}</v-icon>
                   </v-list-item-action>
                   <v-list-item-content >
                       <v-list-item-title >{{link.text}}</v-list-item-title>
                   </v-list-item-content>
               </v-list-item>
           </v-list>
       </v-navigation-drawer>
    </nav>
 </template>
<script>
export default{
    data :() => ({
        drawer:true,
        links:[
               {icon:'dashboard',text:'dashboard',router:'/dashboard'},
                {icon:'folder',text:'AddRide',router:'/addride'},
                {icon:'folder',text:'RideDetails',router:'/rideDetails'}
    ]
    })
    
}
</script>
<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
</style>