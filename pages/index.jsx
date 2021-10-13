import React from 'react';
import Head from 'next/head';
import NavBar from 'src/components/NavBar';
import ProductCard from 'src/components/ProductCard';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavBar />
      <ProductCard />
    </>
  );
};
export default HomePage;
