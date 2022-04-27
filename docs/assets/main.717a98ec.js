var be=Object.defineProperty,Te=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var U=(t,i,r)=>i in t?be(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,h=(t,i)=>{for(var r in i||(i={}))Q.call(i,r)&&U(t,r,i[r]);if(E)for(var r of E(i))q.call(i,r)&&U(t,r,i[r]);return t},b=(t,i)=>Te(t,ve(i));var v=(t,i)=>{var r={};for(var a in t)Q.call(t,a)&&i.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&E)for(var a of E(t))i.indexOf(a)<0&&q.call(t,a)&&(r[a]=t[a]);return r};import{j as V,r as o,a as le,f as we,R as xe,b as Ne}from"./vendor.5d4eece2.js";const fe=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}};fe();const e=V.exports.jsx,l=V.exports.jsxs,L=V.exports.Fragment,H=r=>{var a=r,{withSpace:t}=a,i=v(a,["withSpace"]);return t===!1?e("div",h({className:"tui-divider"},i)):e("hr",h({className:"tui-divider"},i))};var k=(t=>(t.Black="black-168",t.Blue="blue-168",t.Green="green-168",t.Cyan="cyan-168",t.Red="red-168",t.Purple="purple-168",t.Yellow="yellow-168",t.White="white-168",t.Orange="orange-168",t))(k||{}),G=(t=>(t.Black="black-255",t.Blue="blue-255",t.Green="green-255",t.Cyan="cyan-255",t.Red="red-255",t.Purple="purple-255",t.Yellow="yellow-255",t.White="white-255",t.Orange="orange-255",t))(G||{}),ae=(t=>(t.MildBlue="blue-168",t.MildGreen="green-168",t.MildCyan="cyan-168",t.MildRed="red-168",t.MildPurple="purple-168",t.MildYellow="yellow-168",t.MildOrange="orange-168",t))(ae||{}),W=(t=>(t.Blue="tui-bg-blue-black",t.Green="tui-bg-green-black",t.Cyan="tui-bg-cyan-black",t.Red="tui-bg-red-black",t.Purple="tui-bg-purple-black",t.Yellow="tui-bg-yellow-black",t.Orange="tui-bg-orange-black",t))(W||{}),re=(t=>(t.BlueBlack="tui-bg-blue-black",t.GreenBlack="tui-bg-green-black",t.CyanBlack="tui-bg-cyan-black",t.RedBlack="tui-bg-red-black",t.PurpleBlack="tui-bg-purple-black",t.YellowBlack="tui-bg-yellow-black",t.OrangeBlack="tui-bg-orange-black",t.BlueWhite="tui-bg-blue-white",t.GreenWhite="tui-bg-green-white",t.CyanWhite="tui-bg-cyan-white",t.RedWhite="tui-bg-red-white",t.PurpleWhite="tui-bg-purple-white",t.YellowWhite="tui-bg-yellow-white",t.OrangeWhite="tui-bg-orange-white",t))(re||{}),ne=(t=>(t.Absolute="absolute",t.Fixed="fixed",t.Relative="relative",t.Static="static",t))(ne||{}),z=(t=>(t.Blue="blue",t.Green="green",t.Cyan="cyan",t.Red="red",t.Purple="purple",t.Yellow="yellow",t.White="white",t.Orange="orange",t))(z||{});const se=({color:t,children:i})=>e("div",{className:t,children:i});let _=0;const A=t=>({disabled:i,className:r})=>{const a=[t];return r&&a.push(r),i&&a.push("disabled"),a.join(" ")},de=A("tui-input"),Ce=A("tui-checkbox"),ge=A("tui-radio"),ye=A("tui-fieldset"),ke=A("tui-input"),Me=()=>(_+=1,_);const Ge=r=>{var a=r,{tabs:t}=a,i=v(a,["tabs"]);const[n,s]=o.exports.useState(0),[d,c]=o.exports.useState();o.exports.useEffect(()=>{c(Me())},[]);const w=o.exports.useCallback(m=>`tab-${d}-control-${m}`,[d]),x=o.exports.useCallback(m=>`tab-${d}-panel-${m}`,[d]),u=o.exports.useCallback(m=>m===n,[n]),g=o.exports.useCallback(m=>{const p=["tui-tab"];return u(m)&&p.push("active"),p.join(" ")},[u]),O=o.exports.useCallback(m=>{var p;(p=document.getElementById(`tab-${d}-control-${m}`))==null||p.focus()},[d]),N=o.exports.useCallback(m=>{let p=n;if(m.code==="ArrowRight"){const R=n+1;p=R===t.length?0:R}else if(m.code==="ArrowLeft"){const R=n-1;p=R<0?t.length-1:R}s(p),O(p)},[n,s,O]);return l("div",b(h({},i),{children:[e("div",{className:"tui-tabs",children:e("ul",{role:"tablist",onKeyDown:N,children:t.map(({tabTitle:m},p)=>e("li",{children:e("button",{role:"tab",className:g(p),id:w(p),"aria-controls":x(p),onClick:()=>{s(p)},"aria-selected":u(p),tabIndex:u(p)?0:-1,children:m})},`tab-head-${p}`))})}),t.map(({tab:m},p)=>e("div",{role:"tabpanel",id:x(p),className:"tui-tab-content tui-content",style:{display:u(p)?"block":"none"},"aria-labelledby":w(p),tabIndex:0,hidden:!u(p),children:m},`tab-pane-${p}`))]}))},Oe=()=>l("div",{className:"tui-screen-800-600 bordered white-168",children:[e("div",{className:"tui-panel cyan-168 full-width black-255-text tui-no-shadow center",children:"BIOS"}),e(Ge,{tabs:[{tabTitle:"Main",tab:e("table",{className:"tui-table-grid",children:l("tbody",{children:[l("tr",{children:[l("td",{rowSpan:2,width:"60%",className:"blue-168-text",children:[e("br",{}),"System Time.........:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[09:21:30]"}),e("br",{}),"System Date.........:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[15/09/1994]"}),e("br",{}),e("br",{}),"Legacy Diskette A...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[1.44/1.25 MB]"}),e("br",{}),"Legacy Diskette B...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[disabled]"}),e("br",{}),e("br",{}),"Primary Master......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),"Primary Slave.......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),"Secondary Master....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[CD-ROM]"}),e("br",{}),"Secondary Slave.....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[None]"}),e("br",{}),e("br",{}),"Keyboard Features...:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[Enter]"}),e("br",{}),e("br",{}),"System Memory.......:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[640 KB]"}),e("br",{}),"Extended Memory.....:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[3568410 KB]"}),e("br",{}),"Boot-time Diagnostic:",e("input",{type:"text",className:"tui-input white-168 black-text input-width",value:"[Enabled]"})]}),e("td",{width:"40%",className:"center",children:"Item Specified Help"})]}),e("tr",{children:l("td",{width:"25",height:"448px",children:[e("br",{}),"<Tab>, <Shift-Tab> or <Enter> selects field."]})})]})})},{tabTitle:"Exit",tab:e("div",{children:"child"})}]}),e("div",{className:"tui-statusbar absolute cyan-168",children:l("ul",{children:[e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F1"})," Help"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"\u2191\u2193"})," Select Item"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"-/+"})," Change Values"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F9"})," Setup Defaults"]})}),e("br",{}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"Esc"})," Exit"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"\u2190\u2192"})," Select Menu"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"Enter"})," Select Sub-Menu"]})}),e("li",{children:l("a",{href:"#!",children:[e("span",{className:"white-255-text",children:"F10"})," Save and Exit"]})})]})})]});const D=c=>{var w=c,{textColor:t,fullWidth:i,light:r,color:a,className:n,disabled:s}=w,d=v(w,["textColor","fullWidth","light","color","className","disabled"]);const x=o.exports.useMemo(()=>{var g;const u=(g=n==null?void 0:n.split(" "))!=null?g:[];return u.push("tui-button"),s&&u.push("disabled"),a&&u.push(a),t&&u.push(`${t}-text`),r&&u.push("light"),i&&u.push("fill"),u.join(" ")},[s,a,t,r,i]);return l("button",b(h({},d),{disabled:s,className:x,children:[d.children,e("div",{className:"tui-button-inner"})]}))};const K=n=>{var s=n,{color:t,textColor:i,code:r}=s,a=v(s,["color","textColor","code"]);const d=o.exports.useMemo(()=>{var w,x;const c=(x=(w=a.className)==null?void 0:w.split(" "))!=null?x:[];return c.push("tui-code"),c.push(t!=null?t:k.White),c.push(`${i!=null?i:k.Black}-text`),c.join(" ")},[t,i]);return e("pre",b(h({className:d},a),{children:e("code",{role:"figure",children:r})}))},Se=t=>K(b(h({},t),{color:k.Black,textColor:k.Cyan})),Ie=t=>K(b(h({},t),{color:k.White,textColor:k.Black}));var y={Custom:K,Dark:Se,Light:Ie};const $=a=>{var n=a,{disabled:t,className:i}=n,r=v(n,["disabled","className"]);const s=o.exports.useMemo(()=>ye({disabled:t,className:i}),[t,i]);return e("fieldset",b(h({disabled:t,className:s},r),{children:r.children}))},B=r=>{var a=r,{children:t}=a,i=v(a,["children"]);return e("legend",b(h({},i),{children:t}))},De=()=>l("div",{style:{padding:"25px 0"},children:[e("h2",{children:"Buttons"}),e("div",{className:"tui-window center blue-168",style:{width:"200px"},children:l($,{children:[e(B,{children:"Buttons"}),e(D,{children:"Button"}),e(D,{color:G.Yellow,textColor:G.Black,light:!0,children:"Button"}),e(D,{fullWidth:!0,color:k.Orange,textColor:G.White,children:"Custom"}),e(D,{fullWidth:!0,disabled:!0,color:k.Red,children:"Disabled"}),e(D,{fullWidth:!0,children:"Focused"})]})}),e("h3",{children:"Code"}),e(y.Dark,{code:`<TuiButton>Button</TuiButton>
<TuiButton color={ Color.Yellow} textColor={ Color.Black } light>Button</TuiButton>
<TuiButton fullWidth color={ MildColor.Orange } textColor={ Color.White }>Custom</TuiButton>
<TuiButton fullWidth disabled={ true } color={ MildColor.Red }>Disabled</TuiButton>
<TuiButton fullWidth>Focused</TuiButton>`})]}),J=Object.values(ae),P=t=>`${t}%`,ce=t=>`tui-chart-value ${J[t%J.length]}`,ue=t=>t?"tui-chart-display":"tui-chart-display no-x-axis no-y-axis",Le=w=>{var x=w,{size:t,values:i,labels:r,valueScaler:a,valueFormatter:n,minValue:s,maxValue:d}=x,c=v(x,["size","values","labels","valueScaler","valueFormatter","minValue","maxValue"]);const u=o.exports.useMemo(()=>ue(!!r),[r]),g=o.exports.useCallback(N=>(a!=null?a:P)(N),[a]),O=o.exports.useCallback(N=>(n!=null?n:P)(N),[n]);return l("div",b(h({className:"tui-chart-vertical",style:t},c),{children:[e("div",{className:u,children:i.map(({label:N,value:m},p)=>e("div",{role:"meter",tabIndex:0,"aria-valuenow":m,"aria-valuemin":s!=null?s:0,"aria-valuemax":d!=null?d:100,"aria-valuetext":O(m),"aria-label":N,className:ce(p),style:{height:g(m)},children:O(m)},`value-shape-${p}`))}),r&&e("div",{className:"tui-chart-y-axis",children:r==null?void 0:r.map((N,m)=>e("div",{className:"tui-chart-legend",children:N},`label-${m}`))}),r&&e("div",{className:"tui-chart-x-axis",children:i.map(({label:N},m)=>e("div",{className:"tui-chart-legend",children:N},`value-name-${m}`))})]}))};function $e(w){var x=w,{size:t,values:i,labels:r,valueScaler:a,valueFormatter:n,minValue:s,maxValue:d}=x,c=v(x,["size","values","labels","valueScaler","valueFormatter","minValue","maxValue"]);const u=o.exports.useMemo(()=>ue(!!r),[r]),g=o.exports.useCallback(N=>(a!=null?a:P)(N),[a]),O=o.exports.useCallback(N=>(n!=null?n:P)(N),[n]);return l("div",b(h({className:"tui-chart-horizontal",style:t},c),{children:[e("div",{className:u,children:i.map(({value:N,label:m},p)=>e("div",{role:"meter",tabIndex:0,"aria-valuenow":N,"aria-valuemin":s!=null?s:0,"aria-valuemax":d!=null?d:100,"aria-valuetext":O(N),"aria-label":m,className:ce(p),style:{width:g(N)},children:O(N)},`value-shape-${p}`))}),r&&e("div",{className:"tui-chart-y-axis",children:i.map(({label:N},m)=>e("div",{className:"tui-chart-legend",children:N},`value-name-${m}`))}),r&&e("div",{className:"tui-chart-x-axis",children:r.map((N,m)=>e("div",{className:"tui-chart-legend",children:N},`label-${m}`))})]}))}var j={Vertical:Le,Horizontal:$e};const Be=()=>l("div",{className:"center",children:[e("h2",{children:"Charts"}),e("div",{style:{marginTop:"50px"}}),l("div",{className:"tui-window black-168 left-align",children:[l("fieldset",{className:"tui-fieldset",role:"","aria-roledescription":"",children:[e("legend",{className:"",children:"Vertical Chart"}),e(j.Vertical,{size:{width:"500px",height:"300px"},values:[{value:80,label:"s1"},{value:30,label:"s2"},{value:50,label:"s3"},{value:90,label:"s4"},{value:60,label:"s5"},{value:100,label:"s6"},{value:10,label:"s7"},{value:75,label:"s8"}],labels:["100%","80%","60%","40%","20%"]})]}),e(y.Dark,{code:`<TuiChart.Vertical
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
/>`})]}),e("br",{}),e("br",{}),l("div",{className:"tui-window black-168 left-align",children:[l("fieldset",{className:"tui-fieldset",children:[e("legend",{className:"",children:"Horizontal Chart"}),e(j.Horizontal,{size:{width:"500px",height:"200px"},values:[{value:80,label:"2018"},{value:60,label:"2019"},{value:100,label:"2020"}],labels:["25%","50%","75%","100%"]})]}),e(y.Dark,{code:`<TuiChart.Horizontal
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
/>`})]}),e("br",{}),e("br",{}),l("div",{className:"tui-window black-168 left-align",children:[l("fieldset",{className:"tui-fieldset",children:[e("legend",{className:"",children:"Chart (no axis legend, formatter & scaler)"}),e(j.Horizontal,{size:{width:"500px",height:"300px"},values:[{value:80,label:"s1"},{value:30,label:"s2"},{value:50,label:"s3"},{value:90,label:"s4"},{value:60,label:"s5"},{value:100,label:"s6"},{value:10,label:"s7"},{value:75,label:"s8"}],valueFormatter:t=>`$${t}`,valueScaler:t=>`${t/2}%`})]}),e(y.Dark,{code:`<TuiChart.Horizontal
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
/>`})]}),e("br",{}),e("br",{})]}),Re=()=>l(L,{children:[e("h2",{className:"center",children:"Code"}),e("h3",{children:"Dark"}),e(y.Dark,{code:`<TuiCode.Dark code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`}),e("h3",{children:"Light"}),e(y.Light,{code:`<TuiCode.Light code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`}),e("h3",{children:"Custom"}),e(y.Custom,{color:G.White,textColor:k.Blue,code:`<TuiCode.Custom color={ Color.White } textColor={MildColor.Blue} code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`})]}),he=x=>{var u=x,{barColor:t,backColor:i,progress:r,barWidth:a,"aria-valuenow":n,"aria-valuemin":s,"aria-valuemax":d,"aria-valuetext":c}=u,w=v(u,["barColor","backColor","progress","barWidth","aria-valuenow","aria-valuemin","aria-valuemax","aria-valuetext"]);return l(L,{children:["[",e("div",b(h({className:`tui-progress-bar inline-block ${i}`,style:{width:a},"aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":`${r}%`,role:"progressbar"},w),{children:e("span",{className:`tui-progress ${t}`,style:{width:`${r}%`}})})),"]"]})},Fe=["Blue","Green","Cyan","Red","Purple","Yellow","Orange"],oe={};for(const t of Fe)oe[t]=i=>he(h({barColor:G[t],backColor:W[t]},i));var M=h({Custom:he},oe);const We=()=>l("div",{className:"tui-screen-800-600 bordered black-255",children:[e("div",{className:"red-168 full-width white-text",style:{padding:"0px 10px"},children:"FORECAST 1.0"}),e("br",{}),l("table",{className:"tui-table full-width no-border",children:[e("thead",{className:"white-255-text tui-border-double orange-168-border",style:{marginBottom:"5px"},children:l("tr",{className:"left-align",children:[e("th",{children:"#"}),e("th",{children:"LOCATION"}),e("th",{children:"TEMPERATURE"}),e("th",{children:"STATUS"})]})}),l("tbody",{className:"tui-border-double orange-168-border",children:[l("tr",{children:[e("td",{className:"red-168-text",children:"1"}),e("td",{children:"Lisbon"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA08.0"}),e(M.Red,{barWidth:"350px",progress:58})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"2"}),e("td",{children:"Vancouver"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA09.0"}),e(M.Green,{barWidth:"350px",progress:60})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"3"}),e("td",{children:"Rio"}),l("td",{children:[e("span",{className:"green-168-text",children:"31.0"}),e(M.Blue,{barWidth:"350px",progress:81})]}),e("td",{className:"yellow-255-text",children:"WARM"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"4"}),e("td",{children:"Sydney"}),l("td",{children:[e("span",{className:"green-168-text",children:"22.0"}),e(M.Cyan,{barWidth:"350px",progress:72})]}),e("td",{className:"yellow-255-text",children:"WARM"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"5"}),e("td",{children:"New York"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA07.0"}),e(M.Purple,{barWidth:"350px",progress:57})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"6"}),e("td",{children:"London"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA06.0"}),e(M.Yellow,{barWidth:"350px",progress:56})]}),e("td",{className:"blue-255-text",children:"COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"7"}),e("td",{children:"Paris"}),l("td",{children:[e("span",{className:"green-168-text",children:"\xA04.0"}),e(M.Orange,{barWidth:"350px",progress:54})]}),e("td",{className:"cyan-255-text",children:"VERY COLD"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"8"}),e("td",{children:"Casablanca"}),l("td",{children:[e("span",{className:"green-168-text",children:"17.0"}),e(M.Custom,{barWidth:"350px",progress:67,backColor:W.Red,barColor:G.Green})]}),e("td",{className:"green-168-text",children:"NORMAL"})]}),l("tr",{children:[e("td",{className:"red-168-text",children:"9"}),e("td",{children:"Reykjavik"}),l("td",{children:[e("span",{className:"green-168-text",children:"-1.0"}),e(M.Custom,{barWidth:"350px",progress:10,backColor:W.Green,barColor:G.Purple})]}),e("td",{className:"cyan-255-text",children:"VERY COLD"})]})]})]}),l("div",{className:"purple-168 full-width white-text",style:{padding:"0px 10px",marginTop:"2px"},children:[e("span",{className:"red-168",children:"HIGH"}),": Rio 31.0",e("br",{}),e("span",{className:"cyan-168",children:"LESS"}),": Reykjavik -1.0"]}),e("br",{}),e("div",{className:"tui-window full-width no-shadow black",children:l("fieldset",{className:"tui-fieldset center",children:[e("button",{className:"tui-button left",children:"Previous"}),e("span",{className:"center",children:"9/201 records"}),e("button",{className:"tui-button right",children:"Next"})]})}),e("div",{className:"red-168 full-width white-text",style:{padding:"0px 10px"},children:"FORECAST 1.0"})]}),Ae=n=>{var s=n,{disabled:t,className:i,children:r}=s,a=v(s,["disabled","className","children"]);return e("select",b(h({},a),{disabled:t,className:ke({disabled:t,className:i}),children:r}))},C=r=>{var a=r,{children:t}=a,i=v(a,["children"]);return e("option",b(h({},i),{children:t}))},X=r=>{var a=r,{children:t}=a,i=v(a,["children"]);return e("optgroup",b(h({},i),{children:t}))},me=n=>{var s=n,{disabled:t,className:i,type:r}=s,a=v(s,["disabled","className","type"]);const d=o.exports.useMemo(()=>de({disabled:t,className:i}),[t,i]);return e("input",h({type:r!=null?r:"text",disabled:t,className:d},a))},pe=d=>{var c=d,{disabled:t,className:i,label:r,type:a,data:n}=c,s=v(c,["disabled","className","label","type","data"]);const w=o.exports.useMemo(()=>a==="checkbox"?Ce({disabled:t,className:i}):ge({disabled:t,className:i}),[t,i]);return l("label",b(h({},n),{className:w,children:[r,e(me,b(h({disabled:t},s),{type:a})),e("span",{className:t?"disabled":""})]}))};const Ee=t=>e(pe,h({type:"checkbox",role:"checkbox"},t));const He=d=>{var c=d,{heading:t,description:i,options:r,onChange:a,values:n}=c,s=v(c,["heading","description","options","onChange","values"]);const w=x=>{if(n===void 0||a===void 0)return;const u=n.indexOf(x);if(u>=0){const g=[...n];g.splice(u,1),a(g)}else a([...n,x])};return l($,b(h({},s),{children:[e(B,{children:t}),i&&e("div",{className:"tui-checkbox-description",children:i}),r.map((x,u)=>e(Ee,{label:x.label,value:x.value,onChange:()=>w(x.value),checked:n==null?void 0:n.includes(x.value),disabled:x.disabled},u))]}))};const Pe=t=>e(pe,h({type:"radio"},t));const je=t=>{const i=({target:r})=>{t.onChange!==void 0&&t.onChange(r.value)};return l($,{children:[e(B,{children:t.heading}),t.description&&e("div",{className:"tui-radio-description",children:t.description}),t.options.map((r,a)=>e(Pe,{label:r.label,value:r.value,onChange:i,checked:t.value===r.value,disabled:r.disabled},a))]})},Ye=n=>{var s=n,{disabled:t,className:i,children:r}=s,a=v(s,["disabled","className","children"]);const d=o.exports.useMemo(()=>de({disabled:t,className:i}),[t,i]);return e("textarea",h({disabled:t,className:d},a))};const S=t=>{var i;return l("label",{htmlFor:t.id,className:(i=t.block)==null||i?"tui-block-label":"",children:[t.label,e(me,h({},t))]})},Z=t=>{var i;return l("label",{htmlFor:t.id,className:(i=t.block)==null||i?"tui-block-label":"",children:[t.label,e(Ae,h({},t))]})},ee=t=>{var i;return l("label",{htmlFor:t.id,className:(i=t.block)==null||i?"tui-block-label":"",children:[t.label,e(Ye,h({},t))]})};const ze=n=>{var s=n,{heading:t,description:i,children:r}=s,a=v(s,["heading","description","children"]);return t?e("form",b(h({},a),{children:l($,{children:[e(B,{children:t}),i&&e("div",{className:"tui-inputset-description",children:i}),r]})})):e("form",b(h({},a),{children:r}))},Ve=()=>{const[t,i]=o.exports.useState("text"),[r,a]=o.exports.useState(25),[n,s]=o.exports.useState("#00FF00"),[d,c]=o.exports.useState([]),[w,x]=o.exports.useState(0);return l(L,{children:[l("div",{className:"tui-window",style:{textAlign:"left"},children:[e("h2",{children:"Inputs"}),l(ze,{heading:"Form",children:[e(S,{label:"Text.......: ",value:t,onChange:({target:u})=>i(u.value)}),e(S,{label:"Disabled...: ",value:t,disabled:!0,onChange:({target:u})=>i(u.value)}),e(S,{label:"Number.....: ",type:"number",step:1,value:r,onChange:({target:u})=>a(+u.value)}),e(S,{label:"Password...: ",type:"password",value:t,onChange:({target:u})=>i(u.value)}),e(S,{label:"Color......: ",type:"color",value:n,onChange:({target:u})=>s(u.value)}),l(Z,{label:"Select.....: ",children:[e(C,{children:"First"}),e(C,{children:"Second"}),e(C,{children:"Third"}),l(X,{label:"Group",children:[e(C,{children:"First"}),e(C,{children:"Second"}),e(C,{children:"Third"})]})]}),e(S,{label:"Date.......: ",type:"date",value:"2019-01-01"}),e(S,{label:"Time.......: ",type:"datetime-local",value:"2019-01-01T12:00"}),e(He,{heading:"Checkboxes",description:"Add some biz",options:[{value:1,label:"First"},{value:2,label:"Second"},{value:3,label:"Disabled",disabled:!0}],onChange:u=>{c(u)},values:d}),e(je,{heading:"Radios",options:[{value:1,label:"First"},{value:2,label:"Second"},{value:3,label:"Disabled",disabled:!0}],onChange:u=>{x(+u)},value:w}),e(ee,{label:"Textarea",value:"asdadasdasd",style:{width:"100%"}}),e(ee,{label:"Disabled Textarea",value:"disabled",disabled:!0,style:{width:"100%"}}),e("br",{}),l(Z,{label:"Multiple",multiple:!0,style:{width:"100%"},children:[e(C,{children:"---"}),e(C,{children:"First"}),e(C,{children:"Second"}),e(C,{children:"Third"}),l(X,{label:"Group",children:[e(C,{children:"First"}),e(C,{children:"Second"}),e(C,{children:"Third"})]})]}),e(S,{label:"File",className:"full-width",type:"file"})]})]}),e(y.Dark,{code:`<TuiForm
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
</TuiForm>`})]})};const Ke=({children:t,buttonProps:i,parent:r,modalTitle:a})=>{var c;const[n,s]=o.exports.useState(!1);return l(L,{children:[e(D,{onClick:w=>{i!=null&&i.onClick&&i.onClick(w),s(!n)},children:(c=i==null?void 0:i.children)!=null?c:"Open modal"}),n&&le.exports.createPortal(e("div",{className:"tui-modal-container active","aria-label":a,children:e("div",{className:"tui-modal",role:"alertdialog",children:e("div",{className:"tui-window red-168 left-align",children:l($,{title:a,role:"presentation",children:[e(B,{role:"presentation",children:a}),t,e("div",{className:"tui-divider"}),e(D,{onClick:()=>s(!1),className:"tui-modal-close-button right",color:k.Cyan,textColor:G.Black,children:"Close"})]})})})}),r!=null?r:document.body)]})},Ue=({parent:t})=>l(L,{children:[e("h3",{children:"Modals"}),e(Ke,{modalTitle:"STEVE",parent:t,children:"content"})]}),f=({children:t,onClick:i,href:r})=>{const a=o.exports.useMemo(()=>!!i,[i]),n=o.exports.useMemo(()=>!!r,[r]),s=o.exports.useMemo(()=>!a&&!n,[a,n]);return l("li",{children:[a&&e("button",{onClick:i,children:t}),n&&e("a",{href:r,children:t}),s&&e("div",{children:t})]})};const te=n=>{var s=n,{children:t,dropDownLabel:i,block:r}=s,a=v(s,["children","dropDownLabel","block"]);const d=o.exports.useMemo(()=>{const c=["tui-dropdown"];return r&&c.push("block"),c.join(" ")},[r]);return l("li",b(h({},a),{className:d,children:[e("span",{children:i}),e("div",{className:"tui-dropdown-content",children:e("ul",{children:t})})]}))};const Qe=({sidenav:t,children:i,position:r})=>e("nav",{className:`tui-nav ${r!=null?r:ne.Relative}`,children:l("ul",{children:[t,i]})});const qe=({children:t,buttonText:i})=>{var s,d;const[r,a]=o.exports.useState(!1),n=o.exports.useRef(null);return l("li",{className:"tui-sidenav-li",children:[l("button",{className:"tui-sidenav-button",onClick:()=>a(!r),ref:n,children:[r?"x":"\u2261",i]}),r&&le.exports.createPortal(e("nav",{className:"tui-sidenav active absolute",children:e("ul",{children:t})}),(d=(s=n.current)==null?void 0:s.parentElement)!=null?d:document.body)]})},Y=s=>{var d=s,{children:t,basic:i,className:r,heading:a}=d,n=v(d,["children","basic","className","heading"]);const c=o.exports.useMemo(()=>r?`tui-window ${r}`:"tui-window",[r]);return i?e("div",b(h({},n),{className:c,children:t})):e("div",b(h({},n),{className:c,children:l($,{title:a,role:"presentation",children:[a&&e(B,{role:"presentation",children:a}),t]})}))};function _e(t){const[i,r]=o.exports.useState("");return o.exports.useEffect(()=>{const a=setInterval(()=>{r(we(new Date,t.format))},1e3);return()=>clearInterval(a)},[]),e("span",{className:"tui-datetime",children:i})}const Je=()=>l(L,{children:[e("h3",{children:"Navigation"}),l("div",{className:"tui-screen-800-600 bordered tui-bg-blue-black",children:[l(Qe,{sidenav:l(qe,{children:[l(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"O"}),"pen",e("span",{className:"tui-shortcut",children:"ctrl+o"})]}),e(f,{href:"#!",children:"OS Shell"}),l(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"C"}),"opy",e("span",{className:"tui-shortcut",children:"ctrl+c"})]}),l(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"P"}),"aste",e("span",{className:"tui-shortcut",children:"ctrl+v"})]}),l(f,{href:"#!",children:["Cut",e("span",{className:"tui-shortcut",children:"ctrl+x"})]}),e("div",{className:"tui-black-divider"}),e(f,{href:"#!",children:"Insert"}),e(f,{href:"#!",children:"Delete"}),e(f,{href:"#!",children:"Go..."}),e("div",{className:"tui-black-divider"}),l(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"S"}),"earch",e("span",{className:"tui-shortcut",children:"ctrl+p"})]}),e("div",{className:"tui-black-divider"}),l(f,{href:"#!",children:["Exit ",e("span",{className:"tui-shortcut",children:"F10"})]})]}),children:[l(te,{dropDownLabel:l("div",{children:[e("span",{className:"red-168-text",children:"F"}),"ile"]}),children:[l(f,{onClick:()=>{},children:[e("span",{className:"red-168-text",children:"N"}),"ew"]}),l(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"O"}),"pen...",e("span",{className:"tui-shortcut",children:"F3"})]}),l(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"S"}),"ave",e("span",{className:"tui-shortcut",children:"F2"})]}),l(f,{href:"#!",children:["S",e("span",{className:"red-168-text",children:"a"}),"ve as..."]}),l(f,{href:"#!",children:["Save a",e("span",{className:"red-168-text",children:"l"}),"l"]}),e("div",{className:"tui-black-divider"}),l(te,{block:!0,dropDownLabel:l("div",{children:[e("span",{className:"right",children:"\u25BA"}),e("span",{className:"red-168-text",children:"M"}),"ore"]}),children:[l(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"C"}),"hange dir..."]}),l(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"P"}),"rint"]}),l(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"D"}),"OS shell"]})]}),e("div",{className:"tui-black-divider"}),l(f,{href:"#!",children:[e("span",{className:"red-168-text",children:"Q"}),"uit",e("span",{className:"tui-shortcut",children:"F10"})]})]}),e(_e,{format:"dd MMM yyyy hh:mm:ss "})]}),l(Y,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]}),l(Y,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]}),l(Y,{children:[e("div",{children:"asdsadasd"}),e("div",{children:"asd"}),e("div",{children:"asd"}),e("div",{children:"asda"}),e("div",{children:"sd"})]})]}),e(y.Dark,{code:`<TuiNavbar
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
</TuiNavbar>`})]}),Xe=({children:t})=>e("div",{role:"presentation",className:"container",children:t}),Ze=({children:t})=>e("div",{role:"presentation",className:"row",children:t}),et=r=>{var a=r,{children:t}=a,i=v(a,["children"]);const n=o.exports.useMemo(()=>{const s=["col"];for(const d in i)if(Object.prototype.hasOwnProperty.call(i,d)){const c=i[d];c!=null&&c.offset&&s.push(`offset-${d}${c.offset}`),c!=null&&c.width&&s.push(`${d}${c.width}`)}return s.join(" ")},[i]);return e("div",{role:"presentation",className:n,children:t})};var T={Container:Xe,Row:Ze,Col:et};const tt=()=>l(L,{children:[l(T.Container,{children:[l(T.Row,{children:[e(T.Col,{s:{width:12},m:{width:12},l:{width:12},children:"12"}),e(T.Col,{s:{width:6},m:{width:6},l:{width:6},children:"6"}),e(T.Col,{s:{width:6},m:{width:6},l:{width:6},children:"6"}),e(T.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(T.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(T.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(T.Col,{s:{width:3},m:{width:3},l:{width:3},children:"3"}),e(T.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(T.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(T.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(T.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(T.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(T.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(T.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(T.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(T.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(T.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(T.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"}),e(T.Col,{s:{width:1},m:{width:1},l:{width:1},children:"1"})]}),l(T.Row,{children:[e(T.Col,{s:{width:12},m:{width:6},l:{width:6},children:"6"}),e(T.Col,{s:{width:12},m:{width:6},l:{width:6},children:"6"})]}),l(T.Row,{children:[e(T.Col,{s:{width:12},m:{offset:3,width:3},l:{offset:3,width:3},children:"3"}),e(T.Col,{s:{width:12},m:{offset:3,width:3},l:{offset:3,width:3},children:"3"})]})]}),e(y.Dark,{code:`<TuiGrid.Container>
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

</TuiGrid.Container>`})]}),it=s=>{var d=s,{children:t,className:i,hoverColor:r,stripeColor:a}=d,n=v(d,["children","className","hoverColor","stripeColor"]);const c=o.exports.useMemo(()=>{const w=["tui-table"];return i&&w.push(...i.split(" ")),r&&w.push(`hovered-${r}`),a&&w.push(`striped-${a}`),w.join(" ")},[i,r,a]);return e("table",b(h({},n),{className:c,children:t}))},lt=r=>{var a=r,{children:t}=a,i=v(a,["children"]);return e("thead",b(h({},i),{children:t}))},at=r=>{var a=r,{children:t}=a,i=v(a,["children"]);return e("tbody",b(h({},i),{children:t}))},F=r=>{var a=r,{children:t}=a,i=v(a,["children"]);return e("tr",b(h({},i),{children:t}))},ie=r=>{var a=r,{children:t}=a,i=v(a,["children"]);return e("th",b(h({},i),{children:t}))},I=r=>{var a=r,{children:t}=a,i=v(a,["children"]);return e("td",b(h({},i),{children:t}))},rt=()=>l("div",{children:[e("h3",{children:"Table"}),e(se,{color:W.Blue,children:l(it,{stripeColor:z.Blue,hoverColor:z.Purple,children:[e(lt,{children:l(F,{children:[e(ie,{children:"Name"}),e(ie,{children:"Age"})]})}),l(at,{children:[l(F,{children:[e(I,{children:"Steve"}),e(I,{children:"40"})]}),l(F,{children:[e(I,{children:"Fred"}),e(I,{children:"55"})]}),l(F,{children:[e(I,{children:"Gregor"}),e(I,{children:"25"})]}),l(F,{children:[e(I,{children:"Harry"}),e(I,{children:"43"})]})]})]})}),e(y.Dark,{code:`<TuiTable
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
</TuiTable>`})]});xe.render(e(Ne.StrictMode,{children:e(se,{color:re.BlueWhite,children:l(T.Container,{children:[e("h1",{className:"center","aria-label":"React TUI",children:"===========react-tuicss==========="}),e(De,{}),e(H,{}),e(Re,{}),e(H,{}),e(Be,{}),e(H,{}),e(Ve,{}),e(H,{}),e("h2",{className:"center",children:"Pages"}),e("h3",{children:"Bios"}),e(Oe,{}),e(Ue,{}),e("h3",{children:"Forecast"}),e(We,{}),e(Je,{}),e(tt,{}),e(rt,{})]})})}),document.getElementById("root"));
