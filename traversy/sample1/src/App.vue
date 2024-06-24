<template>
  <div>
    <h1>Hello World</h1>
    <Header title="Hello Title" />
    <Tasks :tasks="tasks" @delete-task="deleteTask" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from './components/Tasks.vue'

export default {
  name: "App",
  components: { Header, Tasks },
  data() {
    console.log('DATA cycle')
    return { tasks: [] };
  },
  created() {
    console.log('Created cycle')
    this.tasks = [
      {
        id: "1",
        text: "Doctors Appointment",
        day: "March 5th at 2:30pm",
        reminder: true,
      },
      {
        id: "2",
        text: "Meeting with boss",
        day: "March 6th at 1:30pm",
        reminder: true,
      },
      {
        id: "3",
        text: "Food shopping",
        day: "March 7th at 2:00pm",
        reminder: false,
      },
    ];
  },
  methods: {
    deleteTask(id) {
      //console.log(id)
      this.tasks = this.tasks.filter((task) => task.id !== id)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
