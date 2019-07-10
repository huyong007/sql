import React from 'react';
import './App.css';

import { ThemeContext, themes } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';
import pureRedux from './redux/PureRedux'

import Counter from './redux/Counter'





class ToolbarParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    )

  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  )
}




class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    })

  }

  render() {
    return (
      <div>
        {/* <ToolbarParent /> */}
        <FormattedDate date={this.state.date} />
        <h1>hello,{this.props.name}!</h1>
        <h2>react 的世界就在你眼前.</h2>
      </div>
    )
  }
}

function FormattedDate(props) {
  return (

    <h2>
      现在时刻{props.date.toLocaleTimeString()}.
      <div>{pureRedux()}</div>
    </h2>
  )
};




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock name='胡永' />
        <Counter />
      </header>
    </div>
  );
}

export default App;
