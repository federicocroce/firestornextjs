(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{lnhQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fetch",function(){return n("nydr")}])},nydr:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("q1tI"),o=n.n(a),r=n("b0oO"),s=(n("rePB"),n("o0o1")),i=n.n(s);var c=n("iqUP"),u=n.n(c);try{u.a.initializeApp({apiKey:"AIzaSyDINSbmIwTdqRE7yDhkow46fs3JxW5y8KM",authDomain:"test-74eeb.firebaseapp.com",databaseURL:"https://test-74eeb.firebaseio.com",projectId:"test-74eeb",storageBucket:"test-74eeb.appspot.com",messagingSenderId:"984496005171",appId:"1:984496005171:web:1223101227209a12284346",measurementId:"G-H81H426MJZ"})}catch(b){/already exists/.test(b.message)||console.error("Firebase initialization error raised",b.stack)}var l=u.a.firestore(),p=function(e,t){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:l.collection(e).onSnapshot((function(e){var n=[];e.forEach((function(e){n.push(e.data().data)})),console.log(n),t(n)}));case 1:case"end":return n.stop()}}),null,null,null,Promise)},f=o.a.createElement;function d(){var e=Object(a.useState)({}),t=e[0],n=e[1];return Object(a.useEffect)((function(){p("test",n);return function(){}}),[]),f("div",null,f(r.a,null),f("p",null,"This is the about page"),f("p",null,Object.keys(t).map((function(e){return t[e]}))))}}},[["lnhQ",0,2,4,5,6,1,3]]]);