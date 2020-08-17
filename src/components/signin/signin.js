import React from 'react';

class signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignin = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');
        
      }
    })
   
  }

  render() {
    const { onRouteChange } = this.props;
    return (
        <div>
            <h1 className='f1 white'>Hello, friend!</h1>
        <article className="br3 ba white bg-white-80 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 black ph0 mh0">Sign in form</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy black f6" htmlFor="email-address">Email</label>
                <input 
                  className="b pa2 br-pill input-reset shadow-2 ba bg-white" 
                  type="email" 
                  name="email-address"  
                  id="email-address" 
                  onChange={this.onEmailChange} 
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy black f6" htmlFor="password">Password</label>
                <input 
                  className="b pa2 br-pill input-reset shadow-2 ba bg-white" 
                  type="password" 
                  name="password"  
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input onClick={this.onSubmitSignin} className="b ph3 pv2 input-reset ba shadow-2 b--white br-pill bg-white grow pointer f6 dib" type="submit" value="Sign in"/>
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('register')} href="#0" className="f6 link dim pointer black db">Register</p>
            </div>
          </div>
        </main>
        </article>
        </div>
    ); 
  }
}

export default signin;