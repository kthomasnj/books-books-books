import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const SearchBooks = () => {
  return (
    <>
      <Jumbotron fluid className='text-light bg-info'>
        <Container>
          <h1 class="text-center">Ultimate Book Search</h1>
          <p class="text-center">Find your adventure here!</p>
        </Container>
      </Jumbotron>

      <h2 class="text-center">Click Book Search above to start your adventure!</h2>
    </>
  );
};

export default SearchBooks;
