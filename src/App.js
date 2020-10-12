import React, { Component } from 'react';
import './App.css';
import DemoList from './DemoList'
import {demos} from './demos'
import SearchBox from './SearchBox'


class App extends Component {
  constructor() {
    super();
    this.state = {
      demo: demos,
      searchField: '',//搜尋欄的值，預設是空值
    };
  }

  onSearchChange = (enter) => {
    this.setState({searchField:enter.target.value})
  }

  render() {

    const filtereddemos = this.state.demo.filter((demo) => {
      return demo.name.toLowerCase().includes(this.state.searchField.toLowerCase())//讓filtereddemos的值=篩選在searchField有包含在name裡面的值
    })

    return (
      <div className="tc">
      <h1 >Demo database</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <DemoList demos={filtereddemos}/>
    </div>
    );
  }
}

export default App;

