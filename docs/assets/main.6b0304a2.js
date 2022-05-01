var Te=Object.defineProperty,ve=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var U=(t,i,l)=>i in t?Te(t,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[i]=l,o=(t,i)=>{for(var l in i||(i={}))Q.call(i,l)&&U(t,l,i[l]);if(E)for(var l of E(i))q.call(i,l)&&U(t,l,i[l]);return t},b=(t,i)=>ve(t,we(i));var T=(t,i)=>{var l={};for(var a in t)Q.call(t,a)&&i.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&E)for(var a of E(t))i.indexOf(a)<0&&q.call(t,a)&&(l[a]=t[a]);return l};import{j as V,r as c,a as le,f as xe,R as Ne,b as fe}from"./vendor.5d4eece2.js";const Ce=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function l(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=l(s);fetch(s.href,n)}};Ce();const e=V.exports.jsx,r=V.exports.jsxs,B=V.exports.Fragment,H=l=>{var a=l,{withSpace:t}=a,i=T(a,["withSpace"]);return t===!1?e("div",o({className:"tui-divider"},i)):e("hr",o({className:"tui-divider"},i))};var k=(t=>(t.Black="black-168",t.Blue="blue-168",t.Green="green-168",t.Cyan="cyan-168",t.Red="red-168",t.Purple="purple-168",t.Yellow="yellow-168",t.White="white-168",t.Orange="orange-168",t))(k||{}),O=(t=>(t.Black="black-255",t.Blue="blue-255",t.Green="green-255",t.Cyan="cyan-255",t.Red="red-255",t.Purple="purple-255",t.Yellow="yellow-255",t.White="white-255",t.Orange="orange-255",t))(O||{}),ae=(t=>(t.MildBlue="blue-168",t.MildGreen="green-168",t.MildCyan="cyan-168",t.MildRed="red-168",t.MildPurple="purple-168",t.MildYellow="yellow-168",t.MildOrange="orange-168",t))(ae||{}),W=(t=>(t.Blue="tui-bg-blue-black",t.Green="tui-bg-green-black",t.Cyan="tui-bg-cyan-black",t.Red="tui-bg-red-black",t.Purple="tui-bg-purple-black",t.Yellow="tui-bg-yellow-black",t.Orange="tui-bg-orange-black",t))(W||{}),re=(t=>(t.BlueBlack="tui-bg-blue-black",t.GreenBlack="tui-bg-green-black",t.CyanBlack="tui-bg-cyan-black",t.RedBlack="tui-bg-red-black",t.PurpleBlack="tui-bg-purple-black",t.YellowBlack="tui-bg-yellow-black",t.OrangeBlack="tui-bg-orange-black",t.BlueWhite="tui-bg-blue-white",t.GreenWhite="tui-bg-green-white",t.CyanWhite="tui-bg-cyan-white",t.RedWhite="tui-bg-red-white",t.PurpleWhite="tui-bg-purple-white",t.YellowWhite="tui-bg-yellow-white",t.OrangeWhite="tui-bg-orange-white",t))(re||{}),se=(t=>(t.Absolute="absolute",t.Fixed="fixed",t.Relative="relative",t.Static="static",t))(se||{}),z=(t=>(t.Blue="blue",t.Green="green",t.Cyan="cyan",t.Red="red",t.Purple="purple",t.Yellow="yellow",t.White="white",t.Orange="orange",t))(z||{});const ne=({color:t,children:i})=>e("div",{className:t,children:i});let _=0;const A=t=>({disabled:i,className:l})=>{const a=[t];return l&&a.push(l),i&&a.push("disabled"),a.join(" ")},de=A("tui-input"),ge=A("tui-checkbox"),ye=A("tui-radio"),ke=A("tui-fieldset"),Me=A("tui-input"),Oe=()=>(_+=1,_);const Ge=l=>{var a=l,{tabs:t}=a,i=T(a,["tabs"]);const[s,n]=c.exports.useState(0),[d,u]=c.exports.useState();c.exports.useEffect(()=>{u(Oe())},[]);const w=c.exports.useCallback(p=>`tab-${d}-control-${p}`,[d]),x=c.exports.useCallback(p=>`tab-${d}-panel-${p}`,[d]),h=c.exports.useCallback(p=>p===s,[s]),g=c.exports.useCallback(p=>{const m=["tui-tab"];return h(p)&&m.push("active"),m.join(" ")},[h]),G=c.exports.useCallback(p=>{var m;(m=document.getElementById(`tab-${d}-control-${p}`))==null||m.focus()},[d]),N=c.exports.useCallback(p=>{let m=s;if(p.code==="ArrowRight"){const R=s+1;m=R===t.length?0:R}else if(p.code==="ArrowLeft"){const R=s-1;m=R<0?t.length-1:R}n(m),G(m)},[s,n,G]);return r("div",b(o({},i),{children:[e("div",{className:"tui-tabs",children:e("ul",{role:"tablist",onKeyDown:N,children:t.map(({tabTitle:p},m)=>e("li",{children:e("button",{role:"tab",className:g(m),id:w(m),"aria-controls":x(m),onClick:()=>{n(m)},"aria-selected":h(m),tabIndex:h(m)?0:-1,children:p})},`tab-head-${m}`))})}),t.map(({tab:p},m)=>e("div",{role:"tabpanel",id:x(m),className:"tui-tab-content tui-content",style:{display:h(m)?"block":"none"},"aria-labelledby":w(m),tabIndex:0,hidden:!h(m),children:p},`tab-pane-${m}`))]}))},Se=()=>r("div",{className:"tui-screen-800-600 bordered white-168",children:[e("div",{className:"tui-panel cyan-168 full-width black-255-text tui-no-shadow center",children:"BIOS"}),e(Ge,{tabs:[{tabTitle:"Main",tab:e("table",{className:"tui-table-grid",children:r("tbody",{children:[r("tr",{children:[r("td",{rowSpan:2,width:"60%",className:"blue-168-text",children:[e("br",{}),"System Time.........:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[09:21:30]"}),e("br",{}),"System Date.........:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[15/09/1994]"}),e("br",{}),e("br",{}),"Legacy Diskette A...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[1.44/1.25 MB]"}),e("br",{}),"Legacy Diskette B...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[disabled]"}),e("br",{}),e("br",{}),"Primary Master......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),"Primary Slave.......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),"Secondary Master....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[CD-ROM]"}),e("br",{}),"Secondary Slave.....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),e("br",{}),"Keyboard Features...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[Enter]"}),e("br",{}),e("br",{}),"System Memory.......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[640 KB]"}),e("br",{}),"Extended Memory.....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[3568410 KB]"}),e("br",{}),"Boot-time Diagnostic:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[Enabled]"})]}),e("td",{width:"40%",className:"center",children:"Item Specified Help"})]}),e("tr",{children:r("td",{width:"25",height:"448px",children:[e("br",{}),"<Tab>, <Shift-Tab> or <Enter> selects field."]})})]})})},{tabTitle:"Exit",tab:e("div",{children:"child"})}]}),e("div",{className:"tui-statusbar absolute cyan-168",children:r("ul",{children:[e("li",{children:r("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F1"})," Help"]})}),e("li",{children:r("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"\u2191\u2193"})," Select Item"]})}),e("li",{children:r("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"-/+"})," Change Values"]})}),e("li",{children:r("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F9"})," Setup Defaults"]})}),e("br",{}),e("li",{children:r("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"Esc"})," Exit"]})}),e("li",{children:r("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"\u2190\u2192"})," Select Menu"]})}),e("li",{children:r("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"Enter"})," Select Sub-Menu"]})}),e("li",{children:r("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F10"})," Save and Exit"]})})]})})]});const D=u=>{var w=u,{textColor:t,fullWidth:i,light:l,color:a,className:s,disabled:n}=w,d=T(w,["textColor","fullWidth","light","color","className","disabled"]);const x=c.exports.useMemo(()=>{var g;const h=(g=s==null?void 0:s.split(" "))!=null?g:[];return h.push("tui-button"),n&&h.push("disabled"),a&&h.push(a),t&&h.push(`${t}-text`),l&&h.push("light"),i&&h.push("fill"),h.join(" ")},[n,a,t,l,i]);return r("button",b(o({},d),{disabled:n,className:x,children:[d.children,e("div",{className:"tui-button-inner"})]}))};const K=s=>{var n=s,{color:t,textColor:i,code:l}=n,a=T(n,["color","textColor","code"]);const d=c.exports.useMemo(()=>{var w,x;const u=(x=(w=a.className)==null?void 0:w.split(" "))!=null?x:[];return u.push("tui-code"),u.push(t!=null?t:k.White),u.push(`${i!=null?i:k.Black}-text`),u.join(" ")},[t,i]);return e("pre",b(o({className:d},a),{children:e("code",{role:"figure",children:l})}))},Ie=t=>K(b(o({},t),{color:k.Black,textColor:k.Cyan})),De=t=>K(b(o({},t),{color:k.White,textColor:k.Black}));var y={Custom:K,Dark:Ie,Light:De};const L=a=>{var s=a,{disabled:t,className:i}=s,l=T(s,["disabled","className"]);const n=c.exports.useMemo(()=>ke({disabled:t,className:i}),[t,i]);return e("fieldset",b(o({disabled:t,className:n},l),{children:l.children}))},$=l=>{var a=l,{children:t}=a,i=T(a,["children"]);return e("legend",b(o({},i),{children:t}))},Be=()=>r("div",{style:{padding:"25px 0"},children:[e("h2",{children:"Buttons"}),e("div",{className:"tui-window center blue-168",style:{width:"200px"},children:r(L,{children:[e($,{children:"Buttons"}),e(D,{children:"Button"}),e(D,{color:O.Yellow,textColor:O.Black,light:!0,children:"Button"}),e(D,{fullWidth:!0,color:k.Orange,textColor:O.White,children:"Custom"}),e(D,{fullWidth:!0,disabled:!0,color:k.Red,children:"Disabled"}),e(D,{fullWidth:!0,children:"Focused"})]})}),e("h3",{children:"Code"}),e(y.Dark,{code:`<TuiButton>Button</TuiButton>
<TuiButton color={ Color.Yellow} textColor={ Color.Black } light>Button</TuiButton>
<TuiButton fullWidth color={ MildColor.Orange } textColor={ Color.White }>Custom</TuiButton>
<TuiButton fullWidth disabled={ true } color={ MildColor.Red }>Disabled</TuiButton>
<TuiButton fullWidth>Focused</TuiButton>`})]}),J=Object.values(ae),P=t=>`${t}%`,ce=t=>`tui-chart-value ${J[t%J.length]}`,ue=t=>t?"tui-chart-display":"tui-chart-display no-x-axis no-y-axis",Le=w=>{var x=w,{size:t,values:i,labels:l,valueScaler:a,valueFormatter:s,minValue:n,maxValue:d}=x,u=T(x,["size","values","labels","valueScaler","valueFormatter","minValue","maxValue"]);const h=c.exports.useMemo(()=>ue(!!l),[l]),g=c.exports.useCallback(N=>(a!=null?a:P)(N),[a]),G=c.exports.useCallback(N=>(s!=null?s:P)(N),[s]);return r("div",b(o({className:"tui-chart-vertical",style:t},u),{children:[e("div",{className:h,children:i.map(({label:N,value:p},m)=>e("div",{role:"meter",tabIndex:0,"aria-valuenow":p,"aria-valuemin":n!=null?n:0,"aria-valuemax":d!=null?d:100,"aria-valuetext":G(p),"aria-label":N,className:ce(m),style:{height:g(p)},children:G(p)},`value-shape-${m}`))}),l&&e("div",{className:"tui-chart-y-axis",children:l==null?void 0:l.map((N,p)=>e("div",{className:"tui-chart-legend",children:N},`label-${p}`))}),l&&e("div",{className:"tui-chart-x-axis",children:i.map(({label:N},p)=>e("div",{className:"tui-chart-legend",children:N},`value-name-${p}`))})]}))};function $e(w){var x=w,{size:t,values:i,labels:l,valueScaler:a,valueFormatter:s,minValue:n,maxValue:d}=x,u=T(x,["size","values","labels","valueScaler","valueFormatter","minValue","maxValue"]);const h=c.exports.useMemo(()=>ue(!!l),[l]),g=c.exports.useCallback(N=>(a!=null?a:P)(N),[a]),G=c.exports.useCallback(N=>(s!=null?s:P)(N),[s]);return r("div",b(o({className:"tui-chart-horizontal",style:t},u),{children:[e("div",{className:h,children:i.map(({value:N,label:p},m)=>e("div",{role:"meter",tabIndex:0,"aria-valuenow":N,"aria-valuemin":n!=null?n:0,"aria-valuemax":d!=null?d:100,"aria-valuetext":G(N),"aria-label":p,className:ce(m),style:{width:g(N)},children:G(N)},`value-shape-${m}`))}),l&&e("div",{className:"tui-chart-y-axis",children:i.map(({label:N},p)=>e("div",{className:"tui-chart-legend",children:N},`value-name-${p}`))}),l&&e("div",{className:"tui-chart-x-axis",children:l.map((N,p)=>e("div",{className:"tui-chart-legend",children:N},`label-${p}`))})]}))}var j={Vertical:Le,Horizontal:$e};const Re=()=>r("div",{className:"center",children:[e("h2",{children:"Charts"}),e("div",{style:{marginTop:"50px"}}),r("div",{className:"tui-window black-168 left-align",children:[r("fieldset",{className:"tui-fieldset",role:"","aria-roledescription":"",children:[e("legend",{className:"",children:"Vertical Chart"}),e(j.Vertical,{size:{width:"500px",height:"300px"},values:[{value:80,label:"s1"},{value:30,label:"s2"},{value:50,label:"s3"},{value:90,label:"s4"},{value:60,label:"s5"},{value:100,label:"s6"},{value:10,label:"s7"},{value:75,label:"s8"}],labels:["100%","80%","60%","40%","20%"]})]}),e(y.Dark,{code:`<TuiChart.Vertical
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
/>`})]}),e("br",{}),e("br",{}),r("div",{className:"tui-window black-168 left-align",children:[r("fieldset",{className:"tui-fieldset",children:[e("legend",{className:"",children:"Horizontal Chart"}),e(j.Horizontal,{size:{width:"500px",height:"200px"},values:[{value:80,label:"2018"},{value:60,label:"2019"},{value:100,label:"2020"}],labels:["25%","50%","75%","100%"]})]}),e(y.Dark,{code:`<TuiChart.Horizontal
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
/>`})]}),e("br",{}),e("br",{}),r("div",{className:"tui-window black-168 left-align",children:[r("fieldset",{className:"tui-fieldset",children:[e("legend",{className:"",children:"Chart (no axis legend, formatter & scaler)"}),e(j.Horizontal,{size:{width:"500px",height:"300px"},values:[{value:80,label:"s1"},{value:30,label:"s2"},{value:50,label:"s3"},{value:90,label:"s4"},{value:60,label:"s5"},{value:100,label:"s6"},{value:10,label:"s7"},{value:75,label:"s8"}],valueFormatter:t=>`$${t}`,valueScaler:t=>`${t/2}%`})]}),e(y.Dark,{code:`<TuiChart.Horizontal
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
/>`})]}),e("br",{}),e("br",{})]}),Fe=()=>r(B,{children:[e("h2",{className:"center",children:"Code"}),e("h3",{children:"Dark"}),e(y.Dark,{code:`<TuiCode.Dark code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`}),e("h3",{children:"Light"}),e(y.Light,{code:`<TuiCode.Light code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`}),e("h3",{children:"Custom"}),e(y.Custom,{color:O.White,textColor:k.Blue,code:`<TuiCode.Custom color={ Color.White } textColor={MildColor.Blue} code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`})]}),he=x=>{var h=x,{barColor:t,backColor:i,progress:l,barWidth:a,"aria-valuenow":s,"aria-valuemin":n,"aria-valuemax":d,"aria-valuetext":u}=h,w=T(h,["barColor","backColor","progress","barWidth","aria-valuenow","aria-valuemin","aria-valuemax","aria-valuetext"]);return r(B,{children:["[",e("div",b(o({className:`tui-progress-bar inline-block ${i}`,style:{width:a},"aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":`${l}%`,role:"progressbar"},w),{children:e("span",{className:`tui-progress ${t}`,style:{width:`${l}%`}})})),"]"]})},We=["Blue","Green","Cyan","Red","Purple","Yellow","Orange"],oe={};for(const t of We)oe[t]=i=>he(o({barColor:O[t],backColor:W[t]},i));var M=o({Custom:he},oe);const Ae=()=>r("div",{className:"tui-screen-800-600 bordered black-255",children:[e("div",{className:"red-168 full-width white-text",style:{padding:"0px 10px"},children:"FORECAST 1.0"}),e("br",{}),r("table",{className:"tui-table full-width no-border",children:[e("thead",{className:"white-255-text tui-border-double orange-168-border",style:{marginBottom:"5px"},children:r("tr",{className:"left-align",children:[e("th",{children:"#"}),e("th",{children:"LOCATION"}),e("th",{children:"TEMPERATURE"}),e("th",{children:"STATUS"})]})}),r("tbody",{className:"tui-border-double orange-168-border",children:[r("tr",{children:[e("td",{className:"red-168-text",children:"1"}),e("td",{children:"Lisbon"}),r("td",{children:[e("span",{className:"green-168-text",children:"\xA08.0"}),e(M.Red,{barWidth:"350px",progress:58})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),r("tr",{children:[e("td",{className:"red-168-text",children:"2"}),e("td",{children:"Vancouver"}),r("td",{children:[e("span",{className:"green-168-text",children:"\xA09.0"}),e(M.Green,{barWidth:"350px",progress:60})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),r("tr",{children:[e("td",{className:"red-168-text",children:"3"}),e("td",{children:"Rio"}),r("td",{children:[e("span",{className:"green-168-text",children:"31.0"}),e(M.Blue,{barWidth:"350px",progress:81})]}),e("td",{className:"yellow-255-text",children:"WARM"})]}),r("tr",{children:[e("td",{className:"red-168-text",children:"4"}),e("td",{children:"Sydney"}),r("td",{children:[e("span",{className:"green-168-text",children:"22.0"}),e(M.Cyan,{barWidth:"350px",progress:72})]}),e("td",{className:"yellow-255-text",children:"WARM"})]}),r("tr",{children:[e("td",{className:"red-168-text",children:"5"}),e("td",{children:"New York"}),r("td",{children:[e("span",{className:"green-168-text",children:"\xA07.0"}),e(M.Purple,{barWidth:"350px",progress:57})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),r("tr",{children:[e("td",{className:"red-168-text",children:"6"}),e("td",{children:"London"}),r("td",{children:[e("span",{className:"green-168-text",children:"\xA06.0"}),e(M.Yellow,{barWidth:"350px",progress:56})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),r("tr",{children:[e("td",{className:"red-168-text",children:"7"}),e("td",{children:"Paris"}),r("td",{children:[e("span",{className:"green-168-text",children:"\xA04.0"}),e(M.Orange,{barWidth:"350px",progress:54})]}),e("td",{className:"cyan-255-text",children:"VERY COLD"})]}),r("tr",{children:[e("td",{className:"red-168-text",children:"8"}),e("td",{children:"Casablanca"}),r("td",{children:[e("span",{className:"green-168-text",children:"17.0"}),e(M.Custom,{barWidth:"350px",progress:67,backColor:W.Red,barColor:O.Green})]}),e("td",{className:"green-168-text",children:"NORMAL"})]}),r("tr",{children:[e("td",{className:"red-168-text",children:"9"}),e("td",{children:"Reykjavik"}),r("td",{children:[e("span",{className:"green-168-text",children:"-1.0"}),e(M.Custom,{barWidth:"350px",progress:10,backColor:W.Green,barColor:O.Purple})]}),e("td",{className:"cyan-255-text",children:"VERY COLD"})]})]})]}),r("div",{className:"purple-168 full-width white-text",style:{padding:"0px 10px",marginTop:"2px"},children:[e("span",{className:"red-168",children:"HIGH"}),": Rio 31.0",e("br",{}),e("span",{className:"cyan-168",children:"LESS"}),": Reykjavik -1.0"]}),e("br",{}),e("div",{className:"tui-window full-width no-shadow black",children:r("fieldset",{className:"tui-fieldset center",children:[e("button",{className:"tui-button left",children:"Previous"}),e("span",{className:"center",children:"9/201 records"}),e("button",{className:"tui-button right",children:"Next"})]})}),e("div",{className:"red-168 full-width white-text",style:{padding:"0px 10px"},children:"FORECAST 1.0"})]}),Ee=s=>{var n=s,{disabled:t,className:i,children:l}=n,a=T(n,["disabled","className","children"]);return e("select",b(o({},a),{disabled:t,className:Me({disabled:t,className:i}),children:l}))},C=l=>{var a=l,{children:t}=a,i=T(a,["children"]);return e("option",b(o({},i),{children:t}))},X=l=>{var a=l,{children:t}=a,i=T(a,["children"]);return e("optgroup",b(o({},i),{children:t}))},pe=s=>{var n=s,{disabled:t,className:i,type:l}=n,a=T(n,["disabled","className","type"]);const d=c.exports.useMemo(()=>de({disabled:t,className:i}),[t,i]);return e("input",o({type:l!=null?l:"text",disabled:t,className:d},a))},me=d=>{var u=d,{disabled:t,className:i,label:l,type:a,data:s}=u,n=T(u,["disabled","className","label","type","data"]);const w=c.exports.useMemo(()=>a==="checkbox"?ge({disabled:t,className:i}):ye({disabled:t,className:i}),[t,i]);return r("label",b(o({},s),{className:w,children:[l,e(pe,b(o({disabled:t},n),{type:a})),e("span",{className:t?"disabled":""})]}))};const He=t=>e(me,o({type:"checkbox",role:"checkbox"},t));const Pe=d=>{var u=d,{heading:t,description:i,options:l,onChange:a,values:s}=u,n=T(u,["heading","description","options","onChange","values"]);const w=x=>{if(s===void 0||a===void 0)return;const h=s.indexOf(x);if(h>=0){const g=[...s];g.splice(h,1),a(g)}else a([...s,x])};return r(L,b(o({},n),{children:[e($,{children:t}),i&&e("div",{className:"tui-checkbox-description",children:i}),l.map((x,h)=>e(He,{label:x.label,value:x.value,onChange:()=>w(x.value),checked:s==null?void 0:s.includes(x.value),disabled:x.disabled},h))]}))};const je=t=>e(me,o({type:"radio"},t));const Ye=t=>{const i=({target:l})=>{t.onChange!==void 0&&t.onChange(l.value)};return r(L,{children:[e($,{children:t.heading}),t.description&&e("div",{className:"tui-radio-description",children:t.description}),t.options.map((l,a)=>e(je,{label:l.label,value:l.value,onChange:i,checked:t.value===l.value,disabled:l.disabled},a))]})},ze=s=>{var n=s,{disabled:t,className:i,children:l}=n,a=T(n,["disabled","className","children"]);const d=c.exports.useMemo(()=>de({disabled:t,className:i}),[t,i]);return e("textarea",o({disabled:t,className:d},a))};const S=t=>{var i;return r("label",{htmlFor:t.id,className:(i=t.block)==null||i?"tui-block-label":"",children:[t.label,e(pe,o({},t))]})},Z=t=>{var i;return r("label",{htmlFor:t.id,className:(i=t.block)==null||i?"tui-block-label":"",children:[t.label,e(Ee,o({},t))]})},ee=t=>{var i;return r("label",{htmlFor:t.id,className:(i=t.block)==null||i?"tui-block-label":"",children:[t.label,e(ze,o({},t))]})};const Ve=s=>{var n=s,{heading:t,description:i,children:l}=n,a=T(n,["heading","description","children"]);return t?e("form",b(o({},a),{children:r(L,{children:[e($,{children:t}),i&&e("div",{className:"tui-inputset-description",children:i}),l]})})):e("form",b(o({},a),{children:l}))},Ke=()=>{const[t,i]=c.exports.useState("text"),[l,a]=c.exports.useState(25),[s,n]=c.exports.useState("#00FF00"),[d,u]=c.exports.useState([]),[w,x]=c.exports.useState(0);return r(B,{children:[r("div",{className:"tui-window",style:{textAlign:"left"},children:[e("h2",{children:"Inputs"}),r(Ve,{heading:"Form",children:[e(S,{label:"Text.......: ",value:t,onChange:({target:h})=>i(h.value)}),e(S,{label:"Disabled...: ",value:t,disabled:!0,onChange:({target:h})=>i(h.value)}),e(S,{label:"Number.....: ",type:"number",step:1,value:l,onChange:({target:h})=>a(+h.value)}),e(S,{label:"Password...: ",type:"password",value:t,onChange:({target:h})=>i(h.value)}),e(S,{label:"Color......: ",type:"color",value:s,onChange:({target:h})=>n(h.value)}),r(Z,{label:"Select.....: ",children:[e(C,{children:"First"}),e(C,{children:"Second"}),e(C,{children:"Third"}),r(X,{label:"Group",children:[e(C,{children:"First"}),e(C,{children:"Second"}),e(C,{children:"Third"})]})]}),e(S,{label:"Date.......: ",type:"date",value:"2019-01-01"}),e(S,{label:"Time.......: ",type:"datetime-local",value:"2019-01-01T12:00"}),e(Pe,{heading:"Checkboxes",description:"Add some biz",options:[{value:1,label:"First"},{value:2,label:"Second"},{value:3,label:"Disabled",disabled:!0}],onChange:h=>{u(h)},values:d}),e(Ye,{heading:"Radios",options:[{value:1,label:"First"},{value:2,label:"Second"},{value:3,label:"Disabled",disabled:!0}],onChange:h=>{x(+h)},value:w}),e(ee,{label:"Textarea",value:"asdadasdasd",style:{width:"100%"}}),e(ee,{label:"Disabled Textarea",value:"disabled",disabled:!0,style:{width:"100%"}}),e("br",{}),r(Z,{label:"Multiple",multiple:!0,style:{width:"100%"},children:[e(C,{children:"---"}),e(C,{children:"First"}),e(C,{children:"Second"}),e(C,{children:"Third"}),r(X,{label:"Group",children:[e(C,{children:"First"}),e(C,{children:"Second"}),e(C,{children:"Third"})]})]}),e(S,{label:"File",className:"full-width",type:"file"})]})]}),e(y.Dark,{code:`<TuiForm
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
</TuiForm>`})]})},be=({children:t,close:i,modalTitle:l})=>e("div",{className:"tui-modal-container active","aria-label":l,children:e("div",{className:"tui-modal",role:"alertdialog",children:e("div",{className:"tui-window red-168 left-align",children:r(L,{title:l,role:"presentation",children:[e($,{role:"presentation",children:l}),t,e("div",{className:"tui-divider"}),e(D,{onClick:i,className:"tui-modal-close-button right",color:k.Cyan,textColor:O.Black,children:"Close"})]})})})});const Ue=({children:t,buttonProps:i,parent:l,modalTitle:a})=>{var u;const[s,n]=c.exports.useState(!1);return r(B,{children:[e(D,{onClick:w=>{i!=null&&i.onClick&&i.onClick(w),n(!s)},children:(u=i==null?void 0:i.children)!=null?u:"Open modal"}),s&&le.exports.createPortal(e(be,{modalTitle:a,close:()=>n(!1),children:t}),l!=null?l:document.body)]})},Qe=l=>{var a=l,{isOpen:t}=a,i=T(a,["isOpen"]);return t&&e(be,o({},i))},qe=()=>{const[t,i]=c.exports.useState(!1),l=c.exports.useCallback(()=>{i(!0)},[]),a=c.exports.useCallback(()=>{i(!1)},[]),s=c.exports.useMemo(()=>({children:n,modalTitle:d})=>e(Qe,{close:a,isOpen:t,modalTitle:d,children:n}),[t,a]);return c.exports.useMemo(()=>({isOpen:t,Dialog:s,open:l,close:a}),[t,s,l,a])},_e=({parent:t})=>{const{Dialog:i,open:l}=qe();return r(B,{children:[e("h3",{children:"Modals"}),e(Ue,{modalTitle:"STEVE",parent:t,children:"content"}),e(D,{onClick:l,children:"Hooky"}),e(i,{modalTitle:"asdasdadasd",children:"hooky"})]})},f=({children:t,onClick:i,href:l})=>{const a=c.exports.useMemo(()=>!!i,[i]),s=c.exports.useMemo(()=>!!l,[l]),n=c.exports.useMemo(()=>!a&&!s,[a,s]);return r("li",{children:[a&&e("button",{onClick:i,children:t}),s&&e("a",{href:l,children:t}),n&&e("div",{children:t})]})};const te=s=>{var n=s,{children:t,dropDownLabel:i,block:l}=n,a=T(n,["children","dropDownLabel","block"]);const d=c.exports.useMemo(()=>{const u=["tui-dropdown"];return l&&u.push("block"),u.join(" ")},[l]);return r("li",b(o({},a),{className:d,children:[e("span",{children:i}),e("div",{className:"tui-dropdown-content",children:e("ul",{children:t})})]}))};const Je=({sidenav:t,children:i,position:l})=>e("nav",{className:`tui-nav ${l!=null?l:se.Relative}`,children:r("ul",{children:[t,i]})});const Xe=({children:t,buttonText:i})=>{var n,d;const[l,a]=c.exports.useState(!1),s=c.exports.useRef(null);return r("li",{className:"tui-sidenav-li",children:[r("button",{className:"tui-sidenav-button",onClick:()=>a(!l),ref:s,children:[l?"x":"\u2261",i]}),l&&le.exports.createPortal(e("nav",{className:"tui-sidenav active absolute",children:e("ul",{children:t})}),(d=(n=s.current)==null?void 0:n.parentElement)!=null?d:document.body)]})},Y=n=>{var d=n,{children:t,basic:i,className:l,heading:a}=d,s=T(d,["children","basic","className","heading"]);const u=c.exports.useMemo(()=>l?`tui-window ${l}`:"tui-window",[l]);return i?e("div",b(o({},s),{className:u,children:t})):e("div",b(o({},s),{className:u,children:r(L,{title:a,role:"presentation",children:[a&&e($,{role:"presentation",children:a}),t]})}))};function Ze(t){const[i,l]=c.exports.useState("");return c.exports.useEffect(()=>{const a=setInterval(()=>{l(xe(new Date,t.format))},1e3);return()=>clearInterval(a)},[]),e("span",{className:"tui-datetime",children:i})}const et=()=>r(B,{children:[e("h3",{children:"Navigation"}),r("div",{className:"tui-screen-800-600 bordered tui-bg-blue-black",children:[r(Je,{sidenav:r(Xe,{children:[r(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"O"}),"pen",e("span",{className:"tui-shortcut",children:"ctrl+o"})]}),e(f,{href:"#!",children:"OS Shell"}),r(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"C"}),"opy",e("span",{className:"tui-shortcut",children:"ctrl+c"})]}),r(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"P"}),"aste",e("span",{className:"tui-shortcut",children:"ctrl+v"})]}),r(f,{href:"#!",children:["Cut",e("span",{className:"tui-shortcut",children:"ctrl+x"})]}),e("div",{className:"tui-black-divider"}),e(f,{href:"#!",children:"Insert"}),e(f,{href:"#!",children:"Delete"}),e(f,{href:"#!",children:"Go..."}),e("div",{className:"tui-black-divider"}),r(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"S"}),"earch",e("span",{className:"tui-shortcut",children:"ctrl+p"})]}),e("div",{className:"tui-black-divider"}),r(f,{href:"#!",children:["Exit ",e("span",{className:"tui-shortcut",children:"F10"})]})]}),children:[r(te,{dropDownLabel:r("div",{children:[e("span",{className:"red-168-text",children:"F"}),"ile"]}),children:[r(f,{onClick:()=>{},children:[e("span",{className:"red-168-text",children:"N"}),"ew"]}),r(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"O"}),"pen...",e("span",{className:"tui-shortcut",children:"F3"})]}),r(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"S"}),"ave",e("span",{className:"tui-shortcut",children:"F2"})]}),r(f,{href:"#!",children:["S",e("span",{className:"red-168-text",children:"a"}),"ve as..."]}),r(f,{href:"#!",children:["Save a",e("span",{className:"red-168-text",children:"l"}),"l"]}),e("div",{className:"tui-black-divider"}),r(te,{block:!0,dropDownLabel:r("div",{children:[e("span",{className:"right",children:"\u25BA"}),e("span",{className:"red-168-text",children:"M"}),"ore"]}),children:[r(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"C"}),"hange dir..."]}),r(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"P"}),"rint"]}),r(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"D"}),"OS shell"]})]}),e("div",{className:"tui-black-divider"}),r(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"Q"}),"uit",e("span",{className:"tui-shortcut",children:"F10"})]})]}),e(Ze,{format:"dd MMM yyyy hh:mm:ss "})]}),r(Y,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]}),r(Y,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]}),r(Y,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]})]}),e(y.Dark,{code:`<TuiNavbar
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
</TuiNavbar>`})]}),tt=({children:t})=>e("div",{role:"presentation",className:"container",children:t}),it=({children:t})=>e("div",{role:"presentation",className:"row",children:t}),lt=l=>{var a=l,{children:t}=a,i=T(a,["children"]);const s=c.exports.useMemo(()=>{const n=["col"];for(const d in i)if(Object.prototype.hasOwnProperty.call(i,d)){const u=i[d];u!=null&&u.offset&&n.push(`offset-${d}${u.offset}`),u!=null&&u.width&&n.push(`${d}${u.width}`)}return n.join(" ")},[i]);return e("div",{role:"presentation",className:s,children:t})};var v={Container:tt,Row:it,Col:lt};const at=()=>r(B,{children:[r(v.Container,{children:[r(v.Row,{children:[e(v.Col,{s:{width:12},m:{width:12},l:{width:12},children:"12"}),e(v.Col,{s:{width:6},m:{width:6},l:{width:6},children:"6"}),e(v.Col,{s:{width:6},m:{width:6},l:{width:6},children:"6"}),e(v.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(v.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(v.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(v.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(v.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(v.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(v.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(v.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(v.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(v.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(v.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(v.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(v.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(v.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(v.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(v.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"})]}),r(v.Row,{children:[e(v.Col,{s:{width:12},m:{width:6},l:{width:6},children:"6"}),e(v.Col,{s:{width:12},m:{width:6},l:{width:6},children:"6"})]}),r(v.Row,{children:[e(v.Col,{s:{width:12},m:{offset:3,width:3},l:{offset:3,width:3},children:"3"}),e(v.Col,{s:{width:12},m:{offset:3,width:3},l:{offset:3,width:3},children:"3"})]})]}),e(y.Dark,{code:`<TuiGrid.Container>
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

</TuiGrid.Container>`})]}),rt=n=>{var d=n,{children:t,className:i,hoverColor:l,stripeColor:a}=d,s=T(d,["children","className","hoverColor","stripeColor"]);const u=c.exports.useMemo(()=>{const w=["tui-table"];return i&&w.push(...i.split(" ")),l&&w.push(`hovered-${l}`),a&&w.push(`striped-${a}`),w.join(" ")},[i,l,a]);return e("table",b(o({},s),{className:u,children:t}))},st=l=>{var a=l,{children:t}=a,i=T(a,["children"]);return e("thead",b(o({},i),{children:t}))},nt=l=>{var a=l,{children:t}=a,i=T(a,["children"]);return e("tbody",b(o({},i),{children:t}))},F=l=>{var a=l,{children:t}=a,i=T(a,["children"]);return e("tr",b(o({},i),{children:t}))},ie=l=>{var a=l,{children:t}=a,i=T(a,["children"]);return e("th",b(o({},i),{children:t}))},I=l=>{var a=l,{children:t}=a,i=T(a,["children"]);return e("td",b(o({},i),{children:t}))},dt=()=>r("div",{children:[e("h3",{children:"Table"}),e(ne,{color:W.Blue,children:r(rt,{stripeColor:z.Blue,hoverColor:z.Purple,children:[e(st,{children:r(F,{children:[e(ie,{children:"Name"}),e(ie,{children:"Age"})]})}),r(nt,{children:[r(F,{children:[e(I,{children:"Steve"}),e(I,{children:"40"})]}),r(F,{children:[e(I,{children:"Fred"}),e(I,{children:"55"})]}),r(F,{children:[e(I,{children:"Gregor"}),e(I,{children:"25"})]}),r(F,{children:[e(I,{children:"Harry"}),e(I,{children:"43"})]})]})]})}),e(y.Dark,{code:`<TuiTable
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
</TuiTable>`})]});Ne.render(e(fe.StrictMode,{children:e(ne,{color:re.BlueWhite,children:r(v.Container,{children:[e("h1",{className:"center","aria-label":"React TUI",children:"===========react-tuicss==========="}),e(Be,{}),e(H,{}),e(Fe,{}),e(H,{}),e(Re,{}),e(H,{}),e(Ke,{}),e(H,{}),e("h2",{className:"center",children:"Pages"}),e("h3",{children:"Bios"}),e(Se,{}),e(_e,{}),e("h3",{children:"Forecast"}),e(Ae,{}),e(et,{}),e(at,{}),e(dt,{})]})})}),document.getElementById("root"));
