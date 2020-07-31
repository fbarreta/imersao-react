import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import App from './pages/cadastro/Home/App';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={() => ( <div>404 not found</div> )} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
