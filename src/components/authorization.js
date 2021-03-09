import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from './context';
import './css/authorization.css';

export default class Authorization extends React.Component{
    constructor(props) {  
        super(props);  
        this.state = {  
            name: "",  
            password: "", 
            isLogin: true,
            isOpen: true, 
        };  
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.SubmitHandler = this.SubmitHandler.bind(this);  
    } 

    onChangeHandler(e) {  
        this.setState({  
            [e.target.name]: e.target.value  
        });  
    }


    SubmitHandler(event){
        try {
            
            let url = '';
            if (this.state.isLogin) url = '/api/login';
            else url = '/api/register';
            fetch(url, {
              method: 'POST',
              body: JSON.stringify(this.state),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(res =>{
                this.setState({isOpen: false});
            });
          } catch (error) {
            console.error('Ошибка:', error);
          }
        
        event.preventDefault();
    };
    render(){
        if (!this.state.isOpen){
            return <Redirect to='/'/>;
        }
        return(
            <React.Fragment>
                <div className="authorization">
                    <div className="authorization-body">
                        {this.state.isLogin ? (
                        <div>
                            <h1>Авторизация</h1>
                            <form onSubmit={this.SubmitHandler}>
                                <input type="text" name="name" placeholder="Фамилия И.О." onChange={this.onChangeHandler} pattern="[A-ZА-Я][a-zа-я]+\s[A-ZА-Я]\.[A-ZА-Я]\." required /><br />
                                <input type="text" name="password" placeholder="Пароль" onChange={this.onChangeHandler} required /><br />
                                <button class="subscribe" >отправить</button>
                            </form> <br />
                            <a class="f_link" onClick={()=>this.setState({isLogin: false})}>Регистрация</a>
                        </div>) : 
                        (<div>
                            <h1>Регистрация</h1>
                            <form onSubmit={this.SubmitHandler}>
                                <input type="text" name="name" placeholder="Фамилия И.О." onChange={this.onChangeHandler} pattern="[A-ZА-Я][a-zа-я]+\s[A-ZА-Я]\.[A-ZА-Я]\." required /><br />
                                <input type="text" name="password" placeholder="Пароль" onChange={this.onChangeHandler} required /><br />
                                <button class="subscribe">отправить</button>
                            </form> <br />
                            <a class="f_link" onClick={()=>this.setState({isLogin: true})}>Авторизация</a>
                        </div>)}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}