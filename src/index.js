import $ from 'jquery'
import './css/1.css'
$(function () {
  $('li:odd').css('backgroundColor', 'yellow')
  $('li:even').css('backgroundColor', 'pink')
})