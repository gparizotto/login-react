import React from 'react';
import Main from '../template/Main';

const Home = (props) => {
  return (
    <Main
      icon="home"
      title="Home"
      subtitle="Homepage of a CRUD application using React!"
    >
      <div className="display-4">Welcome!</div>
      <hr />
      <p className="mb-0">
      A system to demonstrate the development of a registration form using React!
      </p>
    </Main>
  );
};

export default Home;
