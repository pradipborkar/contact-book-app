import './style/App.scss';
import Navbar from './component/lauyout/Navbar'
import Contacts from './component/contact/Contacts';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import AddContact from './component/contact/AddContact'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
      <Navbar />
      <div className="container">
        <div className="py-3">
          <Switch>
            <Route path="/" exact component={Contacts}/>
            <Route path="/contact/add" exact component={AddContact}/>
          </Switch>
        </div>
      </div>
    </div>
      </Router>
    </Provider>
  );
}

export default App;
