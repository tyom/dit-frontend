import Vue from 'vue'
import {DitButton} from '../../dist/components.build'
import '../../src/assets/crest.svg'

new Vue({
  el: '#app',
  data: {
    buttonText: 'Press the button',
  },
  components: {
    DitButton
  },
  methods: {
    handleButtonPress: function () {
      this.buttonText = this.buttonText.split('').reverse().join('')
    }
  }
})
