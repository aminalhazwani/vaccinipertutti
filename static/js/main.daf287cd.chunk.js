(this.webpackJsonpvaccinipertutti=this.webpackJsonpvaccinipertutti||[]).push([[0],{110:function(e,t,n){},112:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(0),c=n(11),r=n.n(c),o=n(79),s=n(13),l=n(14),j=n(80),u=n(173),d=(n(110),n(10)),b=n(58),m=n.n(b),h=n(154),O=n(157),f=n(177),p=n(184),g=n(180),x=n(161),v=n(175),w=n(181),D=n(168),C=n(169),S=n(170),y=n(171),k=n(172),z=n(162),_=n(163),I=n(164),T=n(165),F=n(166),E=n(167),P=n(151),N=n(182),A=n(152),M=n(153),Y=n(176),R=n(178),B=n(75),L=n(63);n(112);var U=function(){var e,t,n,c,r,o,s,j,u,b,U=Object(Y.a)(B),V=U.format(",d"),G=U.format(".1%"),J=Object(R.a)(L),W=J.format("%A %e %B %Y"),H=J.format("%B %Y"),Q=J.format("%Y-%M-%d"),q=Object(i.useState)({}),K=Object(d.a)(q,2),X=K[0],Z=K[1],$=Object(i.useState)([]),ee=Object(d.a)($,2),te=ee[0],ne=ee[1],ae=Object(i.useState)({}),ie=Object(d.a)(ae,2),ce=ie[0],re=ie[1],oe=Object(i.useState)(6e7),se=Object(d.a)(oe,2),le=se[0],je=se[1],ue=Object(l.d)("populationFraction",Object(l.e)(l.a,.7)),de=Object(d.a)(ue,2),be=de[0],me=de[1],he=Object(i.useState)([]),Oe=Object(d.a)(he,2),fe=Oe[0],pe=Oe[1],ge=Object(l.d)("area",Object(l.e)(l.c,"ITA")),xe=Object(d.a)(ge,2),ve=xe[0],we=xe[1],De=Object(i.useState)(new Date),Ce=Object(d.a)(De,2),Se=Ce[0],ye=Ce[1],ke=Object(l.d)("lastDays",Object(l.e)(l.a,7)),ze=Object(d.a)(ke,2),_e=ze[0],Ie=ze[1],Te=Object(i.useState)(new Date),Fe=Object(d.a)(Te,2),Ee=Fe[0],Pe=Fe[1],Ne=Object(l.d)("doses",Object(l.e)(l.a,2)),Ae=Object(d.a)(Ne,2),Me=Ae[0],Ye=Ae[1],Re=Object(i.useState)(0),Be=Object(d.a)(Re,2),Le=Be[0],Ue=Be[1],Ve=Object(i.useState)(0),Ge=Object(d.a)(Ve,2),Je=Ge[0],We=Ge[1],He=Object(i.useState)(0),Qe=Object(d.a)(He,2),qe=Qe[0],Ke=Qe[1],Xe=Object(i.useState)([]),Ze=Object(d.a)(Xe,2),$e=Ze[0],et=Ze[1],tt=Object(i.useState)([]),nt=Object(d.a)(tt,2),at=nt[0],it=nt[1],ct=Object(l.d)("targetMonth",Object(l.e)(l.a,8)),rt=Object(d.a)(ct,2),ot=rt[0],st=rt[1],lt=Object(l.d)("targetYear",Object(l.e)(l.a,(new Date).getFullYear())),jt=Object(d.a)(lt,2),ut=jt[0],dt=jt[1],bt=Object(i.useState)(new Date),mt=Object(d.a)(bt,2),ht=mt[0],Ot=mt[1],ft=Object(i.useState)(0),pt=Object(d.a)(ft,2),gt=pt[0],xt=pt[1],vt=Object(i.useState)({}),wt=Object(d.a)(vt,2),Dt=wt[0],Ct=wt[1],St=Object(i.useState)(0),yt=Object(d.a)(St,2),kt=yt[0],zt=yt[1],_t=Object(i.useState)(0),It=Object(d.a)(_t,2),Tt=It[0],Ft=It[1],Et=Object(i.useState)(0),Pt=Object(d.a)(Et,2),Nt=Pt[0],At=Pt[1],Mt=Object(i.useState)(!1),Yt=Object(d.a)(Mt,2),Rt=Yt[0],Bt=Yt[1];function Lt(){Bt(!1)}return Object(i.useEffect)((function(){window.fetch("../vaccinipertutti-data/last-update-dataset.json").then((function(e){return e.json()})).then((function(e){ye(new Date(e.ultimo_aggiornamento))})),window.fetch("../vaccinipertutti-data/popolazione_residente_2020.json").then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return Object(P.a)(e.order,t.order)}))})).then((function(e){pe(e),re(Object.fromEntries(Object(N.a)(e,(function(e){return e.area}))))})),window.fetch("../vaccinipertutti-data/campaign-milestones.json").then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return Object(P.a)(e.startDate,t.startDate)}))})).then((function(e){return e.filter((function(e){return new Date(e.startDate)<new Date&&new Date(e.endDate)>new Date}))})).then((function(e){Ct(null===e||void 0===e?void 0:e[0])})),window.fetch("../vaccinipertutti-data/somministrazioni-vaccini-summary-latest.json").then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return e.sort((function(e,t){return Object(A.a)(e.data_somministrazione,t.data_somministrazione)}))})).then((function(e){Z(Object.fromEntries(Object(N.a)(e,(function(e){return e.area}))))}))}),[]),Object(i.useEffect)((function(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth()+1,0),n=new Date(ut,ot+1,0);console.log(t,n),n>t?Ot(new Date(ut,ot+1,0)):(st(ht.getMonth()),dt(ht.getFullYear()))}),[ot,ut]),Object(i.useEffect)((function(){ne(X[ve]||[])}),[X,ve]),Object(i.useEffect)((function(){ce[ve]&&je(ce[ve][0].totale)}),[ce,ve]),Object(i.useEffect)((function(){et(Object(N.b)(te,(function(e){return Object(M.a)(e,(function(e){return e.totale}))}),(function(e){return Q(new Date(e.data_somministrazione))}))),Ue(Object(M.a)(te,(function(e){return e.totale})))}),[te]),Object(i.useEffect)((function(){xt(Je/(ht-new Date)*1e3*60*60*24)}),[ht,Je]),Object(i.useEffect)((function(){it(Object(M.a)($e.slice(1,_e+1),(function(e){return e[1]}))/_e)}),[$e,_e]),Object(i.useEffect)((function(){We(Me*le*be-Le)}),[Me,le,be,Le]),Object(i.useEffect)((function(){var e=Je/at,t=new Date;t.setDate(t.getDate()+Math.round(e)),Ke(e),Pe(t)}),[Je,at]),Object(i.useEffect)((function(){zt((new Date(Dt.endDate)-new Date)/864e5),Ft(Me*Dt.total-Le)}),[Me,Dt,Le]),Object(i.useEffect)((function(){At(Tt/kt)}),[Tt,kt]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h.a,{className:"container",maxWidth:"md",style:{opacity:+!!te.length},children:Object(a.jsxs)(O.a,{container:!0,direction:"column",justify:"center",spacing:2,children:[Object(a.jsxs)(O.a,{item:!0,className:"supTitle",children:["Termine previsto della campagna vaccinale in ",Object(a.jsx)("em",{children:null===(e=ce[ve])||void 0===e||null===(t=e[0])||void 0===t?void 0:t.nome})," contro Sars-CoV-2."]}),Object(a.jsx)(O.a,{item:!0,component:"h1",className:"mainTitle",children:W(Ee)}),Object(a.jsxs)(O.a,{item:!0,className:"mainText",children:["In ",Object(a.jsx)(f.a,{value:fe.length?ve:"",onChange:function(e){return we(e.target.value)},children:fe.map((function(e){return Object(a.jsx)(p.a,{value:e.area,children:e.nome},e.area)}))})," si \xe8 iniziato a somministrare il primo vaccino il ",Object(a.jsx)("em",{children:"27 dicembre 2020"}),". A ",Se.getDate()===(new Date).getDate()?"oggi":"ieri",", ",Object(a.jsx)("em",{children:W(Se).toLowerCase()}),", sono state somministrate ",Object(a.jsx)("em",{children:V(Le)})," dosi, ma ne mancano ",Object(a.jsx)("em",{children:V(Je)})," per vaccinare il ",Object(a.jsx)(g.a,{value:100*be,onChange:function(e){return me(+e.target.value/100)},size:"small",inputProps:{type:"number",min:60,max:100,step:5},InputProps:{endAdornment:Object(a.jsx)(x.a,{position:"end",children:"%"})}})," della popolazione con ",Object(a.jsx)(g.a,{value:Me,onChange:function(e){return Ye(+e.target.value)},size:"small",inputProps:{type:"number",min:1,max:2,step:1}})," dosi a testa."]}),Object(a.jsxs)(O.a,{item:!0,className:"mainText",children:["Al ritmo di ",Object(a.jsx)("em",{children:V(at)})," somministrazioni al giorno tenuto negli ultimi ",Object(a.jsx)(g.a,{value:_e,onChange:function(e){return Ie(+e.target.value)},size:"small",inputProps:{type:"number",min:1,max:$e.length,step:1}})," giorni, mancano ",Object(a.jsxs)("em",{children:[Math.floor(qe/365)," anni, ",Math.floor(qe%365/30)," mesi e ",Math.floor(qe%12)," giorni"]})," prima di raggiungere ",Object(a.jsx)("em",{children:"l'immunit\xe0 di gregge"}),"."]}),Object(a.jsxs)(O.a,{item:!0,className:"mainText",children:["Per ottenerla entro ",Object(a.jsx)(f.a,{value:ot,onChange:function(e){return st(+e.target.value)},children:L.months.map((function(e,t){return Object(a.jsx)(p.a,{value:t,children:e.toLocaleLowerCase()},t)}))})," ",Object(a.jsx)(g.a,{value:ut,onChange:function(e){return dt(+e.target.value)},size:"small",inputProps:{type:"number",min:(new Date).getFullYear(),max:(new Date).getFullYear()+10,step:1}})," bisognerebbe somministrare una media di ",Object(a.jsx)("em",{children:V(gt)})," dosi al giorno."]}),"ITA"===ve?Nt<at?Object(a.jsxs)(O.a,{item:!0,className:"mainText",children:["Il ritmo attuale \xe8 in linea con il prossimo obiettivo di vaccinare ",Object(a.jsx)("em",{children:V(Dt.total)})," persone (",null===(n=Dt.people)||void 0===n?void 0:n.map((function(e){return e.type})).join(", "),") entro ",Object(a.jsx)("em",{children:H(new Date(Dt.endDate))}),"."]}):Object(a.jsxs)(O.a,{item:!0,className:"mainText",children:["Il ritmo attuale dovrebbe aumentare del ",Object(a.jsx)("em",{children:G((Nt-at)/Nt)})," per raggiungere il prossimo obiettivo di vaccinare ",Object(a.jsx)("em",{children:V(Dt.total)})," persone (",null===(c=Dt.people)||void 0===c?void 0:c.map((function(e){return e.type})).join(", "),") entro ",Object(a.jsx)("em",{children:H(new Date(Dt.endDate))}),"."]}):null,Object(a.jsxs)(O.a,{item:!0,className:"footerText",children:["Un progetto a cura dell'",Object(a.jsx)("a",{href:"https://ondata.it",target:"_blank",rel:"noreferrer",children:"Associazione onData"}),"."]}),Object(a.jsx)(v.a,{className:"Flower lt"}),Object(a.jsx)(v.a,{className:"Flower lb"}),Object(a.jsx)(v.a,{className:"Cube rt icon",children:Object(a.jsxs)(O.a,{container:!0,justify:"center",alignContent:"center",direction:"column",children:[Object(a.jsx)(O.a,{item:!0,xs:!0,children:Object(a.jsx)(z.a,{color:"primary",onClick:function(){Bt(!0)}})}),Object(a.jsx)(O.a,{item:!0,xs:!0,children:Object(a.jsx)("a",{title:"Condividi su Twitter",href:'https://twitter.com/share?text="'.concat(m.a.decode("Termine previsto della campagna vaccinale in ".concat(null===(r=ce[ve])||void 0===r||null===(o=r[0])||void 0===o?void 0:o.nome," contro Sars-CoV-2: ").concat(W(Ee))),'" via @ondatait&hashtags=datiBeneComune&url=').concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(a.jsx)(_.a,{color:"primary"})})}),Object(a.jsx)(O.a,{item:!0,xs:!0,children:Object(a.jsx)("a",{title:"Condividi su Facebook",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(window.location.href),"&hashtag=").concat(encodeURIComponent("#datiBeneComune")),target:"_blank",rel:"noreferrer",children:Object(a.jsx)(I.a,{color:"primary"})})}),Object(a.jsx)(O.a,{item:!0,xs:!0,children:Object(a.jsx)("a",{title:"Condividi su LinkedIn",href:"https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(a.jsx)(T.a,{color:"primary"})})}),Object(a.jsx)(O.a,{item:!0,xs:!0,children:Object(a.jsx)("a",{title:"Condividi via e-mail",href:'mailto:?subject="'.concat(m.a.decode("#datiBeneComune - Termine previsto della campagna vaccinale in ".concat(null===(s=ce[ve])||void 0===s||null===(j=s[0])||void 0===j?void 0:j.nome," contro Sars-CoV-2: ").concat(W(Ee))),'" via onData - APS&body=').concat(m.a.decode("In ".concat(null===(u=ce[ve])||void 0===u||null===(b=u[0])||void 0===b?void 0:b.nome," si \xe8 iniziato a somministrare il primo vaccino il 27 dicembre 2020")),"... Continua a leggere su ").concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(a.jsx)(F.a,{color:"primary"})})}),Object(a.jsx)(O.a,{item:!0,xs:!0,children:Object(a.jsx)("a",{title:"Permalink",href:window.location.href,target:"_blank",rel:"noreferrer",children:Object(a.jsx)(E.a,{color:"primary"})})})]})}),Object(a.jsx)(v.a,{className:"Flower rb"})]})}),Object(a.jsxs)(w.a,{open:Rt,onClose:Lt,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(a.jsx)(D.a,{id:"alert-dialog-title",children:'"Vaccini per tutti" by onData'}),Object(a.jsxs)(C.a,{children:[Object(a.jsxs)(S.a,{children:['"Vaccini per tutti" \xe8 un\'applicazione sperimentale che permette di stimare i tempi di avanzamento della campagna di vaccinazione in Italia sulla base degli open data ufficiali del ',Object(a.jsx)("a",{href:"https://github.com/italia/covid19-opendata-vaccini/",target:"_blank",rel:"noreferrer",children:"Commissario straordinario per l'emergenza Covid-19 - Presidenza del Consiglio dei Ministri"}),", dell'",Object(a.jsx)("a",{href:"https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione",target:"_blank",rel:"noreferrer",children:"Istituto Superiore di Sanit\xe0"})," e di ",Object(a.jsx)("a",{href:"http://demo.istat.it/popres/index.php?anno=2020&lingua=ita",target:"_blank",rel:"noreferrer",children:"ISTAT"}),"."]}),Object(a.jsxs)(S.a,{children:["L'applicazione \xe8 sviluppata e mantenuta da ",Object(a.jsx)("a",{href:"https://github.com/jenkin",target:"_blank",rel:"noreferrer",children:"@jenkin"})," per ",Object(a.jsx)("a",{href:"https://ondata.it/",target:"_blank",rel:"noreferrer",children:"onData APS"}),", associazione di promozione sociale che promuove l'apertura dei dati pubblici per renderli accessibili a tutte e tutti."]}),Object(a.jsxs)(S.a,{children:["Il codice sorgente \xe8 open source e rilasciato sotto licenza MIT su Github: ",Object(a.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti",target:"_blank",rel:"noreferrer",children:"ondata/vaccinipertutti"}),". Questa pagina \xe8 ospitata dal servizio ",Object(a.jsx)("a",{href:"https://pages.github.com/",target:"_blank",rel:"noreferrer",children:"Github Pages"})," e fa esclusivamente uso di cookie tecnici: non traccia n\xe9 profila in alcun modo gli utenti. Se vuoi fare una segnalazione, puoi ",Object(a.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/issues",target:"_blank",rel:"noreferrer",children:"aprire una issue"}),"."]}),Object(a.jsxs)(S.a,{children:["Puoi sostenere l'attivit\xe0 di onData in molti modi, ",Object(a.jsx)("a",{href:"https://sostieni.ondata.it/",target:"_blank",rel:"noreferrer",children:"dai un'occhiata"}),"!"]})]}),Object(a.jsx)(y.a,{children:Object(a.jsx)(k.a,{onClick:Lt,color:"secondary",autoFocus:!0,children:"Ho capito, grazie!"})})]})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))},G=Object(j.a)({palette:{secondary:{main:"#e82f7d"}},typography:{fontFamily:['"Titillium Web"',"sans-serif"]}});r.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(l.b,{ReactRouterRoute:s.a,children:Object(a.jsx)(u.a,{theme:G,children:Object(a.jsx)(U,{})})})}),document.getElementById("root")),V()}},[[118,1,2]]]);
//# sourceMappingURL=main.daf287cd.chunk.js.map