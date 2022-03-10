<script>
import GamerGradeTableItem from "./GamerGradeTableItem.vue";
import axios from 'axios'
let id = 0;
export default {
  data() {
    return {
        items: null
    };
  },
  components: { GamerGradeTableItem },
  mounted() {
    axios
      .get("http://localhost:3000/api/v1/matches?puuid=" + encodeURIComponent(localStorage.getItem("puuid")))
      .then((response) => (
          this.items = response.data
          ));
  },
};
</script>
<template>
  <div class="container">
    <div class="row gy-2">
      <div class="col-12" v-for="item in items" :key="item.id">
        <GamerGradeTableItem
          :championName="item.championName"
          :kills="item.kills"
          :deaths="item.deaths"
          :assists="item.assists"
          :kda="item.kda"
        />
      </div>
    </div>
  </div>
</template>