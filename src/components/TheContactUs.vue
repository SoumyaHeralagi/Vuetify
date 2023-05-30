<template>
  <v-layout class="bg-img">
  <v-container align="center" justify="center" fill-height >
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
        <v-flex class="mt-1 mb-1">

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
    <v-flex s11 sm11 offset-sm4>
          <v-card width="500" center>
            <v-img
                height="300px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11gypKfPqaV9PyK0QvqHN5Oro6VGmQr3aXt7X0AlEsVAog0TjoXWnVd46OV0CXXvzOiQ&usqp=CAU"
            >
              <v-app-bar
                  class="mt-8"
                  flat
                  color="rgba(0, 0, 0, 0)"
              >
                <v-avatar size="100">
                  <img
                      alt="user"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAB8CAMAAAChUkXqAAAAZlBMVEUAAAD////6+vrn5+ekpKRsbGzLy8s4ODjZ2dk7Ozvw8PBFRUXt7e3Ozs739/eIiIgbGxtOTk7h4eFAQECzs7OYmJgzMzNaWlqCgoK+vr58fHyOjo4lJSUJCQnFxcV1dXVkZGQTExNP0ewqAAAD2klEQVRogcWa6ZqqMAxAI6uD7IoOq/L+L3lBHFls2qTS757fMznTptAkDByohJfa9Zu2bXy3voTkXwPajx2TFFakyXFHQZeBgKzbSXA8icKPnAirUAt+sfAjv18Lcl8WH8DPvxN48vAj3jeCUh0foNQXEP5+5RpkgiMtPoDsMEkE8Q9V8BNrCSpqfIBKR0BMwASeBlRgnTmCs8UWXDjxAS5cAW8BkiVggogXHyBiCu5cwZ0nCFJ1yDVpwBKwdwjdI0RQ8AUFS/DgCx4cgYXekjgn8UEVC4KeL+jFWRYLQn58AHGtJBbYOgKbIch1BOLr/z9tUaAj4CQ5vvLjX8X3JvKg3fiCmzgSIpDWi2KQKhIRkCquNUj9hQg0HgTxY4BeOOwkIClABcw7H7/1MUHIfN31WNeGli0JT5BgcVCB3XLit0iKZaUj69ZE7kupwCIX10N5jVaOsuqaUVlgVZdccHCo8R1JEGkLRXwjSXtZeRPoUuK70hCKNpbQ5Ui6G4JAfVjxA0oTHCLpA9dKzg9RcIglqf6VtJdkwdAvI7l2KSMj2kAq386jxomUagzCEQxExWIqlRXKvWcLRuKoK8suUm+8rkAHjsAK8+NAHuLvTm1B4BXuotq7uoWHNH06grwQTx0LyjlSCgJH0vOfHeU6FIJc+barFMuQCmzSyKhCL3yFICZf+4XWxMtTTEyX+PyBlMUtvJjjnJzdiZ+QZIsFpU4jLm4QhAJyvbJGWL2IBLVefICaJtDoz/4QVEifgi/iiwwfAu39mfjYpa1AM78z20xvBKx5shhPJtAa42yxcQGn58BZdyMrAWOgL6PCBBrzAzGlWMCf9mIsp8ALAXtcjXMXCXY4oTPep0BnFoszT2nfgq8f4TXOVhA0+wqaYCPQGLfLKdaCvRcwLwEMLeC9hEmgMydV8ZqjTgL2AI3CZSHQmMOquc0CrWG7mvwt+PIexqj/BNbuZ3SisV4CjY9mNKKXgFlI00leAkM7NOzRJCD/bwCf41Ow84t6ifMUGHnKJm6jwDIXH8AaBAZTMCYBTKZgTALsWa18ch8EzH8/4HEeBCbjwxB+l4odx4ZdC7pPPDByW85cwEA9saQAY+/qiQRInwj0cUE479uPDBhjJx182K1vEpOCxmSIQw+sL4p8DIcfMXhhTuFDA5X7zDWEQ2zwWU7iZ+Fl10bOalrbc4fTVTs70qpbdjhjiZ077k41ZOM6+Wcj/sTuVh86+FzdopMMpCZiu3NqN2PtWZq5tdPZgim87PuBlUdd6RRJUj2yk9+kfd8OD2bb9n3a+KfsUSVJ4ZRdlMs+Gv0DEvYsLaYOgrwAAAAASUVORK5CYII="
                  >
                </v-avatar>

                <v-spacer></v-spacer>

                <v-menu offset-y left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        v-bind="attrs"
                        v-on="on"
                        color="white"
                        icon
                    >
                    </v-btn>
                  </template>
                
                </v-menu>

              </v-app-bar>

              <v-card-title class="white--text mt-8">
                <p class="ml-3">
                  John
                </p>
              </v-card-title>
            </v-img>

            <v-card-text>

              <div class="font-weight-bold ml-8 mb-2">
                Details
              </div>

              <v-list two-line>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">
                      mdi-phone
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>1 444 555 8888</v-list-item-title>
                    <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-icon>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">
                      mdi-email
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>jhon@gmail.com</v-list-item-title>
                    <v-list-item-subtitle>Work</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-icon>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">
                      mdi-map-marker
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Amusement Park</v-list-item-title>
                    <v-list-item-subtitle>Online</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
    </v-flex>
    </v-main>
    </v-container>
    </v-layout>
</template>

<script>
export default {
name: "app-profile-contact-card",
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
background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11gypKfPqaV9PyK0QvqHN5Oro6VGmQr3aXt7X0AlEsVAog0TjoXWnVd46OV0CXXvzOiQ&usqp=CAU");
background-repeat: no-repeat;
background-size: cover;
background-position: center top;
border-radius: 4px;
}
</style>
