// import logo from './logo.svg';
import './styles/App.css';
import Header from './components/Header'

import { Component } from "react";
import Main from './components/Main';


class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Main></Main>
      </div>
    )
  }
}

export default App;
