if (process.env.NODE_ENV == 'development') require('raw-loader!./index.html')

console.log(123)

const a = { b: 1, c: { d: 3 } }

const h = $.extend(true, {}, a)

console.log(h)
