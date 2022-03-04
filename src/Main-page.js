import {Fragment} from 'react';
import main from "./images/main.jpeg"
import qr from "./images/qr.svg"
const MainPage = () => {

    return (
      <Fragment>
        <h2>Наша любимая Анюта! Поздравляем тебя с 8 Марта!</h2>
        <img className="main-page" src={main}></img>
        <img className='qr' src={qr}></img>
        </Fragment>
          );
  
 

}
  export default MainPage   