if (process.env.NODE_ENV == 'development') require('raw-loader!./index.html')

import '@/assets/styles/index.styl'
import '@/assets/styles/layout.styl'

function checkLogin() {
  return true
}

function handleClick(e) {
  if (!checkLogin()) {
    console.log('请先登陆好吧？')
    return
  }
  switch (e.target.id) {
    case 'click':
      console.log(111)
      break
    default:
      break
  }
}

document.addEventListener('click', handleClick, false)

const sleep = t =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(123)
    }, t * 1000)
  )

async function login() {
  let d = await sleep(2)

  console.log(d)
}

login()
