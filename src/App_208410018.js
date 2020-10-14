import React, { Component } from 'react';
import './App.css';
import DemoList from './DemoList_208410018'
import {demos} from './demos_208410018'
import SearchBox from './SearchBox_208410018'


class App extends Component {
  constructor() {
    super();
    this.state = {
      demo: demos,
      searchField: '',//搜尋欄的值，預設是空值
    };
  }

  onSearchChange = (evt) => {
    this.setState({searchField:evt.target.value})
    console.log("onSearchChange");
  }

  render() {

    const filtereddemos = this.state.demo.filter((demo) => {
      console.log("filtereddemos");
      return demo.name.toLowerCase().includes(this.state.searchField.toLowerCase())//讓filtereddemos的值=篩選在searchField有包含在name裡面的值
    })
//用參數searchChange先設好值再傳給SearchBox就不需要在App.js裡面用bind(this)
    return (
      <div className="tc">
        <div className='bw2  ba b--blue bg-light-yellow'>
        <h1  >Demo database</h1>
        </div>
      
      <SearchBox searchChange={this.onSearchChange} />
      <DemoList demos={filtereddemos}/>
    </div>
    );
  }
}

export default App;

