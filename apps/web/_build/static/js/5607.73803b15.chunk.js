"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5607],{29307:(e,i,n)=>{n.r(i),n.d(i,{default:()=>t});const t={}},33536:(e,i,n)=>{n.r(i),n.d(i,{default:()=>t});const t={}},7546:(e,i,n)=>{n.r(i),n.d(i,{default:()=>t});const t={}},35252:(e,i,n)=>{n.d(i,{OY:()=>d,Pj:()=>u,U2:()=>c,ZP:()=>a,hl:()=>s,nq:()=>l});var t=n(34887),r=n(1714);const o=(0,t.ZP)(r.xu)`
  width: ${({width:e})=>e??"100%"};
  padding: ${({padding:e})=>e??"1rem"};
  border-radius: ${({$borderRadius:e})=>e??"16px"};
  border: ${({border:e})=>e};
`,a=o,s=(0,t.ZP)(o)`
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
`,d=(0,t.ZP)(o)`
  background-color: ${({theme:e})=>e.surface3};
`,l=(0,t.ZP)(o)`
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
`,c=(0,t.ZP)(o)`
  background-color: rgba(243, 132, 30, 0.05);
  color: ${({theme:e})=>e.deprecated_yellow3};
  font-weight: 535;
`,u=(0,t.ZP)(o)`
  background-color: ${({theme:e})=>e.accent2};
  color: ${({theme:e})=>e.accent1};
  border-radius: 12px;
