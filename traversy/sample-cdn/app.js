const app = Vue.createApp({
  template: `<div>
    <h1>Hello {{ firstName }}</h1>
    <img v-bind:src="profile" :alt="firstName" />
    <button v-on:click="getUser">Click</button>
  </div>`,
  data() {
    return {
      firstName: 'Raph',
      lastName: 'Coelho',
      gender: 'male',
      profile: 'https://randomuser.me/api/portraits/men/9.jpg'
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json();

      console.log(results)
      this.firstName = 'John',
      this.lastName = 'Doe',
      this.gender = 'male',
      this.profile = 'https://randomuser.me/api/portraits/men/10.jpg'
    }
  },
})

app.mount('#app')