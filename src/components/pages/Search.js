import React from 'react'
import { useState} from 'react';
import './Search.css'

function Search({onCheckedElement}) {
  const [keyword, setKeyword] = useState('');
  const [food, setFood] = useState([]);


  // input의 입력값에 따라 키워드 상태 변경
  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  // api 데이터 : 입력한 키워드에 따라 불려옴
  const fetchData = async () => {
    const data = await fetch(`https://api.edamam.com/search?q=${keyword}&to=50&app_id=13060250&app_key=3be16ada76820914d55751a2ebbfd6ed`);
    const dataJson = await data.json();
    console.log(dataJson);
    const { hits } = dataJson;
    setFood(hits);
  }

  // 검색 버튼 클릭시 리스트 검색하기 
  const searchList = async (e) => { 
    // e.preventDefault() // 새로고침 방지하기
    fetchData()
    const star = document.getElementsByClassName('checkbox-input')
    for(let i = 0; i<star.length; i++){
      star[i].checked = false;
    }
  }

  // Enter 눌러도 서치 실행
  const onKeyPress = (e) => {
    // e.preventDefault()
    if (e.key === 'Enter') {
      searchList()
    }
  }

  return (
    <div>
      <form className="App-search-container">
        <input className="search-input" type="text" value={keyword} onKeyPress ={onKeyPress} onChange={handleChange} placeholder="Search"/>
        {/* form태그에 1개의 input만 있어 enter시 계속 새로고침 -> 한개의 가상 input 만들어주고 숨김 */}
        <input className="hidden" type="text" ></input>
        <div className='search-button' type="submit" onClick={searchList}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-search"
            viewBox="0 0 24 24">
            <defs></defs>
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>

        </div>
      </form>
      <div className="recipe-container">
        {keyword.length === 0 ? (
          <div className='blank-content'>
            <div className='blank-title'>Please<br /> Search our Recipes!</div>
            <div className='blank-img'>
              <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200" viewBox='0 0 50 50'><path d="m7 42-3-3h40l-3 3Zm-.65-6.05q.35-.8.675-1.45.325-.65 1.025-1.35V16.9H6v-2.5h2.05v-1.7H6v-2.5h2.05V8.5H6V6h15q1.2 0 1.85.65.65.65.65 1.85v1.7H42v2.5H23.5v1.7q0 1.2-.65 1.85-.65.65-1.85.65h-5.25v13.55q1 .1 1.95.5t1.8 1.1q.8-3.15 3.575-5.325 2.775-2.175 6.575-2.175 4.65 0 7.575 3.05t2.925 7.7v.65Zm16.15-3h14.3q-.45-2.25-2.45-3.825-2-1.575-4.7-1.575t-4.7 1.575q-2 1.575-2.45 3.825ZM15.75 10.2H21V8.5h-5.25Zm0 4.2H21v-1.7h-5.25Zm-5.25-4.2h2.75V8.5H10.5Zm0 4.2h2.75v-1.7H10.5Zm0 17q.4-.3 1.2-.625.8-.325 1.55-.375V16.9H10.5Zm12 1.55h14.3Z"/></svg>
            </div>
          </div>
          
          ) :
          // map으로 서치된 데이터 가져옴
          food.map((f, index) => {
            const recipe = f.recipe;
            const URL = recipe.image;
            const bgImg = {
                background:`url(${URL})`,
            };
            return (
              <li className="recipe-list" key={index}>
                <div className="recipe-img" style={bgImg} />
                {/* 체크 유무로 onCheckedElement 실행하여 list에 넣을 배열 지정 */}
                <div className="star-checkbox">
                  <input type="checkbox" id={"star-"+index} className="checkbox-input" onChange={e => onCheckedElement(e, recipe)} />
                    <label htmlFor={"star-"+index}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    </label>
                </div>
                <h2>{recipe.label}</h2>
                <p>{recipe.ingredientLines}</p>
              </li>
            );
          })
        }
      </div>
    </div>
  );
}
export default Search