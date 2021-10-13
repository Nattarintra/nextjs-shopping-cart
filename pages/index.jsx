import React from 'react';
import Head from 'next/head';
import NavBar from 'src/components/NavBar';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavBar />
    </>
  );
};
export default HomePage;
