import { Component } from "react";
import '../styles/Header.css'

class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <header>
        <h1 className="header-title">CV Creation</h1>
      </header>
    )
  }

}

export default Header