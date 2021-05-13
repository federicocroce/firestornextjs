
import React, { useEffect, useState } from 'react';

import App from 'mf-preact';


const Test = () => {

  console.log("SERVER Test");

  return (
    <>
    <h1>Test MF</h1>
    </>
  )
}

const arrayToObject = (array, key) => {
  return array.reduce((acc, cur) => {
    acc[cur[key]] = cur;
    return acc;
  }, {});
}

export async function getServerSideProps({ params, res }) {


  return {
    props: {
      data: null
    }
  }

}

export default Test;