`},17321:(e,i,n)=>{n.d(i,{A:()=>l});var t=n(84250),r=n(92617),o=n(34887),a=n(39891),s=n(49514);const d=o.ZP.div`
  border: 1px solid ${({theme:e})=>e.neutral3};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function l(){return(0,t.jsx)(r.Tz,{gap:"lg",justify:"center",children:(0,t.jsx)(r.Tz,{gap:"md",style:{width:"100%"},children:(0,t.jsx)(d,{children:(0,t.jsx)(s.T.BodySecondary,{color:"neutral2",textAlign:"center",children:(0,t.jsx)(a.cC,{i18nKey:"v2.notAvailable"})})})})})}},55455:(e,i,n)=>{n.d(i,{SS:()=>x,sq:()=>d,MN:()=>l,RF:()=>c,uO:()=>u});const t=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",r=n.p+"static/media/noise.3c7efafc83614205bd1a.png",o=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var a=n(92617),s=n(34887);const d=s.ZP.span`
  background: url(${t});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,l=s.ZP.span`
  background: url(${o});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,c=s.ZP.span`
  background: url(${r});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,u=(0,s.ZP)(a.Tz)`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,x=s.ZP.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},46222:(e,i,n)=>{n.d(i,{E:()=>o,G:()=>a});var t=n(81716),r=n(89454);const o=Object.keys(t.V2_ROUTER_ADDRESSES).map((e=>parseInt(e)));function a(){const{chainId:e}=(0,r.m)();return e&&o.includes(e)}},49284:(e,i,n)=>{n.d(i,{A:()=>d});var t=n(81716),r=n(66112),o=n(29603),a=n(99192),s=n(33178);function d(e){var i,n;const d=(null===(i=e)||void 0===i?void 0:i.isToken)?(0,o.c)(e.address):void 0,{data:l}=(0,s.u)({address:d,chainId:null===(n=e)||void 0===n?void 0:n.chainId,abi:a.Wo,functionName:"totalSupply"});return(0,r.useMemo)((()=>{var i,n;return(null===(i=e)||void 0===i?void 0:i.isToken)&&l?t.CurrencyAmount.fromRawAmount(e,null===(n=l)||void 0===n?void 0:n.toString()):void 0}),[e,l])}},72080:(e,i,n)=>{n.d(i,{OY:()=>l,Oo:()=>c,_G:()=>d});var t=n(81716),r=n(87013),o=n(66112),a=n(29603),s=n(43202),d=(e=>(e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID",e))(d||{});function l(e){var i,n;const d=null===(n=e[0])||void 0===n||null===(i=n[0])||void 0===i?void 0:i.chainId,l=(0,o.useMemo)((()=>e.map((([e,i])=>{var n,t;return[null===(n=e)||void 0===n?void 0:n.wrapped,null===(t=i)||void 0===t?void 0:t.wrapped]}))),[e]),c=(0,o.useMemo)((()=>l.map((([e,i])=>e&&i&&e.chainId===i.chainId&&!e.equals(i)&&t.V2_FACTORY_ADDRESSES[e.chainId]?(0,r.computePairAddress)({factoryAddress:t.V2_FACTORY_ADDRESSES[e.chainId],tokenA:e,tokenB:i}):void 0))),[l]),{data:u,isLoading:x}=(0,s.N)({contracts:(0,o.useMemo)((()=>c.map((e=>({address:(0,a.c)(e)??"0x",abi:[{constant:!0,inputs:[],name:"getReserves",outputs:[{internalType:"uint112",name:"reserve0",type:"uint112"},{internalType:"uint112",name:"reserve1",type:"uint112"},{internalType:"uint32",name:"blockTimestampLast",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"}],functionName:"getReserves",chainId:d})))),[c,d])});return(0,o.useMemo)((()=>{var e;return x?Array.from({length:c.length},(()=>[0,null])):(null===(e=u)||void 0===e?void 0:e.map((({result:e},i)=>{const n=l[i][0],o=l[i][1];if(!n||!o||n.equals(o))return[3,null];if(!e)return[1,null];const[a,s]=e,[d,c]=n.sortsBefore(o)?[n,o]:[o,n];return[2,new r.Pair(t.CurrencyAmount.fromRawAmount(d,a.toString()),t.CurrencyAmount.fromRawAmount(c,s.toString()))]})))??[]}),[u,x,c.length,l])}function c(e,i){return l((0,o.useMemo)((()=>[[e,i]]),[e,i]))[0]}},57181:(e,i,n)=>{n.d(i,{e:()=>o});var t=n(34887),r=n(39522);const o=t.ZP.main`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${r.k.default};
`},92021:(e,i,n)=>{n.r(i),n.d(i,{MigrateHeader:()=>me,default:()=>ge});var t=n(84250),r=n(20620),o=n(17516),a=n(81716),s=n(35252),d=n(83885),l=n(55455),c=n(16129),u=n(48685),x=n(26153),p=n(39891),m=n(79961),h=n(48993),v=n(80865),g=n(16106),f=n(74441),b=n(70914),_=n(7483);const y="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-8px _alignItems-center ",j="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 ",k="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _gap-md ";function S({tokenA:e,tokenB:i,liquidityToken:n}){const r=(0,_.B)(e),o=(0,_.B)(i),a=(0,v._)(),s=(0,u.r)(e);return(0,t.jsxs)(g.k,{p:"$spacing16",borderRadius:"$rounded16","$platform-web":{background:`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,x.DZ)(.8,s)} 0%, ${a.surface2.val} 100%) `},children:[(0,t.jsx)(l.RF,{}),(0,t.jsx)("div",{className:k,children:(0,t.jsxs)("div",{className:j,children:[(0,t.jsxs)("div",{className:y,children:[(0,t.jsx)(d.g,{currencies:[r,o],size:20}),(0,t.jsx)(h.xv,{fontWeight:535,fontSize:20,children:r&&o?`${r.symbol}/${o.symbol}`:(0,t.jsx)(c.bb,{children:(0,t.jsx)(p.cC,{i18nKey:"common.loading"})})}),(0,t.jsx)(b.Z,{badgeVariant:b.P.WARNING,children:"Sushi"})]}),(0,t.jsx)(m.rU,{to:`/migrate/v2/${n.address}`,style:{textDecoration:"none"},children:(0,t.jsx)(f.z,{variant:"branded",emphasis:"tertiary",fill:!1,children:(0,t.jsx)(p.cC,{i18nKey:"common.migrate"})})})]})})]})}n(29307);var w=n(18369),$=n(91842),T=n(89454),I=n(49284),A=n(60628),z=n.n(A),N=n(66112),D=n(63411),q=n.n(D);function C(){return C=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},C.apply(this,arguments)}function B(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P=(0,N.forwardRef)((function(e,i){var n=e.color,t=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,a=B(e,["color","size"]);return N.createElement("svg",C({ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),N.createElement("polyline",{points:"18 15 12 9 6 15"}))}));P.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},P.displayName="ChevronUp";const O=P;var E=n(79800),R=n(68986),Z=n(78307),L=n(96422);const H="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _mt-t-space-spa1360334076 _width-10037 ",W="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 ",M="  _display-flex _alignItems-center _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-center ",V="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-spa94665593 ",F="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _alignItems-center _justifyContent-space-betwe3241 ",G="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _gap-t-space-spa94665591 ";function K({pair:e,stakedBalance:i}){var n,r,o,s;const h=(0,T.m)(),{t:b}=(0,p.$G)(),y=(0,v._)(),j=(0,_.B)(e.token0),k=(0,_.B)(e.token1),[S,A]=(0,N.useState)(!1),D=(0,R.mM)(h.address,e.liquidityToken),q=(0,I.A)(e.liquidityToken),C=i?null===(n=D)||void 0===n?void 0:n.add(i):D,B=C&&q&&z().greaterThanOrEqual(q.quotient,C.quotient)?new a.Percent(C.quotient,q.quotient):void 0,[P,K]=e&&q&&C&&z().greaterThanOrEqual(q.quotient,C.quotient)?[e.getLiquidityValue(e.token0,q,C,!1),e.getLiquidityValue(e.token1,q,C,!1)]:[void 0,void 0],U=(0,u.r)(null===(r=e)||void 0===r?void 0:r.token0);return(0,t.jsxs)(g.k,{p:"$spacing16",borderRadius:"$rounded16","$platform-web":{background:`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,x.DZ)(.8,U)} 0%, ${y.surface2.val} 100%) `},children:[(0,t.jsx)(l.RF,{}),(0,t.jsxs)("div",{className:G,children:[(0,t.jsxs)("div",{className:F,children:[(0,t.jsxs)("div",{className:V,children:[(0,t.jsx)(d.g,{currencies:[j,k],size:20}),(0,t.jsx)(Z.xv,{variant:"body1",children:j&&k?`${j.symbol}/${k.symbol}`:(0,t.jsx)(c.bb,{children:b("common.loading")})})]}),(0,t.jsx)("div",{className:V,children:(0,t.jsx)(f.z,{emphasis:"tertiary",variant:"branded",size:"small",icon:S?(0,t.jsx)(O,{}):(0,t.jsx)(E.Z,{}),iconPosition:"after",onPress:()=>A(!S),children:b("common.manage")})})]}),S&&(0,t.jsxs)("div",{className:G,children:[(0,t.jsxs)("div",{className:F,children:[(0,t.jsx)(Z.xv,{variant:"body2",children:b("pool.totalTokens")}),(0,t.jsx)(Z.xv,{variant:"body2",children:C?C.toSignificant(4):"-"})]}),i&&(0,t.jsxs)("div",{className:F,children:[(0,t.jsx)(Z.xv,{variant:"body2",children:b("pool.rewardsPool.label")}),(0,t.jsx)(Z.xv,{variant:"body2",children:i.toSignificant(4)})]}),(0,t.jsxs)("div",{className:F,children:[(0,t.jsx)(Z.xv,{variant:"body2",children:b("removeLiquidity.pooled",{symbol:j.symbol})}),P?(0,t.jsxs)("div",{className:M,children:[(0,t.jsx)(Z.xv,{variant:"body2",mr:"$spacing4",children:null===(o=P)||void 0===o?void 0:o.toSignificant(6)}),(0,t.jsx)(w.Z,{size:20,currency:j})]}):"-"]}),(0,t.jsxs)("div",{className:F,children:[(0,t.jsx)(Z.xv,{variant:"body2",children:b("pool.pooled",{sym:k.symbol})}),K?(0,t.jsxs)("div",{className:M,children:[(0,t.jsx)(Z.xv,{variant:"body2",mr:"$spacing4",children:null===(s=K)||void 0===s?void 0:s.toSignificant(6)}),(0,t.jsx)(w.Z,{size:20,currency:k})]}):"-"]}),(0,t.jsxs)("div",{className:W,children:[(0,t.jsx)(Z.xv,{variant:"body2",children:b("pool.share.label")}),(0,t.jsx)(Z.xv,{variant:"body2",children:B?("0.00"===B.toFixed(2)?"<0.01":B.toFixed(2))+"%":"-"})]}),D&&z().greaterThan(D.quotient,$.iV)&&(0,t.jsxs)("div",{className:H,children:[(0,t.jsx)(m.rU,{to:`/migrate/v2/${e.liquidityToken.address}`,style:{textDecoration:"none",width:"64%"},children:(0,t.jsx)(f.z,{size:"medium",variant:"branded",width:"100%",children:b("common.migrate")})}),(0,t.jsx)(m.rU,{to:`/remove/v2/${(0,L.H)(j)}/${(0,L.H)(k)}`,style:{textDecoration:"none",width:"32%"},children:(0,t.jsx)(f.z,{size:"medium",variant:"branded",emphasis:"tertiary",width:"100%",children:b("common.remove.label")})})]})]})]})]})}n(7546);var U=n(35806),Y=n(17321),X=n(92617),J=n(46222),Q=n(72080),ee=n(34887),ie=n(97596),ne=n(57181),te=n(56894),re=n(19110),oe=n(49514),ae=n(25053),se=n(48006),de=n(10260),le=n(95675),ce=n(2637),ue=n(49357);const xe="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _alignItems-center _justifyContent-space-betwe3241 _gap-t-space-gap56 ",pe="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _gap-t-space-gap1573 ",me=(0,ee.ZP)(oe.T.H1Small)`
  font-weight: 535;
