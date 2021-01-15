(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{20:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),r=n(13),i=n.n(r),l=(n(20),n(4)),o=["About","Resume","Portfolio","Contact"],d=function(e){return Object(a.jsx)("a",{href:"#".concat(e.menuItem.toLowerCase()),className:"inline-flex items-center py-3 px-3 my-6 text-green-200 hover:text-green-900 text-2xl font-bold",children:e.menuItem})},x=function(){return Object(a.jsx)("nav",{className:"flex",children:o.map((function(e){return Object(a.jsx)(d,{menuItem:e},e)}))})},j=function(e){var t=e.contacts;return Object(a.jsx)("header",{className:"w-full bg-green-700",children:Object(a.jsxs)("div",{className:"container mx-auto flex justify-between",children:[Object(a.jsx)("div",{className:"text-green-100 text-3xl rounded p-3 m-3",children:"/** Yulian Zyakun **/"}),Object(a.jsx)(x,{}),Object(a.jsxs)("div",{className:"inline-flex py-3 px-3 my-3",children:[Object(a.jsx)(l.SocialIcon,{url:t.social.linkedin,className:"mr-4",target:"_blank",fgColor:"#fff"}),Object(a.jsx)(l.SocialIcon,{url:t.social.github,className:"mr-4",target:"_blank",fgColor:"#fff"})]})]})})},u=function(){return Object(a.jsx)("footer",{className:"bg-green-500",children:Object(a.jsx)("div",{className:"container mx-auto py-3 flex justify-center",children:"2021 \xa9 YZ Production"})})},m=function(e){var t=e.data;return Object(a.jsxs)("div",{id:"about",className:"container mx-auto py-7",children:[Object(a.jsx)("h1",{className:"text-4xl text-gray-700 flex justify-center",children:"A little bit of information about me..."}),Object(a.jsx)("div",{className:"text-2xl text-gray-700 flex justify-center py-6",children:t.name}),Object(a.jsx)("div",{className:"text-lg text-gray-600 flex justify-center py-5 px-20 mx-7",children:t.aboutMe})]})},b=function(e){var t=e.data;return Object(a.jsxs)("div",{id:"resume",className:"container mx-auto py-7",children:[Object(a.jsx)("h1",{className:"text-4xl text-gray-700 flex justify-center",children:"My Resume"}),Object(a.jsxs)("div",{className:"text-2xl text-gray-600 flex justify-center py-6",children:["Overview: ",t.overview]}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"text-2xl text-gray-600 flex justify-center py-6",children:"Professional Skills"}),Object(a.jsx)("div",{className:"text-lg",children:Object(a.jsx)("ul",{children:t.skills.map((function(e,t){return Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{className:"text-green-700 font-bold",children:e.name})," ",Object(a.jsx)("span",{className:"text-green-500 font-bold",children:e.level})]},t)}))})}),Object(a.jsx)("div",{className:"text-2xl text-gray-600 flex justify-center py-6",children:"Work Experience"}),Object(a.jsx)("div",{className:"text-lg text-gray-800 flex justify-between px-2",children:t.work.map((function(e,t){return Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:["Company "," - ",Object(a.jsx)("span",{className:"text-green-700 font-bold",children:e.company})]}),Object(a.jsxs)("li",{children:["Position:"," ",Object(a.jsx)("span",{className:"text-green-600 font-bold",children:e.role})]}),Object(a.jsxs)("li",{children:["Years:"," ",Object(a.jsx)("span",{className:"text-green-600 font-bold",children:e.years})]}),Object(a.jsxs)("li",{children:["Description:"," ",Object(a.jsx)("span",{className:"text-green-600 font-bold",children:e.description})]})]},t)}))}),Object(a.jsx)("div",{className:"text-2xl text-gray-600 flex justify-center py-6",children:"Education"}),Object(a.jsx)("div",{className:"text-lg text-gray-800 flex justify-between",children:t.education.map((function(e,t){return Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:["School"," - ",Object(a.jsx)("span",{className:"text-green-700 font-bold",children:e.school})]}),Object(a.jsxs)("li",{children:["Degree:"," ",Object(a.jsx)("span",{className:"text-green-600 font-bold",children:e.degree})]}),Object(a.jsxs)("li",{children:["Graduation:"," ",Object(a.jsx)("span",{className:"text-green-600 font-bold",children:e.graduated})]}),Object(a.jsxs)("li",{children:["Program:"," ",Object(a.jsx)("span",{className:"text-green-600 font-bold",children:e.program})]})]},t)}))})]})},g=function(e){var t=e.projects;return Object(a.jsx)("div",{className:"grid grid-rows-2 grid-flow-col gap-4",children:t.map((function(e,t){return Object(a.jsxs)("div",{className:"text-lg text-gray-600 py-5 px-5",children:[Object(a.jsx)("div",{className:"font-bold",children:e.name}),Object(a.jsx)("div",{children:e.description}),e.url&&Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center py-3 px-3 rounded text-green-300 hover:text-green-700 text-2xl font-bold",children:e.url})}),e.github&&Object(a.jsxs)("div",{children:["Github repo:"," ",Object(a.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",className:"inline-flex items-center py-3 px-3 rounded text-green-300 hover:text-green-700 text-2xl font-bold",children:e.github})]}),e.image&&Object(a.jsx)("div",{className:"my-3",children:Object(a.jsx)("img",{src:"images/projects/".concat(e.image),alt:e.name,className:"border-2 border-green-500 border-opacity-75"})})]},t)}))})},p=function(e){var t=e.data;return Object(a.jsxs)("div",{id:"portfolio",className:"container mx-auto py-7",children:[Object(a.jsx)("h1",{className:"text-4xl text-gray-700 flex justify-center",children:"My Portfolio Overview"}),Object(a.jsx)("div",{className:"text-2xl text-gray-600 flex justify-center py-6",children:"You are more than welcome to take a look at my projects"}),Object(a.jsx)(g,{projects:t.projects})]})},f=function(e){var t=e.contacts;return Object(a.jsxs)("div",{id:"contact",className:"container mx-auto py-7",children:[Object(a.jsx)("h1",{className:"text-4xl text-gray-700 flex justify-center",children:"My Contacts"}),Object(a.jsx)("div",{className:"text-2xl text-gray-600 flex justify-center py-6",children:t.contactMessage}),Object(a.jsx)("div",{className:"text-2xl text-gray-600 flex justify-center py-6",children:Object(a.jsx)("ul",{children:Object.keys(t.social).map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)(l.SocialIcon,{url:t.social[e],className:"m-2",target:"_blank",fgColor:"#fff"}),t.social[e]]},e)}))})})]})},h=(n(28),{about:{name:"My name is Yulian Zyakun",aboutMe:"I am a web developer. I am passionate about building web apps, creating websites and digital solutions. I enjoy learning new programming languages and coding techniques and look forward to growing my professionalism in software development and working in a thriving environment."},resume:{overview:"Here goes overview of my skillset.",education:[{school:"Red River College",degree:"Diploma",graduated:"2017",program:"Business IT"},{school:"National University Kyiv-Mohyla Academy",degree:"Master's Degree in Finance",graduated:"2009",program:"Finance"},{school:"Sumy Academy of Banking",degree:"Specialist's Degree in Accounting",graduated:"2007",program:"Accounting and Audit"}],work:[{company:"CWB National Leasing",role:"ETL BI Developer",years:"2019 - 2020",description:"ETL development, business intelligence and reporting"},{company:"Investors' Group",role:"Sr. Mortgage Analyst",years:"2017 - 2019",description:"Operating finance and analytics development"},{company:"Investors' Group",role:"Associate Software Developer",years:"2016",description:"Business objects and BI solutions development"}],skills:[{name:"ReactJS",level:"with Redux"},{name:"Ruby on Rails",level:"full-stack web development"},{name:"JavaScript",level:"advanced knowledge"},{name:".Net",level:"web app development"},{name:"Java",level:"advanced knowledge"},{name:"C#",level:"programming"},{name:"SQL",level:"specialist"},{name:"GIT, Jira, Confluence, Stash",level:"software development tools"}]},portfolio:{projects:[{name:"Social Network",description:"A learning project built with ReactJS and Redux",image:"social_network.png",url:"",github:"https://github.com/yulian-zyakun/react-social-network"},{name:"Online Book Store",description:"A learning project developed with Ruby on Rails",image:"bookstore.png",url:"",github:"https://github.com/yulian-zyakun/bookstore"},{name:"Selo Ukrainian Dancers",description:"Wordpress website for a ukranian dance group.",image:"selo.png",url:"https://www.seloukrainiandancers.ca",github:""}]},contacts:{contactMessage:"You can find me on social networks, check my repositories on Github or shoot me an email",social:{linkedin:"https://linkedin.com/in/yulian-zyakun",github:"https://github.com/yulian-zyakun",email:"yulian.zyakun@gmail.com"}}});var y=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{contacts:h.contacts}),Object(a.jsxs)("section",{children:[Object(a.jsx)(m,{data:h.about}),Object(a.jsx)(p,{data:h.portfolio}),Object(a.jsx)(b,{data:h.resume}),Object(a.jsx)(f,{contacts:h.contacts})]}),Object(a.jsx)(u,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))},v=n(9);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(v.a,{children:Object(a.jsx)(y,{})})}),document.getElementById("root")),O()}},[[32,1,2]]]);
//# sourceMappingURL=main.a733260f.chunk.js.map