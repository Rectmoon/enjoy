// import React from 'react'
// import ReactDOM from 'react-dom'

class App extends React.Component {
  handleChange = e => {
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
