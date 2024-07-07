import React from 'react';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Contact Manager!</h1>
      <p className={css.description}>
        Contact Manager is a simple and efficient app for organizing your
        contact information. Log in to start adding, viewing, and deleting your
        contacts.
      </p>
      <p className={css.features}>
        <strong>Main Features:</strong>
        <ul>
          <li>Effortlessly add new contacts</li>
          <li>View all your contacts in one place</li>
          <li>Delete contacts you no longer need</li>
        </ul>
      </p>
      <p className={css.getStarted}>
        <strong>Manage your contacts with ease!</strong>
      </p>
    </div>
  );
};

export default Home;
