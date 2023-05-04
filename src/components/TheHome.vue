<template>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </template>
  <script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://c8.alamy.com/comp/R0Y0Y5/an-amusement-park-with-rides-at-the-ocean-shore-R0Y0Y5.jpg'
          },
          {
            src: 'https://img.freepik.com/free-vector/outdoor-scene-with-amusement-park_1308-31848.jpg'
          },
          {
            src: 'https://a.cdn-hotels.com/gdcs/production119/d1565/0502c70e-4222-47ec-a85b-0ecbbc08e3e9.jpg?impolicy=fcrop&w=800&h=533&q=medium'
          },
          {
            src: 'https://www.asmag.com/upload/pic/case/59476.4965.jpg'
          }
        ]
      }
    }
  }
</script>