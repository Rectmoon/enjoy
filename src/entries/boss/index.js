if (process.env.NODE_ENV == 'development') require('raw-loader!./index.html')

import '@/assets/styles/reset.styl'
import './main.styl'

console.log('这是boos项目')
console.log(2)
console.log(3)
console.log(4)

// if (module.hot) {
//   module.hot.accept()
// }
