if (process.env.NODE_ENV == 'development') require('raw-loader!./index.html')

import './index.css'
import '@/assets/styles/reset.styl'
console.log($)

$(function() {
  $('#wrap li').each(function() {
    var i = $(this).index()
    $(this).attr('data-index', i + 10)
    $(this).attr('data-s', i + 10000)
    console.log($(this).data('s'))
    console.log(this.dataset)
  })

  new IScroll('#wrap', {
    scrollbars: true,
    scrollX: true,
    scrollY: false
  })

  var xhr = function() {
    try {
      return new window.XMLHttpRequest()
    } catch (e) {}
  }

  console.log(xhr())
})
