import React from 'react'
import CardTraining from './CardTraining'
import Dictionary from './Dictionary'
import './MainPage.css'

function MainPage() {
  let mainpage = true;
  let dictionary = false;
  let cardtraining = false;

  if (mainpage) {
    return(
      <div className="main">
        <button className="main_element">Dictionary</button>
        <button className="main_element">CardTraining</button>
      </div>
    )
  }
  if (dictionary) {
    return <Dictionary />
  }

  if (cardtraining) {
    return <CardTraining />
  }
}

export default MainPage