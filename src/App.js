import React from 'react';
import './App.css';
import recipeItems from './data';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="App">
      {/* <h1>Styled-Component Cards</h1> */}
      <RecipeList recipeItems={recipeItems} />
    </div>
  );
}

export default App;
