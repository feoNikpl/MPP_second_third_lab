import React from 'react'
import logo from './css/images/globe.png'

function Header(){
    return(
        <header >
            <div class="container">
                <div class="header">СПП чать 2
                    <img src={logo} hight="40px" width="40px" />	
                </div>
                <div class="menu_link">
                    <nav>
                        <a class="m_link" href="/">Home</a>
                        <a class="m_link" href="/content">Контент</a> 
                    </nav>
                    <div class="search">
                        <form>
                            <input type="text" name="search" placeholder="поиск"/>
                            <button class="search_b">
                                <i class="fa fa-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;