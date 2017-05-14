import Vue from 'vue'
import {FormElements} from '../../dist/components.build'
import '../../src/assets/crest.svg'

new Vue({
  el: '#app',
  data: {
    buttonText: 'Press the button',
  },
  components: {
    ...FormElements
  },
  methods: {
    handleButtonPress: function () {
      this.buttonText = this.buttonText.split('').reverse().join('')
    }
  }
})
