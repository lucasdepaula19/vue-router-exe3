<template>
  <div>
    <router-link to="/">Go to my Home</router-link>
    <h1>Users Detail!!</h1>
    <p>recuperação do parametro {{ userId }}</p>
    <p>
      <b>Id:</b>
      {{obj_user.id}}
    </p>
    <p>
      <b>Nome:</b>
      {{obj_user.name}}
    </p>
    <p>
      <b>E_mail:</b>
      {{obj_user.email}}
    </p>
    <p align="justify">
      <b>Biografia:</b>
      {{obj_user.bio}}
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UsersDetail",
  computed: {
    userId() {
      return this.$route.params.id;
    }
  },
  data() {
    return {
      obj_user: null
    };
  },
  mounted() {
    axios
      .get("https://www.mocky.io/v2/5ebdbed93100008e00c5cd2d")
      .then(
        response =>
          (this.obj_user = response.data.results.find(
            user => user.id == this.$route.params.id
          ))
      );
  }
};
</script>