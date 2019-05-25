if (process.env.NODE_ENV == 'development') require('raw-loader!./index.html')

import './index.css'

$('.show-more').click(function() {
  $(this).hide()
  $('.content').removeClass('short-content')
})
