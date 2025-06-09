"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6469],{66039:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});const r={}},9615:(e,t,i)=>{i.d(t,{f3:()=>y,yY:()=>j,zG:()=>p});var r=i(84250),s=i(80690),n=i(46812),l=i(43218),a=i(34887),h=i(97596),o=i(66112),x=i(97688),d=i(39891),c=i(79961),L=i(29360),f=i(61321),u=i(51225);const p=a.ZP.nav`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;
  width: fit-content;
`,j=(0,a.ZP)(c.rU)`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  text-decoration: none;

  &:hover {
    color: ${({theme:e})=>e.neutral3};
  }
`,m=(0,a.ZP)(n.ZP)`
  gap: 6px;
`,g=a.ZP.h1`
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: ${({theme:e})=>e.neutral1};
  white-space: nowrap;
  margin: 0;
`,w=(0,a.ZP)(n.ZP)`
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
  gap: 10px;
  white-space: nowrap;
`,b=(0,a.ZP)(x.Z)`
  ${L.i}
`,y=({address:e,currency:t,poolName:i})=>{var n,a;const{t:x}=(0,d.$G)(),{neutral2:c}=(0,h.useTheme)(),[L,p]=(0,o.useState)(!1),[j,y]=(0,l.Z)(),v=(0,o.useCallback)((()=>{y(e)}),[e,y]),C=null===(n=t)||void 0===n?void 0:n.isNative,$=(null===(a=t)||void 0===a?void 0:a.symbol)??x("tdp.symbolNotFound"),k=!(0,f.GS)().md,Z=k&&L&&!j;return(0,r.jsxs)(m,{"aria-current":"page","data-testid":"current-breadcrumb",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[(0,r.jsx)(g,{children:t?$:i})," ",(!t||t&&!C)&&(0,r.jsxs)(w,{"data-testid":"breadcrumb-token-address",isDisabled:!k,onClick:k?v:void 0,children:[(0,r.jsx)(s.ud,{placement:"bottom",size:s.Oz.Max,forceShow:j,text:x("common.copied"),disabled:!0,children:(0,u.Xn)(e)}),Z&&(0,r.jsx)(b,{"data-testid":"breadcrumb-hover-copy",width:16,height:16,color:c})]})]})}},35643:(e,t,i)=>{i.d(t,{M:()=>b,Z:()=>m});var r=i(84250),s=i(73534),n=i(43090),l=i(92617),a=i(46812),h=i(34887),o=i(97596),x=i(26153),d=i(39891),c=i(49514),L=i(35212),f=i(67863);const u="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column ",p=(0,h.ZP)(a.ZP)`
  position: absolute;
  width: max-content;
  align-items: flex-start;
  max-width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  border: 1.3px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface1};
  padding: 12px 20px 12px 12px;
  gap: 12px;
  ${L.Sj};
  z-index: 1;
`,j=(0,h.ZP)(l.ZP)`
  white-space: normal;
