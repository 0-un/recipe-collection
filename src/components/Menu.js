// import React from 'react'
import React, { useState } from 'react';
import { NavLink} from 'react-router-dom'
import './Menu.css'

// menus라는 props를 활용해서 동적으로 메뉴 구성
function Menu({menus}){
    const [activeNav, setActiveNav] = useState(false);
    const toggleNav = () => {
        setActiveNav(activeNav => !activeNav)
    }
    return (
        <>
        {menus.map ( (menu, id) => {
            return (
                // menus는 배열, menus는 객체이고 url, name이라는 프로퍼티 가짐
                // 현재 nav가 true면 클래스명으로 스타일 변경
                <NavLink key={id} to={menu.url} className = {activeNav === true ? "menu-item active" : "menu-item"}  onClick={()=>toggleNav} >{menu.name}</NavLink>
            )
        })}
    </>
    )

}
export default Menu