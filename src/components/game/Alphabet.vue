<template>
  <div>
    <div class="divWordContainer">
        <b-button id="hintButton" variant="success" size="sm" >Hint</b-button>
        <h3>This is the hint!</h3>
    </div>
    <div class="divKeyboard">
        <b-button  v-for="(data, index) in itemLetters" @click="disableButton(index)" :disabled="data.disable" class="btnDesign" v-bind:key="data.letter">{{data.letter}}</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alphabet",
  props: ["itemLetters"],
  methods: {
    disableButton: function(index) {
      this.itemLetters[index].disable = true;
    }
  }
};
</script>


<style>
.divKeyboard {
  margin: auto;
  width: 50%;
  border: 3px solid grey;
  padding: 10px;
  text-align: center;
  border-radius: 25px;
  background: url(../../assets/paper.gif);
  background-position: left top;
  background-repeat: repeat;
}
.btnDesign {
  margin-left: 3px;
  margin-top: 3px;
  width: 35px;
}

#hintButton {
  float: left;
}
.divWordContainer {
  margin: auto;
  margin-bottom: 10px;
  width: 50%;
  height: 50%;
  border: 3px solid grey;
  padding: 10px;
  text-align: center;
  border-radius: 25px;
  background: url(../../assets/paper.gif);
  background-position: left top;
  background-repeat: repeat;
}
</style>
