import React from 'react';
import ReactDOM from 'react-dom';
import SearchBooks from "./searchBooks";
import './index.css'

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">look for a book!</h1>
        <SearchBooks/>
        <h4>Designed &amp; Developed with &hearts; Nina Kalpakis | 2021</h4>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));