(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(1),i=n(2),s=n(4),u=n(3);var h=function(e){var t=e.name,n=e.email,a=e.id,o="https://robohash.org/".concat(a,"?size=200x200");return r.a.createElement("div",{className:"bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:o,alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))};var m=function(e){var t=e.robots;return t.map((function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))};var d=function(e){var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba b--black bg-lightest-blue",type:"search",placeholde:"Search robots",onChange:t}))},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"80rem"}},e.children)},p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good."):this.props.children}}]),n}(a.Component),v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({typeinput:e.target.value})},a.state={robots:[],typeinput:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.typeinput,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(d,{searchChange:this.handleChange}),r.a.createElement(b,null,r.a.createElement(p,null,r.a.createElement(m,{robots:a})))):r.a.createElement("h1",null,"Loading...")}}]),n}(a.Component);n(13);c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.f9407c96.chunk.js.map