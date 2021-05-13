import root from 'react-shadow';
import fetch from 'cross-fetch';


import { SSIFragment } from 'react-ssi-fragment';


// export default function Quote() {
//   return (
//       <root.div className="quote">
//           <q>There is strong shadow where there is much light.</q>
//           <span className="author">― Johann Wolfgang von Goethe.</span>
//       </root.div>
//   );
// }




root.defaultProps = {
  mode: 'open',
  delegatesFocus: false,
  styleSheets: [],
  children: null,
};


import { useEffect, useRef } from 'react';
import { useState } from 'react';

let eventsList = [];

const Wrapper = ({ callService, name, listenerEvents }) => {
  console.log("SERVER Mf 2");
  const mfContainer = useRef(null);
  let html = null;
  const [test, setTest] = useState(null);

  // const [testBody, setTestBody] = useState(null);
  // const headContainer = useRef(document.createElement('head'));
  // const bodyContainer = useRef(document.createElement('body'));



  ////////////////////////

  // useEffect(() => {
  //   if (typeof window === 'undefined') return;
  //   callService
  //     .then(resp => resp.text())
  //     .then(function (data) {
  //       ////////////// DOM ////////////////////

  //       console.log(data, "data");

  //       const doc = new DOMParser().parseFromString(data, "text/xml");
  //       const bodyDoc = doc.getElementsByTagName("body")[0];
  //       const headDoc = doc.getElementsByTagName("head")[0];
  //       // const mfContainer2 = document.getElementById("etas-test");
  //       const mfContainer2 = mfContainer.current;

  //       // var a = document.getElementById('shadow');
  //       // const mfContainer2 = a.shadowRoot.querySelector("#etas-test")


  //       const newHead = document.createElement("head");
  //       const newBody = document.createElement("body");

  //       const createCustomElements = (parent, nodeToAppend, needAppend) => {
  //         if (!parent || !nodeToAppend) return;
  //         for (let index = 0; index < parent.children.length; index++) {
  //           let child = parent.children[index];

  //           // if (child.tagName !== 'div') {

  //           let newElement = document.createElement(child.tagName);

  //           for (let i = 0; i < child.attributes.length; i++) {
  //             const attr = child.attributes[i];
  //             newElement.setAttribute(attr.name, attr.value);
  //             if (!!child.innerHTML) {
  //               newElement.innerHTML = child.innerHTML;
  //             }
  //           }
  //           mfContainer2.appendChild(newElement)
  //           // !!newElement.src && newElement.src === '__NEXT_DATA__ETAS' && nodeToAppend.appendChild(newElement);
  //           nodeToAppend.appendChild(newElement);
  //           // }
  //         }
  //         // mfContainer2.appendChild(nodeToAppend)
  //         needAppend && mfContainer2.appendChild(nodeToAppend);
  //       };

  //       createCustomElements(headDoc, newHead, true);
  //       createCustomElements(bodyDoc, newBody, true);

  //       ////////////////////////////////////////////

  //       /////////// EVENTS /////////////////////

  //       //Listeners

  //       // const listenerEventsKeys = Object.keys(listenerEvents);

  //       // if (!!listenerEventsKeys.length) {
  //       //   listenerEventsKeys.forEach(eventKey => {
  //       //     console.log(eventKey);
  //       //     const e = listenerEvents[eventKey];

  //       //     const detector = ({ detail }) => {
  //       //       e(detail);
  //       //     };

  //       //     // mfContainer2.addEventListener(eventKey, detector);

  //       //     // eventsList.push(() =>
  //       //     //   mfContainer2.removeEventListener(eventKey, detector)
  //       //     // );
  //       //   });
  //       // }
  //       ////////////////////////////////////////////
  //     });

  //   return () => {
  //     //Clear events
  //     eventsList.forEach(event => event());
  //   };
  // });


  ////////////////////////////////////////////


  // useEffect(() => {
  console.log("SERVER asd?");
  (async () => await fetch(
    "http://localhost:8080/", {
    mode: 'cors',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      webtoken: 'ft.gAAAAABgF0G8cHBQ65FBCIX60eNR70w2PRz550rkEPE26UEy7AkCbG6il7eY5Sn7xLvUFjiTiz_qv49lFYvKRntTn7VYTq71ApldRLDqA2tDh9VuvHBhDhJ07Dxm7tuoQV6HzQfFBbs2D6r6TJHWAtMGCBGrlHQqfot4w_rvoEVIIceDZXfpP_YvjjfFqr3ZB2yjKfk0L9Glco9LyH0gS3Ati21jfMzSYqj4lwyMyJ3zT26W6zOurVCEOLxY5sRAoWq4ihxkn6mE8sSTD7QcMAzG2v0HPSojD_5jWS4J4R66DrxgLAH00pyVqpoPUEgu6ufqVp79Hw9q17FqyYeZshZXbWCg4RyA0iLBWxImqrJRw1hk4lgrlUA'
    }
  }
  )
    .then((resp) => resp.text())
    .then(htmlDoc => {
      // debugger;
      console.log(htmlDoc)
      // const doc = new DOMParser().parseFromString(htmlDoc, "text/xml");
      // console.log(doc, "doc");

      setTest(htmlDoc);
      // debugger;
      // var shadow = document.getElementById('shadow');

      // shadow.attachShadow({ mode: 'closed' });
      // shadow.innerHTML = doc;
      // shadow.innerHTML = htmlfinally;
      // shadow.innerHTML = `<div><body>asdasd</body></div>`;
    }))()
  // }, [])

  console.log("Cuantas veces paso?");

  return (
    <div id='etas-test' ref={mfContainer}>
      MF
      <div dangerouslySetInnerHTML={{ __html: test }} />
      {/* {test} */}
      {/* {mfContainer.current} */}
      {/* <div>
          {headContainer.current}
        </div>
        <div>
          {bodyContainer.current}
        </div> */}
    </div>
  )
}

const Mf = (props) => {
  console.log("SERVER Mf");
  return (
    //  <root.div id="shadow">
    <Wrapper {...props} />

    // <SSIFragment
    //   id="container-id"
    //   url="http://localhost:8080/"
    //   isOnClient={false}
    // />


    //   <SSIInclude
    //   tagId="partial-container"
    //   url="http://localhost:8080/"
    //   onClientSideFetch={(err, status) => {
    //     if (err) {
    //       console.error(err)
    //     }
    //     // content is loaded
    //   }}
    // />
    // </root.div>
  )
}


export default Mf;
