import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
$(function () {
  $('li:odd').css('backgroundColor', 'yellow')
  $('li:even').css('backgroundColor', 'pink')
})