<template>
    <div>
        <div class="sideDiv">Number of Trie's : 
          <span v-if="tries >= 1"><b>{{tries}}</b></span>
          <span v-else><b>Game Over!</b></span>
          <img id="imgMan" :src="getImgUrl(tries)" v-bind:alt="tries">
        </div>
    </div>
</template>

<script>
export default {
  props: ["tries"],
  name: "Noose",
  methods: {
    getImgUrl: function(tries) {
      if (tries >= 0) {
        var images = require.context("../../assets/", false, /\.png$/);
        return images("./man" + tries + ".png");
      } else {
        var images = require.context("../../assets/", false, /\.png$/);
        return images("./man" + 0 + ".png");
      }
    }
  }
};
</script>

<style>
.sideDiv {
  text-align: center;
  margin: auto;
  width: 100%;
  height: 50%;
  border: 3px solid grey;
  padding: 10px;
  float: left;
  border-radius: 25px;
  background: url(../../assets/background.png);
  background-size: cover;
}
#imgMan {
  width: 100%;
  height: 100%;
}
</style>
