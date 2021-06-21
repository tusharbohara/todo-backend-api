(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(2),o=n.n(i),a=n(5),c=n.n(a),s=(n(14),n(4)),l=n(6),r=n(7),d=n(1),h=n(9),u=n(8),b=(n(15),n(0)),m=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={todoList:[],activeItem:{id:null,title:"",completed:!1},editing:!1},i.fetchTasks=i.fetchTasks.bind(Object(d.a)(i)),i.handleChange=i.handleChange.bind(Object(d.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(d.a)(i)),i.getCookie=i.getCookie.bind(Object(d.a)(i)),i.startEdit=i.startEdit.bind(Object(d.a)(i)),i.deleteItem=i.deleteItem.bind(Object(d.a)(i)),i.strikeUnstrike=i.strikeUnstrike.bind(Object(d.a)(i)),i}return Object(r.a)(n,[{key:"getCookie",value:function(t){var e=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),i=0;i<n.length;i++){var o=n[i].trim();if(o.substring(0,t.length+1)===t+"="){e=decodeURIComponent(o.substring(t.length+1));break}}return e}},{key:"componentWillMount",value:function(){this.fetchTasks()}},{key:"fetchTasks",value:function(){var t=this;console.log("fetching......"),fetch("https://todo.tusharbohara.com.np/api/todo/").then((function(t){return t.json()})).then((function(e){return t.setState({todoList:e})}))}},{key:"handleChange",value:function(t){var e=t.target.name,n=t.target.value;console.log("Name: ",e),console.log("Value: ",n),this.setState({activeItem:Object(s.a)(Object(s.a)({},this.state.activeItem),{},{title:n})})}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault(),console.log("ITEM: ",this.state.activeItem);var n=this.getCookie("csrftoken"),i="https://todo.tusharbohara.com.np/api/todo/",o="POST";!0===this.state.editing&&(i="https://todo.tusharbohara.com.np/api/todo/".concat(this.state.activeItem.id,"/"),o="PATCH",this.setState({editing:!1})),fetch(i,{method:o,headers:{"Content-Type":"application/json","X-CSRFToken":n},body:JSON.stringify(this.state.activeItem)}).then((function(t){e.fetchTasks(),e.setState({activeItem:{id:null,title:"",completed:!1}})})).catch((function(t){console.log("ERROR: ",t)}))}},{key:"startEdit",value:function(t){this.setState({activeItem:t,editing:!0})}},{key:"deleteItem",value:function(t){var e=this,n=this.getCookie("csrftoken");fetch("https://todo.tusharbohara.com.np/api/todo/".concat(t.id,"/"),{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":n}}).then((function(t){e.fetchTasks()}))}},{key:"strikeUnstrike",value:function(t){var e=this;t.completed=!t.completed;var n=this.getCookie("csrftoken"),i="https://todo.tusharbohara.com.np/api/todo/".concat(t.id,"/");fetch(i,{method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":n},body:JSON.stringify({completed:t.completed})}).then((function(){e.fetchTasks()})),console.log("TASK: ",t.completed)}},{key:"render",value:function(){var t=this.state.todoList,e=this;return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{id:"task-container",children:[Object(b.jsx)("div",{id:"form-wrapper",children:Object(b.jsx)("form",{id:"form",onSubmit:this.handleSubmit,children:Object(b.jsxs)("div",{className:"flex-wrapper",children:[Object(b.jsx)("div",{style:{flex:6},children:Object(b.jsx)("input",{onChange:this.handleChange,className:"form-control",id:"title",value:this.state.activeItem.title,type:"text",name:"title",placeholder:"Add Task Title"})}),Object(b.jsx)("div",{style:{flex:1},children:Object(b.jsx)("input",{className:"btn btn-outline-success",id:"submit",type:"submit",name:"Add"})})]})})}),Object(b.jsx)("div",{id:"list-wrapper",children:t.map((function(t,n){return Object(b.jsxs)("div",{className:"task-wrapper flex-wrapper",children:[Object(b.jsx)("div",{onClick:function(){return e.strikeUnstrike(t)},style:{flex:7},children:!1===t.completed?Object(b.jsx)("span",{children:t.title}):Object(b.jsx)("strike",{children:t.title})}),Object(b.jsx)("div",{style:{flex:1},children:Object(b.jsx)("button",{onClick:function(){return e.startEdit(t)},className:"btn btn-sm btn-outline-info",children:"Edit"})}),Object(b.jsx)("div",{style:{flex:1},children:Object(b.jsx)("button",{onClick:function(){return e.deleteItem(t)},className:"btn btn-sm btn-outline-danger delete",style:{marginLeft:5},children:"-"})})]},n)}))})]})})}}]),n}(o.a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),o(t),a(t),c(t)}))};c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.8637f5bc.chunk.js.map