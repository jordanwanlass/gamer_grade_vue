<script>
import router from "../router/index.js"
import axios from 'axios'
export default {
  data() {
    return {
      riotId: "",
      tagline: "",
    };
  },
  methods: {
    getPuuid() {
      if (this.riotId.length > 0 && this.tagline.length > 0) {
        axios.get("http://localhost:3000/api/v1/puuid?riotId=" + this.riotId + "&tagline=" + this.tagline).
        then((response) => (localStorage.setItem("puuid", response.data.puuid)))
      }
      router.push("/dashboard")
    },
  },
};
</script>
<template>
  <main class="form-signin">
    <!-- <form> -->
      <h1 class="h3 mb-3 fw-normal form-header">Sign In</h1>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          v-model="riotId"
        />
        <label for="floatingInput">Riot Id</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingPassword"
          v-model="tagline"
        />
        <label for="floatingPassword">Tagline</label>
      </div>
      <div>
        <button class="w-100 btn btn-lg btn-primary" @click="getPuuid">
          Submit
        </button>
      </div>
    <!-- </form> -->
  </main>
</template>

<style>
html,
body {
  height: 100%;
}

body {
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  text-align: center;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

#floatingInput {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

#floatingPassword {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
