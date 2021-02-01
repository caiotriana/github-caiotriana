import React, { useState} from 'react';

import { Homepage, Header } from './style'

import eu from './assets/eu.JPG'

function Home() {
  const [ isOpenMenu, setIsOpenMenu ] = useState(false)
  // const urlImageProfile = 'https://avatars3.githubusercontent.com/u/33337587?s=460&u=da56e12a8719669e5dcc0e72491f2a1e45f6ac5a&v=4' 

  const menuList = [
    {
      label : 'About',
      to : '#'
    },
    {
      label : 'Skills',
      to : '#'
    },
    {
      label : 'Contact',
      to : '#'
    },
  ]

  function handleClickToOpenMenu() { 
    setIsOpenMenu( !isOpenMenu )
  }

  return (
    <>
    <Header>
      <div className={'Header-content'}>
        <div className={'Header-content-left'}>
          <p>
            Caio Triana
          </p>
        </div>  
        <div className={'Header-content-right'}>
            <ul className={`Header-content-right-menu Header-content-right-menu-${isOpenMenu ? 'isOpen' : 'isClose'}`}>
              {   
                menuList.map(item =>
                  <li key={item.label}>
                    <a href={item.to}>
                      {item.label}
                    </a>
                  </li>
                )
              }
            </ul>
            <div className={'Header-content-right-button'} onClick={handleClickToOpenMenu}>
              {
                <>
                <span class={`material-icons  Header-content-right-button-${isOpenMenu ? 'isOpen' : 'isClose'}`}>remove</span>
                <span class={`material-icons  Header-content-right-button-${isOpenMenu ? 'isClose' : 'isOpen'}`}>add</span>
                </>
              }
            </div>
        </div>  
      </div>
    </Header>
      <Homepage bgImage={eu}>
          <div className={'Homepage-content'}>
            
          </div>
      </Homepage>
    </>
  );
}

export default Home;
