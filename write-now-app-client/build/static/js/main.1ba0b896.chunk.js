(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),l=a(2),i=a(7),s=a(9),h=a(10),m=a(12),u=a(11),p=a(13),d=(a(29),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LandingPage"},r.a.createElement("header",{className:"appHeader"},r.a.createElement("div",{className:"image"}),r.a.createElement("h2",null,"A Writing Prompt App")),r.a.createElement("main",null,r.a.createElement("div",{className:"logoImage"},"writing-related image"),r.a.createElement("form",{className:"entry-form"},r.a.createElement(l.b,{to:"/sentence-generator"},r.a.createElement("button",{type:"submit"},"Write now!")))))}}]),t}(n.Component)),f=a(23);function b(e){var t=e.className,a=Object(f.a)(e,["className"]);return r.a.createElement("form",Object.assign({className:["SentenceGeneratorForm",t].join(" "),action:"#"},a))}a(34);var j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t={method:"GET"};fetch("https://calm-hamlet-15286.herokuapp.com/words?type=loc-adj",t).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;a.setState({article:"the",locationadjective:t})}),fetch("https://calm-hamlet-15286.herokuapp.com/words?type=sub-adj",t).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;a.setState({article:"the",subjectadjective:t})}),fetch("https://calm-hamlet-15286.herokuapp.com/words?type=subject",t).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;a.setState({article:"the",subject:t})}),fetch("https://calm-hamlet-15286.herokuapp.com/words?type=verb",t).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;a.setState({verb:t})}),fetch("https://calm-hamlet-15286.herokuapp.com/words?type=preposition",t).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;a.setState({preposition:t})}),fetch("https://calm-hamlet-15286.herokuapp.com/words?type=location",t).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;a.setState({location:t})}),fetch("https://calm-hamlet-15286.herokuapp.com/words?type=adj",t).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)];console.log(t);var n=t.word;a.setState({adjective:n})})},a.state={article:"",adjective:[],subjectadjective:[],locationadjective:[],subject:[],verb:[],preposition:[],location:[]},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SentenceGenerator"},r.a.createElement("header",{className:"appHeader"},r.a.createElement("h3",null,"Suffering from writer's block? Write Now is here to help! Click the button to get a randomly generated sentence you can use as a writing prompt.")),r.a.createElement("main",null,r.a.createElement(b,{onSubmit:this.handleFormSubmit},r.a.createElement("button",{type:"submit"},"Write now!")),r.a.createElement(l.b,{to:"/"},r.a.createElement("button",null,"Home")),r.a.createElement("h3",null,this.state.article," ",this.state.subjectadjective," ",this.state.subject," ",this.state.verb," ",this.state.preposition," ",this.state.article," ",this.state.locationadjective," ",this.state.location," ")))}}]),t}(n.Component);a(35);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"appHeader"},r.a.createElement("h1",null,"Write Now")),r.a.createElement("main",null,r.a.createElement(i.a,{exact:!0,path:"/",component:d}),r.a.createElement(i.a,{exact:!0,path:"/sentence-generator",component:j})))};a(36);c.a.render(r.a.createElement(l.a,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1ba0b896.chunk.js.map