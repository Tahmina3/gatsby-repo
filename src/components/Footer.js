import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'

import facebook from '../img/social/facebook.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="TheRoyalBengal"
            style={{ width: '10em', height: '6em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  © 2020 The Royal Bengal
                </section>
              </div>
        
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/Royal%20Bengal%20Indian%20Restaurant">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
