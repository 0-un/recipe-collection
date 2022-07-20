import React from 'react'
import './List.css'
function List({checkedList, onRemove, onRemoveAll}) {

    return (
        <div className="favorite-container">
            {checkedList.length === 0 ? (
                <div className='blank-title'>Selected recipe does not exist yet!</div>) :
                // 체크된 api 데이터 배열 추가
                checkedList.map((c, index) => {
                    console.log(c+"리스트의 c");
                    const URL = c.image;
                    const bgImg = {
                        background: `url(${URL})`,
                        // backgroundSize: 'cover',
                        // backgroundRepeat: 'no-repeat',
                        // backgroundPosition: 'center, center',
                    };
                    return (
                        <div className="recipe-content-container" key={index}>
                        <div className='removeAll-button' onClick={()=>onRemoveAll()}>Delete all</div>
                        <li className="favorite-list" key={index}>
                            <div className="recipe-img" style={bgImg} />
                            <div className='remove-button' onClick={()=>onRemove(c.label)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35"  viewBox='0 0 50 50'><path d="M13.917 28.125 20 22.042l6.083 6.083 2.042-2.042L22.042 20l6.083-6.083-2.042-2.042L20 17.958l-6.083-6.083-2.042 2.042L17.958 20l-6.083 6.083ZM20 36.958q-3.5 0-6.583-1.333-3.084-1.333-5.396-3.646-2.313-2.312-3.646-5.396Q3.042 23.5 3.042 20q0-3.542 1.333-6.625T8.021 8q2.312-2.292 5.396-3.625Q16.5 3.042 20 3.042q3.542 0 6.625 1.333T32 8q2.292 2.292 3.625 5.375 1.333 3.083 1.333 6.625 0 3.5-1.333 6.583-1.333 3.084-3.625 5.396-2.292 2.313-5.375 3.646-3.083 1.333-6.625 1.333Z" /></svg>
                            </div>
                            <h2>{c.label}</h2>
                            <p>{c.ingredientLines}</p>
                        </li>
                        </div>
                    );
                })
            }
        </div>
    )
}
export default List