"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33577],{30902:function(e,n,t){t.d(n,{O:function(){return i}});var r=t(78287),i=(0,t(12281).g)(r.Z)},31295:function(e,n,t){t.d(n,{v:function(){return d}});var r=t(70865),i=t(96670),a=t(52322),o=t(9390),s=t(47999),c=t(21805),l=t(5632),u=(0,t(8740).ZL)()(function(e,n){var t=e.palette,i=e.tokens,a=i.spacing,o=i.fontSize,s=n.isTranslucentCard;return{ctaButton:(0,r.Z)({margin:"".concat(a.base," 0"),width:"100%",fontSize:o.m,paddingLeft:a.s,paddingRight:a.s,height:"auto",textAlign:"center",minHeight:a.xl},s&&{color:t.common.white,borderColor:t.common.white,"&:hover":{borderColor:t.common.white}}),ctaButtonLabel:{whiteSpace:"pre-line"}}}),d=function(e){var n=e.analyticsLabel,t=e.ctaLabel,d=e.isBestValue,p=void 0!==d&&d,f=e.onCtaClick,v=e.ctaHref,m=e.isTranslucentCard,h=e.classesProps,P=u({isTranslucentCard:void 0!==m&&m}),b=P.classes,x=P.cx,g=(0,l.useRouter)().asPath,y=(null==n?void 0:n.includes("."))?{clickTrack:n}:{labelTrack:n};return(0,a.jsx)(s.z,(0,i.Z)((0,r.Z)({className:x(b.ctaButton,null==h?void 0:h.ctaButton),color:p?"secondary":"primary","data-automation":"PricingCard_ActionButton",onClick:function(){var e,n;c.Z.set("referer_page",g),null===(e=window.NREUM)||void 0===e||null===(n=e.addPageAction)||void 0===n||n.call(e,"P3 user clicked PricingCardCta",{ctaLabel:t,asPath:g,ctaHref:v}),!v&&f&&f()},variant:p?"contained":"outlined"},y,v?{component:o.r,href:v}:{}),{children:(0,a.jsx)("span",{className:x(b.ctaButtonLabel,null==h?void 0:h.ctaButtonLabel),children:t})}))}},75002:function(e,n,t){t.r(n),t.d(n,{SiteHeaderLinks:function(){return J}});var r,i=t(47842),a=t(70865),o=t(96670),s=t(87394),c=t(52322),l=t(83249),u=t(62197),d=t(48289),p=t(9390),f=t(99118),v=t(87042),m=t(23490),h=t(94656),P=t(52309),b=t(41205),x=t(25237),g=t.n(x),y=t(2784),Z=t(8740),L=g()(function(){return t.e(82143).then(t.bind(t,82143)).then(function(e){return e.CrawlableMenuDropdownContent})},{loadableGenerated:{webpack:function(){return[82143]}},ssr:!0}),k=(0,Z.ZL)()(function(e,n){var t=e.tokens.fontWeight,r=n.isPricingDropdown;return{dropdown:(0,o.Z)((0,a.Z)({},r&&{position:"relative"}),{display:"inline-block"}),buttonLabel:{fontSize:"inherit",fontWeight:t.bold}}}),C=function(e){var n=e.buttonLabel,t=e.buttonClasses,r=e.links,i=e.clickAnalyticsLabel,a=e.href,o=e.target,d=e.openedMenu,x=e.setOpenedMenu,g=e.parentLinkId,Z=k({isPricingDropdown:/^\/pricing/.test(a)}).classes,C=(0,s.Z)((0,y.useState)(!1),2),j=C[0],w=C[1],S=(0,s.Z)((0,y.useState)(0),2),_=S[0],M=S[1],I=(0,y.useRef)(),N=(0,s.Z)((0,y.useState)(),2),T=N[0],A=N[1],D=T===r.length-1,B=0===T,O=(0,P.B)(j),E=(0,m.N)().isGoodBot,F=(0,h.l)("utlz-493-adding-language-selector-to-top-nav").variationId,G=function(){clearTimeout(_),w(!0),x(a)},V=(0,y.useCallback)(function(){clearTimeout(_),w(!1),A(void 0),x(null)},[_,x]),H=function(){"variantA"===F&&/^\/pricing/.test(a)?V():M(setTimeout(V,1e3))},z=function(e){if(e.key===v.Mf&&!e.shiftKey){if(e.preventDefault(),D){V();return}w(!0),A(void 0===T?0:T+1)}if(e.key===v.Mf&&e.shiftKey){if(void 0===T){V();return}if(B){setTimeout(function(){var e;return null==I?void 0:null===(e=I.current)||void 0===e?void 0:e.focus()},0),A(void 0);return}A(T-1)}};return(0,y.useEffect)(function(){var e=d===a;d&&!e&&j&&!e&&V()},[d,a,j,V]),(0,c.jsx)(f.Z,{onClickAway:V,children:(0,c.jsxs)("div",{className:Z.dropdown,onMouseLeave:function(){return j&&H()},children:[(0,c.jsx)(l.Z,{"aria-controls":j?"".concat(n,"-menu"):void 0,"aria-haspopup":"true","aria-label":n,"data-automation":"menuDropDownButton_".concat(n),linkAs:a||r[0].as,classes:t,clickAnalyticsLabel:i,component:p.r,endIcon:(0,c.jsx)(b._,{}),href:a||r[0].href,target:o,variant:"text",onKeyDown:z,onMouseEnter:G,onMouseLeave:V,onClick:V,ref:I,children:(0,c.jsx)(u.Z,{className:Z.buttonLabel,color:"inherit",children:n})}),(O||E)&&(0,c.jsx)(L,{links:r,href:a,buttonLabel:n,isMenuOpen:j,openMenu:G,closeMenu:H,closeMenuNow:V,optionSelectedIndex:T,handleTabNavigation:z,isLastItem:D,parentLinkId:g})]})})},j=t(5129),w=t(80907),S=function(){return null},_=t(88849),M=t(26297),I=t(46379),N=t(47999),T=g()(function(){return t.e(59444).then(t.bind(t,59444)).then(function(e){return e.GenericLicensePlanDialog})},{loadableGenerated:{webpack:function(){return[59444]}},ssr:!0}),A=t(67550),D={redCircle:{position:"absolute",top:-3,right:-8,backgroundColor:"red",borderRadius:"50%",width:8,height:8}},B=g()(function(){return t.e(59444).then(t.bind(t,59444)).then(function(e){return e.GenericLicensePlanDialog})},{loadableGenerated:{webpack:function(){return[59444]}},ssr:!0}),O="utlz_506_has_interacted",E={flagID:"utlz-506-credit-add-on",id:"UTLZ-506",name:"Credit Add On",treatments:(r={},(0,i.Z)(r,_.NM,function(e){var n=e.experiment;return(0,y.useEffect)(function(){n.recordImpression()},[]),(0,c.jsx)(S,{})}),(0,i.Z)(r,_.vG,function(e){var n=e.experiment,t=e.initialProps,r=(0,j.y)(),i=r.classes,s=r.cx,l=(0,I.L)(),d=t.children,p=t.clickAnalyticsLabel,f=(0,M.Z)(t,["children","clickAnalyticsLabel"]);return(0,y.useEffect)(function(){n.recordImpression()},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(N.z,(0,o.Z)((0,a.Z)({},f),{labelTrack:p,variant:"text",onClick:function(){return l.setDialogOpen(!0)},children:(0,c.jsx)(u.Z,{className:s(i.navPrimary,i.pointerEventsAuto,i.bold,i.navSecondaryLink,i.sstkPrimaryNavLinks),color:"inherit",children:d})})),l.isDialogOpen&&(0,c.jsx)(T,(0,a.Z)({},l))]})}),(0,i.Z)(r,_._Z,function(e){var n=e.experiment,t=e.initialProps,r=(0,s.Z)((0,y.useState)(!1),2),i=r[0],l=r[1],d=(0,j.y)(),p=d.classes,f=d.cx,v=(0,I.L)(),m=t.children,h=t.clickAnalyticsLabel,P=(0,M.Z)(t,["children","clickAnalyticsLabel"]);return(0,y.useEffect)(function(){n.recordImpression(),l(Boolean(localStorage.getItem(O)));var e=function(e){var n=e.key,t=e.newValue;n===O&&l(Boolean(t))};return window.addEventListener("storage",e),window.removeEventListener("storage",e)},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(N.z,(0,o.Z)((0,a.Z)({},P),{labelTrack:h,variant:"text",onClick:function(){v.setDialogOpen(!0),localStorage.setItem(O,"true"),l(!0)},children:(0,c.jsxs)(A.Z,{position:"relative",display:"inline-block",children:[(0,c.jsx)(u.Z,{className:f(p.navPrimary,p.pointerEventsAuto,p.bold,p.navSecondaryLink,p.sstkPrimaryNavLinks),color:"inherit",children:m}),(0,c.jsx)(A.Z,{"aria-label":"red circle",sx:i?null:D.redCircle})]})})),v.isDialogOpen&&(0,c.jsx)(B,(0,a.Z)({},v))]})}),r)},F=function(){return(0,c.jsx)(c.Fragment,{})},G=function(e){return(0,c.jsx)(w.C,{config:E,initialProps:e,Portal:S,SkeletonLoader:F})},V=t(9823),H=t(50930),z=t(81034),R=t(30299),U=t(73906),q=t(85801),K=g()(function(){return t.e(82143).then(t.bind(t,82143)).then(function(e){return e.CrawlableMenuDropdownContent})},{loadableGenerated:{webpack:function(){return[82143]}},ssr:!0}),$=(0,Z.ZL)()(function(e){var n=e.tokens,t=n.color;return{dropdown:{display:"inline-block"},overflowMenuButton:{marginRight:n.spacing["4xl"],color:t["black-50"]}}}),Y=function(e){var n=e.links,t=e.clickAnalyticsLabel,r=e.href,i=e.openedMenu,a=e.setOpenedMenu,o=$().classes,l=(0,s.Z)((0,y.useState)(!1),2),u=l[0],d=l[1],p=(0,s.Z)((0,y.useState)(0),2),h=p[0],b=p[1],x=(0,y.useRef)(),g=(0,s.Z)((0,y.useState)(),2),Z=g[0],L=g[1],k=Z===n.length-1,C=0===Z,j=(0,P.B)(u),w=(0,m.N)().isGoodBot,S=function(){clearTimeout(h),d(!0),a(r)},_=(0,y.useCallback)(function(){clearTimeout(h),d(!1),L(void 0),a(null)},[h,a]),M=function(){b(setTimeout(_,1e3))},I=function(e){if(e.key===v.Mf&&!e.shiftKey){if(e.preventDefault(),k){_();return}d(!0),L(void 0===Z?0:Z+1)}if(e.key===v.Mf&&e.shiftKey){if(void 0===Z){_();return}if(C){setTimeout(function(){return null==x?void 0:x.current},0),L(void 0);return}L(Z-1)}};return(0,y.useEffect)(function(){var e=i===r;i&&!e&&u&&!e&&_()},[i,r,u,_]),(0,c.jsx)(f.Z,{onClickAway:_,children:(0,c.jsxs)("div",{className:o.dropdown,onMouseLeave:function(){return u&&M()},children:[(0,c.jsx)(N.z,{"aria-controls":u?"overflow-menu":void 0,"aria-haspopup":"true","aria-label":"overflow-menu","data-automation":"menuDropDownButton_overflow-menu",component:q.Z,variant:"text",onKeyDown:I,onMouseEnter:S,onMouseLeave:_,className:o.overflowMenuButton,clickTrackProp:"clickAnalyticsLabel",clickAnalyticsLabel:t,children:(0,c.jsx)(U.Z,{})}),(j||w)&&(0,c.jsx)(K,{links:n,subMenuCols:n,buttonLabel:"",isMenuOpen:u,openMenu:S,closeMenu:M,closeMenuNow:_,optionSelectedIndex:Z,handleTabNavigation:I,isLastItem:k,href:"",useInViewFlag:!0})]})})},W=function(e){var n=e.responsiveLinkProps,t=e.overflowMenuItems,r=e.setOverflowMenuItems,i=e.link,l=e.nextItem,u=e.primaryItems,p=e.openedMenu,f=e.setOpenedMenu,v=e.children,h=(0,j.y)().classes,P=(0,s.Z)((0,y.useState)(null),2)[1],b=function(){return P(null)},x=(0,y.useMemo)(function(){return u.filter(function(e){return t.find(function(n){return n.label===e.label})})},[t,u]),g=x[0]&&x[0].label===(null==l?void 0:l.label);(0,y.useEffect)(function(){return null==window||window.addEventListener("resize",b),function(){window.removeEventListener("resize",b)}},[]);var Z=(0,s.Z)((0,y.useState)(!0),2),L=Z[0],k=Z[1],C=(0,m.N)().isGoodBot,w=(0,R.YD)({threshold:.96,initialInView:!0,rootMargin:"500px 0px 0px 0px",onChange:function(e){k(e),e||C?r(function(e){var n=e.filter(function(e){return e.label!==i.label});return(0,H.Z)(n)}):r(function(e){return e.find(function(e){return e.label===i.label})?e:[i].concat((0,H.Z)(e))})}}).ref;return(0,c.jsxs)("div",{className:h.primaryNavItem,ref:w,children:[(0,c.jsx)("div",(0,o.Z)((0,a.Z)({},n),{className:L?h.showPrimaryNavItem:h.hidePrimaryNavItem,children:v})),g&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.Z,{className:h.overflowButtonDivider,orientation:"vertical"}),(0,c.jsx)(Y,{links:x,clickAnalyticsLabel:z.Yjv,href:"overflow",openedMenu:p,setOpenedMenu:f})]})]})},J=function(e){var n=e.classesProps,t=e.isPrimary,r=void 0!==t&&t,f=e.links,v=e.className,m=(0,j.y)(),h=m.classes,P=m.cx,b=(0,V.D)().isBrandSstk,x=(0,s.Z)((0,y.useState)(null),2),g=x[0],Z=x[1],L=(0,s.Z)((0,y.useState)([]),2),k=L[0],w=L[1];return(0,c.jsx)(c.Fragment,{children:f.map(function(e,t){var s,m,x=e.id,L=e.clickAnalyticsLabel,j=e.label,S=e.href,_=e.isAbsoluteUrl,M=e.isCoreUrl,I=e.subMenuLinks,N=e.hideLgDown,T=e.hideLgCustomDown,A=e.hideLgCustomUp,D=e.hasLeftDivider,B=e.target,O=e.dataOptimize,E=e.hasRightDivider,F=e.onClick,V=N||T||A?{className:P((s={},(0,i.Z)(s,h.hideLgCustomDown,T),(0,i.Z)(s,h.hideLgDown,N),(0,i.Z)(s,h.hideLgCustomUp,A),s))}:{},H=(0,c.jsx)(l.Z,{"aria-label":j,className:P(h.navPrimary,h.pointerEventsNone,null==n?void 0:n.textColor,0===t&&r?h.navPrimaryLeftSpace:h.navSpacing,v),clickAnalyticsLabel:L,component:p.r,onMouseEnter:function(){return g&&Z(S)},href:S,isAbsoluteUrl:_,rel:S?"noopener noreferrer":void 0,isCoreUrl:M,role:"link",target:B||(M?"_blank":"_self"),variant:"text","data-optimize":O,children:(0,c.jsx)(u.Z,{className:P(h.navPrimary,h.pointerEventsAuto,h.bold,null==n?void 0:n.textColor,(m={},(0,i.Z)(m,h.sstkPrimaryNavLinks,b),(0,i.Z)(m,h.navSecondaryLink,!r),m)),color:"inherit",children:j})});return I&&(H=(0,c.jsx)("div",{className:v,"data-optimize":O,children:(0,c.jsx)(C,{buttonClasses:{root:P(h.navPrimary,h.navSpacing,null==n?void 0:n.textColor,(0,i.Z)({},h.sstkPrimaryNavLinks,b)),endIcon:h.endIcon},buttonLabel:j,parentLinkId:null==e?void 0:e.id,href:S,links:I,clickAnalyticsLabel:L,target:B,openedMenu:g,setOpenedMenu:Z})})),"addMoreCredits"===x&&(H=(0,c.jsx)(G,{"aria-label":j,className:P(h.navPrimary,h.pointerEventsNone,null==n?void 0:n.textColor,0===t&&r?h.navPrimaryLeftSpace:h.navSpacing,v),clickAnalyticsLabel:L,onClick:F,"data-optimize":O,children:j})),(0,c.jsx)(y.Fragment,{children:(0,c.jsxs)(W,(0,o.Z)((0,a.Z)({},V),{overflowMenuItems:k,setOverflowMenuItems:w,link:e,nextItem:f[t+1],primaryItems:f,openedMenu:g,setOpenedMenu:Z,children:[D&&(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsx)(d.Z,{className:h.divider,orientation:"vertical"})]}),H,E&&(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsx)(d.Z,{className:h.divider,orientation:"vertical"})]})]}))},j)})})}},46379:function(e,n,t){t.d(n,{L:function(){return m}});var r=t(70865),i=t(96670),a=t(87394),o=t(68052),s=t(89416),c=t(31295),l=t(60591),u=t(41594),d=t(77357),p=t(2784),f=t(31880),v=function(e){var n=e.t;return{chooseAPlan:n("".concat(o.AH,"::choose_a_plan")),subTitle:n("ready_to_purchase_details_2"),title:n("download_this_image"),buyNow:n("".concat(o.Fx_,"::common:actions_buy_now"))}},m=function(){var e=(0,a.Z)((0,p.useState)(!1),2),n=e[0],t=e[1],m=(0,a.Z)((0,p.useState)({}),2),h=m[0],P=m[1],b=v({t:(0,f.$G)([o.jp2]).t}),x=(0,d.L)({queryParams:l.tT}),g=(0,u.Q)({productOverride:(0,i.Z)((0,r.Z)({},h),{eligibleForRebilling:!1}),productType:l.Cs}).createOrderHandler;return{isDialogOpen:n,setDialogOpen:t,labels:b,sections:(0,s.L)({isStandardLicense:!0,isStandardOnDemandPack:!0}).sections,isStandardLicense:!1,selectedProductLicenseType:{license:"standard"},setSelectedProductToBuy:P,products:x,actionButton:c.v,actionButtonProps:{onCtaClick:g,ctaLabel:b.buyNow,productType:l.Cs,isBestValue:!0,analyticsLabel:"buyNow"}}}},89416:function(e,n,t){t.d(n,{L:function(){return u}});var r=t(70865),i=t(68052),a=t(66680),o=t(58332),s=t(16452),c=t(59877),l=t(2784),u=function(e){var n=e.isStandardLicense,t=e.isStandardOnDemandPack,u=(0,c.$G)([i.AH]).t,d=(0,o.s)(),p=s.Kc,f=(0,l.useMemo)(function(){return{title:u("subscriptions"),ProductSelectorsComponent:p,productSelectorsMap:a.MA}},[u,p]),v=(0,l.useMemo)(function(){return{title:u(d?"pricing::flex-geo-hold-out:pricing_card_title_on_demand":"credit_packs"),ProductSelectorsComponent:p,productSelectorsMap:a.MA}},[u,p,d]),m=t&&[(0,r.Z)({index:1},v)],h=[(0,r.Z)({index:1},v),(0,r.Z)({index:0},f)],P=[(0,r.Z)({index:0},v)];return{sections:m||(n?h:P)}}},52908:function(e,n,t){t.d(n,{j:function(){return a},x:function(){return i}});var r=t(2784),i=(0,r.createContext)({}),a=(0,r.createContext)({})},43801:function(e,n,t){t.d(n,{C:function(){return a},v:function(){return o}});var r=t(52908),i=t(2784),a=function(){return(0,i.useContext)(r.x)},o=function(){return(0,i.useContext)(r.j)}},64106:function(e,n,t){t.d(n,{T:function(){return r},s:function(){return i}});var r="p3-1920-INR",i="P3-1920"},16452:function(e,n,t){t.d(n,{Kc:function(){return J}});var r,i=t(70865),a=t(96670),o=t(52322),s=t(21647),c=t(80907),l=t(14985),u=t(81643),d=t(14625),p=t(47842),f=t(13011),v=(0,t(8740).ZL)()(function(e){var n=e.breakpoints;return{root:(0,p.Z)({},n.down("lg"),{minWidth:f.r0})}}),m=t(67550),h=t(70180),P=t(62197),b=t(68052),x=t(52417),g=t(65532),y=t(88849),Z=t(94656),L=t(64106),k=t(60538),C=t(36532),j=t(84853),w=t(59877),S=function(e){var n=e.classes,t=void 0===n?{}:n,r=e.caption,i=e.ItemComponent,a=e.onValueChange,s=e.paymentPlans,c=e.selectedPaymentPlanName,l=e.selectedProductLicenseType,u=e.title,d=e.isLicensingDrawer,p=(0,Z.l)(k.T).variationId,f=(0,Z.l)(L.T).variationId,v=p===y.vG,h=f===y.vG,S="BR"===(0,g.PE)().region,_=(0,C.H)(),M=(0,w.$G)(b.Fx_).t;return(0,o.jsxs)(m.Z,{pb:5,children:[(0,o.jsx)(m.Z,{pb:3,className:t.paymentPlanSelectValueListContainer,children:(0,o.jsx)(x.H,{title:u,values:s,onValueChange:a,ItemComponent:i,itemProps:{selectedItemId:c,selectedProductLicenseType:l}})}),(0,o.jsx)(o.Fragment,{children:(0,j.FT)(r).map(function(e,n){return(0,o.jsx)(m.Z,{children:(0,o.jsx)(P.Z,{className:t.paymentPlanSelectValueListCaptions,variant:"caption",color:"textSecondary","aria-label":"On Demand Caption",children:v&&S&&s[0].name.includes("credit_pack")&&(0,o.jsxs)(o.Fragment,{children:[M("on_demand_pack_specific_caption",{ns:b.AH})," ",M("prices_shown_in_brl_addl_taxes_may_apply")]})||h&&_&&d&&(0,o.jsxs)(o.Fragment,{children:[M("on_demand_pack_specific_caption",{ns:b.AH})," ",M("prices_shown_in_inr_addl_taxes_may_apply")]})||e})},"cap-".concat(n))})})]})};S.defaultProps={caption:"",onValueChange:function(){},paymentPlans:[],isLicensingDrawer:!1};var _=t(78871),M=t(30902),I=t(92085),N=t(57994),T=t(28473),A={feature:S,id:N.P,variations:[function(e){var n=e.classes,t=void 0===n?{}:n,r=e.caption,s=e.onValueChange,c=e.paymentPlans,l=e.selectedPaymentPlanName,u=e.selectedProductLicenseType,d=e.title,p=e.isLicensingDrawer,f=e.p3VariantAProducts,v=(0,w.$G)(b.Fx_).t,h=c.map(function(e){var n=null==f?void 0:f.find(function(n){return n.name===e.name});return n?(0,a.Z)((0,i.Z)({},e),{product:n}):e});return(0,o.jsxs)(m.Z,{pb:5,children:[(0,o.jsx)(m.Z,{pb:3,className:t.paymentPlanSelectValueListContainer,children:(0,o.jsx)(x.H,{title:d,values:h,onValueChange:s,ItemComponent:T.p,itemProps:{selectedItemId:l,selectedProductLicenseType:u}})}),(0,o.jsx)(o.Fragment,{children:(0,j.FT)(r).map(function(e,n){var r,i;return(0,o.jsx)(m.Z,{children:(0,o.jsx)(P.Z,{className:t.paymentPlanSelectValueListCaptions,variant:"caption",color:"textSecondary","aria-label":"On Demand Caption",children:p&&0!==h.length&&(null===(r=h[0])||void 0===r?void 0:null===(i=r.name)||void 0===i?void 0:i.includes("credit_pack"))&&(0,o.jsxs)(o.Fragment,{children:[v("on_demand_pack_specific_caption",{ns:b.AH})," ",v("prices_shown_in_inr_addl_taxes_may_apply")]})||e})},"cap-".concat(n))})})]})}]},D=(0,I.h)(A.feature,A.id,A.variations),B=t(44297),O=t(43637),E=function(e){var n,t,r,i,a,s=e.classes,c=void 0===s?{}:s,l=e.actions,u=e.data,d=e.selectedProductLicenseType,p=e.selectedItemName,f=e.formattedPriceResetProducts,v=e.asset,P=(0,C.H)(),b=(0,B.aT)(v)&&!(0,B.N3)(v)&&!(0,B.f8)(v),x=(0,B.PD)({channels:null==v?void 0:v.channels}),g=(0,O.k7)({asset:v}),y=P&&b&&!x&&!g?D:S;return(0,o.jsxs)(o.Fragment,{children:[u.tabs&&(0,o.jsx)(m.Z,{pb:4,className:c.imageProductSelectorComponentTabsContainer,children:(0,o.jsx)(h.Z,{className:c.imageProductSelectorComponentTabs,value:u.tabIndex,onChange:l.onTabChange,indicatorColor:"primary",textColor:"inherit",children:u.tabs.map(function(e){var n=e.label,t=e.analyticsLabel;return(0,o.jsx)(M.O,{className:c.imageProductSelectorComponentTab,label:n,labelTrack:t},n)})})}),(0,o.jsx)(y,{classes:c,caption:null===(n=u.productSelector)||void 0===n?void 0:null===(t=n.labels)||void 0===t?void 0:t.caption,ItemComponent:_.p,onValueChange:l.onItemSelect,paymentPlans:null===(r=u.productSelector)||void 0===r?void 0:r.items,selectedPaymentPlanName:p,selectedProductLicenseType:d,title:null===(i=u.productSelector)||void 0===i?void 0:null===(a=i.labels)||void 0===a?void 0:a.title,isLicensingDrawer:!0,p3VariantAProducts:f})]})};E.defaultProps={action:{},classes:{},data:{}};var F=t(87394),G=t(1104),V=t(60591),H=t(44442),z=t(2784),R=t(66680),U=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.initialTabIndex,r=n.productSelectorsMap,o=void 0===r?{}:r,s=n.products,c=n.selectedProductLicenseType,l=n.setSelectedProductToBuy,u=void 0===l?function(){return""}:l,f=n.overrideTabs,v=n.p3VariantAProducts,m=n.asset,h=(0,w.$G)([b.AH,b.Fx_,b.S69]).t,P=(0,H.U)({asset:m})?void 0===v?[]:v:void 0===s?[]:s,x=(0,g.PE)(),y=(0,F.Z)((0,z.useState)(void 0===t?0:t),2),Z=y[0],L=y[1],k=(0,z.useCallback)(function(e,n){L(n)},[]),C=(0,z.useMemo)(function(){return(0,G.Gk)({productSelectorsMap:o,products:P,t:h,locale:x})},[o,h,x,P]),j=(0,z.useMemo)(function(){return(0,G.JU)({tabs:f||d.wZ,t:h})},[h,f]),S=(0,z.useMemo)(function(){return c===V.HS?R.NP:0===Z?R.PU:d.Y$},[c,Z]),_=(0,z.useMemo)(function(){return C[S]},[S,C]),M=(0,F.Z)((0,z.useState)((0,G.aY)({productSelectorsMap:C})),2),I=M[0],N=M[1],T=(0,z.useCallback)(function(e){var n=e.name,t=e.product.id;u((0,G.lk)({id:t,products:P})),N(function(e){return(0,a.Z)((0,i.Z)({},e),(0,p.Z)({},S,{name:n,id:t}))})},[S,P,u]),A=null===(e=I[S])||void 0===e?void 0:e.name;return(0,z.useEffect)(function(){if(I&&I[S]){var e=I[S].id;u((0,G.lk)({id:e,products:P}))}},[S,I]),{actions:{onTabChange:k,onItemSelect:T},data:{productSelector:_,tabs:(0,z.useMemo)(function(){return c===V.HS?null:j},[c,j]),tabIndex:Z,selectedItemName:A}}},q=function(e){var n=e.classes,t=void 0===n?{}:n,r=e.initialTabIndex,a=e.products,s=e.productSelectorsMap,c=void 0===s?d.GN:s,l=e.selectedProductLicenseType,u=e.setSelectedProductToBuy,p=e.shouldShowSelection,f=e.overrideTabs,m=e.formattedPriceResetProducts,h=void 0===m?[]:m,P=e.asset,b=void 0===P?{}:P,x=v(),g=x.classes,y=x.cx,Z=(0,i.Z)({},t,{root:y(g.root,t.root)}),L=U({initialTabIndex:void 0===r?0:r,productSelectorsMap:c,products:a,selectedProductLicenseType:l,setSelectedProductToBuy:u,overrideTabs:void 0===f?void 0:f,p3VariantAProducts:h,asset:b}),k=L.actions,C=L.data;return(0,o.jsx)(E,{actions:k,classes:Z,data:C,selectedProductLicenseType:l,selectedItemName:(void 0===p||p)&&C.selectedItemName||"",formattedPriceResetProducts:h,asset:b})},K=function(e){var n=e.initialProps;return(0,o.jsx)(q,(0,i.Z)({},n))},$=(r={},(0,p.Z)(r,y.NM,function(e){var n=e.experiment,t=e.initialProps;return(0,z.useEffect)(function(){n.recordImpression()},[]),(0,o.jsx)(K,{initialProps:t})}),(0,p.Z)(r,y.vG,function(e){var n=e.experiment,t=e.initialProps,r=t.isGenerative?l.jw:l.GN;return(0,z.useEffect)(function(){n.recordImpression()},[]),(0,o.jsx)(K,{initialProps:(0,a.Z)((0,i.Z)({},t),{productSelectorsMap:r,overrideTabs:l.wZ})})}),r),Y=(0,a.Z)((0,i.Z)({},l.LL),{treatments:$}),W=function(){return(0,o.jsxs)("div",{"data-automation":"ImageProductSelector_Loading",children:[(0,o.jsx)(s.Z,{variant:"rectangular",height:42,style:{marginBottom:22}}),(0,o.jsxs)("div",{children:[(0,o.jsx)(s.Z,{variant:"rectangular",height:260,style:{marginBottom:8}}),(0,o.jsx)(s.Z,{variant:"rectangular",height:25})]})]})},J=function(e){return(0,u.A)()?(0,o.jsx)(c.C,{config:Y,initialProps:e,Portal:K,SkeletonLoader:W}):(0,o.jsx)(K,{initialProps:e})}},28473:function(e,n,t){t.d(n,{p:function(){return v}});var r=t(70865),i=t(96670),a=t(52322),o=t(34805),s=t(41957),c=t(9707),l=t(94054),u=t(24861),d=t(87414),p=t(22921),f=t(2784),v=function(e){var n=e.item,t=e.selectedItemId,v=e.selectedProductLicenseType,m=e.highlightComponent,h=(0,c.y)(),P=h.classes,b=h.cx,x=(0,p.o)(),g=n.product,y=n.discountPercentage,Z=(0,s._)({item:n,selectedItemId:t,selectedProductLicenseType:v}),L=null==g?void 0:g.downloadCredits,k=(0,f.useMemo)(function(){var e,n=g.allotmentCredits,t=(0,d.g7)({product:g}),r=(0,d.Dg)({product:g}),i=v===l.cNV,a=(0,d.Yc)({product:g}),o=a&&!r?12:1,s=null==g?void 0:null===(e=g.prices)||void 0===e?void 0:e.inr,c=a?(s/12).toFixed(2):s,u=(s/o/(t?i?n/20:n:L)).toFixed(2),p=y?((s-s/100*y)/o/(t?n:L)).toFixed(2):u;return{pricePerMonth:c,pricePerAsset:u,pricePerAssetDiscounted:p,pricePerPaymentInterval:s}},[y,L,g,v]),C=k.pricePerPaymentInterval,j=k.pricePerAsset,w=k.pricePerAssetDiscounted,S={formattedPricePerPaymentInterval:x({price:C,localeCurrencyOverride:"inr",priceType:u.Br}),formattedPricePerAsset:x({price:j,localeCurrencyOverride:"inr",priceType:u.Br}),formattedPricePerAssetDiscounted:x({price:w,localeCurrencyOverride:"inr",priceType:u.Br})},_=(0,i.Z)((0,r.Z)({},Z),{price:S.formattedPricePerPaymentInterval,pricePerAsset:S.formattedPricePerAsset,pricePerAssetDiscounted:S.formattedPricePerAssetDiscounted});return(0,a.jsx)(o.a,{classes:P,cx:b,data:_,labels:n.labels,highlightComponent:m})}},44442:function(e,n,t){t.d(n,{U:function(){return o}});var r=t(44297),i=t(43637),a=t(3093),o=function(e){var n=e.asset,t=(0,a.O)(),o=(0,r.aT)(n)&&!(0,r.N3)(n)&&!(0,r.f8)(n),s=(0,r.PD)({channels:null==n?void 0:n.channels}),c=(0,i.k7)(n);return t&&o&&!s&&!c}},38367:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(81740),i=t(49670),a=t(9009),o=t(3255),s=function(e){var n=e.queryParams;return(0,r.cF)({queryParams:n}).formattedUrl},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.queryParams,t=e.shouldFetch;return(0,o.ZP)(void 0===t||t?s({queryParams:void 0===n?{}:n}):null,function(e){return i.uS.get(e).then(function(e){return(0,a.O)(e.data)})})}},77357:function(e,n,t){t.d(n,{L:function(){return d}});var r=t(70865),i=t(96670),a=t(81740),o=t(65532),s=t(49670),c=t(9009),l=t(3255),u=function(e){var n=e.queryParams;return(0,a.Xp)({queryParams:n}).formattedUrl},d=function(e){var n=e.queryParams,t=e.products,a=void 0===t?[]:t,d=e.shouldFetch,p=(0,o.PE)().region,f=(null==a?void 0:a.length)||!(void 0===d||d)?null:u({queryParams:(0,i.Z)((0,r.Z)({},n),{country:p})}),v=(0,l.ZP)(f,function(e){return s.uS.get(e).then(function(e){return(0,c.O)(e.data)})}).data;return(null==a?void 0:a.length)?a:v}},70008:function(e,n,t){t.d(n,{B:function(){return i}});var r=t(65532),i=function(){return{isIndiaRegion:"IN"===(0,r.PE)().region}}}}]);
//# sourceMappingURL=SiteHeaderLinks.24cfac0f1adbe834.js.map