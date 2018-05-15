/**
 * 处理用户输入Demo
 * Created by jutal on 17-2-22.
 */

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
   reverseMessage: function () {
     this.message = this.message.split('').reverse().join('')
   }
  }
});