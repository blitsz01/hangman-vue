<template>
<div>
  <h2 class="textStyle">{{name}}</h2>
  <b-button id="newButton" variant="primary" @click="showModal">New Game</b-button>
  <b-modal :no-close-on-backdrop="false" :no-close-on-esc="false" ref="modalCategory" hide-footer title="Select Category">
    <div class="d-block text-center">
      <category />
    </div>
  </b-modal>
  <h3 class="textStyle">Category : {{chosenCategory}}</h3>
  <b-row>
    <b-col  cols="3">
      <noose :tries="lives" />
    </b-col>
    <b-col  cols="9">
      <guessWord  v-if="chosenCategory" :showHint="showHint" :itemLetters="letters" :item="currentWord" :itemHint="hint" />
    </b-col>
  </b-row>
</div>
</template>

<script>
import guessWord from "./GuessWord";
import category from "./Category";
import noose from "./Noose";

import alphabet from "../../data/letters.json";
export default {
  components: { category, guessWord, noose },
  data() {
    return {
      name: "Play Hangman",
      currentWord: "",
      letters: alphabet,
      chosenCategory: null,
      word: null,
      hint: null,
      lives: 0,
      showHint: false
    };
  },
  methods: {
    showModal: function() {
      this.$refs.modalCategory.show();
    },
    hideModal: function() {
      this.$refs.modalCategory.hide();
    },
    checkWin: function() {
      if (this.currentWord.indexOf("-") === -1) {
        alert("You Won!");
      } else if (this.lives === 0) {
        alert("You Lost!");
      }
    }
  },
  mounted() {
    this.showModal();
  },
  created() {
    EventBus.$on("itemSelect", index => {
      this.chosenCategory = index;
      this.showHint = false;
      this.hideModal();
      for (var i = 0; i <= this.letters.length - 1; i++) {
        this.letters[i].disable = false;
      }
    });
    EventBus.$on("wordSelect", index => {
      this.word = index.word.toUpperCase();
      this.hint = index.hint.toUpperCase();
      this.currentWord = "";
      this.lives = 7;
      for (var i = 0; i <= index.word.length - 1; i++) {
        if (index.word[i] !== " ") this.currentWord += "-";
        else this.currentWord += " ";
      }
    });
    EventBus.$on("checkChar", charString => {
      if (this.word.indexOf(charString) != -1) {
        var tempWord = this.currentWord;
        this.currentWord = "";
        for (var i = 0; i <= this.word.length - 1; i++) {
          if (this.word[i] == charString) {
            this.currentWord += charString;
          } else {
            if (this.word[i] !== " ") this.currentWord += tempWord[i];
            else this.currentWord += " ";
          }
        }
      } else {
        this.lives--;
      }
      if (this.lives >= 0) {
        this.checkWin();
      }
    });
    EventBus.$on("displayHint", isVisible => {
      this.lives--;
      this.showHint = isVisible;
    });
  }
};
</script>
<style scoped>
#newButton {
  float: right;
}
.textStyle {
  color: #fff;
  font-weight: bold;
  font-family: Helvetica;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
}
h2 {
  margin-top: 10px;
  text-align: center;
}
</style>
