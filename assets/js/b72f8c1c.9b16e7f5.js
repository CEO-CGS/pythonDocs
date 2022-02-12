"use strict";(self.webpackChunkpython_docs=self.webpackChunkpython_docs||[]).push([[993],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2457:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:5},l="Whiles and Fors (Notes 3)",p={unversionedId:"tutorial-basics/thirdNotes",id:"tutorial-basics/thirdNotes",title:"Whiles and Fors (Notes 3)",description:"While Loop",source:"@site/docs/tutorial-basics/thirdNotes.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/thirdNotes",permalink:"/pythonDocs/docs/tutorial-basics/thirdNotes",editUrl:"https://ceo-cgs.github.io/pythonDocs/docs/tutorial-basics/thirdNotes.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Inputs and If (Notes 2)",permalink:"/pythonDocs/docs/tutorial-basics/secondNotes"},next:{title:"Functions (Notes 4)",permalink:"/pythonDocs/docs/tutorial-basics/fourthNotes"}},c=[{value:"While Loop",id:"while-loop",children:[],level:3},{value:"For Loop",id:"for-loop",children:[],level:3}],h={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"whiles-and-fors-notes-3"},"Whiles and Fors (Notes 3)"),(0,i.kt)("h3",{id:"while-loop"},"While Loop"),(0,i.kt)("p",null,"A while loop is a way to run some amount of code ",(0,i.kt)("strong",{parentName:"p"},"while")," some condition exists. "),(0,i.kt)("p",null,"Everything within the while loop should be tabbed over by 1 tab, unless it is within an if statement, another loop, or within some other statements."),(0,i.kt)("p",null,"It uses conditions with the same operators as the ",(0,i.kt)("a",{parentName:"p",href:"/pythonDocs/docs/tutorial-basics/secondNotes"},"If Statement")," notes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'    #This example shows a while loop in use\n    while(lunchBreak==True):\n        print("eating lunch")\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Be Careful with the Condition")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If a while loop condition is always true, it will end up causing an ",(0,i.kt)("strong",{parentName:"p"},"infinite loop")," which breaks your program, so make sure you are careful with what while loop condition you choose."))),(0,i.kt)("h3",{id:"for-loop"},"For Loop"),(0,i.kt)("p",null,"A for loop is similar to a while loop, but you get to define how many ",(0,i.kt)("strong",{parentName:"p"},"iterations")," (the amount of times the loop runs) the for loop has. "),(0,i.kt)("p",null,"It is typically good to use in ",(0,i.kt)("strong",{parentName:"p"},"arrays/lists")," or certain pieces of code where you would want to do certain things for specific amounts of time. Everything inside of a for loop should be tabbed like a while loop. "),(0,i.kt)("p",null,"There are different ways of writting a for loop. One of the ways is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'    #This example shows a for loop\n    for i in range(0,5):\n        print("Hello")\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The above code will run 5 times.  The 'i' is just an integer saying which ",(0,i.kt)("strong",{parentName:"p"},"iteration"),"\n(which loop count the for loop is on).  The loop starts at 0 and ends at 4, and that is what range(start,end) does. In our case, the\nstart is 0, and the end is 5."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Be Careful with the Range")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In a range, the last number is always cut-off, so the loop does not go for 6 times, but only for 5 times, and the 0 counts as the first iteration."))),(0,i.kt)("p",null,"Another example below shows how we can utilize the 'i', which can be any variable name, inside of a for loop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'    #This is another for loop\n    for i in range(0,6):\n        print("Hi " + str(i))\n')),(0,i.kt)("p",null,"The last thing the output would print is \"Hi 5\", and in this way, the 'i' can also be used within the for loop.  "),(0,i.kt)("p",null,"There are other ways a for loop can be done, such as using a ",(0,i.kt)("strong",{parentName:"p"},"list"),", but it will not be discussed in this notes page."))}u.isMDXComponent=!0}}]);