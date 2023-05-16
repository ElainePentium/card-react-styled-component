import React from 'react';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const RecipeList = ({ recipeItems }) => {
    // console.log(recipeItems);

    return (
        <Container>
            {recipeItems.map(recipeItem => (
                <RecipeCard recipeItem={recipeItem} key={recipeItem.id}/>
            ))}
        </Container>
    )
}

export default RecipeList;

//  {<Flexbox>
//      {Cards.map(item => (
//          <Card item={item}/>
//      ))}
//  </Flexbox>}