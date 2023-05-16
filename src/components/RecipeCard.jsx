import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #FFF;
    border-radius: 15px;
    /* border: solid #999 1px; */
    width: 400px;
    height: 250px;
    margin: 30px;
    /* padding: 10px; */
    box-shadow: rgba(35, 107, 137, 0.2) 0px 7px 29px 0px;
    /* overflow: hidden; */
`

const ImageContainer = styled.div`
    width: 100%;
    height: 150px;
    overflow: hidden;
`

const CardImage = styled.img`
    width: 100%;
    object-fit: contain;
`;

const Button = styled.button`
    padding: 10px 40px;
    border-radius: inherit;
    background-color: #FFF;
    border-style: none;
    width: 100%;
    
    &:hover {
        cursor: pointer;
    }
`

const RecipeCard = ({ recipeItem }) => {
    // console.log(recipeItem);

    return (
    <Container className='container'>
        <h3>{recipeItem.itemName}</h3>
        <ImageContainer>
            <CardImage src={recipeItem.itemImage} className='card-image'/>
        </ImageContainer>
        <Button>Let's Cook</Button>
    </Container>
    )
  }

  export default RecipeCard
