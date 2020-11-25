import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
$(function () {
  $('li:odd').css('backgroundColor', 'yellow')
  $('li:even').css('backgroundColor', 'pink')
})
class Person {
  constructor() {
    Static.name = 'andy'
  }
}
console.log(Person);
//
import Vue from 'vue';
import App from './components/App.vue'
const vm = new Vue({
  el: '#vm',
  render: h => h(App)
})