import React from 'react'
import {Switch, Route,  BrowserRouter} from 'react-router-dom'
import Content from "./components/content"
import Author from "./components/author"
import Authorization from "./components/authorization"
import Header from './components/header'
import Footer from './components/footer'
import ContentTable from './components/contentTable'
import './components/css/footer.css';
import './components/css/header.css';
import './components/css/Main.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <main>
          <div class="container">
            <div class="content">
              <Switch>
                <Route path="/authorization"><Authorization/></Route>
                <Route path="/content"><ContentTable/></Route>
                <Route path="/"><Author/><br/><Content/></Route>
              </Switch>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </ BrowserRouter>
  );
}

export default App;
