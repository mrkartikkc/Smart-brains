import React from 'react';

const register = ({onRouteChange}) => {
    return (
        <div>
            <h1 className='f1 white'>Hello, friend!</h1>
        <article className="br3 ba white bg-white-80 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 black ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy black f6" htmlFor="name">Name</label>
                <input className="b pa2 br-pill input-reset shadow-2 ba bg-white" type="text" name="name"  id="name"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy black f6" htmlFor="email-address">Email</label>
                <input className="b pa2 br-pill input-reset shadow-2 ba bg-white" type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy black f6" htmlFor="password">Password</label>
                <input className="b pa2 br-pill input-reset shadow-2 ba bg-white" type="password" name="password"  id="password"/>
              </div>
            </fieldset>
            <div className="">
              <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba shadow-2 b--white br-pill bg-white grow pointer f6 dib" type="submit" value="Register"/>
            </div>
            <div className="lh-copy mt3">
            </div>
          </div>
        </main>
        </article>
        </div>
    );
}

export default register;