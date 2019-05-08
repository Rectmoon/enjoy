if (process.env.NODE_ENV == 'development') require('raw-loader!./index.html')

import '@/assets/styles/reset.styl'
import '@/assets/styles/home.styl'

console.log($)
