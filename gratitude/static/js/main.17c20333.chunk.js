(this["webpackJsonppractice-gratitude"]=this["webpackJsonppractice-gratitude"]||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},20:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),c=(a(19),a(2)),u=a(3),l=a(5),s=a(4),p=(a(20),a(7)),h=a.n(p);a(22);h.a.initializeApp({apiKey:"AIzaSyAkx6OXoX35t6QZKKJT-lmJIzfSQ8ekPuU",authDomain:"practice-gratitude.firebaseapp.com",databaseURL:"https://practice-gratitude.firebaseio.com",projectId:"practice-gratitude",storageBucket:"practice-gratitude.appspot.com",messagingSenderId:"106297587589",appId:"1:106297587589:web:a0db08247f6a89e64fb6ec"});var m=h.a,d=a(13),f=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).scrollDiv=Object(n.createRef)(),e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=m.database().ref();a.push(e.state.inputOne),a.push(e.state.inputTwo),a.push(e.state.inputThree),e.setState({inputOne:"",inputTwo:"",inputThree:""})},e.scrollSmoothHandler=function(){e.scrollDiv.current.scrollIntoView({behavior:"smooth"})},e.state={inputOne:"",inputTwo:"",inputThree:""},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{ref:this.scrollDiv,onSubmit:this.handleSubmit,className:"inputForm"},r.a.createElement("input",{required:!0,type:"text",value:this.state.inputOne,name:"inputOne",onChange:this.handleChange}),r.a.createElement("input",{required:!0,type:"text",value:this.state.inputTwo,name:"inputTwo",onChange:this.handleChange}),r.a.createElement("input",{required:!0,type:"text",value:this.state.inputThree,name:"inputThree",onChange:this.handleChange}),r.a.createElement("button",{type:"submit",onSubmit:this.handleSubmit,onClick:this.scrollSmoothHandler},"Add"))}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).deleteBtn=function(e){m.database().ref().child(e).remove()},e.state={userInput:[],inputOne:"",inputTwo:"",inputThree:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.database().ref().on("value",(function(t){var a=[],n=t.val();for(var r in n)a.push({item:n[r],id:r});e.setState({userInput:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Gratitude")),r.a.createElement("section",{className:"explanationSection wrapper"},r.a.createElement("div",{className:"explanation"},r.a.createElement("h2",null,"What is Gratitude?"),r.a.createElement("p",null,"The quality of being thankful; readiness to show appreciation for and to return kindness.")),r.a.createElement("div",{className:"explanation"},r.a.createElement("h2",null,"The Importance of Gratitude"),r.a.createElement("p",null,"Practicing gratitude allows you to focus on the present, appreciate what you have rather than what you do not have, and increases feelings of happiness."))),r.a.createElement("section",{className:"inputSection wrapper"},r.a.createElement("h3",null,"Let's create an adbundance of gratitude!"),r.a.createElement("h3",null,"Please share three things you are grateful for:"),r.a.createElement(f,null),r.a.createElement("div",{className:"responseArea"},this.state.userInput.map((function(t){return r.a.createElement("div",{className:"inputContainer"},r.a.createElement("p",{key:t.id},t.item),r.a.createElement("button",{onClick:function(){return e.deleteBtn(t.id)},className:"deleteBtn"},"X"))})))),r.a.createElement("footer",null,r.a.createElement("p",null,"Designed by ",r.a.createElement("a",{href:"http://www.shondamoshis.com"},"Shonda Moshis"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.17c20333.chunk.js.map