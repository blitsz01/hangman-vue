<template>
    <div>
        <b-row>
            <b-col>
                {{categoryList[0].name}}
                <div class="modalCard" @click="selectCategory(categoryList[0].name)">
                    <img class="imgCard" src="../../assets/music.png">
                </div>
            </b-col>
            <b-col>
                {{categoryList[1].name}}
                <div class="modalCard" @click="selectCategory(categoryList[1].name)">
                    <img class="imgCard" src="../../assets/movie.png">
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                {{categoryList[2].name}}
                <div class="modalCard" @click="selectCategory(categoryList[2].name)">
                    <img class="imgCard" src="../../assets/country.png">
                </div>
            </b-col>
            <b-col>
                {{categoryList[3].name}}
                <div class="modalCard" @click="selectCategory(categoryList[3].name)">
                    <img  class="imgCard" src="../../assets/animals.png">
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import list from "../../data/wordList.json";

export default {
  name: "Category",
  data() {
    return {
      wordList: list,
      categoryList: [
        { name: "Music" },
        { name: "Movie" },
        { name: "Country" },
        { name: "Animals" }
      ]
    };
  },
  methods: {
    selectCategory: function(index) {
      EventBus.$emit("itemSelect", index);
      this.shuffleWords(index);
    },
    shuffleWords: function(category) {
      for (var i = 0; i <= this.wordList.length - 1; i++) {
        if (
          category.toUpperCase() === this.wordList[i].category.toUpperCase()
        ) {
          var rand = this.wordList[i].list[
            (Math.random() * this.wordList[i].list.length) | 0
          ];
          EventBus.$emit("wordSelect", rand);
        }
      }
    }
  }
};
</script>

<style>
.modalCard {
  z-index: 1;
  width: 195px;
  height: 90px;
  margin: 5px auto;
  text-align: center;
}
.imgCard {
  width: 195px;
  height: 90px;
}
</style>
