"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[26],{3026:function(e,r,s){s.r(r),s.d(r,{default:function(){return d}});var a=s(4270),t=s(9439),l=s(2791),i=s(4420),n=s(1087),o=s(6323),m={registerFormCont:"RegisterForm_registerFormCont__JF3ry",form:"RegisterForm_form__Tv43W",registerLink:"RegisterForm_registerLink__qhaoL",register:"RegisterForm_register__qF0Cb",error:"RegisterForm_error__yDHjz"},c=s(184),u=function(){var e=(0,i.I0)(),r=(0,l.useState)(""),s=(0,t.Z)(r,2),a=s[0],u=s[1];return(0,c.jsx)("div",{className:m.registerFormCont,children:(0,c.jsxs)("form",{className:m.form,onSubmit:function(r){r.preventDefault();var s=r.currentTarget,a=s.elements.name.value,t=s.elements.email.value,l=s.elements.password.value;a&&t&&l?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?l.length>=6?(u(""),console.log("Form values:",{name:a,email:t,password:l}),e((0,o.z2)({name:a,email:t,password:l})),s.reset()):u("Password must be at least 6 characters long."):u("The email is not valid."):u("All fields are required.")},children:[(0,c.jsxs)("label",{className:m.label,children:["Username",(0,c.jsx)("input",{type:"text",name:"name",required:!0,autoComplete:"name"})]}),(0,c.jsxs)("label",{className:m.label,children:["Email",(0,c.jsx)("input",{type:"email",name:"email",required:!0,autoComplete:"email"})]}),(0,c.jsxs)("label",{className:m.label,children:["Password",(0,c.jsx)("input",{type:"password",name:"password",required:!0,autoComplete:"current-password"})]}),(0,c.jsx)("button",{type:"submit",children:"Register"}),a&&(0,c.jsx)("p",{className:m.error,children:a}),(0,c.jsxs)("p",{className:m.registerLink,children:["Already have an account?"," ",(0,c.jsx)(n.rU,{to:"/login",className:m.register,children:"Log In"})]})]})})},d=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(a.q,{children:(0,c.jsx)("title",{children:"Registration"})}),(0,c.jsx)(u,{})]})}}}]);
//# sourceMappingURL=26.29972a50.chunk.js.map