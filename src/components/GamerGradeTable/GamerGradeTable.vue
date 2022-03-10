<script>
import GamerGradeTableItem from "./GamerGradeTableItem.vue";
import axios from 'axios'
let id = 0;
export default {
  data() {
    return {
        items: null
    //   items: [
    //     {
    //       id: id++,
    //       championName: "Jhin",
    //       kills: 9,
    //       assists: 3,
    //       deaths: 4,
    //       kda: 1.3,
    //     },
    //     {
    //       id: id++,
    //       championName: "Jhin",
    //       kills: 3,
    //       assists: 3,
    //       deaths: 4,
    //       kda: 1.3,
    //     },
    //     {
    //       id: id++,
    //       championName: "Jhin",
    //       kills: 4,
    //       assists: 3,
    //       deaths: 4,
    //       kda: 1.3,
    //     },
    //     {
    //       id: id++,
    //       championName: "Jhin",
    //       kills: 10,
    //       assists: 3,
    //       deaths: 4,
    //       kda: 1.3,
    //     },
    //   ]
    };
  },
  components: { GamerGradeTableItem },
  mounted() {
      var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
    axios
      .get("http://localhost:3000/api/v1/matches/", config)
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