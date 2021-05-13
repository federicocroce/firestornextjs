import React from "react";

import MainDataContainer from "components/MainDataContainer/MainDataContainer";
// import MainDataContainer from "../MainDataContainer/MainDataContainer";
import styled from 'styled-components';

const MainSectionStyle = styled.div`
  /* transition: all $time-transition ease; */
  background: ${({ theme }) => theme.colors.secondaryColorLight};
  box-shadow: inset 5px 0px 11px rgba(0, 0, 0, 0.19);
  color: ${({ theme }) => theme.colors.greyDark};
  /* width: 70%; */
  padding: 5% 3% 3% 3%; // padding: 4%;
  position: relative;
  h1.name {
      text-align: left;
  }
  section {
      /* transition: all $time-transition ease; */
      background-color: ${({ theme }) => theme.colors.primaryColorText};
      margin: 6% 0;
      padding: 6% 0 6% 6%;
      box-shadow: 0 1px 11px rgba(0, 0, 0, 0.19), 0 2px 8px rgba(0, 0, 0, 0.23);
      position: relative;
      [class^="icon-"] {
          display: inline-block;
          font-size: 2em;
      }
      &:hover {
          i.actions-item.add-icon {
              visibility: initial;
              opacity: 1;
          }
      }
      i.actions-item {
          transition: all 0.5s ease;
          visibility: hidden;
          opacity: 0;
          position: absolute;
          right: 2%;
          font-size: 1em;
          top: 17px;
          &:hover {
              cursor: pointer;
          }
          &.add-icon {
              top: 12px;
          }
      }
      h2,
      h3,
      h4,
      a,
      p,
      span {
          line-height: 1.4em;
      }
      h2 {
          display: inline-block; // line-height: 2em;
      }
      h3,
      a {
          font-size: 1em;
          color: ${({ theme }) => theme.colors.greyDark}; // line-height: 1em;
          // text-align: justify;
      }
      h4 {
          color: ${({ theme }) => theme.colors.color1e0};
          font-size: 0.7em;
          text-transform: uppercase;
          line-height: 2em;
      }
      li {
          list-style-type: none;
          line-height: 1.4em;
          margin-top: 10px;
          text-align: justify;
          font-size: 0.8em; // &:last-of-type {
          //     margin: 0;
          // }
      }
      article {
          padding: 15px 0;
          border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryColorLight};
          position: relative;
          &:last-of-type {
              border-bottom: none;
          }
          div {
              padding-right: 8%;
          }
          &:hover {
              i.actions-item.remove-icon {
                  visibility: initial;
                  opacity: 1;
              }
          }
      }
      &:first-of-type {
          margin-top: 0;
      }
      &:last-of-type {
          margin-bottom: 0;
      }
  }
  .container-detail {
      padding-left: 10px;
  }
`


const MainSection = ({ data: { experiences, ownProjects, studies } }) => {

    return (
        <MainSectionStyle>
            <span className="material-icons">face</span>
            <span className="material-icons">home</span>
            <MainDataContainer data={experiences} />
            <MainDataContainer data={ownProjects} />
            <MainDataContainer data={studies} />
        </MainSectionStyle>
    )
}

export default MainSection;