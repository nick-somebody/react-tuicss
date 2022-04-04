var he=Object.defineProperty,oe=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var z=(i,l,a)=>l in i?he(i,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[l]=a,u=(i,l)=>{for(var a in l||(l={}))V.call(l,a)&&z(i,a,l[a]);if(F)for(var a of F(l))K.call(l,a)&&z(i,a,l[a]);return i},v=(i,l)=>oe(i,be(l));var w=(i,l)=>{var a={};for(var n in i)V.call(i,n)&&l.indexOf(n)<0&&(a[n]=i[n]);if(i!=null&&F)for(var n of F(i))l.indexOf(n)<0&&K.call(i,n)&&(a[n]=i[n]);return a};import{j as H,R as G,r as O,a as Z,f as me,b as pe}from"./vendor.35d406f5.js";const ve=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const s of d.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerpolicy&&(d.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?d.credentials="include":r.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function n(r){if(r.ep)return;r.ep=!0;const d=a(r);fetch(r.href,d)}};ve();const e=H.exports.jsx,t=H.exports.jsxs,D=H.exports.Fragment;function A(a){var n=a,{withSpace:i}=n,l=w(n,["withSpace"]);return i===!1?e("div",u({className:"tui-divider"},l)):e("hr",u({className:"tui-divider"},l))}var C=(i=>(i.Black="black-168",i.Blue="blue-168",i.Green="green-168",i.Cyan="cyan-168",i.Red="red-168",i.Purple="purple-168",i.Yellow="yellow-168",i.White="white-168",i.Orange="orange-168",i))(C||{}),k=(i=>(i.Black="black-255",i.Blue="blue-255",i.Green="green-255",i.Cyan="cyan-255",i.Red="red-255",i.Purple="purple-255",i.Yellow="yellow-255",i.White="white-255",i.Orange="orange-255",i))(k||{}),ee=(i=>(i.MildBlue="blue-168",i.MildGreen="green-168",i.MildCyan="cyan-168",i.MildRed="red-168",i.MildPurple="purple-168",i.MildYellow="yellow-168",i.MildOrange="orange-168",i))(ee||{}),E=(i=>(i.Blue="tui-bg-blue-black",i.Green="tui-bg-green-black",i.Cyan="tui-bg-cyan-black",i.Red="tui-bg-red-black",i.Purple="tui-bg-purple-black",i.Yellow="tui-bg-yellow-black",i.Orange="tui-bg-orange-black",i))(E||{}),ie=(i=>(i.BlueBlack="tui-bg-blue-black",i.GreenBlack="tui-bg-green-black",i.CyanBlack="tui-bg-cyan-black",i.RedBlack="tui-bg-red-black",i.PurpleBlack="tui-bg-purple-black",i.YellowBlack="tui-bg-yellow-black",i.OrangeBlack="tui-bg-orange-black",i.BlueWhite="tui-bg-blue-white",i.GreenWhite="tui-bg-green-white",i.CyanWhite="tui-bg-cyan-white",i.RedWhite="tui-bg-red-white",i.PurpleWhite="tui-bg-purple-white",i.YellowWhite="tui-bg-yellow-white",i.OrangeWhite="tui-bg-orange-white",i))(ie||{}),te=(i=>(i.Absolute="absolute",i.Fixed="fixed",i.Relative="relative",i.Static="static",i))(te||{});function we({color:i,children:l}){return e("div",{className:i,children:l})}let U=0;const W=i=>({disabled:l,className:a})=>{const n=[i];return a&&n.push(a),l&&n.push("disabled"),n.join(" ")},le=W("tui-input"),Te=W("tui-checkbox"),fe=W("tui-radio"),Ne=W("tui-fieldset"),xe=W("tui-input"),Ce=()=>(U+=1,U);function ge(a){var n=a,{tabs:i}=n,l=w(n,["tabs"]);const[r,d]=G.useState(0),[s,c]=G.useState();O.exports.useEffect(()=>{c(Ce())},[]);const T=N=>`tab-${s}-control-${N}`,m=N=>`tab-${s}-panel-${N}`,o=N=>N===r,f=N=>{const b=["tui-tab"];return o(N)&&b.push("active"),b.join(" ")},S=N=>{var b;(b=document.getElementById(`tab-${s}-control-${N}`))==null||b.focus()},ue=N=>{let b=r;if(N.code==="ArrowRight"){const B=r+1;b=B===i.length?0:B}else if(N.code==="ArrowLeft"){const B=r-1;b=B<0?i.length-1:B}d(b),S(b)};return t("div",v(u({},l),{children:[e("div",{className:"tui-tabs",children:e("ul",{role:"tablist",onKeyDown:ue,children:i.map(({tabTitle:N},b)=>e("li",{children:e("button",{role:"tab",className:f(b),id:T(b),"aria-controls":m(b),onClick:()=>{d(b)},"aria-selected":o(b),tabIndex:o(b)?0:-1,children:N})},`tab-head-${b}`))})}),i.map(({tab:N},b)=>e("div",{id:m(b),className:"tui-tab-content tui-content",style:{display:o(b)?"block":"none"},"aria-labelledby":T(b),tabIndex:0,hidden:!o(b),children:N},`tab-pane-${b}`))]}))}function ye(){return t("div",{className:"tui-screen-800-600 bordered white-168",children:[e("div",{className:"tui-panel cyan-168 full-width black-255-text tui-no-shadow center",children:"BIOS"}),e(ge,{tabs:[{tabTitle:"Main",tab:e("table",{className:"tui-table-grid",children:t("tbody",{children:[t("tr",{children:[t("td",{rowSpan:2,width:"60%",className:"blue-168-text",children:[e("br",{}),"System Time.........:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[09:21:30]"}),e("br",{}),"System Date.........:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[15/09/1994]"}),e("br",{}),e("br",{}),"Legacy Diskette A...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[1.44/1.25 MB]"}),e("br",{}),"Legacy Diskette B...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[disabled]"}),e("br",{}),e("br",{}),"Primary Master......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),"Primary Slave.......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),"Secondary Master....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[CD-ROM]"}),e("br",{}),"Secondary Slave.....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),e("br",{}),"Keyboard Features...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[Enter]"}),e("br",{}),e("br",{}),"System Memory.......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[640 KB]"}),e("br",{}),"Extended Memory.....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[3568410 KB]"}),e("br",{}),"Boot-time Diagnostic:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[Enabled]"})]}),e("td",{width:"40%",className:"center",children:"Item Specified Help"})]}),e("tr",{children:t("td",{width:"25",height:"448px",children:[e("br",{}),"<Tab>, <Shift-Tab> or <Enter> selects field."]})})]})})},{tabTitle:"Exit",tab:e("div",{children:"child"})}]}),e("div",{className:"tui-statusbar absolute cyan-168",children:t("ul",{children:[e("li",{children:t("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F1"})," Help"]})}),e("li",{children:t("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"\u2191\u2193"})," Select Item"]})}),e("li",{children:t("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"-/+"})," Change Values"]})}),e("li",{children:t("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F9"})," Setup Defaults"]})}),e("br",{}),e("li",{children:t("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"Esc"})," Exit"]})}),e("li",{children:t("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"\u2190\u2192"})," Select Menu"]})}),e("li",{children:t("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"Enter"})," Select Sub-Menu"]})}),e("li",{children:t("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F10"})," Save and Exit"]})})]})})]})}function I(s){var c=s,{textColor:i,fullWidth:l,light:a,color:n,className:r}=c,d=w(c,["textColor","fullWidth","light","color","className"]);const T=()=>{var o;const m=(o=r==null?void 0:r.split(" "))!=null?o:[];return m.push("tui-button"),d.disabled&&m.push("disabled"),n&&m.push(n),i&&m.push(`${i}-text`),a&&m.push("light"),l&&m.push("fill"),m.join(" ")};return t("button",v(u({},d),{className:T(),children:[d.children,e("div",{className:"tui-button-inner"})]}))}function Y(r){var d=r,{color:i,textColor:l,code:a}=d,n=w(d,["color","textColor","code"]);return e("pre",v(u({className:(()=>{var T,m;const c=(m=(T=n.className)==null?void 0:T.split(" "))!=null?m:[];return c.push("tui-code"),c.push(i!=null?i:C.White),c.push(`${l!=null?l:C.Black}-text`),c.join(" ")})()},n),{children:e("code",{role:"figure",children:a})}))}function ke(i){return Y(v(u({},i),{color:C.Black,textColor:C.Cyan}))}function Me(i){return Y(v(u({},i),{color:C.White,textColor:C.Black}))}var g={Custom:Y,Dark:ke,Light:Me};function L(n){var r=n,{disabled:i,className:l}=r,a=w(r,["disabled","className"]);return e("fieldset",v(u({disabled:i,className:Ne({disabled:i,className:l})},a),{children:a.children}))}function $(a){var n=a,{children:i}=n,l=w(n,["children"]);return e("legend",v(u({},l),{children:i}))}function Se(){return t("div",{style:{padding:"25px 0"},children:[e("h2",{children:"Buttons"}),e("div",{className:"tui-window center blue-168",style:{width:"200px"},children:t(L,{children:[e($,{children:"Buttons"}),e(I,{children:"Button"}),e(I,{color:k.Yellow,textColor:k.Black,light:!0,children:"Button"}),e(I,{fullWidth:!0,color:C.Orange,textColor:k.White,children:"Custom"}),e(I,{fullWidth:!0,disabled:!0,color:C.Red,children:"Disabled"}),e(I,{fullWidth:!0,children:"Focused"})]})}),e("h3",{children:"Code"}),e(g.Dark,{code:`<TuiButton>Button</TuiButton>
<TuiButton color={ Color.Yellow} textColor={ Color.Black } light>Button</TuiButton>
<TuiButton fullWidth color={ MildColor.Orange } textColor={ Color.White }>Custom</TuiButton>
<TuiButton fullWidth disabled={ true } color={ MildColor.Red }>Disabled</TuiButton>
<TuiButton fullWidth>Focused</TuiButton>`})]})}const Q=Object.values(ee),R=i=>`${i}%`,ae=i=>`tui-chart-value ${Q[i%Q.length]}`,ne=i=>i?"tui-chart-display":"tui-chart-display no-x-axis no-y-axis";function Ie(T){var m=T,{size:i,values:l,labels:a,valueScaler:n,valueFormatter:r,minValue:d,maxValue:s}=m,c=w(m,["size","values","labels","valueScaler","valueFormatter","minValue","maxValue"]);return t("div",v(u({className:"tui-chart-vertical",style:i},c),{children:[e("div",{className:ne(!!a),children:l.map(({label:o,value:f},S)=>e("div",{role:"meter",tabIndex:0,"aria-valuenow":f,"aria-valuemin":d!=null?d:0,"aria-valuemax":s!=null?s:100,"aria-valuetext":(r!=null?r:R)(f),"aria-label":o,className:ae(S),style:{height:(n!=null?n:R)(f)},children:(r!=null?r:R)(f)},`value-shape-${S}`))}),a&&e("div",{className:"tui-chart-y-axis",children:a==null?void 0:a.map((o,f)=>e("div",{className:"tui-chart-legend",children:o},`label-${f}`))}),a&&e("div",{className:"tui-chart-x-axis",children:l.map(({label:o},f)=>e("div",{className:"tui-chart-legend",children:o},`value-name-${f}`))})]}))}function Oe(T){var m=T,{size:i,values:l,labels:a,valueScaler:n,valueFormatter:r,minValue:d,maxValue:s}=m,c=w(m,["size","values","labels","valueScaler","valueFormatter","minValue","maxValue"]);return t("div",v(u({className:"tui-chart-horizontal",style:i},c),{children:[e("div",{className:ne(!!a),children:l.map(({value:o,label:f},S)=>e("div",{role:"meter",tabIndex:0,"aria-valuenow":o,"aria-valuemin":d!=null?d:0,"aria-valuemax":s!=null?s:100,"aria-valuetext":(r!=null?r:R)(o),"aria-label":f,className:ae(S),style:{width:(n!=null?n:R)(o)},children:(r!=null?r:R)(o)},`value-shape-${S}`))}),a&&e("div",{className:"tui-chart-y-axis",children:l.map(({label:o},f)=>e("div",{className:"tui-chart-legend",children:o},`value-name-${f}`))}),a&&e("div",{className:"tui-chart-x-axis",children:a.map((o,f)=>e("div",{className:"tui-chart-legend",children:o},`label-${f}`))})]}))}var j={Vertical:Ie,Horizontal:Oe};function Ge(){return t("div",{className:"center",children:[e("h2",{children:"Charts"}),e("div",{style:{marginTop:"50px"}}),t("div",{className:"tui-window black-168 left-align",children:[t("fieldset",{className:"tui-fieldset",role:"","aria-roledescription":"",children:[e("legend",{className:"",children:"Vertical Chart"}),e(j.Vertical,{size:{width:"500px",height:"300px"},values:[{value:80,label:"s1"},{value:30,label:"s2"},{value:50,label:"s3"},{value:90,label:"s4"},{value:60,label:"s5"},{value:100,label:"s6"},{value:10,label:"s7"},{value:75,label:"s8"}],labels:["100%","80%","60%","40%","20%"]})]}),e(g.Dark,{code:`<TuiChart.Vertical
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
/>`})]}),e("br",{}),e("br",{}),t("div",{className:"tui-window black-168 left-align",children:[t("fieldset",{className:"tui-fieldset",children:[e("legend",{className:"",children:"Horizontal Chart"}),e(j.Horizontal,{size:{width:"500px",height:"200px"},values:[{value:80,label:"2018"},{value:60,label:"2019"},{value:100,label:"2020"}],labels:["25%","50%","75%","100%"]})]}),e(g.Dark,{code:`<TuiChart.Horizontal
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
/>`})]}),e("br",{}),e("br",{}),t("div",{className:"tui-window black-168 left-align",children:[t("fieldset",{className:"tui-fieldset",children:[e("legend",{className:"",children:"Chart (no axis legend, formatter & scaler)"}),e(j.Horizontal,{size:{width:"500px",height:"300px"},values:[{value:80,label:"s1"},{value:30,label:"s2"},{value:50,label:"s3"},{value:90,label:"s4"},{value:60,label:"s5"},{value:100,label:"s6"},{value:10,label:"s7"},{value:75,label:"s8"}],valueFormatter:i=>`$${i}`,valueScaler:i=>`${i/2}%`})]}),e(g.Dark,{code:`<TuiChart.Horizontal
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
/>`})]}),e("br",{}),e("br",{})]})}function De(){return t(D,{children:[e("h2",{className:"center",children:"Code"}),e("h3",{children:"Dark"}),e(g.Dark,{code:`<TuiCode.Dark code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`}),e("h3",{children:"Light"}),e(g.Light,{code:`<TuiCode.Light code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`}),e("h3",{children:"Custom"}),e(g.Custom,{color:k.White,textColor:C.Blue,code:`<TuiCode.Custom color={ Color.White } textColor={MildColor.Blue} code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`})]})}function re(m){var o=m,{barColor:i,backColor:l,progress:a,barWidth:n,"aria-valuenow":r,"aria-valuemin":d,"aria-valuemax":s,"aria-valuetext":c}=o,T=w(o,["barColor","backColor","progress","barWidth","aria-valuenow","aria-valuemin","aria-valuemax","aria-valuetext"]);return t(D,{children:["[",e("div",v(u({className:`tui-progress-bar inline-block ${l}`,style:{width:n},"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":`${a}%`,role:"progressbar"},T),{children:e("span",{className:`tui-progress ${i}`,style:{width:`${a}%`}})})),"]"]})}const Re=["Blue","Green","Cyan","Red","Purple","Yellow","Orange"],de={};for(const i of Re)de[i]=function(l){return re(u({barColor:k[i],backColor:E[i]},l))};var y=u({Custom:re},de);function Le(){return t("div",{className:"tui-screen-800-600 bordered black-255",children:[e("div",{className:"red-168 full-width white-text",style:{padding:"0px 10px"},children:"FORECAST 1.0"}),e("br",{}),t("table",{className:"tui-table full-width no-border",children:[e("thead",{className:"white-255-text tui-border-double orange-168-border",style:{marginBottom:"5px"},children:t("tr",{className:"left-align",children:[e("th",{children:"#"}),e("th",{children:"LOCATION"}),e("th",{children:"TEMPERATURE"}),e("th",{children:"STATUS"})]})}),t("tbody",{className:"tui-border-double orange-168-border",children:[t("tr",{children:[e("td",{className:"red-168-text",children:"1"}),e("td",{children:"Lisbon"}),t("td",{children:[e("span",{className:"green-168-text",children:"\xA08.0"}),e(y.Red,{barWidth:"350px",progress:58})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),t("tr",{children:[e("td",{className:"red-168-text",children:"2"}),e("td",{children:"Vancouver"}),t("td",{children:[e("span",{className:"green-168-text",children:"\xA09.0"}),e(y.Green,{barWidth:"350px",progress:60})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),t("tr",{children:[e("td",{className:"red-168-text",children:"3"}),e("td",{children:"Rio"}),t("td",{children:[e("span",{className:"green-168-text",children:"31.0"}),e(y.Blue,{barWidth:"350px",progress:81})]}),e("td",{className:"yellow-255-text",children:"WARM"})]}),t("tr",{children:[e("td",{className:"red-168-text",children:"4"}),e("td",{children:"Sydney"}),t("td",{children:[e("span",{className:"green-168-text",children:"22.0"}),e(y.Cyan,{barWidth:"350px",progress:72})]}),e("td",{className:"yellow-255-text",children:"WARM"})]}),t("tr",{children:[e("td",{className:"red-168-text",children:"5"}),e("td",{children:"New York"}),t("td",{children:[e("span",{className:"green-168-text",children:"\xA07.0"}),e(y.Purple,{barWidth:"350px",progress:57})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),t("tr",{children:[e("td",{className:"red-168-text",children:"6"}),e("td",{children:"London"}),t("td",{children:[e("span",{className:"green-168-text",children:"\xA06.0"}),e(y.Yellow,{barWidth:"350px",progress:56})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),t("tr",{children:[e("td",{className:"red-168-text",children:"7"}),e("td",{children:"Paris"}),t("td",{children:[e("span",{className:"green-168-text",children:"\xA04.0"}),e(y.Orange,{barWidth:"350px",progress:54})]}),e("td",{className:"cyan-255-text",children:"VERY COLD"})]}),t("tr",{children:[e("td",{className:"red-168-text",children:"8"}),e("td",{children:"Casablanca"}),t("td",{children:[e("span",{className:"green-168-text",children:"17.0"}),e(y.Custom,{barWidth:"350px",progress:67,backColor:E.Red,barColor:k.Green})]}),e("td",{className:"green-168-text",children:"NORMAL"})]}),t("tr",{children:[e("td",{className:"red-168-text",children:"9"}),e("td",{children:"Reykjavik"}),t("td",{children:[e("span",{className:"green-168-text",children:"-1.0"}),e(y.Custom,{barWidth:"350px",progress:10,backColor:E.Green,barColor:k.Purple})]}),e("td",{className:"cyan-255-text",children:"VERY COLD"})]})]})]}),t("div",{className:"purple-168 full-width white-text",style:{padding:"0px 10px",marginTop:"2px"},children:[e("span",{className:"red-168",children:"HIGH"}),": Rio 31.0",e("br",{}),e("span",{className:"cyan-168",children:"LESS"}),": Reykjavik -1.0"]}),e("br",{}),e("div",{className:"tui-window full-width no-shadow black",children:t("fieldset",{className:"tui-fieldset center",children:[e("button",{className:"tui-button left",children:"Previous"}),e("span",{className:"center",children:"9/201 records"}),e("button",{className:"tui-button right",children:"Next"})]})}),e("div",{className:"red-168 full-width white-text",style:{padding:"0px 10px"},children:"FORECAST 1.0"})]})}function $e(r){var d=r,{disabled:i,className:l,children:a}=d,n=w(d,["disabled","className","children"]);return e("select",v(u({},n),{disabled:i,className:xe({disabled:i,className:l}),children:a}))}function x(a){var n=a,{children:i}=n,l=w(n,["children"]);return e("option",v(u({},l),{children:i}))}function q(a){var n=a,{children:i}=n,l=w(n,["children"]);return e("optgroup",v(u({},l),{children:i}))}function se(r){var d=r,{disabled:i,className:l,type:a}=d,n=w(d,["disabled","className","type"]);return e("input",u({type:a!=null?a:"text",disabled:i,className:le({disabled:i,className:l})},n))}function ce(s){var c=s,{disabled:i,className:l,label:a,type:n,data:r}=c,d=w(c,["disabled","className","label","type","data"]);const T=()=>n==="checkbox"?Te({disabled:i,className:l}):fe({disabled:i,className:l});return t("label",v(u({},r),{className:T(),children:[a,e(se,v(u({disabled:i},d),{type:n})),e("span",{className:i?"disabled":""})]}))}function Be(i){return e(ce,u({type:"checkbox",role:"checkbox"},i))}function We(i){const l=({target:a})=>{if(i.values===void 0||i.onChange===void 0)return;const n=i.values,r=+a.value,d=n.indexOf(r);if(d>=0){const s=[...n];s.splice(d,1),i.onChange(s)}else i.onChange([...n,r])};return t(L,{children:[e($,{children:i.heading}),i.description&&e("div",{className:"tui-checkbox-description",children:i.description}),i.options.map((a,n)=>{var r;return e(Be,{label:a.label,value:a.value,onChange:l,checked:(r=i.values)==null?void 0:r.includes(a.value),disabled:a.disabled},n)})]})}function Fe(i){return e(ce,u({type:"radio"},i))}function Ae(i){const l=({target:a})=>{i.onChange!==void 0&&i.onChange(a.value)};return t(L,{children:[e($,{children:i.heading}),i.description&&e("div",{className:"tui-radio-description",children:i.description}),i.options.map((a,n)=>e(Fe,{label:a.label,value:a.value,onChange:l,checked:i.value===a.value,disabled:a.disabled},n))]})}function Ee(r){var d=r,{disabled:i,className:l,children:a}=d,n=w(d,["disabled","className","children"]);return e("textarea",u({disabled:i,className:le({disabled:i,className:l})},n))}function M(i){var l;return t("label",{htmlFor:i.id,className:(l=i.block)==null||l?"tui-block-label":"",children:[i.label,e(se,u({},i))]})}function _(i){var l;return t("label",{htmlFor:i.id,className:(l=i.block)==null||l?"tui-block-label":"",children:[i.label,e($e,u({},i))]})}function J(i){var l;return t("label",{htmlFor:i.id,className:(l=i.block)==null||l?"tui-block-label":"",children:[i.label,e(Ee,u({},i))]})}function je(i){return t(L,{children:[e($,{children:i.heading}),i.description&&e("div",{className:"tui-inputset-description",children:i.description}),i.children]})}function Pe(){const[i,l]=O.exports.useState("text"),[a,n]=O.exports.useState([]),[r,d]=O.exports.useState(0);return t(D,{children:[t("div",{className:"tui-window",style:{textAlign:"left"},children:[e("h2",{children:"Inputs"}),t(je,{heading:"Form",children:[e(M,{label:"Text.......: ",value:i,onChange:({target:s})=>l(s.value)}),e(M,{label:"Disabled...: ",value:"disabled",disabled:!0,onChange:({target:s})=>l(s.value)}),e(M,{label:"Number.....: ",type:"number",step:1,value:25,onChange:({target:s})=>l(s.value)}),e(M,{label:"Password...: ",type:"password",value:"12345"}),e(M,{label:"Color......: ",type:"color",value:"#00FF00"}),t(_,{label:"Select.....: ",children:[e(x,{children:"First"}),e(x,{children:"Second"}),e(x,{children:"Third"}),t(q,{label:"Group",children:[e(x,{children:"First"}),e(x,{children:"Second"}),e(x,{children:"Third"})]})]}),e(M,{label:"Date.......: ",type:"date",value:"2019-01-01"}),e(M,{label:"Time.......: ",type:"datetime-local",value:"2019-01-01T12:00"}),e(We,{heading:"Checkboxes",description:"Add some biz",options:[{value:1,label:"First"},{value:2,label:"Second"},{value:3,label:"Disabled",disabled:!0}],onChange:s=>{n(s)},values:a}),e(Ae,{heading:"Radios",options:[{value:1,label:"First"},{value:2,label:"Second"},{value:3,label:"Disabled",disabled:!0}],onChange:s=>{d(+s)},value:r}),e(J,{label:"Textarea",value:"asdadasdasd",style:{width:"100%"}}),e(J,{label:"Disabled Textarea",value:"disabled",disabled:!0,style:{width:"100%"}}),e("br",{}),t(_,{label:"Multiple",multiple:!0,style:{width:"100%"},children:[e(x,{children:"---"}),e(x,{children:"First"}),e(x,{children:"Second"}),e(x,{children:"Third"}),t(q,{label:"Group",children:[e(x,{children:"First"}),e(x,{children:"Second"}),e(x,{children:"Third"})]})]}),e(M,{label:"File",className:"full-width",type:"file"})]})]}),e(g.Dark,{code:`<TuiInputSet
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
</TuiInputSet>`})]})}G.createElement("div");function He({children:i,buttonProps:l,parent:a,modalTitle:n}){var T;const[r,d]=G.useState(!1);G.useMemo(()=>document.createElement("div"),[]);const s=m=>{l!=null&&l.onClick&&l.onClick(m),d(!r)},c=()=>["tui-modal-container","active"].join(" ");return t(D,{children:[e(I,{onClick:s,children:(T=l==null?void 0:l.children)!=null?T:"Open modal"}),r&&Z.exports.createPortal(e("div",{className:c(),"aria-label":n,children:e("div",{className:"tui-modal",role:"alertdialog",children:e("div",{className:"tui-window red-168 left-align",children:t(L,{title:n,role:"presentation",children:[e($,{role:"presentation",children:n}),i,e("div",{className:"tui-divider"}),e(I,{onClick:()=>d(!1),className:"tui-modal-close-button right",color:C.Cyan,textColor:k.Black,children:"Close"})]})})})}),a!=null?a:document.body)]})}function Ye({parent:i}){return t(D,{children:[e("h3",{children:"Modals"}),e(He,{modalTitle:"STEVE",parent:i,children:"content"})]})}function p({children:i,onClick:l,href:a}){const n=!!l,r=!!a;return t("li",{children:[n&&e("button",{onClick:l,children:i}),r&&e("a",{href:a,children:i}),!n&&!r&&e("div",{children:i})]})}function X({children:i,dropDownLabel:l,block:a}){return t("li",{className:(()=>{const r=["tui-dropdown"];return a&&r.push("block"),r.join(" ")})(),children:[e("span",{children:l}),e("div",{className:"tui-dropdown-content",children:e("ul",{children:i})})]})}function ze({sidenav:i,children:l,position:a}){return e("nav",{className:`tui-nav ${a!=null?a:te.Relative}`,children:t("ul",{children:[i,l]})})}function Ve({children:i,buttonText:l}){var d,s;const[a,n]=G.useState(!1),r=O.exports.useRef(null);return t("li",{className:"tui-sidenav-li",children:[t("button",{className:"tui-sidenav-button",onClick:()=>n(!a),ref:r,children:[a?"x":"\u2261",l]}),a&&Z.exports.createPortal(e("nav",{className:"tui-sidenav active absolute",children:e("ul",{children:i})}),(s=(d=r.current)==null?void 0:d.parentElement)!=null?s:document.body)]})}function P(d){var s=d,{children:i,basic:l,className:a,heading:n}=s,r=w(s,["children","basic","className","heading"]);const c=()=>a?`tui-window ${a}`:"tui-window";return l?e("div",v(u({},r),{className:c(),children:i})):e("div",v(u({},r),{className:c(),children:t(L,{title:n,role:"presentation",children:[n&&e($,{role:"presentation",children:n}),i]})}))}function Ke(i){const[l,a]=O.exports.useState("");return O.exports.useEffect(()=>{const n=setInterval(()=>{a(me(new Date,i.format))},1e3);return()=>clearInterval(n)},[]),e("span",{className:"tui-datetime",children:l})}function Ue(){return t(D,{children:[e("h3",{children:"Navigation"}),t("div",{className:"tui-screen-800-600 bordered tui-bg-blue-black",children:[t(ze,{sidenav:t(Ve,{children:[t(p,{href:"#!",children:[e("span",{className:"red-168-text",children:"O"}),"pen",e("span",{className:"tui-shortcut",children:"ctrl+o"})]}),e(p,{href:"#!",children:"OS Shell"}),t(p,{href:"#!",children:[e("span",{className:"red-168-text",children:"C"}),"opy",e("span",{className:"tui-shortcut",children:"ctrl+c"})]}),t(p,{href:"#!",children:[e("span",{className:"red-168-text",children:"P"}),"aste",e("span",{className:"tui-shortcut",children:"ctrl+v"})]}),t(p,{href:"#!",children:["Cut",e("span",{className:"tui-shortcut",children:"ctrl+x"})]}),e("div",{className:"tui-black-divider"}),e(p,{href:"#!",children:"Insert"}),e(p,{href:"#!",children:"Delete"}),e(p,{href:"#!",children:"Go..."}),e("div",{className:"tui-black-divider"}),t(p,{href:"#!",children:[e("span",{className:"red-168-text",children:"S"}),"earch",e("span",{className:"tui-shortcut",children:"ctrl+p"})]}),e("div",{className:"tui-black-divider"}),t(p,{href:"#!",children:["Exit ",e("span",{className:"tui-shortcut",children:"F10"})]})]}),children:[t(X,{dropDownLabel:t("div",{children:[e("span",{className:"red-168-text",children:"F"}),"ile"]}),children:[t(p,{onClick:()=>{},children:[e("span",{className:"red-168-text",children:"N"}),"ew"]}),t(p,{href:"#!",children:[e("span",{className:"red-168-text",children:"O"}),"pen...",e("span",{className:"tui-shortcut",children:"F3"})]}),t(p,{href:"#!",children:[e("span",{className:"red-168-text",children:"S"}),"ave",e("span",{className:"tui-shortcut",children:"F2"})]}),t(p,{href:"#!",children:["S",e("span",{className:"red-168-text",children:"a"}),"ve as..."]}),t(p,{href:"#!",children:["Save a",e("span",{className:"red-168-text",children:"l"}),"l"]}),e("div",{className:"tui-black-divider"}),t(X,{block:!0,dropDownLabel:t("div",{children:[e("span",{className:"right",children:"\u25BA"}),e("span",{className:"red-168-text",children:"M"}),"ore"]}),children:[t(p,{href:"#!",children:[e("span",{className:"red-168-text",children:"C"}),"hange dir..."]}),t(p,{href:"#!",children:[e("span",{className:"red-168-text",children:"P"}),"rint"]}),t(p,{href:"#!",children:[e("span",{className:"red-168-text",children:"D"}),"OS shell"]})]}),e("div",{className:"tui-black-divider"}),t(p,{href:"#!",children:[e("span",{className:"red-168-text",children:"Q"}),"uit",e("span",{className:"tui-shortcut",children:"F10"})]})]}),e(Ke,{format:"dd MMM yyyy hh:mm:ss "})]}),t(P,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]}),t(P,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]}),t(P,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]})]}),e(g.Dark,{code:`<TuiNavbar
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
</TuiNavbar>`})]})}function Qe({children:i}){return e("div",{className:"container",children:i})}function qe({children:i}){return e("div",{className:"row",children:i})}function _e(a){var n=a,{children:i}=n,l=w(n,["children"]);return e("div",{className:(()=>{const d=["col"];for(const s in l)if(Object.prototype.hasOwnProperty.call(l,s)){const c=l[s];c!=null&&c.offset&&d.push(`offset-${s}${c.offset}`),c!=null&&c.width&&d.push(`${s}${c.width}`)}return d.join(" ")})(),children:i})}var h={Container:Qe,Row:qe,Col:_e};function Je(){return t(D,{children:[t(h.Container,{children:[t(h.Row,{children:[e(h.Col,{s:{width:12},m:{width:12},l:{width:12},children:"12"}),e(h.Col,{s:{width:6},m:{width:6},l:{width:6},children:"6"}),e(h.Col,{s:{width:6},m:{width:6},l:{width:6},children:"6"}),e(h.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(h.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(h.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(h.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(h.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"})]}),t(h.Row,{children:[e(h.Col,{s:{width:12},m:{width:6},l:{width:6},children:"6"}),e(h.Col,{s:{width:12},m:{width:6},l:{width:6},children:"6"})]}),t(h.Row,{children:[e(h.Col,{s:{width:12},m:{offset:3,width:3},l:{offset:3,width:3},children:"3"}),e(h.Col,{s:{width:12},m:{offset:3,width:3},l:{offset:3,width:3},children:"3"})]})]}),e(g.Dark,{code:`<TuiGrid.Container>
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

</TuiGrid.Container>`})]})}pe.render(e(G.StrictMode,{children:e(we,{color:ie.BlueWhite,children:t(h.Container,{children:[e("h1",{className:"center","aria-label":"React TUI",children:"===========react-tuicss==========="}),e(Se,{}),e(A,{}),e(De,{}),e(A,{}),e(Ge,{}),e(A,{}),e(Pe,{}),e(A,{}),e("h2",{className:"center",children:"Pages"}),e("h3",{children:"Bios"}),e(ye,{}),e(Ye,{}),e("h3",{children:"Forecast"}),e(Le,{}),e(Ue,{}),e(Je,{})]})})}),document.getElementById("root"));
