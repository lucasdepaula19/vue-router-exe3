<template>
  <div>
    <router-link to="/">Go to my Home</router-link>
    <h1>Users View!!</h1>

    <div v-for="user in users" v-bind:key="user.id">
      <router-link :to="{ path: '/users'+user.id }">{{user.name}} - {{user.email}}</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UsersView",
  computed: {},
  data() {
    return {
      users: []
    };
  },
  mounted() {
    axios
      .get("https://www.mocky.io/v2/5ebdbed93100008e00c5cd2d/")
      .then(({ data }) => (this.users = data.results));
  }
};
</script>