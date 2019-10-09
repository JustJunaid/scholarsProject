import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">

          <div className="navbar-left">
            <button className="navbar-toggler" type="button"><span className="navbar-toggler-icon"></span></button>
            <a className="navbar-brand" href="#">
              <img className="logo-dark" src="../assets/img/logo-dark.png" alt="logo" />
              <img className="logo-light" src="../assets/img/logo-light.png" alt="logo" />
            </a>
          </div>

          <section className="navbar-mobile">
            <nav className="nav nav-navbar ml-auto">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Pricing</a>
              <a className="nav-link" href="#">Contact</a>
            </nav>
          </section>

        </div>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
