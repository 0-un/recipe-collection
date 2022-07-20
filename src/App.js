import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Search, List} from './components/pages';
import Menu from './components/Menu'
import Sidebar from './components/Sidebar'


function App() {
  //각 페이지 nav
  const nav = [
    {
      url: "/",
      name: 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    },
    {
      url: "/search",
      name: 
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-search" viewBox="0 0 24 24">
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
      </svg>
    },
    {
      url: "/lists",
      name: 
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    },
  ]

  // 데이터를 넣을 빈배열
  const [checkedList, setCheckedList] = useState([]);
  const onCheckedElement = (e, recipe) => {
    // 버튼 클릭시 스크롤이 recipe-container 위로
    // const scrollpos = document.querySelector(".recipe-list");
    // window.scrollTo(200, scrollpos);
    console.log(e);//체크되면 true  , 체크 안되면 false
    //체크된 상태
    console.log(e.target.checked+"etarget");
    if(e.target.checked)  {
      //  기존 배열의 데이터와 label이 같으면 filter로 거름
      if(checkedList.filter( r => r.label === recipe.label).length === 0) {
        setCheckedList(([...checkedList, recipe]));
      }
    }
    //체크 X 면 제거
    else {
      setCheckedList(checkedList.filter(r =>r !== recipe));
    }
    console.log(checkedList);
  };
  //setCheckedList 함수 : 비동기 -> checkedList 배열이 바꼈는지 확인X, useEffect에서 확인
  useEffect(() => {
    for (let item of checkedList) {
      console.log(item)
    }
    // console.log(checkedList+"체크확인!")
  }, [checkedList])

  //클릭 후 label 같지 않으면 제거
    const onRemove = (label) => { 
      setCheckedList(checkedList.filter(r => r.label !== label))
    } 
    const onRemoveAll = () => { 
      setCheckedList([]);
    } 

  return (
    <div className="App">
      <div className='header'>
        <h1>Recipe collection</h1>
      </div>
      <div className='app-content'>
        <Sidebar>
          <Menu menus={nav}></Menu>
        </Sidebar>
        <div className='main-content'>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/search" element={<Search onCheckedElement={onCheckedElement}/>}/>
              <Route exact path="/lists" element={<List checkedList={checkedList} onRemoveAll={onRemoveAll} onRemove={onRemove}/>}/>
            </Routes>
        </div>
        
      </div>

    </div>
  );
}

export default App;
