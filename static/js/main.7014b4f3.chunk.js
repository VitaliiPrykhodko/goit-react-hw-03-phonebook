(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),o=n(11),l=n(3),i=n(4),u=n(6),h=n(5),d=n(9),b=n.n(d),j=n(10),m=n(0),f=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleClick=function(){var e=t.state,n=e.name,a=e.number;t.resetState(),t.props.onClick(n,a),t.setState({name:"",number:""})},t.resetState=function(){t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(m.jsxs)("form",{className:"form_contact",children:[Object(m.jsxs)("label",{className:"form_label",children:["Name",Object(m.jsx)("input",{onChange:this.handleChange,value:e,className:"input_contact",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{className:"form_label",children:["Number",Object(m.jsx)("input",{onChange:this.handleChange,value:n,className:"input_contact",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{type:"button",className:"btn_contact",onClick:this.handleClick,children:"Add contact"})]})}}]),n}(a.Component),p=f,O=function(t){var e=t.contacts,n=t.handleDeleteContact;return e.map((function(t){var e=t.key,a=t.name,c=t.number;return Object(m.jsxs)("li",{className:"contact_item",children:[Object(m.jsx)("span",{children:a}),": ",Object(m.jsx)("span",{children:c}),Object(m.jsx)("button",{className:"contact_btn",onClick:function(){return n(e)},children:"Delete"})]},e)}))},v=function(t){var e=t.contacts,n=t.handleDeleteContact;return Object(m.jsx)("ul",{className:"contact_list",children:Object(m.jsx)(O,{contacts:e,handleDeleteContact:n})})},C=function(t){var e=t.filter,n=t.handleFilter;return Object(m.jsx)("div",{className:"filter_box",children:Object(m.jsxs)("label",{className:"filter_label",children:["Find contacts by name",Object(m.jsx)("input",{onChange:n,value:e,className:"input_contact input_filter",type:"text"})]})})},x=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.handleAddContact=function(e,n){var a=t.state.contacts;return a.find((function(t){return t.name===e||t.number===n}))?alert("".concat(e," is already in contacts")):""===e||""===n?alert("Please enter correct name"):void t.setState({contacts:[].concat(Object(o.a)(a),[{key:b.a.generate(),name:e,number:n}])})},t.handleDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.key!==e}))}}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n.toLowerCase(),c=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(p,{onClick:this.handleAddContact}),Object(m.jsx)("h2",{className:"contact_title",children:"Contacts"}),Object(m.jsx)(C,{filter:n,handleFilter:this.handleFilter}),Object(m.jsx)(v,{contacts:c,handleDeleteContact:this.handleDeleteContact})]})}}]),n}(a.Component),g=x;n(25);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.7014b4f3.chunk.js.map