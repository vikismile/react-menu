import React, {Component} from 'react'
import Menu from './components/Menu.jsx'
import MainPage from './components/MainPage.jsx'
import Event from './components/Event.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Event/>
        <MainPage/>
        <Menu/>
      </div>
    );
  }
}
export default App;