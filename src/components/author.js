import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Author extends React.Component{

    constructor(props) {  
        super(props);  
        this.state = {  
            name: "",  
            destination: "",
            date: "",
            file: [],
            redirect: ""
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
            let url = '/api/create';
            const data = new FormData();
            data.append('name', this.state.name);
            data.append('file',this.state.file);
            data.append('destination', this.state.destination);
            data.append('date',this.state.date);
            fetch(url, {
              method: 'POST',
              body: data
            })
            .then(res =>{
                if (res.status === 200){
                    alert('ok');
                    this.setState({redirect: '/content'})
                }else{
                    this.setState({redirect: '/authorization'})
                    alert('error');
                }
            });
          } catch (error) {
            console.error('Ошибка:', error);
          }
        event.preventDefault();
    };
    componentDidMount() {
        fetch('/api/getName')
            .then(results => results.json())
            .then(data => this.setState({name: data.name}));
    };
    
    render(){
        if (this.state.redirect !== "") {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <React.Fragment>
                <form encType="multipart/form-data" onSubmit={this.SubmitHandler}>
                    <p1>Автор: {this.state.name}</p1><br/><br/>
                    <input type="text" name="destination" onChange={this.onChangeHandler} placeholder="страна назначения" required/><br/><br/>
                    Выберите дату:<br/> <input id="date" onChange={this.onChangeHandler} type="date" name="date" required/><br/><br/>
                    <input type="file" name="file" onChange={(e) => {this.setState({file: e.target.files[0]});}} placeholder="выберите файл"/><br/><br/>
                    <button class="subscribe">отправить</button>
                </form>
            </React.Fragment>
        );
    }
}