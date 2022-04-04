var ue=Object.defineProperty,oe=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var z=(t,i,a)=>i in t?ue(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a,h=(t,i)=>{for(var a in i||(i={}))K.call(i,a)&&z(t,a,i[a]);if(A)for(var a of A(i))U.call(i,a)&&z(t,a,i[a]);return t},p=(t,i)=>oe(t,be(i));var w=(t,i)=>{var a={};for(var n in t)K.call(t,n)&&i.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&A)for(var n of A(t))i.indexOf(n)<0&&U.call(t,n)&&(a[n]=t[n]);return a};import{j as Y,R as B,r as O,a as Z,f as me,b as ve}from"./vendor.35d406f5.js";const pe=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(r){if(r.ep)return;r.ep=!0;const c=a(r);fetch(r.href,c)}};pe();const e=Y.exports.jsx,l=Y.exports.jsxs,I=Y.exports.Fragment;function j(a){var n=a,{withSpace:t}=n,i=w(n,["withSpace"]);return t===!1?e("div",h({className:"tui-divider"},i)):e("hr",h({className:"tui-divider"},i))}var y=(t=>(t.Black="black-168",t.Blue="blue-168",t.Green="green-168",t.Cyan="cyan-168",t.Red="red-168",t.Purple="purple-168",t.Yellow="yellow-168",t.White="white-168",t.Orange="orange-168",t))(y||{}),k=(t=>(t.Black="black-255",t.Blue="blue-255",t.Green="green-255",t.Cyan="cyan-255",t.Red="red-255",t.Purple="purple-255",t.Yellow="yellow-255",t.White="white-255",t.Orange="orange-255",t))(k||{}),ee=(t=>(t.MildBlue="blue-168",t.MildGreen="green-168",t.MildCyan="cyan-168",t.MildRed="red-168",t.MildPurple="purple-168",t.MildYellow="yellow-168",t.MildOrange="orange-168",t))(ee||{}),F=(t=>(t.Blue="tui-bg-blue-black",t.Green="tui-bg-green-black",t.Cyan="tui-bg-cyan-black",t.Red="tui-bg-red-black",t.Purple="tui-bg-purple-black",t.Yellow="tui-bg-yellow-black",t.Orange="tui-bg-orange-black",t))(F||{}),te=(t=>(t.BlueBlack="tui-bg-blue-black",t.GreenBlack="tui-bg-green-black",t.CyanBlack="tui-bg-cyan-black",t.RedBlack="tui-bg-red-black",t.PurpleBlack="tui-bg-purple-black",t.YellowBlack="tui-bg-yellow-black",t.OrangeBlack="tui-bg-orange-black",t.BlueWhite="tui-bg-blue-white",t.GreenWhite="tui-bg-green-white",t.CyanWhite="tui-bg-cyan-white",t.RedWhite="tui-bg-red-white",t.PurpleWhite="tui-bg-purple-white",t.YellowWhite="tui-bg-yellow-white",t.OrangeWhite="tui-bg-orange-white",t))(te||{}),le=(t=>(t.Absolute="absolute",t.Fixed="fixed",t.Relative="relative",t.Static="static",t))(le||{});function we({color:t,children:i}){return e("div",{className:t,children:i})}let V=0;const E=t=>({disabled:i,className:a})=>{const n=[t];return a&&n.push(a),i&&n.push("disabled"),n.join(" ")},ie=E("tui-input"),fe=E("tui-checkbox"),Ne=E("tui-radio"),xe=E("tui-fieldset"),ge=E("tui-input"),ye=()=>(V+=1,V);function Ce(a){var n=a,{tabs:t}=n,i=w(n,["tabs"]);const[r,c]=B.useState(0),[d,s]=B.useState();O.exports.useEffect(()=>{s(ye())},[]);const f=x=>`tab-${d}-control-${x}`,m=x=>`tab-${d}-panel-${x}`,o=x=>x===r,N=x=>{const b=["tui-tab"];return o(x)&&b.push("active"),b.join(" ")},S=x=>{var b;(b=document.getElementById(`tab-${d}-control-${x}`))==null||b.focus()},he=x=>{let b=r;if(x.code==="ArrowRight"){const W=r+1;b=W===t.length?0:W}else if(x.code==="ArrowLeft"){const W=r-1;b=W<0?t.length-1:W}c(b),S(b)};return l("div",p(h({},i),{children:[e("div",{className:"tui-tabs",children:e("ul",{role:"tablist",onKeyDown:he,children:t.map(({tabTitle:x},b)=>e("li",{children:e("button",{role:"tab",className:N(b),id:f(b),"aria-controls":m(b),onClick:()=>{c(b)},"aria-selected":o(b),tabIndex:o(b)?0:-1,children:x})},`tab-head-${b}`))})}),t.map(({tab:x},b)=>e("div",{id:m(b),className:"tui-tab-content tui-content",style:{display:o(b)?"block":"none"},"aria-labelledby":f(b),tabIndex:0,hidden:!o(b),children:x},`tab-pane-${b}`))]}))}function ke(){return l("div",{className:"tui-screen-800-600 bordered white-168",children:[e("div",{className:"tui-panel cyan-168 full-width black-255-text tui-no-shadow center",children:"BIOS"}),e(Ce,{tabs:[{tabTitle:"Main",tab:e("table",{className:"tui-table-grid",children:l("tbody",{children:[l("tr",{children:[l("td",{rowSpan:2,width:"60%",className:"blue-168-text",children:[e("br",{}),"System Time.........:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[09:21:30]"}),e("br",{}),"System Date.........:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[15/09/1994]"}),e("br",{}),e("br",{}),"Legacy Diskette A...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[1.44/1.25 MB]"}),e("br",{}),"Legacy Diskette B...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[disabled]"}),e("br",{}),e("br",{}),"Primary Master......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),"Primary Slave.......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),"Secondary Master....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[CD-ROM]"}),e("br",{}),"Secondary Slave.....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),e("br",{}),"Keyboard Features...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[Enter]"}),e("br",{}),e("br",{}),"System Memory.......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[640 KB]"}),e("br",{}),"Extended Memory.....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[3568410 KB]"}),e("br",{}),"Boot-time Diagnostic:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[Enabled]"})]}),e("td",{width:"40%",className:"center",children:"Item Specified Help"})]}),e("tr",{children:l("td",{width:"25",height:"448px",children:[e("br",{}),"<Tab>, <Shift-Tab> or <Enter> selects field."]})})]})})},{tabTitle:"Exit",tab:e("div",{children:"child"})}]}),e("div",{className:"tui-statusbar absolute cyan-168",children:l("ul",{children:[e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F1"})," Help"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"\u2191\u2193"})," Select Item"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"-/+"})," Change Values"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F9"})," Setup Defaults"]})}),e("br",{}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"Esc"})," Exit"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"\u2190\u2192"})," Select Menu"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"Enter"})," Select Sub-Menu"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F10"})," Save and Exit"]})})]})})]})}function $(d){var s=d,{textColor:t,fullWidth:i,light:a,color:n,className:r}=s,c=w(s,["textColor","fullWidth","light","color","className"]);const f=()=>{var o;const m=(o=r==null?void 0:r.split(" "))!=null?o:[];return m.push("tui-button"),c.disabled&&m.push("disabled"),n&&m.push(n),t&&m.push(`${t}-text`),a&&m.push("light"),i&&m.push("fill"),m.join(" ")};return l("button",p(h({},c),{className:f(),children:[c.children,e("div",{className:"tui-button-inner"})]}))}function P(r){var c=r,{color:t,textColor:i,code:a}=c,n=w(c,["color","textColor","code"]);return e("pre",p(h({className:(()=>{var f,m;const s=(m=(f=n.className)==null?void 0:f.split(" "))!=null?m:[];return s.push("tui-code"),s.push(t!=null?t:y.White),s.push(`${i!=null?i:y.Black}-text`),s.join(" ")})()},n),{children:e("code",{role:"figure",children:a})}))}function Te(t){return P(p(h({},t),{color:y.Black,textColor:y.Cyan}))}function Se(t){return P(p(h({},t),{color:y.White,textColor:y.Black}))}var R={Custom:P,Dark:Te,Light:Se};function D(n){var r=n,{disabled:t,className:i}=r,a=w(r,["disabled","className"]);return e("fieldset",p(h({disabled:t,className:xe({disabled:t,className:i})},a),{children:a.children}))}function L(a){var n=a,{children:t}=n,i=w(n,["children"]);return e("legend",p(h({},i),{children:t}))}function $e(){return l("div",{style:{padding:"25px 0"},children:[e("h2",{children:"Buttons"}),e("div",{className:"tui-window center blue-168",style:{width:"200px"},children:l(D,{children:[e(L,{children:"Buttons"}),e($,{children:"Button"}),e($,{color:k.Yellow,textColor:k.Black,light:!0,children:"Button"}),e($,{fullWidth:!0,color:y.Orange,textColor:k.White,children:"Custom"}),e($,{fullWidth:!0,disabled:!0,color:y.Red,children:"Disabled"}),e($,{fullWidth:!0,children:"Focused"})]})}),e("h3",{children:"Code"}),e(R.Dark,{code:`<TuiButton>Button</TuiButton>
<TuiButton color={ Color.Yellow} textColor={ Color.Black } light>Button</TuiButton>
<TuiButton fullWidth color={ MildColor.Orange } textColor={ Color.White }>Custom</TuiButton>
<TuiButton fullWidth disabled={ true } color={ MildColor.Red }>Disabled</TuiButton>
<TuiButton fullWidth>Focused</TuiButton>`})]})}const q=Object.values(ee),M=t=>`${t}%`,ae=t=>`tui-chart-value ${q[t%q.length]}`,ne=t=>t?"tui-chart-display":"tui-chart-display no-x-axis no-y-axis";function Oe(f){var m=f,{size:t,values:i,labels:a,valueScaler:n,valueFormatter:r,minValue:c,maxValue:d}=m,s=w(m,["size","values","labels","valueScaler","valueFormatter","minValue","maxValue"]);return l("div",p(h({className:"tui-chart-vertical",style:t},s),{children:[e("div",{className:ne(!!a),children:i.map(({label:o,value:N},S)=>e("div",{role:"meter",tabIndex:0,"aria-valuenow":N,"aria-valuemin":c!=null?c:0,"aria-valuemax":d!=null?d:100,"aria-valuetext":(r!=null?r:M)(N),"aria-label":o,className:ae(S),style:{height:(n!=null?n:M)(N)},children:(r!=null?r:M)(N)},`value-shape-${S}`))}),a&&e("div",{className:"tui-chart-y-axis",children:a==null?void 0:a.map((o,N)=>e("div",{className:"tui-chart-legend",children:o},`label-${N}`))}),a&&e("div",{className:"tui-chart-x-axis",children:i.map(({label:o},N)=>e("div",{className:"tui-chart-legend",children:o},`value-name-${N}`))})]}))}function Re(f){var m=f,{size:t,values:i,labels:a,valueScaler:n,valueFormatter:r,minValue:c,maxValue:d}=m,s=w(m,["size","values","labels","valueScaler","valueFormatter","minValue","maxValue"]);return l("div",p(h({className:"tui-chart-horizontal",style:t},s),{children:[e("div",{className:ne(!!a),children:i.map(({value:o,label:N},S)=>e("div",{role:"meter",tabIndex:0,"aria-valuenow":o,"aria-valuemin":c!=null?c:0,"aria-valuemax":d!=null?d:100,"aria-valuetext":(r!=null?r:M)(o),"aria-label":N,className:ae(S),style:{width:(n!=null?n:M)(o)},children:(r!=null?r:M)(o)},`value-shape-${S}`))}),a&&e("div",{className:"tui-chart-y-axis",children:i.map(({label:o},N)=>e("div",{className:"tui-chart-legend",children:o},`value-name-${N}`))}),a&&e("div",{className:"tui-chart-x-axis",children:a.map((o,N)=>e("div",{className:"tui-chart-legend",children:o},`label-${N}`))})]}))}var G={Vertical:Oe,Horizontal:Re};function Be(){return l("div",{className:"center",children:[e("h2",{children:"Charts"}),e("div",{style:{marginTop:"50px"}}),l("div",{className:"tui-window black-168 left-align",children:[l("fieldset",{className:"tui-fieldset",role:"","aria-roledescription":"",children:[e("legend",{className:"",children:"Vertical Chart"}),e(G.Vertical,{size:{width:"500px",height:"300px"},values:[{value:80,label:"s1"},{value:30,label:"s2"},{value:50,label:"s3"},{value:90,label:"s4"},{value:60,label:"s5"},{value:100,label:"s6"},{value:10,label:"s7"},{value:75,label:"s8"}],labels:["100%","80%","60%","40%","20%"]})]}),e(R.Dark,{code:`<TuiChart.Vertical
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
/>`})]}),e("br",{}),e("br",{}),l("div",{className:"tui-window black-168 left-align",children:[l("fieldset",{className:"tui-fieldset",children:[e("legend",{className:"",children:"Horizontal Chart"}),e(G.Horizontal,{size:{width:"500px",height:"200px"},values:[{value:80,label:"2018"},{value:60,label:"2019"},{value:100,label:"2020"}],labels:["25%","50%","75%","100%"]})]}),e(R.Dark,{code:`<TuiChart.Horizontal
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
/>`})]}),e("br",{}),e("br",{}),l("div",{className:"tui-window black-168 left-align",children:[l("fieldset",{className:"tui-fieldset",children:[e("legend",{className:"",children:"Chart (no axis legend, formatter & scaler)"}),e(G.Horizontal,{size:{width:"500px",height:"300px"},values:[{value:80,label:"s1"},{value:30,label:"s2"},{value:50,label:"s3"},{value:90,label:"s4"},{value:60,label:"s5"},{value:100,label:"s6"},{value:10,label:"s7"},{value:75,label:"s8"}],valueFormatter:t=>`$${t}`,valueScaler:t=>`${t/2}%`})]}),e(R.Dark,{code:`<TuiChart.Horizontal
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
/>`})]}),e("br",{}),e("br",{})]})}function Me(){return l(I,{children:[e("h2",{className:"center",children:"Code"}),e("h3",{children:"Dark"}),e(R.Dark,{code:`<TuiCode.Dark code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`}),e("h3",{children:"Light"}),e(R.Light,{code:`<TuiCode.Light code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`}),e("h3",{children:"Custom"}),e(R.Custom,{color:k.White,textColor:y.Blue,code:`<TuiCode.Custom color={ Color.White } textColor={MildColor.Blue} code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`})]})}function re(m){var o=m,{barColor:t,backColor:i,progress:a,barWidth:n,"aria-valuenow":r,"aria-valuemin":c,"aria-valuemax":d,"aria-valuetext":s}=o,f=w(o,["barColor","backColor","progress","barWidth","aria-valuenow","aria-valuemin","aria-valuemax","aria-valuetext"]);return l(I,{children:["[",e("div",p(h({className:`tui-progress-bar inline-block ${i}`,style:{width:n},"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":`${a}%`,role:"progressbar"},f),{children:e("span",{className:`tui-progress ${t}`,style:{width:`${a}%`}})})),"]"]})}const De=["Blue","Green","Cyan","Red","Purple","Yellow","Orange"],ce={};for(const t of De)ce[t]=function(i){return re(h({barColor:k[t],backColor:F[t]},i))};var C=h({Custom:re},ce);function Le(){return l("div",{className:"tui-screen-800-600 bordered black-255",children:[e("div",{className:"red-168 full-width white-text",style:{padding:"0px 10px"},children:"FORECAST 1.0"}),e("br",{}),l("table",{className:"tui-table full-width no-border",children:[e("thead",{className:"white-255-text tui-border-double orange-168-border",style:{marginBottom:"5px"},children:l("tr",{className:"left-align",children:[e("th",{children:"#"}),e("th",{children:"LOCATION"}),e("th",{children:"TEMPERATURE"}),e("th",{children:"STATUS"})]})}),l("tbody",{className:"tui-border-double orange-168-border",children:[l("tr",{children:[e("td",{className:"red-168-text",children:"1"}),e("td",{children:"Lisbon"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA08.0"}),e(C.Red,{barWidth:"350px",progress:58})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"2"}),e("td",{children:"Vancouver"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA09.0"}),e(C.Green,{barWidth:"350px",progress:60})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"3"}),e("td",{children:"Rio"}),l("td",{children:[e("span",{className:"green-168-text",children:"31.0"}),e(C.Blue,{barWidth:"350px",progress:81})]}),e("td",{className:"yellow-255-text",children:"WARM"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"4"}),e("td",{children:"Sydney"}),l("td",{children:[e("span",{className:"green-168-text",children:"22.0"}),e(C.Cyan,{barWidth:"350px",progress:72})]}),e("td",{className:"yellow-255-text",children:"WARM"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"5"}),e("td",{children:"New York"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA07.0"}),e(C.Purple,{barWidth:"350px",progress:57})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"6"}),e("td",{children:"London"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA06.0"}),e(C.Yellow,{barWidth:"350px",progress:56})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"7"}),e("td",{children:"Paris"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA04.0"}),e(C.Orange,{barWidth:"350px",progress:54})]}),e("td",{className:"cyan-255-text",children:"VERY COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"8"}),e("td",{children:"Casablanca"}),l("td",{children:[e("span",{className:"green-168-text",children:"17.0"}),e(C.Custom,{barWidth:"350px",progress:67,backColor:F.Red,barColor:k.Green})]}),e("td",{className:"green-168-text",children:"NORMAL"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"9"}),e("td",{children:"Reykjavik"}),l("td",{children:[e("span",{className:"green-168-text",children:"-1.0"}),e(C.Custom,{barWidth:"350px",progress:10,backColor:F.Green,barColor:k.Purple})]}),e("td",{className:"cyan-255-text",children:"VERY COLD"})]})]})]}),l("div",{className:"purple-168 full-width white-text",style:{padding:"0px 10px",marginTop:"2px"},children:[e("span",{className:"red-168",children:"HIGH"}),": Rio 31.0",e("br",{}),e("span",{className:"cyan-168",children:"LESS"}),": Reykjavik -1.0"]}),e("br",{}),e("div",{className:"tui-window full-width no-shadow black",children:l("fieldset",{className:"tui-fieldset center",children:[e("button",{className:"tui-button left",children:"Previous"}),e("span",{className:"center",children:"9/201 records"}),e("button",{className:"tui-button right",children:"Next"})]})}),e("div",{className:"red-168 full-width white-text",style:{padding:"0px 10px"},children:"FORECAST 1.0"})]})}function We(r){var c=r,{disabled:t,className:i,children:a}=c,n=w(c,["disabled","className","children"]);return e("select",p(h({},n),{disabled:t,className:ge({disabled:t,className:i}),children:a}))}function g(a){var n=a,{children:t}=n,i=w(n,["children"]);return e("option",p(h({},i),{children:t}))}function Q(a){var n=a,{children:t}=n,i=w(n,["children"]);return e("optgroup",p(h({},i),{children:t}))}function de(r){var c=r,{disabled:t,className:i,type:a}=c,n=w(c,["disabled","className","type"]);return e("input",h({type:a!=null?a:"text",disabled:t,className:ie({disabled:t,className:i})},n))}function se(d){var s=d,{disabled:t,className:i,label:a,type:n,data:r}=s,c=w(s,["disabled","className","label","type","data"]);const f=()=>n==="checkbox"?fe({disabled:t,className:i}):Ne({disabled:t,className:i});return l("label",p(h({},r),{className:f(),children:[a,e(de,p(h({disabled:t},c),{type:n})),e("span",{className:t?"disabled":""})]}))}function Ie(t){return e(se,h({type:"checkbox",role:"checkbox"},t))}function Ee(t){const i=({target:a})=>{if(t.values===void 0||t.onChange===void 0)return;const n=t.values,r=+a.value,c=n.indexOf(r);if(c>=0){const d=[...n];d.splice(c,1),t.onChange(d)}else t.onChange([...n,r])};return l(D,{children:[e(L,{children:t.heading}),t.description&&e("div",{className:"tui-checkbox-description",children:t.description}),t.options.map((a,n)=>{var r;return e(Ie,{label:a.label,value:a.value,onChange:i,checked:(r=t.values)==null?void 0:r.includes(a.value),disabled:a.disabled},n)})]})}function Ae(t){return e(se,h({type:"radio"},t))}function je(t){const i=({target:a})=>{t.onChange!==void 0&&t.onChange(a.value)};return l(D,{children:[e(L,{children:t.heading}),t.description&&e("div",{className:"tui-radio-description",children:t.description}),t.options.map((a,n)=>e(Ae,{label:a.label,value:a.value,onChange:i,checked:t.value===a.value,disabled:a.disabled},n))]})}function Fe(r){var c=r,{disabled:t,className:i,children:a}=c,n=w(c,["disabled","className","children"]);return e("textarea",h({disabled:t,className:ie({disabled:t,className:i})},n))}function T(t){var i;return l("label",{htmlFor:t.id,className:(i=t.block)==null||i?"tui-block-label":"",children:[t.label,e(de,h({},t))]})}function _(t){var i;return l("label",{htmlFor:t.id,className:(i=t.block)==null||i?"tui-block-label":"",children:[t.label,e(We,h({},t))]})}function J(t){var i;return l("label",{htmlFor:t.id,className:(i=t.block)==null||i?"tui-block-label":"",children:[t.label,e(Fe,h({},t))]})}function Ge(t){return l(D,{children:[e(L,{children:t.heading}),t.description&&e("div",{className:"tui-inputset-description",children:t.description}),t.children]})}function He(){const[t,i]=O.exports.useState("text"),[a,n]=O.exports.useState([]),[r,c]=O.exports.useState(0);return l("div",{className:"tui-window",style:{textAlign:"left"},children:[e("h2",{children:"Inputs"}),l(Ge,{heading:"Form",children:[e(T,{label:"Text.......: ",value:t,onChange:({target:d})=>i(d.value)}),e(T,{label:"Disabled...: ",value:"disabled",disabled:!0,onChange:({target:d})=>i(d.value)}),e(T,{label:"Number.....: ",type:"number",step:1,value:25,onChange:({target:d})=>i(d.value)}),e(T,{label:"Password...: ",type:"password",value:"12345"}),e(T,{label:"Color......: ",type:"color",value:"#00FF00"}),l(_,{label:"Select.....: ",children:[e(g,{children:"First"}),e(g,{children:"Second"}),e(g,{children:"Third"}),l(Q,{label:"Group",children:[e(g,{children:"First"}),e(g,{children:"Second"}),e(g,{children:"Third"})]})]}),e(T,{label:"Date.......: ",type:"date",value:"2019-01-01"}),e(T,{label:"Time.......: ",type:"datetime-local",value:"2019-01-01T12:00"}),e(Ee,{heading:"Checkboxes",description:"Add some biz",options:[{value:1,label:"First"},{value:2,label:"Second"},{value:3,label:"Disabled",disabled:!0}],onChange:d=>{n(d)},values:a}),e(je,{heading:"Radios",options:[{value:1,label:"First"},{value:2,label:"Second"},{value:3,label:"Disabled",disabled:!0}],onChange:d=>{c(+d)},value:r}),e(J,{label:"Textarea",value:"asdadasdasd",style:{width:"100%"}}),e(J,{label:"Disabled Textarea",value:"disabled",disabled:!0,style:{width:"100%"}}),e("br",{}),l(_,{label:"Multiple",multiple:!0,style:{width:"100%"},children:[e(g,{children:"---"}),e(g,{children:"First"}),e(g,{children:"Second"}),e(g,{children:"Third"}),l(Q,{label:"Group",children:[e(g,{children:"First"}),e(g,{children:"Second"}),e(g,{children:"Third"})]})]}),e(T,{label:"File",className:"full-width",type:"file"})]})]})}B.createElement("div");function Ye({children:t,buttonProps:i,parent:a,modalTitle:n}){var f;const[r,c]=B.useState(!1);B.useMemo(()=>document.createElement("div"),[]);const d=m=>{i!=null&&i.onClick&&i.onClick(m),c(!r)},s=()=>["tui-modal-container","active"].join(" ");return l(I,{children:[e($,{onClick:d,children:(f=i==null?void 0:i.children)!=null?f:"Open modal"}),r&&Z.exports.createPortal(e("div",{className:s(),"aria-label":n,children:e("div",{className:"tui-modal",role:"alertdialog",children:e("div",{className:"tui-window red-168 left-align",children:l(D,{title:n,role:"presentation",children:[e(L,{role:"presentation",children:n}),t,e("div",{className:"tui-divider"}),e($,{onClick:()=>c(!1),className:"tui-modal-close-button right",color:y.Cyan,textColor:k.Black,children:"Close"})]})})})}),a!=null?a:document.body)]})}function Pe({parent:t}){return l(I,{children:[e("h3",{children:"Modals"}),e(Ye,{modalTitle:"STEVE",parent:t,children:"content"})]})}function v({children:t,onClick:i,href:a}){const n=!!i,r=!!a;return l("li",{children:[n&&e("button",{onClick:i,children:t}),r&&e("a",{href:a,children:t}),!n&&!r&&e("div",{children:t})]})}function X({children:t,dropDownLabel:i,block:a}){return l("li",{className:(()=>{const r=["tui-dropdown"];return a&&r.push("block"),r.join(" ")})(),children:[e("span",{children:i}),e("div",{className:"tui-dropdown-content",children:e("ul",{children:t})})]})}function ze({sidenav:t,children:i,position:a}){return e("nav",{className:`tui-nav ${a!=null?a:le.Relative}`,children:l("ul",{children:[t,i]})})}function Ke({children:t,buttonText:i}){var c,d;const[a,n]=B.useState(!1),r=O.exports.useRef(null);return l("li",{className:"tui-sidenav-li",children:[l("button",{className:"tui-sidenav-button",onClick:()=>n(!a),ref:r,children:[a?"x":"\u2261",i]}),a&&Z.exports.createPortal(e("nav",{className:"tui-sidenav active absolute",children:e("ul",{children:t})}),(d=(c=r.current)==null?void 0:c.parentElement)!=null?d:document.body)]})}function H(c){var d=c,{children:t,basic:i,className:a,heading:n}=d,r=w(d,["children","basic","className","heading"]);const s=()=>a?`tui-window ${a}`:"tui-window";return i?e("div",p(h({},r),{className:s(),children:t})):e("div",p(h({},r),{className:s(),children:l(D,{title:n,role:"presentation",children:[n&&e(L,{role:"presentation",children:n}),t]})}))}function Ue(t){const[i,a]=O.exports.useState("");return O.exports.useEffect(()=>{const n=setInterval(()=>{a(me(new Date,t.format))},1e3);return()=>clearInterval(n)},[]),e("span",{className:"tui-datetime",children:i})}function Ve(){return l(I,{children:[e("h3",{children:"Navigation"}),l("div",{className:"tui-screen-800-600 bordered tui-bg-blue-black",children:[l(ze,{sidenav:l(Ke,{children:[l(v,{href:"#!",children:[e("span",{className:"red-168-text",children:"O"}),"pen",e("span",{className:"tui-shortcut",children:"ctrl+o"})]}),e(v,{href:"#!",children:"OS Shell"}),l(v,{href:"#!",children:[e("span",{className:"red-168-text",children:"C"}),"opy",e("span",{className:"tui-shortcut",children:"ctrl+c"})]}),l(v,{href:"#!",children:[e("span",{className:"red-168-text",children:"P"}),"aste",e("span",{className:"tui-shortcut",children:"ctrl+v"})]}),l(v,{href:"#!",children:["Cut",e("span",{className:"tui-shortcut",children:"ctrl+x"})]}),e("div",{className:"tui-black-divider"}),e(v,{href:"#!",children:"Insert"}),e(v,{href:"#!",children:"Delete"}),e(v,{href:"#!",children:"Go..."}),e("div",{className:"tui-black-divider"}),l(v,{href:"#!",children:[e("span",{className:"red-168-text",children:"S"}),"earch",e("span",{className:"tui-shortcut",children:"ctrl+p"})]}),e("div",{className:"tui-black-divider"}),l(v,{href:"#!",children:["Exit ",e("span",{className:"tui-shortcut",children:"F10"})]})]}),children:[l(X,{dropDownLabel:l("div",{children:[e("span",{className:"red-168-text",children:"F"}),"ile"]}),children:[l(v,{onClick:()=>{},children:[e("span",{className:"red-168-text",children:"N"}),"ew"]}),l(v,{href:"#!",children:[e("span",{className:"red-168-text",children:"O"}),"pen...",e("span",{className:"tui-shortcut",children:"F3"})]}),l(v,{href:"#!",children:[e("span",{className:"red-168-text",children:"S"}),"ave",e("span",{className:"tui-shortcut",children:"F2"})]}),l(v,{href:"#!",children:["S",e("span",{className:"red-168-text",children:"a"}),"ve as..."]}),l(v,{href:"#!",children:["Save a",e("span",{className:"red-168-text",children:"l"}),"l"]}),e("div",{className:"tui-black-divider"}),l(X,{block:!0,dropDownLabel:l("div",{children:[e("span",{className:"right",children:"\u25BA"}),e("span",{className:"red-168-text",children:"M"}),"ore"]}),children:[l(v,{href:"#!",children:[e("span",{className:"red-168-text",children:"C"}),"hange dir..."]}),l(v,{href:"#!",children:[e("span",{className:"red-168-text",children:"P"}),"rint"]}),l(v,{href:"#!",children:[e("span",{className:"red-168-text",children:"D"}),"OS shell"]})]}),e("div",{className:"tui-black-divider"}),l(v,{href:"#!",children:[e("span",{className:"red-168-text",children:"Q"}),"uit",e("span",{className:"tui-shortcut",children:"F10"})]})]}),e(Ue,{format:"dd MMM yyyy hh:mm:ss "})]}),l(H,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]}),l(H,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]}),l(H,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]})]})]})}function qe({children:t}){return e("div",{className:"container",children:t})}function Qe({children:t}){return e("div",{className:"row",children:t})}function _e(a){var n=a,{children:t}=n,i=w(n,["children"]);return e("div",{className:(()=>{const c=["col"];for(const d in i)if(Object.prototype.hasOwnProperty.call(i,d)){const s=i[d];s!=null&&s.offset&&c.push(`offset-${d}${s.offset}`),s!=null&&s.width&&c.push(`${d}${s.width}`)}return c.join(" ")})(),children:t})}var u={Container:qe,Row:Qe,Col:_e};function Je(){return l(u.Container,{children:[l(u.Row,{children:[e(u.Col,{s:{width:12},m:{width:12},l:{width:12},children:"12"}),e(u.Col,{s:{width:6},m:{width:6},l:{width:6},children:"6"}),e(u.Col,{s:{width:6},m:{width:6},l:{width:6},children:"6"}),e(u.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(u.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(u.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(u.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(u.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(u.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(u.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(u.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(u.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(u.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(u.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(u.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(u.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(u.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(u.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(u.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"})]}),l(u.Row,{children:[e(u.Col,{s:{width:12},m:{width:6},l:{width:6},children:"6"}),e(u.Col,{s:{width:12},m:{width:6},l:{width:6},children:"6"})]}),l(u.Row,{children:[e(u.Col,{s:{width:12},m:{offset:3,width:3},l:{offset:3,width:3},children:"3"}),e(u.Col,{s:{width:12},m:{offset:3,width:3},l:{offset:3,width:3},children:"3"})]})]})}ve.render(e(B.StrictMode,{children:e(we,{color:te.BlueWhite,children:l(u.Container,{children:[e("h1",{className:"center","aria-label":"React TUI",children:"===========react-tuicss==========="}),e($e,{}),e(j,{}),e(Me,{}),e(j,{}),e(Be,{}),e(j,{}),e(He,{}),e(j,{}),e("h2",{className:"center",children:"Pages"}),e("h3",{children:"Bios"}),e(ke,{}),e(Pe,{}),e("h3",{children:"Forecast"}),e(Le,{}),e(Ve,{}),e(Je,{})]})})}),document.getElementById("root"));
