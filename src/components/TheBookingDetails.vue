           
<template>
    <v-main>
        <h1 class="text-center">Booking Details</h1>
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

            <div>
                <v-simple-table dark color="indigo lighten-4">
                    <template>
                        <thead>
                            <tr>
                                <th class="text-center">Ride Name</th>
                                <th class="text-center">Booked_Date</th>
                                <th class="text-center">Ride Cost</th>
                                <th class="text-center">Num Of Persons</th>
                               

                                <th class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(ride, index) in rides" :key="index" :disabled="ride.disabled">
                                <td class="text-center">{{ ride.rideName }}</td>
                                <td class="text-center">{{ ride.bookedDate }}</td>
                                <td class="text-center">{{ ride.price }}</td>
                                <td class="text-center">{{ ride.numOfPersons }}</td>
                                
                                <td class="text-center"> 

                                    <v-btn @click="deleteRow(ride.rideId, index)" color="orange darken-4" fab small>
                                        <v-icon>delete</v-icon></v-btn>

                                    <v-btn @click="rideId = ride.rideId" color="blue"
                                        :to="{ name: 'UpdateRide', params: { rideId: ride.rideId } }" fab
                                        small><v-icon>edit</v-icon></v-btn>

                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
            <div><v-btn rounded to="/bookRide" color="red lighten-1">BACK</v-btn></div>
        </v-app>
    </v-main>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            drawer: false,
            dialog: false,
            disabled: false,
            rideId: '',
            links: [
                { icon: 'folder', text: 'Rides', route: '/rides' },
                { icon: 'folder', text: 'Book Ride', route: '/bookRide' },
                { icon: 'folder', text: 'Booking Details', route: '/bookingDetails' },
            ],
            search: '',
            message: '',
            headers: [
                { text: 'Ride Name', align: 'center', value: 'rideName' , disabled: false},
                { text: 'Booked_date', align: 'center', value: 'bookedDate' ,disabled: false},
                { text: 'Cost', value: 'price', align: 'center',disabled: false },
                { text: 'Num Of Persons', value: 'numOfPersons', align: 'center',disabled: false },
                { text: 'Status', value: 'status', align: 'center' ,disabled: false},
                { text: 'Actions', value: 'actions', align: 'center', disabled: false }

            ],
            rides: []
        }
    },


    methods: {
        getData() {
            axios.get('http://localhost:8080/ride/getAllRides')
                .then(response => {
                    this.rides = response.data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        
        deleteRow(rideId) {
            if (confirm('are you sure, you want to delete this ride?')) {
                axios.delete('http://localhost:8080/ride/delete/' + rideId)
                    .then(response => {
                        console.log(response.data)
                        alert('deleted successfully');
                        this.getData()
                        this.dialog = false;

                    })
                    .catch(error => {
                        console.error('Error deleting ride:', error);
                        alert('error')
                    });
            }
        }
    },
        mounted() {
            this.getData()
        }
    }
    
</script>