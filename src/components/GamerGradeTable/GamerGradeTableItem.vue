<script>
export default {
  props: {
    championName: String,
    kills: Number,
    assists: Number,
    deaths: Number,
    kda: Number
  }
};
</script>
<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-4">{{ championName }}</div>
        <div class="col-4">{{ kills }}/{{deaths}}/{{assists}}</div>
        <div class="col-4">{{kda}}</div>
      </div>
    </div>
  </div>
</template>