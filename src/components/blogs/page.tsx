import { NextPage } from 'next';
import React, { FC } from 'react';

// Define the props interface for the Greeting component
interface GreetingProps {
  name: string;
}

// Greeting component that accepts a name prop
const Greeting: FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Home page component
const Home: NextPage = () => {
  return (
    <div>
      <Greeting name="Next.js with TypeScript" />
    </div>
  );
};

export default Home;
