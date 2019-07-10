// import React from 'react'
// import ReactDOM from 'react-dom'

function debounce(func, wait = 500) {
  let timeout // 定时器变量
  return function(event) {
    clearTimeout(timeout) // 每次触发时先清除上一次的定时器,然后重新计时
    event.persist && event.persist() //保留对事件的引用
    //const event = e && {...e}   //深拷贝事件对象
    timeout = setTimeout(() => {
      func(event)
    }, wait) // 指定 xx ms 后触发真正想进行的操作 handler
  }
}

class App extends React.Component {
  handleChange = debounce(e => {
    console.log(e.target.value)

    setTimeout(() => {
      console.log(2)
    }, 300)
  })

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
