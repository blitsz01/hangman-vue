<template>
  <div>
    <div class="divWordContainer">
      <b-button v-if="showHint !== true" @click="getHint()" variant="success" size="sm" >Hint</b-button>
      <h4 v-if="showHint">{{itemHint}}</h4>
      <br/>
      <h1 >{{item.toLowerCase()}}</h1>
    </div>
    <div class="divKeyboard">
      <b-button  v-for="(data, index) in itemLetters" @click="disableButton(index, data.letter)" :disabled="data.disable" class="btnDesign" v-bind:key="data.letter">{{data.letter}}</b-button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Alphabet",
  props: ["itemLetters", "item", "itemHint", "showHint"],
  methods: {
    disableButton: function(index, btnCharValue) {
      this.itemLetters[index].disable = true;
      this.getChar(btnCharValue);
    },
    getHint: function() {
      EventBus.$emit("displayHint", true);
    },
    getChar: function(strChar) {
      EventBus.$emit("checkChar", strChar.toUpperCase());
    }
  }
};
</script>


<style>
.divKeyboard {
  margin: auto;
  width: 100%;
  border: 3px solid grey;
  padding: 5px;
  text-align: center;
  border-radius: 25px;
  background: url(../../assets/paper.gif);
  background-position: left top;
  background-repeat: repeat;
}
.btnDesign {
  padding: 0;
  margin-left: 1px;
  margin-right: 1px;
  margin-top: 3px;
  width: 10%;
}

.divWordContainer {
  margin: auto;
  margin-bottom: 10px;
  width: 100%;
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
