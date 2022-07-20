// Home.js
import React from 'react'
import './Home.css'

function Home(){
    const URL = "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2692&q=80";
    const bgImg = {
        background:`url(${URL})`,
        backgroundSize: 'cover',
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'center',
    };
    return (
        <div className='home-container'>
            <div className='home-header'>
                <h1>Don't you want to collect delicious recipes?</h1>

            </div>

            <div className='home-content'>

                <div className='main-img' style={bgImg} />
                <p className='home-sub-title'>
                    Here is the recipe app for you.<br/>
                    Search for the recipe you want, and collect the recipes you like!<br/>
                </p>
                <p>
                    First, search for the recipe or ingredients you want on the search page!<br/>
                    You can know the recipe and the ingredients you need.<br/>
                    Then, click the star icon to select the recipe you're attracted to!<br/>
                    Selected recipes can be gathered from the favorite menu!<br/>
                    Let's collect delicious recipes!
                </p>
            </div>
        </div>
    )
}
export default Home