`;function m({children:e}){return(0,r.jsxs)(p,{"data-cy":"chart-error-view",children:[(0,r.jsx)("div",{className:u,children:(0,r.jsx)(n.f$,{})}),(0,r.jsxs)(j,{gap:"xs",children:[(0,r.jsx)(c.T.SubHeader,{color:"neutral1",children:(0,r.jsx)(d.cC,{i18nKey:"chart.missingData"})}),(0,r.jsx)(c.T.BodySmall,{color:"neutral2",children:e})]})]})}function g({height:e,fillColor:t,tickColor:i,hideYAxis:s}){return(0,r.jsxs)("g",{children:[(0,r.jsx)("rect",{width:"180",height:"32",rx:"4",y:"0",fill:t}),(0,r.jsx)("rect",{width:"80",height:"13",rx:"4",y:"48",fill:t}),(0,r.jsxs)("g",{transform:`translate(0, ${e-14})`,children:[(0,r.jsx)("rect",{width:"7%",height:"6",rx:"3",x:"10%",fill:i}),(0,r.jsx)("rect",{width:"7%",height:"6",rx:"3",x:"28.25%",fill:i}),(0,r.jsx)("rect",{width:"7%",height:"6",rx:"3",x:"46.5%",fill:i}),(0,r.jsx)("rect",{width:"7%",height:"6",rx:"3",x:"64.75%",fill:i}),(0,r.jsx)("rect",{width:"7%",height:"6",rx:"3",x:"83%",fill:i})]}),!s&&(0,r.jsxs)("g",{transform:"translate(0, 10)",children:[(0,r.jsx)("rect",{width:"24",height:"6",rx:"3",y:0*e/5,x:"96%",fill:i}),(0,r.jsx)("rect",{width:"24",height:"6",rx:"3",y:1*e/5,x:"96%",fill:i}),(0,r.jsx)("rect",{width:"24",height:"6",rx:"3",y:2*e/5,x:"96%",fill:i}),(0,r.jsx)("rect",{width:"24",height:"6",rx:"3",y:3*e/5,x:"96%",fill:i}),(0,r.jsx)("rect",{width:"24",height:"6",rx:"3",y:4*e/5,x:"96%",fill:i})]})]})}function w({type:e,height:t,id:i}){const n=(0,o.useTheme)();switch(e){case s.oX.TVL:case s.oX.PRICE:return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:`${i}-gradient`,x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,r.jsx)("stop",{offset:"0",stopColor:n.neutral3,children:(0,r.jsx)("animate",{attributeName:"offset",values:"-1;3",dur:"1.3s",repeatCount:"indefinite"})}),(0,r.jsx)("stop",{offset:"0.5",stopColor:(0,x.$n)(.24,n.neutral3),children:(0,r.jsx)("animate",{attributeName:"offset",values:"-0.5;3.5",dur:"1.3s",repeatCount:"indefinite"})}),(0,r.jsx)("stop",{offset:"1",stopColor:n.neutral3,children:(0,r.jsx)("animate",{attributeName:"offset",values:"0;4",dur:"1.3s",repeatCount:"indefinite"})})]})}),(0,r.jsx)("mask",{id:i,style:{maskType:"alpha"},children:(0,r.jsx)("path",{transform:"translate(5, 75)",d:"M0 122.5L7.26 116.158L14.52 109.916L21.78 103.873L29.04 98.1233L36.3 92.7582L43.56 87.862L50.82 83.5121L58.08 79.7771L65.34 76.7159L72.6 74.3767L79.86 72.7964L87.12 72H94.38L101.64 72.7964L108.9 74.3767L116.16 76.7159L123.42 79.7771L130.68 83.5121L137.94 87.862L145.2 92.7582L152.46 98.1233L159.72 103.873L166.98 109.916L174.24 116.158L181.5 122.5L188.76 128.842L196.02 135.084L203.28 141.127L210.54 146.877L217.8 152.242L225.06 157.138L232.32 161.488L239.58 165.223L246.84 168.284L254.1 170.623L261.36 172.204L268.62 173H275.88L283.14 172.204L290.4 170.623L297.66 168.284L304.92 165.223L312.18 161.488L319.44 157.138L326.7 152.242L333.96 146.877L341.22 141.127L348.48 135.084L355.74 128.842L363 122.5L370.26 116.158L377.52 109.916L384.78 103.873L392.04 98.1233L399.3 92.7582L406.56 87.862L413.82 83.5121L421.08 79.7771L428.34 76.7159L435.6 74.3767L442.86 72.7964L450.12 72L457.38 72L464.64 72.7964L471.9 74.3767L479.16 76.7159L486.42 79.7771L493.68 83.5121L500.94 87.862L508.2 92.7582L515.46 98.1233L522.72 103.873L529.98 109.916L537.24 116.158L544.5 122.5L551.76 128.842L559.02 135.084L566.28 141.127L573.54 146.877L580.8 152.242L588.06 157.138L595.32 161.488L602.58 165.223L609.84 168.284L617.1 170.623L624.36 172.204L631.62 173H638.88L646.14 172.204L653.4 170.623L660.66 168.284L667.92 165.223L675.18 161.488L682.44 157.138L689.7 152.242L696.96 146.877L704.22 141.127L711.48 135.084L718.74 128.842L726 122.5",stroke:"white",strokeWidth:"4",strokeLinecap:"round"})})]});case s.oX.VOLUME:return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:`${i}-gradient`,x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,r.jsx)("stop",{offset:"0",stopColor:n.neutral3,children:(0,r.jsx)("animate",{attributeName:"offset",values:"-0.2;3.3",dur:"1.3s",repeatCount:"indefinite"})}),(0,r.jsx)("stop",{offset:"0.1",stopColor:(0,x.$n)(.05,n.neutral3),children:(0,r.jsx)("animate",{attributeName:"offset",values:"-0.1;3.4",dur:"1.3s",repeatCount:"indefinite"})}),(0,r.jsx)("stop",{offset:"0.2",stopColor:n.neutral3,children:(0,r.jsx)("animate",{attributeName:"offset",values:"0;3.5",dur:"1.3s",repeatCount:"indefinite"})})]})}),(0,r.jsx)("mask",{id:i,style:{maskType:"alpha"},children:(0,r.jsxs)("g",{transform:`translate(0, ${t-30}) scale(1,-1)`,children:[(0,r.jsx)("rect",{rx:"3",width:"9%",height:"15%",x:"0.0%",fill:"white"}),(0,r.jsx)("rect",{rx:"3",width:"9%",height:"30%",x:"9.2%",fill:"white"}),(0,r.jsx)("rect",{rx:"3",width:"9%",height:"45%",x:"18.4%",fill:"white"}),(0,r.jsx)("rect",{rx:"3",width:"9%",height:"60%",x:"27.6%",fill:"white"}),(0,r.jsx)("rect",{rx:"3",width:"9%",height:"45%",x:"36.8%",fill:"white"}),(0,r.jsx)("rect",{rx:"3",width:"9%",height:"30%",x:"46.0%",fill:"white"}),(0,r.jsx)("rect",{rx:"3",width:"9%",height:"15%",x:"55.2%",fill:"white"}),(0,r.jsx)("rect",{rx:"3",width:"9%",height:"30%",x:"64.4%",fill:"white"}),(0,r.jsx)("rect",{rx:"3",width:"9%",height:"45%",x:"73.6%",fill:"white"}),(0,r.jsx)("rect",{rx:"3",width:"9%",height:"60%",x:"82.8%",fill:"white"})]})})]});default:return null}}function b({errorText:e,height:t,type:i,dim:s,hideYAxis:n}){const l=(0,o.useTheme)(),h=(0,f.jb)(25,l.neutral3),x=e||s?h:l.neutral3,d=e?(0,f.jb)(12.5,l.neutral3):h,c=`mask-${i}-${t}`;return(0,r.jsxs)(a.ZP,{style:{position:"relative"},children:[(0,r.jsxs)("svg",{width:"100%",height:t,xmlns:"http://www.w3.org/2000/svg",fill:"none",children:[(0,r.jsx)(g,{height:t,fillColor:x,tickColor:d,hideYAxis:n}),(0,r.jsx)(w,{id:c,type:i,height:t}),(0,r.jsx)("g",{mask:`url(#${c})`,children:(0,r.jsx)("rect",{width:"94%",height:t,rx:"4",fill:e?x:`url(#${c}-gradient)`})})]}),e&&(0,r.jsx)(m,{children:e})]})}i(66039)}}]);
//# sourceMappingURL=6469.a0e6ff3f.chunk.js.map