import React, { Component } from 'react';
import DemoList_18 from '../component/DemoList_18';
import { demos } from '../demos_18';
import SearchBox_18 from '../component/SearchBox_18';
import Scroll_18 from '../component/Scroll_18';
import './App_18.css';

class App_18 extends Component {
  //class 裡面想用 state 的話要用建構子
  constructor() {
    super();
    this.state = {
      demo: demos,
      searchField: '', //搜尋欄的值，預設是空值
    };
  }

  //當input的值被改變時會觸發onSearchChange
  onSearchChange = (evt) => {
    this.setState({ searchField: evt.target.value });
    console.log('onSearchChange');
  };

  render() {
    const filtereddemos = this.state.demo.filter((demo) => {
      console.log('filtereddemos');
      return demo.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase()); //讓filtereddemos的值=篩選在searchField有包含在name裡面的值
    });
    //用參數searchChange先設好值再傳給SearchBox就不需要在App.js裡面用bind(this)
    //onSearchChange已經事有加state的變數了，所以在下面不需要再加state
    return (
      <div className='tc'>
        <div className='bw2  ba b--blue bg-light-yellow'>
          <h1>Demo database</h1>
          <SearchBox_18 searchChange={this.onSearchChange} />
        </div>
        <Scroll_18>
          <DemoList_18 demos={filtereddemos} />
        </Scroll_18>
      </div>
    );
  }
}

export default App_18;
