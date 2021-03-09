import React from 'react'
import './css/footer.css';
import './css/header.css';
import './css/Main.css';

function Footer(){
    return(
        <footer>
            <div class="conteiner">
                <div class="footer_info">
                    <div class="footer"> COPYRIGHT © 2020 СПП часть 2 | ALL RIGHTS RESERVED
                    </div>
                    <nav class="footer_link">
                        <a class="f_link" href="/">Home</a> 
                    </nav>
                </div> 
                <div class="e-mail">
                    <div class="footer">Подпишитесь на e-mail рассылку</div>
                        <form>
                            <input type="text" name="subscribe" placeholder="ваш e-mai"/>
                            <button class="subscribe">
                                подписаться
                            </button>
                        </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;