`;function he({message:e}){return(0,t.jsx)(X.Tz,{style:{minHeight:200,justifyContent:"center",alignItems:"center"},children:(0,t.jsx)(oe.T.DeprecatedBody,{children:e})})}const ve=({tokenA:e,tokenB:i})=>{const[n,t]=e.sortsBefore(i)?[e,i]:[i,e];return(0,r.getCreate2Address)("0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",(0,o.keccak256)(["bytes"],[(0,o.pack)(["address","address"],[n.address,t.address])]),"0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303")};function ge(){var e;const i=(0,ie.useTheme)(),n=(0,T.m)(),r=(0,te.s0)(),{state:o}=(0,te.TH)(),d=n.chainId?a.V2_FACTORY_ADDRESSES[n.chainId]:void 0,l=(0,re.B3)(),u=(0,N.useMemo)((()=>l.map((e=>{const i=1===n.chainId?function([e,i]){return new a.Token(e.chainId,ve({tokenA:e,tokenB:i}),18,"SLP","SushiSwap LP Token")}(e):null;return{v2liquidityToken:d?(0,re.Ce)(e):void 0,sushiLiquidityToken:i,tokens:e}}))),[l,n.chainId,d]),x=(0,N.useMemo)((()=>[...u.map((({v2liquidityToken:e})=>e)),...u.map((({sushiLiquidityToken:e})=>e)).filter((e=>!!e))]),[u]),[m,v]=(0,R.bv)(n.address,x),f=(0,N.useMemo)((()=>v?[]:u.filter((({v2liquidityToken:e})=>{var i;return e&&(null===(i=m[e.address])||void 0===i?void 0:i.greaterThan(0))})).map((e=>e.tokens))),[v,u,m]),b=(0,N.useMemo)((()=>v?[]:u.filter((({sushiLiquidityToken:e})=>{var i;return!!e&&(null===(i=m[e.address])||void 0===i?void 0:i.greaterThan(0))}))),[v,u,m]),_=(0,Q.OY)(f),y=v||_.some((([e])=>e===Q._G.LOADING)),j=(0,N.useCallback)((()=>{var e;(null===(e=o)||void 0===e?void 0:e.from)?r(o.from):r("/positions")}),[r,null===(e=o)||void 0===e?void 0:e.from]);return(0,J.G)()?(0,t.jsxs)(ce.Z,{logImpression:!0,page:ue.vk.MigrateV2,children:[(0,t.jsx)(ne.e,{style:{padding:24},children:(0,t.jsxs)("div",{className:pe,children:[(0,t.jsxs)("div",{className:xe,children:[(0,t.jsx)(se.Z,{p:"$spacing6",borderRadius:"$rounded8",onPress:j,hoverable:!0,hoverStyle:{backgroundColor:"$backgroundHover"},children:(0,t.jsx)(de.E,{direction:"w",color:"$neutral1",size:le._.icon24})}),(0,t.jsx)(me,{children:(0,t.jsx)(p.cC,{i18nKey:"migrate.v2Title"})}),(0,t.jsx)(g.k,{width:le._.icon48,height:le._.icon36})]}),(0,t.jsx)(h.xv,{m:"$spacing8",lineHeight:"24px",variant:"body2",children:(0,t.jsx)(p.cC,{i18nKey:"migrate.v2Instruction"})}),n?y?(0,t.jsx)(s.hl,{padding:"40px",children:(0,t.jsx)(oe.T.DeprecatedBody,{color:i.neutral3,textAlign:"center",children:(0,t.jsx)(c.bb,{children:(0,t.jsx)(p.cC,{i18nKey:"common.loading"})})})}):_.filter((([,e])=>!!e)).length>0?(0,t.jsxs)(t.Fragment,{children:[_.filter((([,e])=>!!e)).map((([,e])=>(0,t.jsx)(K,{pair:e},e.liquidityToken.address))),b.map((({sushiLiquidityToken:e,tokens:i})=>(0,t.jsx)(S,{tokenA:i[0],tokenB:i[1],liquidityToken:e},e.address)))]}):(0,t.jsx)(he,{message:(0,t.jsx)(p.cC,{i18nKey:"migrate.noV2Liquidity"})}):(0,t.jsx)(s.hl,{padding:"40px",children:(0,t.jsx)(oe.T.DeprecatedBody,{color:i.neutral3,textAlign:"center",children:(0,t.jsx)(p.cC,{i18nKey:"migrate.connectWallet"})})}),(0,t.jsx)(X.Tz,{justify:"center",gap:"md",children:(0,t.jsx)(h.xv,{textAlign:"center",fontSize:14,style:{padding:".5rem 0 .5rem 0"},children:(0,t.jsx)(p.cC,{i18nKey:"migrate.missingV2Position",components:{Link:(0,t.jsx)(ae.m,{id:"import-pool-link",to:"/pools/v2/find"})}})})})]})}),(0,t.jsx)(U.c,{})]}):(0,t.jsx)(Y.A,{})}n(33536)},7483:(e,i,n)=>{n.d(i,{B:()=>r});var t=n(12761);function r(e){var i;return e.isNative?e:(null===(i=t.Fl[e.chainId])||void 0===i?void 0:i.equals(e))?(0,t.gX)(e.chainId):e}}}]);
//# sourceMappingURL=5607.73803b15.chunk.js.map