import React from "react";

function FancyBorder(props) {
  return (
    <div style={{border: '2px solid ' + props.color}}>
      {props.children}
    </div>
  )
}

function Dialog(props) {
  return (
    <FancyBorder color='lime'>
      <h1>
        {props.title}
      </h1>
      <p>
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

function WelcomeDialog(props) {
  return (
    <Dialog
      title="Welcome"
      message="Thanks for visit our space boat"
    />
  )
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {login: ''}
  }

  handleChange(e) {
    this.setState({login: e.target.value})
  }

  handleClick() {
    if (this.state.login) alert(`Welcome aboard, ${this.state.login}`)
  }

  render () {
    return (
      <Dialog 
        title='The program research of Mars'
        message='How to contact you?'
      >
      <input
        value={this.state.login}
        onChange={(e) => this.handleChange(e)}
      />
      <button
        onClick={() => this.handleClick()}
      >
        Sign me up!
      </button>

      </Dialog>
    )
  }
}

function App(props) {
  return(
    <div>
      <WelcomeDialog/>
      <SignUpDialog/>
    </div>
  )
}

export default App