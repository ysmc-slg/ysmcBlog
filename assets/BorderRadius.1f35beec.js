import{h as d,i as u,j as _,o as C,c as v,a as p}from"./app.c144f217.js";import{_ as m}from"./plugin-vue_export-helper.5a098b48.js";const T=d({setup(){const a=u(),l=u(),c=(e,o,n,t,s,r)=>{e.beginPath(),e.moveTo(o+r,n),e.lineTo(o+t-r,n),e.quadraticCurveTo(o+t,n,o+t,n+r),e.lineTo(o+t,n+s-r),e.quadraticCurveTo(o+t,n+s,o+t-r,n+s),e.lineTo(o+r,n+s),e.quadraticCurveTo(o,n+s,o,n+s-r),e.lineTo(o,n+r),e.quadraticCurveTo(o,n,o+r,n),e.closePath()},i=()=>{const e=a.value.getContext("2d");c(e,10,10,280,280,10),e.strokeStyle="#004643",e.stroke(),e.fillStyle="#f9bc60",e.fill(),e.restore()},f=()=>{const e=l.value.getContext("2d");e.save(),e.beginPath(),e.arc(150,150,130,0,Math.PI*2,!1),e.strokeStyle="#232946",e.stroke(),e.clip(),e.fillStyle="#eebbc3",e.fill(),e.restore()};return _(()=>{i(),f()}),{roundCorner:a,circle:l}}}),b={style:{display:"flex","align-items":"center","justify-content":"space-between"}},k={ref:"roundCorner",width:"300",height:"300"},g={ref:"circle",width:"300",height:"300"};function j(a,l,c,i,f,e){return C(),v("div",b,[p("canvas",k,null,512),p("canvas",g,null,512)])}var P=m(T,[["render",j]]);export{P as default};
