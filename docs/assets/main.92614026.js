var Te=Object.defineProperty,ve=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var U=(i,t,n)=>t in i?Te(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,c=(i,t)=>{for(var n in t||(t={}))Q.call(t,n)&&U(i,n,t[n]);if(j)for(var n of j(t))q.call(t,n)&&U(i,n,t[n]);return i},m=(i,t)=>ve(i,we(t));var b=(i,t)=>{var n={};for(var a in i)Q.call(i,a)&&t.indexOf(a)<0&&(n[a]=i[a]);if(i!=null&&j)for(var a of j(i))t.indexOf(a)<0&&q.call(i,a)&&(n[a]=i[a]);return n};import{j as V,R as D,r as I,a as le,f as fe,b as Ne}from"./vendor.35d406f5.js";const xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const s of d.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerpolicy&&(d.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?d.credentials="include":r.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(r){if(r.ep)return;r.ep=!0;const d=n(r);fetch(r.href,d)}};xe();const e=V.exports.jsx,l=V.exports.jsxs,L=V.exports.Fragment;function H(n){var a=n,{withSpace:i}=a,t=b(a,["withSpace"]);return i===!1?e("div",c({className:"tui-divider"},t)):e("hr",c({className:"tui-divider"},t))}var g=(i=>(i.Black="black-168",i.Blue="blue-168",i.Green="green-168",i.Cyan="cyan-168",i.Red="red-168",i.Purple="purple-168",i.Yellow="yellow-168",i.White="white-168",i.Orange="orange-168",i))(g||{}),k=(i=>(i.Black="black-255",i.Blue="blue-255",i.Green="green-255",i.Cyan="cyan-255",i.Red="red-255",i.Purple="purple-255",i.Yellow="yellow-255",i.White="white-255",i.Orange="orange-255",i))(k||{}),ae=(i=>(i.MildBlue="blue-168",i.MildGreen="green-168",i.MildCyan="cyan-168",i.MildRed="red-168",i.MildPurple="purple-168",i.MildYellow="yellow-168",i.MildOrange="orange-168",i))(ae||{}),A=(i=>(i.Blue="tui-bg-blue-black",i.Green="tui-bg-green-black",i.Cyan="tui-bg-cyan-black",i.Red="tui-bg-red-black",i.Purple="tui-bg-purple-black",i.Yellow="tui-bg-yellow-black",i.Orange="tui-bg-orange-black",i))(A||{}),ne=(i=>(i.BlueBlack="tui-bg-blue-black",i.GreenBlack="tui-bg-green-black",i.CyanBlack="tui-bg-cyan-black",i.RedBlack="tui-bg-red-black",i.PurpleBlack="tui-bg-purple-black",i.YellowBlack="tui-bg-yellow-black",i.OrangeBlack="tui-bg-orange-black",i.BlueWhite="tui-bg-blue-white",i.GreenWhite="tui-bg-green-white",i.CyanWhite="tui-bg-cyan-white",i.RedWhite="tui-bg-red-white",i.PurpleWhite="tui-bg-purple-white",i.YellowWhite="tui-bg-yellow-white",i.OrangeWhite="tui-bg-orange-white",i))(ne||{}),re=(i=>(i.Absolute="absolute",i.Fixed="fixed",i.Relative="relative",i.Static="static",i))(re||{}),z=(i=>(i.Blue="blue",i.Green="green",i.Cyan="cyan",i.Red="red",i.Purple="purple",i.Yellow="yellow",i.White="white",i.Orange="orange",i))(z||{});function de({color:i,children:t}){return e("div",{className:i,children:t})}let _=0;const E=i=>({disabled:t,className:n})=>{const a=[i];return n&&a.push(n),t&&a.push("disabled"),a.join(" ")},se=E("tui-input"),Ce=E("tui-checkbox"),ge=E("tui-radio"),ye=E("tui-fieldset"),ke=E("tui-input"),Me=()=>(_+=1,_);function Se(n){var a=n,{tabs:i}=a,t=b(a,["tabs"]);const[r,d]=D.useState(0),[s,u]=D.useState();I.exports.useEffect(()=>{u(Me())},[]);const v=N=>`tab-${s}-control-${N}`,T=N=>`tab-${s}-panel-${N}`,o=N=>N===r,f=N=>{const p=["tui-tab"];return o(N)&&p.push("active"),p.join(" ")},G=N=>{var p;(p=document.getElementById(`tab-${s}-control-${N}`))==null||p.focus()},pe=N=>{let p=r;if(N.code==="ArrowRight"){const F=r+1;p=F===i.length?0:F}else if(N.code==="ArrowLeft"){const F=r-1;p=F<0?i.length-1:F}d(p),G(p)};return l("div",m(c({},t),{children:[e("div",{className:"tui-tabs",children:e("ul",{role:"tablist",onKeyDown:pe,children:i.map(({tabTitle:N},p)=>e("li",{children:e("button",{role:"tab",className:f(p),id:v(p),"aria-controls":T(p),onClick:()=>{d(p)},"aria-selected":o(p),tabIndex:o(p)?0:-1,children:N})},`tab-head-${p}`))})}),i.map(({tab:N},p)=>e("div",{id:T(p),className:"tui-tab-content tui-content",style:{display:o(p)?"block":"none"},"aria-labelledby":v(p),tabIndex:0,hidden:!o(p),children:N},`tab-pane-${p}`))]}))}function Ge(){return l("div",{className:"tui-screen-800-600 bordered white-168",children:[e("div",{className:"tui-panel cyan-168 full-width black-255-text tui-no-shadow center",children:"BIOS"}),e(Se,{tabs:[{tabTitle:"Main",tab:e("table",{className:"tui-table-grid",children:l("tbody",{children:[l("tr",{children:[l("td",{rowSpan:2,width:"60%",className:"blue-168-text",children:[e("br",{}),"System Time.........:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[09:21:30]"}),e("br",{}),"System Date.........:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[15/09/1994]"}),e("br",{}),e("br",{}),"Legacy Diskette A...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[1.44/1.25 MB]"}),e("br",{}),"Legacy Diskette B...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[disabled]"}),e("br",{}),e("br",{}),"Primary Master......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),"Primary Slave.......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),"Secondary Master....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[CD-ROM]"}),e("br",{}),"Secondary Slave.....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),e("br",{}),"Keyboard Features...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[Enter]"}),e("br",{}),e("br",{}),"System Memory.......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[640 KB]"}),e("br",{}),"Extended Memory.....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[3568410 KB]"}),e("br",{}),"Boot-time Diagnostic:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[Enabled]"})]}),e("td",{width:"40%",className:"center",children:"Item Specified Help"})]}),e("tr",{children:l("td",{width:"25",height:"448px",children:[e("br",{}),"<Tab>, <Shift-Tab> or <Enter> selects field."]})})]})})},{tabTitle:"Exit",tab:e("div",{children:"child"})}]}),e("div",{className:"tui-statusbar absolute cyan-168",children:l("ul",{children:[e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F1"})," Help"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"\u2191\u2193"})," Select Item"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"-/+"})," Change Values"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F9"})," Setup Defaults"]})}),e("br",{}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"Esc"})," Exit"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"\u2190\u2192"})," Select Menu"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"Enter"})," Select Sub-Menu"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F10"})," Save and Exit"]})})]})})]})}function O(s){var u=s,{textColor:i,fullWidth:t,light:n,color:a,className:r}=u,d=b(u,["textColor","fullWidth","light","color","className"]);const v=()=>{var o;const T=(o=r==null?void 0:r.split(" "))!=null?o:[];return T.push("tui-button"),d.disabled&&T.push("disabled"),a&&T.push(a),i&&T.push(`${i}-text`),n&&T.push("light"),t&&T.push("fill"),T.join(" ")};return l("button",m(c({},d),{className:v(),children:[d.children,e("div",{className:"tui-button-inner"})]}))}function K(r){var d=r,{color:i,textColor:t,code:n}=d,a=b(d,["color","textColor","code"]);return e("pre",m(c({className:(()=>{var v,T;const u=(T=(v=a.className)==null?void 0:v.split(" "))!=null?T:[];return u.push("tui-code"),u.push(i!=null?i:g.White),u.push(`${t!=null?t:g.Black}-text`),u.join(" ")})()},a),{children:e("code",{role:"figure",children:n})}))}function Oe(i){return K(m(c({},i),{color:g.Black,textColor:g.Cyan}))}function Ie(i){return K(m(c({},i),{color:g.White,textColor:g.Black}))}var C={Custom:K,Dark:Oe,Light:Ie};function B(a){var r=a,{disabled:i,className:t}=r,n=b(r,["disabled","className"]);return e("fieldset",m(c({disabled:i,className:ye({disabled:i,className:t})},n),{children:n.children}))}function R(n){var a=n,{children:i}=a,t=b(a,["children"]);return e("legend",m(c({},t),{children:i}))}function De(){return l("div",{style:{padding:"25px 0"},children:[e("h2",{children:"Buttons"}),e("div",{className:"tui-window center blue-168",style:{width:"200px"},children:l(B,{children:[e(R,{children:"Buttons"}),e(O,{children:"Button"}),e(O,{color:k.Yellow,textColor:k.Black,light:!0,children:"Button"}),e(O,{fullWidth:!0,color:g.Orange,textColor:k.White,children:"Custom"}),e(O,{fullWidth:!0,disabled:!0,color:g.Red,children:"Disabled"}),e(O,{fullWidth:!0,children:"Focused"})]})}),e("h3",{children:"Code"}),e(C.Dark,{code:`<TuiButton>Button</TuiButton>
<TuiButton color={ Color.Yellow} textColor={ Color.Black } light>Button</TuiButton>
<TuiButton fullWidth color={ MildColor.Orange } textColor={ Color.White }>Custom</TuiButton>
<TuiButton fullWidth disabled={ true } color={ MildColor.Red }>Disabled</TuiButton>
<TuiButton fullWidth>Focused</TuiButton>`})]})}const J=Object.values(ae),$=i=>`${i}%`,ce=i=>`tui-chart-value ${J[i%J.length]}`,ue=i=>i?"tui-chart-display":"tui-chart-display no-x-axis no-y-axis";function Le(v){var T=v,{size:i,values:t,labels:n,valueScaler:a,valueFormatter:r,minValue:d,maxValue:s}=T,u=b(T,["size","values","labels","valueScaler","valueFormatter","minValue","maxValue"]);return l("div",m(c({className:"tui-chart-vertical",style:i},u),{children:[e("div",{className:ue(!!n),children:t.map(({label:o,value:f},G)=>e("div",{role:"meter",tabIndex:0,"aria-valuenow":f,"aria-valuemin":d!=null?d:0,"aria-valuemax":s!=null?s:100,"aria-valuetext":(r!=null?r:$)(f),"aria-label":o,className:ce(G),style:{height:(a!=null?a:$)(f)},children:(r!=null?r:$)(f)},`value-shape-${G}`))}),n&&e("div",{className:"tui-chart-y-axis",children:n==null?void 0:n.map((o,f)=>e("div",{className:"tui-chart-legend",children:o},`label-${f}`))}),n&&e("div",{className:"tui-chart-x-axis",children:t.map(({label:o},f)=>e("div",{className:"tui-chart-legend",children:o},`value-name-${f}`))})]}))}function $e(v){var T=v,{size:i,values:t,labels:n,valueScaler:a,valueFormatter:r,minValue:d,maxValue:s}=T,u=b(T,["size","values","labels","valueScaler","valueFormatter","minValue","maxValue"]);return l("div",m(c({className:"tui-chart-horizontal",style:i},u),{children:[e("div",{className:ue(!!n),children:t.map(({value:o,label:f},G)=>e("div",{role:"meter",tabIndex:0,"aria-valuenow":o,"aria-valuemin":d!=null?d:0,"aria-valuemax":s!=null?s:100,"aria-valuetext":(r!=null?r:$)(o),"aria-label":f,className:ce(G),style:{width:(a!=null?a:$)(o)},children:(r!=null?r:$)(o)},`value-shape-${G}`))}),n&&e("div",{className:"tui-chart-y-axis",children:t.map(({label:o},f)=>e("div",{className:"tui-chart-legend",children:o},`value-name-${f}`))}),n&&e("div",{className:"tui-chart-x-axis",children:n.map((o,f)=>e("div",{className:"tui-chart-legend",children:o},`label-${f}`))})]}))}var P={Vertical:Le,Horizontal:$e};function Be(){return l("div",{className:"center",children:[e("h2",{children:"Charts"}),e("div",{style:{marginTop:"50px"}}),l("div",{className:"tui-window black-168 left-align",children:[l("fieldset",{className:"tui-fieldset",role:"","aria-roledescription":"",children:[e("legend",{className:"",children:"Vertical Chart"}),e(P.Vertical,{size:{width:"500px",height:"300px"},values:[{value:80,label:"s1"},{value:30,label:"s2"},{value:50,label:"s3"},{value:90,label:"s4"},{value:60,label:"s5"},{value:100,label:"s6"},{value:10,label:"s7"},{value:75,label:"s8"}],labels:["100%","80%","60%","40%","20%"]})]}),e(C.Dark,{code:`<TuiChart.Vertical
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
/>`})]}),e("br",{}),e("br",{}),l("div",{className:"tui-window black-168 left-align",children:[l("fieldset",{className:"tui-fieldset",children:[e("legend",{className:"",children:"Horizontal Chart"}),e(P.Horizontal,{size:{width:"500px",height:"200px"},values:[{value:80,label:"2018"},{value:60,label:"2019"},{value:100,label:"2020"}],labels:["25%","50%","75%","100%"]})]}),e(C.Dark,{code:`<TuiChart.Horizontal
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
/>`})]}),e("br",{}),e("br",{}),l("div",{className:"tui-window black-168 left-align",children:[l("fieldset",{className:"tui-fieldset",children:[e("legend",{className:"",children:"Chart (no axis legend, formatter & scaler)"}),e(P.Horizontal,{size:{width:"500px",height:"300px"},values:[{value:80,label:"s1"},{value:30,label:"s2"},{value:50,label:"s3"},{value:90,label:"s4"},{value:60,label:"s5"},{value:100,label:"s6"},{value:10,label:"s7"},{value:75,label:"s8"}],valueFormatter:i=>`$${i}`,valueScaler:i=>`${i/2}%`})]}),e(C.Dark,{code:`<TuiChart.Horizontal
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
/>`})]}),e("br",{}),e("br",{})]})}function Re(){return l(L,{children:[e("h2",{className:"center",children:"Code"}),e("h3",{children:"Dark"}),e(C.Dark,{code:`<TuiCode.Dark code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`}),e("h3",{children:"Light"}),e(C.Light,{code:`<TuiCode.Light code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`}),e("h3",{children:"Custom"}),e(C.Custom,{color:k.White,textColor:g.Blue,code:`<TuiCode.Custom color={ Color.White } textColor={MildColor.Blue} code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`})]})}function he(T){var o=T,{barColor:i,backColor:t,progress:n,barWidth:a,"aria-valuenow":r,"aria-valuemin":d,"aria-valuemax":s,"aria-valuetext":u}=o,v=b(o,["barColor","backColor","progress","barWidth","aria-valuenow","aria-valuemin","aria-valuemax","aria-valuetext"]);return l(L,{children:["[",e("div",m(c({className:`tui-progress-bar inline-block ${t}`,style:{width:a},"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":`${n}%`,role:"progressbar"},v),{children:e("span",{className:`tui-progress ${i}`,style:{width:`${n}%`}})})),"]"]})}const Fe=["Blue","Green","Cyan","Red","Purple","Yellow","Orange"],oe={};for(const i of Fe)oe[i]=function(t){return he(c({barColor:k[i],backColor:A[i]},t))};var y=c({Custom:he},oe);function We(){return l("div",{className:"tui-screen-800-600 bordered black-255",children:[e("div",{className:"red-168 full-width white-text",style:{padding:"0px 10px"},children:"FORECAST 1.0"}),e("br",{}),l("table",{className:"tui-table full-width no-border",children:[e("thead",{className:"white-255-text tui-border-double orange-168-border",style:{marginBottom:"5px"},children:l("tr",{className:"left-align",children:[e("th",{children:"#"}),e("th",{children:"LOCATION"}),e("th",{children:"TEMPERATURE"}),e("th",{children:"STATUS"})]})}),l("tbody",{className:"tui-border-double orange-168-border",children:[l("tr",{children:[e("td",{className:"red-168-text",children:"1"}),e("td",{children:"Lisbon"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA08.0"}),e(y.Red,{barWidth:"350px",progress:58})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"2"}),e("td",{children:"Vancouver"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA09.0"}),e(y.Green,{barWidth:"350px",progress:60})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"3"}),e("td",{children:"Rio"}),l("td",{children:[e("span",{className:"green-168-text",children:"31.0"}),e(y.Blue,{barWidth:"350px",progress:81})]}),e("td",{className:"yellow-255-text",children:"WARM"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"4"}),e("td",{children:"Sydney"}),l("td",{children:[e("span",{className:"green-168-text",children:"22.0"}),e(y.Cyan,{barWidth:"350px",progress:72})]}),e("td",{className:"yellow-255-text",children:"WARM"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"5"}),e("td",{children:"New York"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA07.0"}),e(y.Purple,{barWidth:"350px",progress:57})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"6"}),e("td",{children:"London"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA06.0"}),e(y.Yellow,{barWidth:"350px",progress:56})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"7"}),e("td",{children:"Paris"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA04.0"}),e(y.Orange,{barWidth:"350px",progress:54})]}),e("td",{className:"cyan-255-text",children:"VERY COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"8"}),e("td",{children:"Casablanca"}),l("td",{children:[e("span",{className:"green-168-text",children:"17.0"}),e(y.Custom,{barWidth:"350px",progress:67,backColor:A.Red,barColor:k.Green})]}),e("td",{className:"green-168-text",children:"NORMAL"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"9"}),e("td",{children:"Reykjavik"}),l("td",{children:[e("span",{className:"green-168-text",children:"-1.0"}),e(y.Custom,{barWidth:"350px",progress:10,backColor:A.Green,barColor:k.Purple})]}),e("td",{className:"cyan-255-text",children:"VERY COLD"})]})]})]}),l("div",{className:"purple-168 full-width white-text",style:{padding:"0px 10px",marginTop:"2px"},children:[e("span",{className:"red-168",children:"HIGH"}),": Rio 31.0",e("br",{}),e("span",{className:"cyan-168",children:"LESS"}),": Reykjavik -1.0"]}),e("br",{}),e("div",{className:"tui-window full-width no-shadow black",children:l("fieldset",{className:"tui-fieldset center",children:[e("button",{className:"tui-button left",children:"Previous"}),e("span",{className:"center",children:"9/201 records"}),e("button",{className:"tui-button right",children:"Next"})]})}),e("div",{className:"red-168 full-width white-text",style:{padding:"0px 10px"},children:"FORECAST 1.0"})]})}function Ae(r){var d=r,{disabled:i,className:t,children:n}=d,a=b(d,["disabled","className","children"]);return e("select",m(c({},a),{disabled:i,className:ke({disabled:i,className:t}),children:n}))}function x(n){var a=n,{children:i}=a,t=b(a,["children"]);return e("option",m(c({},t),{children:i}))}function X(n){var a=n,{children:i}=a,t=b(a,["children"]);return e("optgroup",m(c({},t),{children:i}))}function me(r){var d=r,{disabled:i,className:t,type:n}=d,a=b(d,["disabled","className","type"]);return e("input",c({type:n!=null?n:"text",disabled:i,className:se({disabled:i,className:t})},a))}function be(s){var u=s,{disabled:i,className:t,label:n,type:a,data:r}=u,d=b(u,["disabled","className","label","type","data"]);const v=()=>a==="checkbox"?Ce({disabled:i,className:t}):ge({disabled:i,className:t});return l("label",m(c({},r),{className:v(),children:[n,e(me,m(c({disabled:i},d),{type:a})),e("span",{className:i?"disabled":""})]}))}function Ee(i){return e(be,c({type:"checkbox",role:"checkbox"},i))}function je(i){const t=({target:n})=>{if(i.values===void 0||i.onChange===void 0)return;const a=i.values,r=+n.value,d=a.indexOf(r);if(d>=0){const s=[...a];s.splice(d,1),i.onChange(s)}else i.onChange([...a,r])};return l(B,{children:[e(R,{children:i.heading}),i.description&&e("div",{className:"tui-checkbox-description",children:i.description}),i.options.map((n,a)=>{var r;return e(Ee,{label:n.label,value:n.value,onChange:t,checked:(r=i.values)==null?void 0:r.includes(n.value),disabled:n.disabled},a)})]})}function He(i){return e(be,c({type:"radio"},i))}function Pe(i){const t=({target:n})=>{i.onChange!==void 0&&i.onChange(n.value)};return l(B,{children:[e(R,{children:i.heading}),i.description&&e("div",{className:"tui-radio-description",children:i.description}),i.options.map((n,a)=>e(He,{label:n.label,value:n.value,onChange:t,checked:i.value===n.value,disabled:n.disabled},a))]})}function Ye(r){var d=r,{disabled:i,className:t,children:n}=d,a=b(d,["disabled","className","children"]);return e("textarea",c({disabled:i,className:se({disabled:i,className:t})},a))}function M(i){var t;return l("label",{htmlFor:i.id,className:(t=i.block)==null||t?"tui-block-label":"",children:[i.label,e(me,c({},i))]})}function Z(i){var t;return l("label",{htmlFor:i.id,className:(t=i.block)==null||t?"tui-block-label":"",children:[i.label,e(Ae,c({},i))]})}function ee(i){var t;return l("label",{htmlFor:i.id,className:(t=i.block)==null||t?"tui-block-label":"",children:[i.label,e(Ye,c({},i))]})}function ze(r){var d=r,{heading:i,description:t,children:n}=d,a=b(d,["heading","description","children"]);return i?e("form",m(c({},a),{children:l(B,{children:[e(R,{children:i}),t&&e("div",{className:"tui-inputset-description",children:t}),n]})})):e("form",m(c({},a),{children:n}))}function Ve(){const[i,t]=I.exports.useState("text"),[n,a]=I.exports.useState([]),[r,d]=I.exports.useState(0);return l(L,{children:[l("div",{className:"tui-window",style:{textAlign:"left"},children:[e("h2",{children:"Inputs"}),l(ze,{heading:"Form",children:[e(M,{label:"Text.......: ",value:i,onChange:({target:s})=>t(s.value)}),e(M,{label:"Disabled...: ",value:"disabled",disabled:!0,onChange:({target:s})=>t(s.value)}),e(M,{label:"Number.....: ",type:"number",step:1,value:25,onChange:({target:s})=>t(s.value)}),e(M,{label:"Password...: ",type:"password",value:"12345"}),e(M,{label:"Color......: ",type:"color",value:"#00FF00"}),l(Z,{label:"Select.....: ",children:[e(x,{children:"First"}),e(x,{children:"Second"}),e(x,{children:"Third"}),l(X,{label:"Group",children:[e(x,{children:"First"}),e(x,{children:"Second"}),e(x,{children:"Third"})]})]}),e(M,{label:"Date.......: ",type:"date",value:"2019-01-01"}),e(M,{label:"Time.......: ",type:"datetime-local",value:"2019-01-01T12:00"}),e(je,{heading:"Checkboxes",description:"Add some biz",options:[{value:1,label:"First"},{value:2,label:"Second"},{value:3,label:"Disabled",disabled:!0}],onChange:s=>{a(s)},values:n}),e(Pe,{heading:"Radios",options:[{value:1,label:"First"},{value:2,label:"Second"},{value:3,label:"Disabled",disabled:!0}],onChange:s=>{d(+s)},value:r}),e(ee,{label:"Textarea",value:"asdadasdasd",style:{width:"100%"}}),e(ee,{label:"Disabled Textarea",value:"disabled",disabled:!0,style:{width:"100%"}}),e("br",{}),l(Z,{label:"Multiple",multiple:!0,style:{width:"100%"},children:[e(x,{children:"---"}),e(x,{children:"First"}),e(x,{children:"Second"}),e(x,{children:"Third"}),l(X,{label:"Group",children:[e(x,{children:"First"}),e(x,{children:"Second"}),e(x,{children:"Third"})]})]}),e(M,{label:"File",className:"full-width",type:"file"})]})]}),e(C.Dark,{code:`<TuiInputSet
  heading="Form"
>
  <TuiLabeledInput
    label="Text.......: "
    value={text}
    onChange={({ target }) => setText(target.value)}
  />
  <TuiLabeledInput
    label="Disabled...: "
    value="disabled"
    disabled
    onChange={({ target }) => setText(target.value)}
  />
  <TuiLabeledInput
    label="Number.....: "
    type="number"
    step={1}
    value={25}
    onChange={({ target }) => setText(target.value)}
  />
  <TuiLabeledInput
    label="Password...: "
    type="password"
    value={"12345"}
  />
  <TuiLabeledInput 
    label="Color......: "
    type="color"
    value={"#00FF00"}
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
</TuiInputSet>`})]})}D.createElement("div");function Ke({children:i,buttonProps:t,parent:n,modalTitle:a}){var v;const[r,d]=D.useState(!1);D.useMemo(()=>document.createElement("div"),[]);const s=T=>{t!=null&&t.onClick&&t.onClick(T),d(!r)},u=()=>["tui-modal-container","active"].join(" ");return l(L,{children:[e(O,{onClick:s,children:(v=t==null?void 0:t.children)!=null?v:"Open modal"}),r&&le.exports.createPortal(e("div",{className:u(),"aria-label":a,children:e("div",{className:"tui-modal",role:"alertdialog",children:e("div",{className:"tui-window red-168 left-align",children:l(B,{title:a,role:"presentation",children:[e(R,{role:"presentation",children:a}),i,e("div",{className:"tui-divider"}),e(O,{onClick:()=>d(!1),className:"tui-modal-close-button right",color:g.Cyan,textColor:k.Black,children:"Close"})]})})})}),n!=null?n:document.body)]})}function Ue({parent:i}){return l(L,{children:[e("h3",{children:"Modals"}),e(Ke,{modalTitle:"STEVE",parent:i,children:"content"})]})}function w({children:i,onClick:t,href:n}){const a=!!t,r=!!n;return l("li",{children:[a&&e("button",{onClick:t,children:i}),r&&e("a",{href:n,children:i}),!a&&!r&&e("div",{children:i})]})}function ie({children:i,dropDownLabel:t,block:n}){return l("li",{className:(()=>{const r=["tui-dropdown"];return n&&r.push("block"),r.join(" ")})(),children:[e("span",{children:t}),e("div",{className:"tui-dropdown-content",children:e("ul",{children:i})})]})}function Qe({sidenav:i,children:t,position:n}){return e("nav",{className:`tui-nav ${n!=null?n:re.Relative}`,children:l("ul",{children:[i,t]})})}function qe({children:i,buttonText:t}){var d,s;const[n,a]=D.useState(!1),r=I.exports.useRef(null);return l("li",{className:"tui-sidenav-li",children:[l("button",{className:"tui-sidenav-button",onClick:()=>a(!n),ref:r,children:[n?"x":"\u2261",t]}),n&&le.exports.createPortal(e("nav",{className:"tui-sidenav active absolute",children:e("ul",{children:i})}),(s=(d=r.current)==null?void 0:d.parentElement)!=null?s:document.body)]})}function Y(d){var s=d,{children:i,basic:t,className:n,heading:a}=s,r=b(s,["children","basic","className","heading"]);const u=()=>n?`tui-window ${n}`:"tui-window";return t?e("div",m(c({},r),{className:u(),children:i})):e("div",m(c({},r),{className:u(),children:l(B,{title:a,role:"presentation",children:[a&&e(R,{role:"presentation",children:a}),i]})}))}function _e(i){const[t,n]=I.exports.useState("");return I.exports.useEffect(()=>{const a=setInterval(()=>{n(fe(new Date,i.format))},1e3);return()=>clearInterval(a)},[]),e("span",{className:"tui-datetime",children:t})}function Je(){return l(L,{children:[e("h3",{children:"Navigation"}),l("div",{className:"tui-screen-800-600 bordered tui-bg-blue-black",children:[l(Qe,{sidenav:l(qe,{children:[l(w,{href:"#!",children:[e("span",{className:"red-168-text",children:"O"}),"pen",e("span",{className:"tui-shortcut",children:"ctrl+o"})]}),e(w,{href:"#!",children:"OS Shell"}),l(w,{href:"#!",children:[e("span",{className:"red-168-text",children:"C"}),"opy",e("span",{className:"tui-shortcut",children:"ctrl+c"})]}),l(w,{href:"#!",children:[e("span",{className:"red-168-text",children:"P"}),"aste",e("span",{className:"tui-shortcut",children:"ctrl+v"})]}),l(w,{href:"#!",children:["Cut",e("span",{className:"tui-shortcut",children:"ctrl+x"})]}),e("div",{className:"tui-black-divider"}),e(w,{href:"#!",children:"Insert"}),e(w,{href:"#!",children:"Delete"}),e(w,{href:"#!",children:"Go..."}),e("div",{className:"tui-black-divider"}),l(w,{href:"#!",children:[e("span",{className:"red-168-text",children:"S"}),"earch",e("span",{className:"tui-shortcut",children:"ctrl+p"})]}),e("div",{className:"tui-black-divider"}),l(w,{href:"#!",children:["Exit ",e("span",{className:"tui-shortcut",children:"F10"})]})]}),children:[l(ie,{dropDownLabel:l("div",{children:[e("span",{className:"red-168-text",children:"F"}),"ile"]}),children:[l(w,{onClick:()=>{},children:[e("span",{className:"red-168-text",children:"N"}),"ew"]}),l(w,{href:"#!",children:[e("span",{className:"red-168-text",children:"O"}),"pen...",e("span",{className:"tui-shortcut",children:"F3"})]}),l(w,{href:"#!",children:[e("span",{className:"red-168-text",children:"S"}),"ave",e("span",{className:"tui-shortcut",children:"F2"})]}),l(w,{href:"#!",children:["S",e("span",{className:"red-168-text",children:"a"}),"ve as..."]}),l(w,{href:"#!",children:["Save a",e("span",{className:"red-168-text",children:"l"}),"l"]}),e("div",{className:"tui-black-divider"}),l(ie,{block:!0,dropDownLabel:l("div",{children:[e("span",{className:"right",children:"\u25BA"}),e("span",{className:"red-168-text",children:"M"}),"ore"]}),children:[l(w,{href:"#!",children:[e("span",{className:"red-168-text",children:"C"}),"hange dir..."]}),l(w,{href:"#!",children:[e("span",{className:"red-168-text",children:"P"}),"rint"]}),l(w,{href:"#!",children:[e("span",{className:"red-168-text",children:"D"}),"OS shell"]})]}),e("div",{className:"tui-black-divider"}),l(w,{href:"#!",children:[e("span",{className:"red-168-text",children:"Q"}),"uit",e("span",{className:"tui-shortcut",children:"F10"})]})]}),e(_e,{format:"dd MMM yyyy hh:mm:ss "})]}),l(Y,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]}),l(Y,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]}),l(Y,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]})]}),e(C.Dark,{code:`<TuiNavbar
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
</TuiNavbar>`})]})}function Xe({children:i}){return e("div",{className:"container",children:i})}function Ze({children:i}){return e("div",{className:"row",children:i})}function ei(n){var a=n,{children:i}=a,t=b(a,["children"]);return e("div",{className:(()=>{const d=["col"];for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)){const u=t[s];u!=null&&u.offset&&d.push(`offset-${s}${u.offset}`),u!=null&&u.width&&d.push(`${s}${u.width}`)}return d.join(" ")})(),children:i})}var h={Container:Xe,Row:Ze,Col:ei};function ii(){return l(L,{children:[l(h.Container,{children:[l(h.Row,{children:[e(h.Col,{s:{width:12},m:{width:12},l:{width:12},children:"12"}),e(h.Col,{s:{width:6},m:{width:6},l:{width:6},children:"6"}),e(h.Col,{s:{width:6},m:{width:6},l:{width:6},children:"6"}),e(h.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(h.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(h.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(h.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"})]}),l(h.Row,{children:[e(h.Col,{s:{width:12},m:{width:6},l:{width:6},children:"6"}),e(h.Col,{s:{width:12},m:{width:6},l:{width:6},children:"6"})]}),l(h.Row,{children:[e(h.Col,{s:{width:12},m:{offset:3,width:3},l:{offset:3,width:3},children:"3"}),e(h.Col,{s:{width:12},m:{offset:3,width:3},l:{offset:3,width:3},children:"3"})]})]}),e(C.Dark,{code:`<TuiGrid.Container>
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

</TuiGrid.Container>`})]})}function ti(d){var s=d,{className:i,children:t,hoverColor:n,stripeColor:a}=s,r=b(s,["className","children","hoverColor","stripeColor"]);const u=()=>{const v=["tui-table"];return i&&v.push(...i.split(" ")),n&&v.push(`hovered-${n}`),a&&v.push(`striped-${a}`),v.join(" ")};return e("table",m(c({},r),{className:u(),children:t}))}function li(n){var a=n,{children:i}=a,t=b(a,["children"]);return e("thead",m(c({},t),{children:i}))}function ai(n){var a=n,{children:i}=a,t=b(a,["children"]);return e("tbody",m(c({},t),{children:i}))}function W(n){var a=n,{children:i}=a,t=b(a,["children"]);return e("tr",m(c({},t),{children:i}))}function te(n){var a=n,{children:i}=a,t=b(a,["children"]);return e("th",m(c({},t),{children:i}))}function S(n){var a=n,{children:i}=a,t=b(a,["children"]);return e("td",m(c({},t),{children:i}))}function ni(){return l("div",{children:[e("h3",{children:"Table"}),e(de,{color:A.Blue,children:l(ti,{stripeColor:z.Blue,hoverColor:z.Purple,children:[e(li,{children:l(W,{children:[e(te,{children:"Name"}),e(te,{children:"Age"})]})}),l(ai,{children:[l(W,{children:[e(S,{children:"Steve"}),e(S,{children:"40"})]}),l(W,{children:[e(S,{children:"Fred"}),e(S,{children:"55"})]}),l(W,{children:[e(S,{children:"Gregor"}),e(S,{children:"25"})]}),l(W,{children:[e(S,{children:"Harry"}),e(S,{children:"43"})]})]})]})}),e(C.Dark,{code:`<TuiTable
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
</TuiTable>`})]})}Ne.render(e(D.StrictMode,{children:e(de,{color:ne.BlueWhite,children:l(h.Container,{children:[e("h1",{className:"center","aria-label":"React TUI",children:"===========react-tuicss==========="}),e(De,{}),e(H,{}),e(Re,{}),e(H,{}),e(Be,{}),e(H,{}),e(Ve,{}),e(H,{}),e("h2",{className:"center",children:"Pages"}),e("h3",{children:"Bios"}),e(Ge,{}),e(Ue,{}),e("h3",{children:"Forecast"}),e(We,{}),e(Je,{}),e(ii,{}),e(ni,{})]})})}),document.getElementById("root"));
