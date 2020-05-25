
import { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout'
import PersonaDataContainer from '../components/PersonalData/PersonaData.container';

export default function Main() {

  return (
    <div>
      <Layout>
        <PersonaDataContainer />
      </Layout>
    </div>
  )
}
