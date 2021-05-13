import React from 'react';
import Parser from 'html-react-parser';

import { useOnSnapShotData } from '../../utils/hooks';
import styled from 'styled-components';


const PersonalDataStyles = styled.div `
  /* transition: all $time-transition ease; */
  height: 100%;
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.primaryColorText};
  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.19), 0 2px 8px rgba(0, 0, 0, 0.23);
  &>section {
      padding: 0 0 0 8%;
  }
  h1.name {
      text-align: right;
  }
  .img-profile-container {
      position: relative;
      img {
        width: 100%;
      }
      .content-img {
          position: absolute;
          bottom: 8%;
          right: 9%;
          max-width: 156px;
          h1 {
              font-size: 1.3em;
          }
          p {
              font-size: 0.8em;
          }
      }
  }
  .container-detail-personal-data {
      color: ${({ theme }) => theme.colors.primaryColorText}; // padding-bottom: 8%;
      &.skills {
          // [class^="icon-"] {
          //     padding-top: 7%;
          // }
          &>div {
              border-bottom: none;
          }
          .skill-container {
              margin: 10px 0;
              span {
                  margin-bottom: -8px;
              }
          }
      }
      .text {
          display: block;
          font-size: 0.7em;
          line-height: 1.6em;
      }
      &>div {
          width: 85%;
          border-bottom: 1px solid ${({ theme }) => theme.colors.colorAca};
          padding: 8% 8% 8% 0;
      }
      &:first-of-type {
          // padding-top: 8%;
      } // div:last-of-type {
      //     border-bottom: none;
      // }
      [class^="icon-"] {
          display: table-cell;
          font-size: 1.3em;
          padding: 10% 20px 0 0;
      }
  }
            
`


const PersonalData = ({ data }) => {

  const [collection] = useOnSnapShotData(data);



  const personalData = collection.list[Object.keys(collection.list)[0]];

  console.log(personalData);

  const calculateAge = (args) => {
    var ageDifMs = Date.now() - new Date(args).getTime();
    var ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    console.log(age)

    return age < 1 ? `${age} año` : `${age} años`;
  }

  return (
    <PersonalDataStyles>
      {/* <aside className="aside-left-container"> */}
      {!!Object.keys(personalData.mainData).length &&
        <div className="img-profile-container">
          <img src={personalData.mainData.img}></img>
          <div className="content-img">
            <h1 className="name">{personalData.mainData.name}</h1>
            <p>{personalData.mainData.position}</p>
          </div>
        </div>
      }



      {!!personalData.personalData.length &&
        <section>
          {personalData.personalData.map((data, index) => {
            // console.log(data.subcontent)
            return (
              <a href={data.link} key={index} className="container-detail-personal-data table">
                <i className={data.icon}></i>
                <div className="container-detail">
                  <span className='text'>{Parser(data.content)}</span>
                  <span className='text'>{Parser(data.subcontent)}</span>
                  {data.callback && <span className='text'>{eval(data.callback)}</span>}
                </div>
              </a>
            );
          })}
        </section>
      }

      {JSON.stringify(personalData.skills) != '{}' &&
        <section className="container-detail-personal-data table skills">
          <i className={personalData.skills.main.icon}></i>
          <div className="container-detail">
            <span className='text'>{Parser(personalData.skills.main.content)}</span>

            {personalData.skills.details.map((data, index) => {
              return (
                <div className='skill-container' key={index}>
                  <span className='text'>{Parser(data.skill)}</span>
                  <input type="range" min="0" max={personalData.skills.maxRate} defaultValue={data.rate} disabled={true} className="slider" id="myRange" />
                </div>
              );
            })}
          </div>
        </section>
      }
      {/* </aside> */}
    </PersonalDataStyles>
  );
}

export default PersonalData;