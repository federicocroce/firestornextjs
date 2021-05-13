
import React, { useEffect, useState } from 'react';
import fetch from 'cross-fetch';
import styled, { createGlobalStyle } from 'styled-components';

import { get, db, formattedData } from '../config/firebase/firestore.methods';
// import MainDataContainer from '../components/MainDataContainer/MainDataContainer';
import PersonalData from '../components/PersonalData/PersonalData';
// import MainSection from '../components/MainSection/MainSection';
import MainSection from 'components/MainSection/MainSection';

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
   color: red;
 }
`;
const Container = styled.div`
  text-align: center;
`;

const IndexWrapper = styled.div`
  display: grid;
  grid-template-areas: "personal-data-wrapper main-section-wrapper";
  grid-template-columns: 280px auto;
  column-gap: 30px;
`;


const WrapperCV = ({ data: { experiences, ownProjects, estudies: studies, personalData } }) => {

  // const [studiesData, setStudiesData] = useState(studies);
  // const [experiencesData, setExperiencesData] = useState(experiences);

  // useEffect(() => {
  //   // get(db.collection("studies"), (data) => console.log("DATA", data));
  //   onSnapshot(db.collection("studies"), (newData) => setStudiesData(newData));
  // }, [])

  console.log("SERVER WrapperCV");

  return (
    <IndexWrapper>

      <div className='personal-data-wrapper'>
        <PersonalData data={personalData} />
      </div>

      <MainSection data={{experiences, ownProjects, studies}}/>

      {/* <div className='main-section-wrapper'>
        <MainDataContainer data={experiences} />
        <MainDataContainer data={ownProjects} />
        <MainDataContainer data={studies} />
      </div> */}
    </IndexWrapper>
  )
}

const arrayToObject = (array, key) => {
  return array.reduce((acc, cur) => {
    acc[cur[key]] = cur;
    return acc;
  }, {});
}

export async function getServerSideProps({ params, res }) {

  const data = await Promise.all([
    get(db.collection("experiences"), formattedData),
    get(db.collection("ownProjects"), formattedData),
    get(db.collection("estudies"), formattedData),
    get(db.collection("personalData"), formattedData)
  ])


  const formetted = arrayToObject(data, 'path')


  return {
    props: {
      data: formetted
    }
  }

}

export default WrapperCV;