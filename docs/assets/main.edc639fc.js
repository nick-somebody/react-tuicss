var pe=Object.defineProperty,Te=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var K=(t,i,r)=>i in t?pe(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,h=(t,i)=>{for(var r in i||(i={}))U.call(i,r)&&K(t,r,i[r]);if(E)for(var r of E(i))Q.call(i,r)&&K(t,r,i[r]);return t},m=(t,i)=>Te(t,we(i));var p=(t,i)=>{var r={};for(var a in t)U.call(t,a)&&i.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&E)for(var a of E(t))i.indexOf(a)<0&&Q.call(t,a)&&(r[a]=t[a]);return r};import{j as z,r as f,a as ie,f as ve,R as Ne,b as xe}from"./vendor.5d4eece2.js";const fe=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))a(d);new MutationObserver(d=>{for(const n of d)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(d){const n={};return d.integrity&&(n.integrity=d.integrity),d.referrerpolicy&&(n.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?n.credentials="include":d.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(d){if(d.ep)return;d.ep=!0;const n=r(d);fetch(d.href,n)}};fe();const e=z.exports.jsx,l=z.exports.jsxs,D=z.exports.Fragment,j=r=>{var a=r,{withSpace:t}=a,i=p(a,["withSpace"]);return t===!1?e("div",h({className:"tui-divider"},i)):e("hr",h({className:"tui-divider"},i))};var y=(t=>(t.Black="black-168",t.Blue="blue-168",t.Green="green-168",t.Cyan="cyan-168",t.Red="red-168",t.Purple="purple-168",t.Yellow="yellow-168",t.White="white-168",t.Orange="orange-168",t))(y||{}),S=(t=>(t.Black="black-255",t.Blue="blue-255",t.Green="green-255",t.Cyan="cyan-255",t.Red="red-255",t.Purple="purple-255",t.Yellow="yellow-255",t.White="white-255",t.Orange="orange-255",t))(S||{}),le=(t=>(t.MildBlue="blue-168",t.MildGreen="green-168",t.MildCyan="cyan-168",t.MildRed="red-168",t.MildPurple="purple-168",t.MildYellow="yellow-168",t.MildOrange="orange-168",t))(le||{}),W=(t=>(t.Blue="tui-bg-blue-black",t.Green="tui-bg-green-black",t.Cyan="tui-bg-cyan-black",t.Red="tui-bg-red-black",t.Purple="tui-bg-purple-black",t.Yellow="tui-bg-yellow-black",t.Orange="tui-bg-orange-black",t))(W||{}),ae=(t=>(t.BlueBlack="tui-bg-blue-black",t.GreenBlack="tui-bg-green-black",t.CyanBlack="tui-bg-cyan-black",t.RedBlack="tui-bg-red-black",t.PurpleBlack="tui-bg-purple-black",t.YellowBlack="tui-bg-yellow-black",t.OrangeBlack="tui-bg-orange-black",t.BlueWhite="tui-bg-blue-white",t.GreenWhite="tui-bg-green-white",t.CyanWhite="tui-bg-cyan-white",t.RedWhite="tui-bg-red-white",t.PurpleWhite="tui-bg-purple-white",t.YellowWhite="tui-bg-yellow-white",t.OrangeWhite="tui-bg-orange-white",t))(ae||{}),re=(t=>(t.Absolute="absolute",t.Fixed="fixed",t.Relative="relative",t.Static="static",t))(re||{}),Y=(t=>(t.Blue="blue",t.Green="green",t.Cyan="cyan",t.Red="red",t.Purple="purple",t.Yellow="yellow",t.White="white",t.Orange="orange",t))(Y||{});const de=({color:t,children:i})=>e("div",{className:t,children:i});let q=0;const A=t=>({disabled:i,className:r})=>{const a=[t];return r&&a.push(r),i&&a.push("disabled"),a.join(" ")},ne=A("tui-input"),Ce=A("tui-checkbox"),ge=A("tui-radio"),ye=A("tui-fieldset"),ke=A("tui-input"),Se=()=>(q+=1,q);const Ge=r=>{var a=r,{tabs:t}=a,i=p(a,["tabs"]);const[d,n]=f.exports.useState(0),[u,c]=f.exports.useState();f.exports.useEffect(()=>{c(Se())},[]);const T=x=>`tab-${u}-control-${x}`,o=x=>`tab-${u}-panel-${x}`,s=x=>x===d,v=x=>{const w=["tui-tab"];return s(x)&&w.push("active"),w.join(" ")},O=x=>{var w;(w=document.getElementById(`tab-${u}-control-${x}`))==null||w.focus()},be=x=>{let w=d;if(x.code==="ArrowRight"){const R=d+1;w=R===t.length?0:R}else if(x.code==="ArrowLeft"){const R=d-1;w=R<0?t.length-1:R}n(w),O(w)};return l("div",m(h({},i),{children:[e("div",{className:"tui-tabs",children:e("ul",{role:"tablist",onKeyDown:be,children:t.map(({tabTitle:x},w)=>e("li",{children:e("button",{role:"tab",className:v(w),id:T(w),"aria-controls":o(w),onClick:()=>{n(w)},"aria-selected":s(w),tabIndex:s(w)?0:-1,children:x})},`tab-head-${w}`))})}),t.map(({tab:x},w)=>e("div",{id:o(w),className:"tui-tab-content tui-content",style:{display:s(w)?"block":"none"},"aria-labelledby":T(w),tabIndex:0,hidden:!s(w),children:x},`tab-pane-${w}`))]}))},Me=()=>l("div",{className:"tui-screen-800-600 bordered white-168",children:[e("div",{className:"tui-panel cyan-168 full-width black-255-text tui-no-shadow center",children:"BIOS"}),e(Ge,{tabs:[{tabTitle:"Main",tab:e("table",{className:"tui-table-grid",children:l("tbody",{children:[l("tr",{children:[l("td",{rowSpan:2,width:"60%",className:"blue-168-text",children:[e("br",{}),"System Time.........:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[09:21:30]"}),e("br",{}),"System Date.........:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[15/09/1994]"}),e("br",{}),e("br",{}),"Legacy Diskette A...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[1.44/1.25 MB]"}),e("br",{}),"Legacy Diskette B...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[disabled]"}),e("br",{}),e("br",{}),"Primary Master......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),"Primary Slave.......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),"Secondary Master....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[CD-ROM]"}),e("br",{}),"Secondary Slave.....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),e("br",{}),"Keyboard Features...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[Enter]"}),e("br",{}),e("br",{}),"System Memory.......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[640 KB]"}),e("br",{}),"Extended Memory.....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[3568410 KB]"}),e("br",{}),"Boot-time Diagnostic:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[Enabled]"})]}),e("td",{width:"40%",className:"center",children:"Item Specified Help"})]}),e("tr",{children:l("td",{width:"25",height:"448px",children:[e("br",{}),"<Tab>, <Shift-Tab> or <Enter> selects field."]})})]})})},{tabTitle:"Exit",tab:e("div",{children:"child"})}]}),e("div",{className:"tui-statusbar absolute cyan-168",children:l("ul",{children:[e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F1"})," Help"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"\u2191\u2193"})," Select Item"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"-/+"})," Change Values"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F9"})," Setup Defaults"]})}),e("br",{}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"Esc"})," Exit"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"\u2190\u2192"})," Select Menu"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"Enter"})," Select Sub-Menu"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F10"})," Save and Exit"]})})]})})]});const I=u=>{var c=u,{textColor:t,fullWidth:i,light:r,color:a,className:d}=c,n=p(c,["textColor","fullWidth","light","color","className"]);const T=()=>{var s;const o=(s=d==null?void 0:d.split(" "))!=null?s:[];return o.push("tui-button"),n.disabled&&o.push("disabled"),a&&o.push(a),t&&o.push(`${t}-text`),r&&o.push("light"),i&&o.push("fill"),o.join(" ")};return l("button",m(h({},n),{className:T(),children:[n.children,e("div",{className:"tui-button-inner"})]}))};const V=d=>{var n=d,{color:t,textColor:i,code:r}=n,a=p(n,["color","textColor","code"]);return e("pre",m(h({className:(()=>{var T,o;const c=(o=(T=a.className)==null?void 0:T.split(" "))!=null?o:[];return c.push("tui-code"),c.push(t!=null?t:y.White),c.push(`${i!=null?i:y.Black}-text`),c.join(" ")})()},a),{children:e("code",{role:"figure",children:r})}))},Oe=t=>V(m(h({},t),{color:y.Black,textColor:y.Cyan})),Ie=t=>V(m(h({},t),{color:y.White,textColor:y.Black}));var g={Custom:V,Dark:Oe,Light:Ie};const $=a=>{var d=a,{disabled:t,className:i}=d,r=p(d,["disabled","className"]);return e("fieldset",m(h({disabled:t,className:ye({disabled:t,className:i})},r),{children:r.children}))},B=r=>{var a=r,{children:t}=a,i=p(a,["children"]);return e("legend",m(h({},i),{children:t}))},De=()=>l("div",{style:{padding:"25px 0"},children:[e("h2",{children:"Buttons"}),e("div",{className:"tui-window center blue-168",style:{width:"200px"},children:l($,{children:[e(B,{children:"Buttons"}),e(I,{children:"Button"}),e(I,{color:S.Yellow,textColor:S.Black,light:!0,children:"Button"}),e(I,{fullWidth:!0,color:y.Orange,textColor:S.White,children:"Custom"}),e(I,{fullWidth:!0,disabled:!0,color:y.Red,children:"Disabled"}),e(I,{fullWidth:!0,children:"Focused"})]})}),e("h3",{children:"Code"}),e(g.Dark,{code:`<TuiButton>Button</TuiButton>
<TuiButton color={ Color.Yellow} textColor={ Color.Black } light>Button</TuiButton>
<TuiButton fullWidth color={ MildColor.Orange } textColor={ Color.White }>Custom</TuiButton>
<TuiButton fullWidth disabled={ true } color={ MildColor.Red }>Disabled</TuiButton>
<TuiButton fullWidth>Focused</TuiButton>`})]}),_=Object.values(le),L=t=>`${t}%`,se=t=>`tui-chart-value ${_[t%_.length]}`,ce=t=>t?"tui-chart-display":"tui-chart-display no-x-axis no-y-axis",Le=T=>{var o=T,{size:t,values:i,labels:r,valueScaler:a,valueFormatter:d,minValue:n,maxValue:u}=o,c=p(o,["size","values","labels","valueScaler","valueFormatter","minValue","maxValue"]);return l("div",m(h({className:"tui-chart-vertical",style:t},c),{children:[e("div",{className:ce(!!r),children:i.map(({label:s,value:v},O)=>e("div",{role:"meter",tabIndex:0,"aria-valuenow":v,"aria-valuemin":n!=null?n:0,"aria-valuemax":u!=null?u:100,"aria-valuetext":(d!=null?d:L)(v),"aria-label":s,className:se(O),style:{height:(a!=null?a:L)(v)},children:(d!=null?d:L)(v)},`value-shape-${O}`))}),r&&e("div",{className:"tui-chart-y-axis",children:r==null?void 0:r.map((s,v)=>e("div",{className:"tui-chart-legend",children:s},`label-${v}`))}),r&&e("div",{className:"tui-chart-x-axis",children:i.map(({label:s},v)=>e("div",{className:"tui-chart-legend",children:s},`value-name-${v}`))})]}))};function $e(T){var o=T,{size:t,values:i,labels:r,valueScaler:a,valueFormatter:d,minValue:n,maxValue:u}=o,c=p(o,["size","values","labels","valueScaler","valueFormatter","minValue","maxValue"]);return l("div",m(h({className:"tui-chart-horizontal",style:t},c),{children:[e("div",{className:ce(!!r),children:i.map(({value:s,label:v},O)=>e("div",{role:"meter",tabIndex:0,"aria-valuenow":s,"aria-valuemin":n!=null?n:0,"aria-valuemax":u!=null?u:100,"aria-valuetext":(d!=null?d:L)(s),"aria-label":v,className:se(O),style:{width:(a!=null?a:L)(s)},children:(d!=null?d:L)(s)},`value-shape-${O}`))}),r&&e("div",{className:"tui-chart-y-axis",children:i.map(({label:s},v)=>e("div",{className:"tui-chart-legend",children:s},`value-name-${v}`))}),r&&e("div",{className:"tui-chart-x-axis",children:r.map((s,v)=>e("div",{className:"tui-chart-legend",children:s},`label-${v}`))})]}))}var H={Vertical:Le,Horizontal:$e};const Be=()=>l("div",{className:"center",children:[e("h2",{children:"Charts"}),e("div",{style:{marginTop:"50px"}}),l("div",{className:"tui-window black-168 left-align",children:[l("fieldset",{className:"tui-fieldset",role:"","aria-roledescription":"",children:[e("legend",{className:"",children:"Vertical Chart"}),e(H.Vertical,{size:{width:"500px",height:"300px"},values:[{value:80,label:"s1"},{value:30,label:"s2"},{value:50,label:"s3"},{value:90,label:"s4"},{value:60,label:"s5"},{value:100,label:"s6"},{value:10,label:"s7"},{value:75,label:"s8"}],labels:["100%","80%","60%","40%","20%"]})]}),e(g.Dark,{code:`<TuiChart.Vertical
  size={ { width: "500px", height: "300px" } }
  values={[
    {value: 80, label: "s1" },
    {value: 30, label: "s2" },
    {value: 50, label: "s3" },
    {value: 90, label: "s4" },
    {value: 60, label: "s5" },
    {value: 100, label: "s6" },
    {value: 10, label: "s7" },
    {value: 75, label: "s8" },
  ]}
  labels={[
    "100%",
    "80%",
    "60%",
    "40%",
    "20%",
  ]}
/>`})]}),e("br",{}),e("br",{}),l("div",{className:"tui-window black-168 left-align",children:[l("fieldset",{className:"tui-fieldset",children:[e("legend",{className:"",children:"Horizontal Chart"}),e(H.Horizontal,{size:{width:"500px",height:"200px"},values:[{value:80,label:"2018"},{value:60,label:"2019"},{value:100,label:"2020"}],labels:["25%","50%","75%","100%"]})]}),e(g.Dark,{code:`<TuiChart.Horizontal
  size={ { width: "500px", height: "200px" } }
  values={[
    {value: 80, label: "2018" },
    {value: 60, label: "2019" },
    {value: 100, label: "2020" },
  ]}
  labels={[
    "25%",
    "50%",
    "75%",
    "100%",
  ]}
/>`})]}),e("br",{}),e("br",{}),l("div",{className:"tui-window black-168 left-align",children:[l("fieldset",{className:"tui-fieldset",children:[e("legend",{className:"",children:"Chart (no axis legend, formatter & scaler)"}),e(H.Horizontal,{size:{width:"500px",height:"300px"},values:[{value:80,label:"s1"},{value:30,label:"s2"},{value:50,label:"s3"},{value:90,label:"s4"},{value:60,label:"s5"},{value:100,label:"s6"},{value:10,label:"s7"},{value:75,label:"s8"}],valueFormatter:t=>`$${t}`,valueScaler:t=>`${t/2}%`})]}),e(g.Dark,{code:`<TuiChart.Horizontal
  size={ { width: "500px", height: "300px" } }
  values={[
    {value: 80, label: "s1" },
    {value: 30, label: "s2" },
    {value: 50, label: "s3" },
    {value: 90, label: "s4" },
    {value: 60, label: "s5" },
    {value: 100, label: "s6" },
    {value: 10, label: "s7" },
    {value: 75, label: "s8" },
  ]}
  valueFormatter={(value) => \`$\${value}\` }
  // return a css value
  valueScaler={(value) => \`\${value / 2}%\` }
/>`})]}),e("br",{}),e("br",{})]}),Re=()=>l(D,{children:[e("h2",{className:"center",children:"Code"}),e("h3",{children:"Dark"}),e(g.Dark,{code:`<TuiCode.Dark code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`}),e("h3",{children:"Light"}),e(g.Light,{code:`<TuiCode.Light code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`}),e("h3",{children:"Custom"}),e(g.Custom,{color:S.White,textColor:y.Blue,code:`<TuiCode.Custom color={ Color.White } textColor={MildColor.Blue} code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`})]}),ue=o=>{var s=o,{barColor:t,backColor:i,progress:r,barWidth:a,"aria-valuenow":d,"aria-valuemin":n,"aria-valuemax":u,"aria-valuetext":c}=s,T=p(s,["barColor","backColor","progress","barWidth","aria-valuenow","aria-valuemin","aria-valuemax","aria-valuetext"]);return l(D,{children:["[",e("div",m(h({className:`tui-progress-bar inline-block ${i}`,style:{width:a},"aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":`${r}%`,role:"progressbar"},T),{children:e("span",{className:`tui-progress ${t}`,style:{width:`${r}%`}})})),"]"]})},Fe=["Blue","Green","Cyan","Red","Purple","Yellow","Orange"],he={};for(const t of Fe)he[t]=i=>ue(h({barColor:S[t],backColor:W[t]},i));var k=h({Custom:ue},he);const We=()=>l("div",{className:"tui-screen-800-600 bordered black-255",children:[e("div",{className:"red-168 full-width white-text",style:{padding:"0px 10px"},children:"FORECAST 1.0"}),e("br",{}),l("table",{className:"tui-table full-width no-border",children:[e("thead",{className:"white-255-text tui-border-double orange-168-border",style:{marginBottom:"5px"},children:l("tr",{className:"left-align",children:[e("th",{children:"#"}),e("th",{children:"LOCATION"}),e("th",{children:"TEMPERATURE"}),e("th",{children:"STATUS"})]})}),l("tbody",{className:"tui-border-double orange-168-border",children:[l("tr",{children:[e("td",{className:"red-168-text",children:"1"}),e("td",{children:"Lisbon"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA08.0"}),e(k.Red,{barWidth:"350px",progress:58})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"2"}),e("td",{children:"Vancouver"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA09.0"}),e(k.Green,{barWidth:"350px",progress:60})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"3"}),e("td",{children:"Rio"}),l("td",{children:[e("span",{className:"green-168-text",children:"31.0"}),e(k.Blue,{barWidth:"350px",progress:81})]}),e("td",{className:"yellow-255-text",children:"WARM"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"4"}),e("td",{children:"Sydney"}),l("td",{children:[e("span",{className:"green-168-text",children:"22.0"}),e(k.Cyan,{barWidth:"350px",progress:72})]}),e("td",{className:"yellow-255-text",children:"WARM"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"5"}),e("td",{children:"New York"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA07.0"}),e(k.Purple,{barWidth:"350px",progress:57})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"6"}),e("td",{children:"London"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA06.0"}),e(k.Yellow,{barWidth:"350px",progress:56})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"7"}),e("td",{children:"Paris"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA04.0"}),e(k.Orange,{barWidth:"350px",progress:54})]}),e("td",{className:"cyan-255-text",children:"VERY COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"8"}),e("td",{children:"Casablanca"}),l("td",{children:[e("span",{className:"green-168-text",children:"17.0"}),e(k.Custom,{barWidth:"350px",progress:67,backColor:W.Red,barColor:S.Green})]}),e("td",{className:"green-168-text",children:"NORMAL"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"9"}),e("td",{children:"Reykjavik"}),l("td",{children:[e("span",{className:"green-168-text",children:"-1.0"}),e(k.Custom,{barWidth:"350px",progress:10,backColor:W.Green,barColor:S.Purple})]}),e("td",{className:"cyan-255-text",children:"VERY COLD"})]})]})]}),l("div",{className:"purple-168 full-width white-text",style:{padding:"0px 10px",marginTop:"2px"},children:[e("span",{className:"red-168",children:"HIGH"}),": Rio 31.0",e("br",{}),e("span",{className:"cyan-168",children:"LESS"}),": Reykjavik -1.0"]}),e("br",{}),e("div",{className:"tui-window full-width no-shadow black",children:l("fieldset",{className:"tui-fieldset center",children:[e("button",{className:"tui-button left",children:"Previous"}),e("span",{className:"center",children:"9/201 records"}),e("button",{className:"tui-button right",children:"Next"})]})}),e("div",{className:"red-168 full-width white-text",style:{padding:"0px 10px"},children:"FORECAST 1.0"})]}),Ae=d=>{var n=d,{disabled:t,className:i,children:r}=n,a=p(n,["disabled","className","children"]);return e("select",m(h({},a),{disabled:t,className:ke({disabled:t,className:i}),children:r}))},C=r=>{var a=r,{children:t}=a,i=p(a,["children"]);return e("option",m(h({},i),{children:t}))},J=r=>{var a=r,{children:t}=a,i=p(a,["children"]);return e("optgroup",m(h({},i),{children:t}))},oe=d=>{var n=d,{disabled:t,className:i,type:r}=n,a=p(n,["disabled","className","type"]);return e("input",h({type:r!=null?r:"text",disabled:t,className:ne({disabled:t,className:i})},a))},me=u=>{var c=u,{disabled:t,className:i,label:r,type:a,data:d}=c,n=p(c,["disabled","className","label","type","data"]);const T=()=>a==="checkbox"?Ce({disabled:t,className:i}):ge({disabled:t,className:i});return l("label",m(h({},d),{className:T(),children:[r,e(oe,m(h({disabled:t},n),{type:a})),e("span",{className:t?"disabled":""})]}))};const Ee=t=>e(me,h({type:"checkbox",role:"checkbox"},t));const je=u=>{var c=u,{heading:t,description:i,options:r,onChange:a,values:d}=c,n=p(c,["heading","description","options","onChange","values"]);const T=o=>{if(d===void 0||a===void 0)return;const s=d.indexOf(o);if(s>=0){const v=[...d];v.splice(s,1),a(v)}else a([...d,o])};return l($,m(h({},n),{children:[e(B,{children:t}),i&&e("div",{className:"tui-checkbox-description",children:i}),r.map((o,s)=>e(Ee,{label:o.label,value:o.value,onChange:()=>T(o.value),checked:d==null?void 0:d.includes(o.value),disabled:o.disabled},s))]}))};const He=t=>e(me,h({type:"radio"},t));const Pe=t=>{const i=({target:r})=>{t.onChange!==void 0&&t.onChange(r.value)};return l($,{children:[e(B,{children:t.heading}),t.description&&e("div",{className:"tui-radio-description",children:t.description}),t.options.map((r,a)=>e(He,{label:r.label,value:r.value,onChange:i,checked:t.value===r.value,disabled:r.disabled},a))]})},Ye=d=>{var n=d,{disabled:t,className:i,children:r}=n,a=p(n,["disabled","className","children"]);return e("textarea",h({disabled:t,className:ne({disabled:t,className:i})},a))};const G=t=>{var i;return l("label",{htmlFor:t.id,className:(i=t.block)==null||i?"tui-block-label":"",children:[t.label,e(oe,h({},t))]})},X=t=>{var i;return l("label",{htmlFor:t.id,className:(i=t.block)==null||i?"tui-block-label":"",children:[t.label,e(Ae,h({},t))]})},Z=t=>{var i;return l("label",{htmlFor:t.id,className:(i=t.block)==null||i?"tui-block-label":"",children:[t.label,e(Ye,h({},t))]})};const ze=d=>{var n=d,{heading:t,description:i,children:r}=n,a=p(n,["heading","description","children"]);return t?e("form",m(h({},a),{children:l($,{children:[e(B,{children:t}),i&&e("div",{className:"tui-inputset-description",children:i}),r]})})):e("form",m(h({},a),{children:r}))},Ve=()=>{const[t,i]=f.exports.useState("text"),[r,a]=f.exports.useState(25),[d,n]=f.exports.useState("#00FF00"),[u,c]=f.exports.useState([]),[T,o]=f.exports.useState(0);return l(D,{children:[l("div",{className:"tui-window",style:{textAlign:"left"},children:[e("h2",{children:"Inputs"}),l(ze,{heading:"Form",children:[e(G,{label:"Text.......: ",value:t,onChange:({target:s})=>i(s.value)}),e(G,{label:"Disabled...: ",value:t,disabled:!0,onChange:({target:s})=>i(s.value)}),e(G,{label:"Number.....: ",type:"number",step:1,value:r,onChange:({target:s})=>a(+s.value)}),e(G,{label:"Password...: ",type:"password",value:t,onChange:({target:s})=>i(s.value)}),e(G,{label:"Color......: ",type:"color",value:d,onChange:({target:s})=>n(s.value)}),l(X,{label:"Select.....: ",children:[e(C,{children:"First"}),e(C,{children:"Second"}),e(C,{children:"Third"}),l(J,{label:"Group",children:[e(C,{children:"First"}),e(C,{children:"Second"}),e(C,{children:"Third"})]})]}),e(G,{label:"Date.......: ",type:"date",value:"2019-01-01"}),e(G,{label:"Time.......: ",type:"datetime-local",value:"2019-01-01T12:00"}),e(je,{heading:"Checkboxes",description:"Add some biz",options:[{value:1,label:"First"},{value:2,label:"Second"},{value:3,label:"Disabled",disabled:!0}],onChange:s=>{c(s)},values:u}),e(Pe,{heading:"Radios",options:[{value:1,label:"First"},{value:2,label:"Second"},{value:3,label:"Disabled",disabled:!0}],onChange:s=>{o(+s)},value:T}),e(Z,{label:"Textarea",value:"asdadasdasd",style:{width:"100%"}}),e(Z,{label:"Disabled Textarea",value:"disabled",disabled:!0,style:{width:"100%"}}),e("br",{}),l(X,{label:"Multiple",multiple:!0,style:{width:"100%"},children:[e(C,{children:"---"}),e(C,{children:"First"}),e(C,{children:"Second"}),e(C,{children:"Third"}),l(J,{label:"Group",children:[e(C,{children:"First"}),e(C,{children:"Second"}),e(C,{children:"Third"})]})]}),e(G,{label:"File",className:"full-width",type:"file"})]})]}),e(g.Dark,{code:`<TuiForm
  heading="Form"
>
  <TuiLabeledInput
    label="Text.......: "
    value={text}
    onChange={({ target }) => setText(target.value)}
  />
  <TuiLabeledInput
    label="Disabled...: "
    value={text}
    disabled
    onChange={({ target }) => setText(target.value)}
  />
  <TuiLabeledInput
    label="Number.....: "
    type="number"
    step={1}
    value={number}
    onChange={({ target }) => setNumber(+target.value)}
  />
  <TuiLabeledInput
    label="Password...: "
    type="password"
    value={text}
    onChange={({ target }) => setText(target.value)}
  />
  <TuiLabeledInput 
    label="Color......: "
    type="color"
    value={color}
    onChange={({ target }) => setColor(target.value)}
  />
  <TuiLabeledSelect
    label="Select.....: "
  >
    <TuiOption>First</TuiOption>
    <TuiOption>Second</TuiOption>
    <TuiOption>Third</TuiOption>
    <TuiOptGroup label="Group">
      <TuiOption>First</TuiOption>
      <TuiOption>Second</TuiOption>
      <TuiOption>Third</TuiOption>
    </TuiOptGroup>
  </TuiLabeledSelect>
  <TuiLabeledInput 
    label="Date.......: "
    type="date"
    value="2019-01-01"
  />
  <TuiLabeledInput 
    label="Time.......: "
    type="datetime-local"
    value="2019-01-01T12:00"
  />
  <TuiCheckboxSet
    heading="Checkboxes"
    description="Add some biz"
    options={[
      { value: 1, label: "First" },
      { value: 2, label: "Second" },
      { value: 3, label: "Disabled", disabled: true },
    ]}
    onChange={(values) => { setCheckboxVal(values as number[])}}
    values={ checkboxVal }
  />
  <TuiRadioSet
    heading="Radios"
    options={[
      { value: 1, label: "First" },
      { value: 2, label: "Second" },
      { value: 3, label: "Disabled", disabled: true },
    ]}
    onChange={(value) => { setRadioVal(+value)}}
    value={ radioVal }
  />
  <TuiLabeledTextarea
    label="Textarea"
    value={"asdadasdasd"}
    style={{ width: "100%" }}
  />
  <TuiLabeledTextarea
    label="Disabled Textarea"
    value={"disabled"}
    disabled
    style={{ width: "100%" }}
  />
  <br />
  <TuiLabeledSelect
    label="Multiple"
    multiple
    style={{ width: "100%" }}
  >
    <TuiOption>---</TuiOption>
    <TuiOption>First</TuiOption>
    <TuiOption>Second</TuiOption>
    <TuiOption>Third</TuiOption>
    <TuiOptGroup label="Group">
      <TuiOption>First</TuiOption>
      <TuiOption>Second</TuiOption>
      <TuiOption>Third</TuiOption>
    </TuiOptGroup>

  </TuiLabeledSelect>
  <TuiLabeledInput
    label="File"
    className="full-width"
    type="file"
  />
</TuiForm>`})]})};const Ke=({children:t,buttonProps:i,parent:r,modalTitle:a})=>{var T;const[d,n]=f.exports.useState(!1);f.exports.useMemo(()=>document.createElement("div"),[]);const u=o=>{i!=null&&i.onClick&&i.onClick(o),n(!d)},c=()=>["tui-modal-container","active"].join(" ");return l(D,{children:[e(I,{onClick:u,children:(T=i==null?void 0:i.children)!=null?T:"Open modal"}),d&&ie.exports.createPortal(e("div",{className:c(),"aria-label":a,children:e("div",{className:"tui-modal",role:"alertdialog",children:e("div",{className:"tui-window red-168 left-align",children:l($,{title:a,role:"presentation",children:[e(B,{role:"presentation",children:a}),t,e("div",{className:"tui-divider"}),e(I,{onClick:()=>n(!1),className:"tui-modal-close-button right",color:y.Cyan,textColor:S.Black,children:"Close"})]})})})}),r!=null?r:document.body)]})},Ue=({parent:t})=>l(D,{children:[e("h3",{children:"Modals"}),e(Ke,{modalTitle:"STEVE",parent:t,children:"content"})]}),N=({children:t,onClick:i,href:r})=>{const a=!!i,d=!!r;return l("li",{children:[a&&e("button",{onClick:i,children:t}),d&&e("a",{href:r,children:t}),!a&&!d&&e("div",{children:t})]})};const ee=d=>{var n=d,{children:t,dropDownLabel:i,block:r}=n,a=p(n,["children","dropDownLabel","block"]);const u=()=>{const c=["tui-dropdown"];return r&&c.push("block"),c.join(" ")};return l("li",m(h({},a),{className:u(),children:[e("span",{children:i}),e("div",{className:"tui-dropdown-content",children:e("ul",{children:t})})]}))};const Qe=({sidenav:t,children:i,position:r})=>e("nav",{className:`tui-nav ${r!=null?r:re.Relative}`,children:l("ul",{children:[t,i]})});const qe=({children:t,buttonText:i})=>{var n,u;const[r,a]=f.exports.useState(!1),d=f.exports.useRef(null);return l("li",{className:"tui-sidenav-li",children:[l("button",{className:"tui-sidenav-button",onClick:()=>a(!r),ref:d,children:[r?"x":"\u2261",i]}),r&&ie.exports.createPortal(e("nav",{className:"tui-sidenav active absolute",children:e("ul",{children:t})}),(u=(n=d.current)==null?void 0:n.parentElement)!=null?u:document.body)]})},P=n=>{var u=n,{children:t,basic:i,className:r,heading:a}=u,d=p(u,["children","basic","className","heading"]);const c=()=>r?`tui-window ${r}`:"tui-window";return i?e("div",m(h({},d),{className:c(),children:t})):e("div",m(h({},d),{className:c(),children:l($,{title:a,role:"presentation",children:[a&&e(B,{role:"presentation",children:a}),t]})}))};function _e(t){const[i,r]=f.exports.useState("");return f.exports.useEffect(()=>{const a=setInterval(()=>{r(ve(new Date,t.format))},1e3);return()=>clearInterval(a)},[]),e("span",{className:"tui-datetime",children:i})}const Je=()=>l(D,{children:[e("h3",{children:"Navigation"}),l("div",{className:"tui-screen-800-600 bordered tui-bg-blue-black",children:[l(Qe,{sidenav:l(qe,{children:[l(N,{href:"#!",children:[e("span",{className:"red-168-text",children:"O"}),"pen",e("span",{className:"tui-shortcut",children:"ctrl+o"})]}),e(N,{href:"#!",children:"OS Shell"}),l(N,{href:"#!",children:[e("span",{className:"red-168-text",children:"C"}),"opy",e("span",{className:"tui-shortcut",children:"ctrl+c"})]}),l(N,{href:"#!",children:[e("span",{className:"red-168-text",children:"P"}),"aste",e("span",{className:"tui-shortcut",children:"ctrl+v"})]}),l(N,{href:"#!",children:["Cut",e("span",{className:"tui-shortcut",children:"ctrl+x"})]}),e("div",{className:"tui-black-divider"}),e(N,{href:"#!",children:"Insert"}),e(N,{href:"#!",children:"Delete"}),e(N,{href:"#!",children:"Go..."}),e("div",{className:"tui-black-divider"}),l(N,{href:"#!",children:[e("span",{className:"red-168-text",children:"S"}),"earch",e("span",{className:"tui-shortcut",children:"ctrl+p"})]}),e("div",{className:"tui-black-divider"}),l(N,{href:"#!",children:["Exit ",e("span",{className:"tui-shortcut",children:"F10"})]})]}),children:[l(ee,{dropDownLabel:l("div",{children:[e("span",{className:"red-168-text",children:"F"}),"ile"]}),children:[l(N,{onClick:()=>{},children:[e("span",{className:"red-168-text",children:"N"}),"ew"]}),l(N,{href:"#!",children:[e("span",{className:"red-168-text",children:"O"}),"pen...",e("span",{className:"tui-shortcut",children:"F3"})]}),l(N,{href:"#!",children:[e("span",{className:"red-168-text",children:"S"}),"ave",e("span",{className:"tui-shortcut",children:"F2"})]}),l(N,{href:"#!",children:["S",e("span",{className:"red-168-text",children:"a"}),"ve as..."]}),l(N,{href:"#!",children:["Save a",e("span",{className:"red-168-text",children:"l"}),"l"]}),e("div",{className:"tui-black-divider"}),l(ee,{block:!0,dropDownLabel:l("div",{children:[e("span",{className:"right",children:"\u25BA"}),e("span",{className:"red-168-text",children:"M"}),"ore"]}),children:[l(N,{href:"#!",children:[e("span",{className:"red-168-text",children:"C"}),"hange dir..."]}),l(N,{href:"#!",children:[e("span",{className:"red-168-text",children:"P"}),"rint"]}),l(N,{href:"#!",children:[e("span",{className:"red-168-text",children:"D"}),"OS shell"]})]}),e("div",{className:"tui-black-divider"}),l(N,{href:"#!",children:[e("span",{className:"red-168-text",children:"Q"}),"uit",e("span",{className:"tui-shortcut",children:"F10"})]})]}),e(_e,{format:"dd MMM yyyy hh:mm:ss "})]}),l(P,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]}),l(P,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]}),l(P,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]})]}),e(g.Dark,{code:`<TuiNavbar
  sidenav={
    <TuiSidenav>
      <TuiMenuItem href="#!">
        <span className="red-168-text">O</span>pen
        <span className="tui-shortcut">ctrl+o</span>
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        OS Shell
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        <span className="red-168-text">C</span>opy
        <span className="tui-shortcut">ctrl+c</span>
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        <span className="red-168-text">P</span>aste
        <span className="tui-shortcut">ctrl+v</span>
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        Cut
        <span className="tui-shortcut">ctrl+x</span>
      </TuiMenuItem>
      <div className="tui-black-divider"></div>
      <TuiMenuItem href="#!">
        Insert
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        Delete
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        Go...
      </TuiMenuItem>
      <div className="tui-black-divider"></div>
      <TuiMenuItem href="#!">
        <span className="red-168-text">S</span>earch
        <span className="tui-shortcut">ctrl+p</span>
      </TuiMenuItem>
      <div className="tui-black-divider"></div>
      <TuiMenuItem href="#!">
        Exit <span className="tui-shortcut">F10</span>
      </TuiMenuItem>
    </TuiSidenav>
  }
>
  <TuiDropdown dropDownLabel={<div><span className="red-168-text">F</span>ile</div>}>
    <TuiMenuItem onClick={ () => {}}>
      <span className="red-168-text">N</span>ew
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      <span className="red-168-text">O</span>pen...
      <span className="tui-shortcut">F3</span>
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      <span className="red-168-text">S</span>ave
      <span className="tui-shortcut">F2</span>
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      S<span className="red-168-text">a</span>ve as...
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      Save a<span className="red-168-text">l</span>l
    </TuiMenuItem>
    <div className="tui-black-divider"></div>

    <TuiDropdown block={true} dropDownLabel={
      <div>
        <span className="right">\u25BA</span>
        <span className="red-168-text">M</span>ore
      </div>
    }>
      <TuiMenuItem href="#!">
        <span className="red-168-text">C</span>hange dir...
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        <span className="red-168-text">P</span>rint
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        <span className="red-168-text">D</span>OS shell
      </TuiMenuItem>
    </TuiDropdown>

    <div className="tui-black-divider"></div>
    <TuiMenuItem href="#!">
      <span className="red-168-text">Q</span>uit
      <span className="tui-shortcut">F10</span>
    </TuiMenuItem>
  </TuiDropdown>
  <TuiDatetime format="dd MMM yyyy hh:mm:ss " />
</TuiNavbar>`})]}),Xe=({children:t})=>e("div",{role:"presentation",className:"container",children:t}),Ze=({children:t})=>e("div",{role:"presentation",className:"row",children:t}),et=r=>{var a=r,{children:t}=a,i=p(a,["children"]);const d=f.exports.useCallback(()=>{const n=["col"];for(const u in i)if(Object.prototype.hasOwnProperty.call(i,u)){const c=i[u];c!=null&&c.offset&&n.push(`offset-${u}${c.offset}`),c!=null&&c.width&&n.push(`${u}${c.width}`)}return n.join(" ")},[i]);return e("div",{role:"presentation",className:d(),children:t})};var b={Container:Xe,Row:Ze,Col:et};const tt=()=>l(D,{children:[l(b.Container,{children:[l(b.Row,{children:[e(b.Col,{s:{width:12},m:{width:12},l:{width:12},children:"12"}),e(b.Col,{s:{width:6},m:{width:6},l:{width:6},children:"6"}),e(b.Col,{s:{width:6},m:{width:6},l:{width:6},children:"6"}),e(b.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(b.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(b.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(b.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(b.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(b.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(b.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(b.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(b.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(b.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(b.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(b.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(b.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(b.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(b.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(b.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"})]}),l(b.Row,{children:[e(b.Col,{s:{width:12},m:{width:6},l:{width:6},children:"6"}),e(b.Col,{s:{width:12},m:{width:6},l:{width:6},children:"6"})]}),l(b.Row,{children:[e(b.Col,{s:{width:12},m:{offset:3,width:3},l:{offset:3,width:3},children:"3"}),e(b.Col,{s:{width:12},m:{offset:3,width:3},l:{offset:3,width:3},children:"3"})]})]}),e(g.Dark,{code:`<TuiGrid.Container>
  <TuiGrid.Row>
    <TuiGrid.Col s={{ width: 12 }} m={{ width: 12}} l={{ width: 12 }}>12</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 6 }} m={{ width: 6}} l={{ width: 6 }}>6</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 6 }} m={{ width: 6}} l={{ width: 6 }}>6</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
  </TuiGrid.Row>
  <TuiGrid.Row>
    <TuiGrid.Col s={{ width: 12 }} m={{ width: 6 }} l={{ width: 6 }}>6</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 12 }} m={{ width: 6 }} l={{ width: 6 }}>6</TuiGrid.Col>
  </TuiGrid.Row>
  <TuiGrid.Row>
    <TuiGrid.Col s={{ width: 12 }} m={{ offset: 3, width: 3 }} l={{ offset: 3, width: 3 }}>3</TuiGrid.Col >
    <TuiGrid.Col s={{ width: 12 }} m={{ offset: 3, width: 3 }} l={{ offset: 3, width: 3 }}>3</TuiGrid.Col >
  </TuiGrid.Row>

</TuiGrid.Container>`})]}),it=n=>{var u=n,{className:t,children:i,hoverColor:r,stripeColor:a}=u,d=p(u,["className","children","hoverColor","stripeColor"]);const c=()=>{const T=["tui-table"];return t&&T.push(...t.split(" ")),r&&T.push(`hovered-${r}`),a&&T.push(`striped-${a}`),T.join(" ")};return e("table",m(h({},d),{className:c(),children:i}))},lt=r=>{var a=r,{children:t}=a,i=p(a,["children"]);return e("thead",m(h({},i),{children:t}))},at=r=>{var a=r,{children:t}=a,i=p(a,["children"]);return e("tbody",m(h({},i),{children:t}))},F=r=>{var a=r,{children:t}=a,i=p(a,["children"]);return e("tr",m(h({},i),{children:t}))},te=r=>{var a=r,{children:t}=a,i=p(a,["children"]);return e("th",m(h({},i),{children:t}))},M=r=>{var a=r,{children:t}=a,i=p(a,["children"]);return e("td",m(h({},i),{children:t}))},rt=()=>l("div",{children:[e("h3",{children:"Table"}),e(de,{color:W.Blue,children:l(it,{stripeColor:Y.Blue,hoverColor:Y.Purple,children:[e(lt,{children:l(F,{children:[e(te,{children:"Name"}),e(te,{children:"Age"})]})}),l(at,{children:[l(F,{children:[e(M,{children:"Steve"}),e(M,{children:"40"})]}),l(F,{children:[e(M,{children:"Fred"}),e(M,{children:"55"})]}),l(F,{children:[e(M,{children:"Gregor"}),e(M,{children:"25"})]}),l(F,{children:[e(M,{children:"Harry"}),e(M,{children:"43"})]})]})]})}),e(g.Dark,{code:`<TuiTable
  stripeColor={TableRowColor.Blue}
  hoverColor={TableRowColor.Purple}
>
  <TuiTHead>
    <TuiTr>
      <TuiTh>Name</TuiTh>
      <TuiTh>Age</TuiTh>
    </TuiTr>
  </TuiTHead>
  <TuiTBody>
    <TuiTr>
      <TuiTd>Steve</TuiTd>
      <TuiTd>40</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd>Fred</TuiTd>
      <TuiTd>55</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd>Gregor</TuiTd>
      <TuiTd>25</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd>Harry</TuiTd>
      <TuiTd>43</TuiTd>
    </TuiTr>
  </TuiTBody>
</TuiTable>`})]});Ne.render(e(xe.StrictMode,{children:e(de,{color:ae.BlueWhite,children:l(b.Container,{children:[e("h1",{className:"center","aria-label":"React TUI",children:"===========react-tuicss==========="}),e(De,{}),e(j,{}),e(Re,{}),e(j,{}),e(Be,{}),e(j,{}),e(Ve,{}),e(j,{}),e("h2",{className:"center",children:"Pages"}),e("h3",{children:"Bios"}),e(Me,{}),e(Ue,{}),e("h3",{children:"Forecast"}),e(We,{}),e(Je,{}),e(tt,{}),e(rt,{})]})})}),document.getElementById("root"));
