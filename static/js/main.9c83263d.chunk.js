(this["webpackJsonpsubway-website"]=this["webpackJsonpsubway-website"]||[]).push([[0],{17:function(e,t,s){},18:function(e,t,s){},21:function(e,t,s){},36:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var i=s(0),c=s(1),a=s.n(c),l=s(29),n=s.n(l),r=s(15),b=s(8),j=(s(36),["btn--primary","btn--outline"]),o=["btn--medium","btn--large"],d=function(e){var t=e.children,s=e.type,c=e.onClick,a=e.buttonStyle,l=e.buttonSize,n=j.includes(a)?a:j[0],r=o.includes(l)?l:o[0];return Object(i.jsx)(b.b,{to:"/subway-website/sign-up",className:"btn-mobile",children:Object(i.jsx)("button",{className:"btn ".concat(n," ").concat(r),onClick:c,type:s,children:t})})},x=(s(42),[{title:"\ube75",path:"/subway-website/ingredients/bread",cName:"dropdown-link"},{title:"\uc57c\ucc44",path:"/subway-website/ingredients/vegetable",cName:"dropdown-link"},{title:"\uce58\uc988",path:"/subway-website/ingredients/cheese",cName:"dropdown-link"},{title:"\uc18c\uc2a4",path:"/subway-website/ingredients/sauce",cName:"dropdown-link"}]);s(43);var u=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],a=t[1],l=function(){return a(!1)},n=function(){document.querySelector(".menu-icon .fas").click()};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("ul",{onClick:function(){return a(!s)},className:s?"dropdown-menu clicked":"dropdown-menu",children:x.map((function(e,t){return Object(i.jsx)("li",{onClick:l,children:Object(i.jsx)(b.b,{className:e.cName,to:e.path,onClick:n,children:e.title})},t)}))})})};var m=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],a=t[1],l=Object(c.useState)(!0),n=Object(r.a)(l,2),j=n[0],o=n[1],x=function(){return a(!1)},m=function(e){e.target.closest(".nav-dropdown")||document.querySelector(".dropdown-menu").classList.remove("active")},p=function(){window.innerWidth<=960?o(!1):o(!0)};return Object(c.useEffect)((function(){p()}),[]),Object(c.useEffect)((function(){return document.addEventListener("click",m),function(){document.removeEventListener("click",m)}})),window.addEventListener("resize",p),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar",children:Object(i.jsxs)("div",{className:"navbar-container",children:[Object(i.jsx)(b.b,{to:"/subway-website/",className:"navbar-logo",onClick:x,children:"\uc5b4\ucf00\ud588Sub"}),Object(i.jsx)("div",{className:"menu-icon",onClick:function(){return a(!s)},children:Object(i.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(i.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(b.b,{to:"/subway-website/",className:"nav-links",onClick:x,children:"\uc774\uc6a9 \ubc29\ubc95"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsxs)("div",{className:"nav-links nav-dropdown",onClick:function(){document.querySelector(".dropdown-menu").classList.toggle("active")},children:["\uc7ac\ub8cc \uc18c\uac1c ",Object(i.jsx)("i",{className:"fas fa-caret-down"}),Object(i.jsx)(u,{})]})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(b.b,{to:"/subway-website/combinations",className:"nav-links",onClick:x,children:"\uafc0 \uc870\ud569"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(b.b,{to:"/subway-website/sign-up",className:"nav-links-mobile",onClick:x,children:"Sign Up"})})]}),j&&Object(i.jsx)(d,{buttonStyle:"btn--outline",children:"SIGN UP"})]})})})},p=s(6);s(17),s(44);var O=function(){return Object(i.jsxs)("div",{className:"footer-container",children:[Object(i.jsxs)("section",{className:"footer-subscription",children:[Object(i.jsx)("p",{className:"footer-subscription-heading",children:"\uc601\ud654 \ub9c8\ub2c8\uc544, \ud53c\uc544\ub2c8\uc2a4\ud2b8\uc774\uc790 \ud480\uc2a4\ud0dd\uc744 \uc815\ubcf5\ud558\uace0\uc790 \ud558\ub294 \uac1c\ubc1c\uc790"}),Object(i.jsx)("p",{className:"footer-subscription-text",children:"\uae40\ud559\uc7ac\uc785\ub2c8\ub2e4"})]}),Object(i.jsx)("section",{className:"social-media",children:Object(i.jsxs)("div",{className:"social-media-wrap",children:[Object(i.jsx)("small",{className:"website-rights",children:"\uc5b4\ucf00\ud588Sub 2021 by KHJ"}),Object(i.jsxs)("div",{className:"social-icons",children:[Object(i.jsx)(b.b,{className:"social-icon-link github",to:{pathname:"https://github.com/gouz7514/subway-website"},target:"_blank","aria-label":"github",children:Object(i.jsx)("i",{className:"fab fa-github"})}),Object(i.jsx)(b.b,{className:"social-icon-link instagram",to:{pathname:"https://www.instagram.com/haaaaaaa_kjae/"},target:"_blank","aria-label":"instagram",children:Object(i.jsx)("i",{className:"fab fa-instagram"})})]})]})})]})},h=(s(18),s(56)),g=s(54),k=s(55),f=s(50),_=s(51),w=s(52),v=s(53),N=(s(45),s(46),s(47),s(11)),y=s(12),S=s(14),C=s(13);var B=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("li",{className:"ingredient__item",children:Object(i.jsxs)("div",{className:"ingredient__item__link",children:[Object(i.jsx)("figure",{className:"ingredient__item__pic-wrap","data-category":e.label,children:Object(i.jsx)("img",{src:e.src+"?tr=w-400,h-300,bl-30,q-50",alt:e.label+" \uc774\ubbf8\uc9c0",className:"cards__item__img","data-lazy":e.src})}),Object(i.jsx)("div",{className:"ingredient__item__info",children:Object(i.jsx)("h5",{className:"ingredient__item__text",children:e.text.replaceAll("<br>","\n")})})]})})})},E=(s(21),function(e){Object(S.a)(s,e);var t=Object(C.a)(s);function s(){return Object(N.a)(this,s),t.apply(this,arguments)}return Object(y.a)(s,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll("img"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var s=e.target,i=s.getAttribute("data-lazy");s.setAttribute("src",i),t.unobserve(s)}}))}));e.forEach((function(e){t.observe(e)}))}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"cards",children:Object(i.jsx)("div",{className:"cards__container",children:Object(i.jsxs)("div",{className:"cards__wrapper",children:[Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-bread/HoneyOat_UDQ6TNX8wy.jpg",text:"\uace0\uc18c\ud55c \uc704\ud2b8\ube75\uc5d0 \uc624\ud2b8\ubc00 \uac00\ub8e8\ub97c \ubb3b\ud600<br>\uace0\uc18c\ud568\uacfc \uc2dd\uac10\uc774 \ub450\ubc30\ub85c",label:"\ud5c8\ub2c8\uc624\ud2b8"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-bread/HeartyItalian_YpydItrCh8y.jpg",text:"\ubd80\ub4dc\ub7ec\uc6b4 \ud654\uc774\ud2b8\ube75\uc5d0 \uc625\uc218\uc218\uac00\ub8e8\ub97c \ubb3b\ud600<br>\uac89\uc740 \ubc14\uc0ad\ud558\uace0 \uace0\uc18c\ud558\uba70 \uc18d\uc740 \ubd80\ub4dc\ub7fd\uac8c",label:"\ud558\ud2f0 \uc774\ud0c8\ub9ac\uc548"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-bread/Wheat_hBM-PBPpH.jpg",text:"9\uac00\uc9c0 \uace1\ubb3c\ub85c \ub9cc\ub4e4\uc5b4<br>\uac74\uac15\ud558\uace0 \uace0\uc18c\ud55c \ub9db\uc758 \uace1\ubb3c\ube75",label:"\uc704\ud2b8"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-bread/ParmesanOregano_Z-N7c3fUPWP.jpg",text:"\ubd80\ub4dc\ub7ec\uc6b4 \ud654\uc774\ud2b8\ube75\uc5d0\r \ud30c\ub9c8\uc0b0 \uc624\ub808\uac00\ub178 \uc2dc\uc988\ub2dd\uc744 \ubb3b\ud600 \ud5c8\ube0c\ud5a5 \uac00\ub4dd",label:"\ud30c\ub9c8\uc0b0 \uc624\ub808\uac00\ub178"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-bread/White_dG2DtK4HgmS.jpg",text:"\uac00\uc7a5 \ud074\ub798\uc2dd\ud55c \ube75\uc73c\ub85c<br>\ubd80\ub4dc\ub7ec\uc6b4 \uc2dd\uac10\uc774 \ub9e4\ub825 \ud3ec\uc778\ud2b8",label:"\ud654\uc774\ud2b8"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-bread/FlatBread_0hrnT_OsX.jpg",text:"\uc774\ub984\ucc98\ub7fc \ub0a9\uc791 \ubaa8\uc591\uc5d0<br>\ud53c\uc790\ub3c4\uc6b0\ucc98\ub7fc \ucac0\ub4dd\ud55c \ub9db\uc774 \uc77c\ud488",label:"\ud50c\ub7ab \ube0c\ub808\ub4dc"})]})]})})})}}]),s}(a.a.Component)),A=function(e){Object(S.a)(s,e);var t=Object(C.a)(s);function s(){return Object(N.a)(this,s),t.apply(this,arguments)}return Object(y.a)(s,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll("img"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var s=e.target,i=s.getAttribute("data-lazy");s.setAttribute("src",i),t.unobserve(s)}}))}));e.forEach((function(e){t.observe(e)}))}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"cards",children:Object(i.jsx)("div",{className:"cards__container",children:Object(i.jsx)("div",{className:"cards__wrapper",children:Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-cheese/AmericanCheese_WzuI-V8DY.jpg",text:"40kcal",label:"\uc544\uba54\ub9ac\uce78 \uce58\uc988"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-cheese/ShreddedCheese_gpyXckKDDce.jpg",text:"50kcal",label:"\uc288\ub808\ub4dc \uce58\uc988"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-cheese/MozzarellaCheese_q16W_BvqIo3.jpg",text:"44kcal",label:"\ubaa8\ucc28\ub810\ub77c \uce58\uc988"})]})})})})}}]),s}(a.a.Component),P=function(e){Object(S.a)(s,e);var t=Object(C.a)(s);function s(){return Object(N.a)(this,s),t.apply(this,arguments)}return Object(y.a)(s,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll("img"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var s=e.target,i=s.getAttribute("data-lazy");s.setAttribute("src",i),t.unobserve(s)}}))}));e.forEach((function(e){t.observe(e)}))}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"cards",children:Object(i.jsx)("div",{className:"cards__container",children:Object(i.jsxs)("div",{className:"cards__wrapper",children:[Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-sauce/Ranch_1WvD0UgUFry.jpg",text:"\uace0\uc18c\ud55c \ub9c8\uc694\ub124\uc988\uc640 \ub808\ubaac\uc999\uc758 \ub9cc\ub0a8! <br>\uace0\uc18c\ud568\uc774 \ub450\ubc30!",label:"\ub79c\uce58"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-sauce/Mayonnaise_IorDhbAaH9.jpg",text:"\ub9d0\uc774 \ud544\uc694\uc5c6\ub294 \uace0\uc18c\ud568\uc758 \ub300\uba85\uc0ac,<br>\ub9c8\uc694\ub124\uc988 \uc18c\uc2a4",label:"\ub9c8\uc694\ub124\uc988"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-sauce/SweetOnion_7DByFJGkdeG.jpg",text:"\uc368\ube0c\uc6e8\uc774\ub9cc\uc758 \ud2b9\uc81c \ub808\uc2dc\ud53c\ub85c \ub9cc\ub4e0<br>\ub2ec\ucf64\ud55c \uc591\ud30c\uc18c\uc2a4",label:"\uc2a4\uc704\ud2b8 \uc5b4\ub2c8\uc5b8"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-sauce/HoneyMustard_xWq9emddu.jpg",text:"\uaca8\uc790\uc528\uac00 \uc544\ub08c\uc5c6\uc774 \ub4e4\uc5b4\uac04<br>\ub2ec\ucf64\ud55c \uba38\uc2a4\ud0c0\ub4dc \uc18c\uc2a4",label:"\ud5c8\ub2c8 \uba38\uc2a4\ud0c0\ub4dc"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-sauce/SweetChilli_YdLgIh59_.jpg",text:"\uba55\uc2dc\ucf54 \uace0\ucd94\uc640 \uc0ac\uacfc\ud4e8\ub808\uc758 \ud658\uc0c1\uc801\uc778 \uc870\ud654!<br>\uae30\ubd84\uc88b\uc740 \ub2ec\ucf64\ud568",label:"\uc2a4\uc704\ud2b8 \uce60\ub9ac"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-sauce/HotChilli_FNB2rG6i_lgO.jpg",text:"\ub9e4\uc6b4\ub9db\uc744 \ubcf4\uace0\uc2f6\ub2e4\uba74?<br>\ud0dc\uad6d\uace0\ucd94\ub85c \ub9cc\ub4e0 \uc368\ube0c\uc6e8\uc774\ub9cc\uc758 \ub9e4\uc6b4\ub9db",label:"\ud56b \uce60\ub9ac"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-sauce/SouthwestChipotle_evHmc1sAV.jpg",text:"\ud0dc\uad6d \uace0\ucd94 \ud56b\uce60\ub9ac\uc640 \uace0\uc18c\ud55c \ub9c8\uc694\ub124\uc988\uac00 \ub9cc\ub09c<br>\uc774\uad6d\uc801\uc778 \ub9e4\ucf64\ud55c \ub9db",label:"\uc0ac\uc6b0\uc2a4\uc6e8\uc2a4\ud2b8 \uce58\ud50c\ub808"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/YellowMustard_4sWnu2bRTHfU.jpg",text:"\uaca8\uc790\uc528\ub85c \ub9cc\ub4e0 \uc624\ub9ac\uc9c0\ub0a0 \uba38\uc2a4\ud0c0\ub4dc \uc18c\uc2a4",label:"\uba38\uc2a4\ud0c0\ub4dc"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-sauce/Horseradish_VCf6X7rVHd.jpg",text:"\uace0\uc18c\ud55c \ub9c8\uc694\ub124\uc988\uc640 \uace0\ucd94\ub0c9\uc774\uc758 \uc774\uc0c9\uc801\uc778 \ub9cc\ub0a8!<br>\ub9e4\ub2c8\uc544\uce35\uc744 \uc0ac\ub85c\uc7a1\uc740 \ub9e4\ub825No.1 \uc18c\uc2a4",label:"\ud640\uc2a4\ub798\ub514\uc26c"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-sauce/OliveOil__Rj4aky7t2u.jpg",text:"\ub2f4\ubc31\ud558\uace0 \uae54\ub054\ud558\uac8c \uc990\uae30\uace0 \uc2f6\ub2e4\uba74<br>\uc8fc\uc800\ud558\uc9c0 \ub9d0\uace0 \uc62c\ub9ac\ube0c\uc624\uc77c",label:"\uc62c\ub9ac\ube0c \uc624\uc77c"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-sauce/RedWineVinaigrette_PhvQXNA9Kk.jpg",text:"\ub808\ub4dc\uc640\uc778\uc744 \ubc1c\ud6a8\uc2dc\ucf1c \ud48d\ubbf8\uac00 \uac00\ub4dd\ud55c \uc2dd\ucd08",label:"\ub808\ub4dc\uc640\uc778 \uc2dd\ucd08"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-sauce/Salt_01anG_qsoip.jpg",text:"",label:"\uc18c\uae08"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-sauce/BlackPepper_0uM6UAZ2hZq.jpg",text:"",label:"\ud6c4\ucd94"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-sauce/SmokeBBQ_yymSEzkcU.jpg",text:"\uc2a4\ubaa8\ud06c \ud5a5\uacfc \ub2ec\ucf64\ud55c \ubc14\ube44\ud050\uc758 \uc644\ubcbd\ud55c \uc870\ud654",label:"\uc2a4\ubaa8\ud06c \ubc14\ube44\ud050"})]})]})})})}}]),s}(a.a.Component),I=function(e){Object(S.a)(s,e);var t=Object(C.a)(s);function s(){return Object(N.a)(this,s),t.apply(this,arguments)}return Object(y.a)(s,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll("img"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var s=e.target,i=s.getAttribute("data-lazy");s.setAttribute("src",i),t.unobserve(s)}}))}));e.forEach((function(e){t.observe(e)}))}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"cards",children:Object(i.jsx)("div",{className:"cards__container",children:Object(i.jsxs)("div",{className:"cards__wrapper",children:[Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/lettuce_47kOcepHh6uc.jpg",text:"5kcal",label:"\uc591\uc0c1\ucd94"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/tomato_uhyH3wkbk.jpg",text:"5kcal",label:"\ud1a0\ub9c8\ud1a0"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/cucumber_HkESQErEUVh.jpg",text:"5kcal",label:"\uc624\uc774"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/peppers_k2g1Bp0FE.jpg",text:"5kcal",label:"\ud53c\ub9dd"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/onions_Pv1QtwFnveG.jpg",text:"5kcal",label:"\uc591\ud30c"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/pickle_SNJe83bINwy.jpg",text:"5kcal",label:"\ud53c\ud074"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/olive_y6cJTNCPM.jpg",text:"5kcal",label:"\uc62c\ub9ac\ube0c"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/jalapeno_DFbotB0pkS.jpg",text:"5kcal",label:"\ud560\ub77c\ud53c\ub1e8"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-vegetable/avocado_Ha_942uzx.jpg",text:"60kcal",label:"\uc544\ubcf4\uce74\ub3c4"})]})]})})})}}]),s}(a.a.Component);var M=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("li",{className:"ingredient__item",children:Object(i.jsxs)("div",{className:"ingredient__item__link large",children:[Object(i.jsxs)("figure",{className:"ingredient__item__pic-wrap","data-category":e.label,children:[Object(i.jsx)("img",{src:e.src+"?tr=w-400,h-300,bl-30,q-50",alt:e.label+" \uc774\ubbf8\uc9c0",className:"cards__item__img","data-lazy":e.src}),Object(i.jsx)("span",{className:"ingredient__item__label",children:e.calorie})]}),Object(i.jsx)("div",{className:"ingredient__item__info large",children:Object(i.jsx)("h5",{className:"ingredient__item__text",children:e.text.replaceAll("<br>","\n")})})]})})})},T=function(e){Object(S.a)(s,e);var t=Object(C.a)(s);function s(){return Object(N.a)(this,s),t.apply(this,arguments)}return Object(y.a)(s,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll("img"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var s=e.target,i=s.getAttribute("data-lazy");s.setAttribute("src",i),t.unobserve(s)}}))}));e.forEach((function(e){t.observe(e)}))}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"cards",children:Object(i.jsx)("div",{className:"cards__container",children:Object(i.jsxs)("div",{className:"cards__wrapper",children:[Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/EggMayoBacon_xOsDP6VAl.png",text:"\uc5d0\uadf8\ub9c8\uc694\uc640 \ubc14\uc0ad \ubca0\uc774\ucee8\uc774 \ub9cc\ub098\uba74?<br>\uc2e4\ud328 \ud655\ub960 0% \uc368\ube0c\uc6e8\uc774 \uacf5\uc2dd \uafc0\uc870\ud569",label:"\uc5d0\uadf8\ub9c8\uc694 \ubca0\uc774\ucee8",calorie:"569kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/EggMayoPepperoni_jicr1Gx7wFj.png",text:"<br>\ub9e4\ucf64 \uc9ed\uc9e4 \ud398\ud37c\ub85c\ub2c8 \ub450\uc7a5\uc73c\ub85c \uc5d0\uadf8\ub9c8\uc694 \ud48d\ubbf8 \uc5c5",label:"\uc5d0\uadf8\ub9c8\uc694 \ud398\ud37c\ub85c\ub2c8",calorie:"561kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/EggMayo__A1jLd3k6.jpg",text:"\uce5c\ud658\uacbd \uc778\uc99d \ubc1b\uc740 \ub18d\uc7a5\uc5d0\uc11c \uc0dd\uc0b0\ub41c \ub2ec\uac40\uacfc<br>\uace0\uc18c\ud55c \ub9c8\uc694\ub124\uc988\uac00 \ub9cc\ub098<br> \ub354 \ubd80\ub4dc\ub7ec\uc6b4 \uc2a4\ud14c\ub514\uc140\ub7ec",label:"\uc5d0\uadf8\ub9c8\uc694",calorie:"480kcal"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/K-BBQ_yaVJQeSx0.jpg",text:"\uc368\ube0c\uc6e8\uc774 \ucd5c\ucd08\uc758 \ucf54\ub9ac\uc548 \uc2a4\ud0c0\uc77c \uc0cc\ub4dc\uc704\uce58!<br>\r \ud55c\uad6d\uc2dd \ub9c8\ub298, \uac04\uc7a5 \uadf8\ub9ac\uace0 \uc740\uc740\ud55c \ubd88\ub9db\uae4c\uc9c0!",label:"K-\ubc14\ube44\ud050",calorie:"378kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/Shrimp_rUP7KNQiH.jpg",text:"\ud0f1\uae00\ud55c \uc2dd\uac10\uc774 \uadf8\ub300\ub85c \uc0b4\uc544\uc788\ub294 \ud1b5\uc0c8\uc6b0\uac00<br>\r 5\ub9c8\ub9ac \ub4e4\uc5b4\uac00 \ud55c \uc785 \ubca0\uc5b4 \uba39\uc744 \ub54c \ub9c8\ub2e4<br>\r \uc9c4\uc9dc \uc0c8\uc6b0\uc758 \ud48d\ubbf8\uac00 \uac00\ub4dd",label:"\uc26c\ub9bc\ud504",calorie:"253kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/RotisserieBarbecueChicken_auGjIvTUf.jpg",text:"\ucd09\ucd09\ud55c \ubc14\ube44\ud050 \uce58\ud0a8\uc758 \ud48d\ubbf8\uac00\ub4dd.<br>\uc190\uc73c\ub85c \ucc22\uc5b4 \ub354\uc6b1 \ubd80\ub4dc\ub7ec\uc6b4 \uce58\ud0a8\uc758 \ud601\uba85",label:"\ub85c\ud2f0\uc138\ub9ac \ubc14\ube44\ud050 \uce58\ud0a8",calorie:"350kcal"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/PulledPork_iJQFZmcUy.jpg",text:"7\uc2dc\uac04 \uc800\uc628 \ud6c8\uc5f0\ud55c \ubbf8\uad6d \uc815\ud1b5 \uc2a4\ud0c0\uc77c\uc758 <br>\ub9ac\uc5bc \ubc14\ube44\ud050 \ud480\ub4dc\ud3ec\ud06c",label:"\ud480\ub4dc\ud3ec\ud06c",calorie:"420kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/ItalianBMT_OZFTWevOf.jpg",text:"7\uc2dc\uac04 \uc219\uc131\ub41c \ud398\ud37c\ub85c\ub2c8, \uc0b4\ub77c\ubbf8<br>\uadf8\ub9ac\uace0 \ud584\uc774 \ub9cc\ub4e4\uc5b4\ub0b4\ub294 \ucd5c\uc0c1\uc758 \uc870\ud654!<br>\r \uc804\uc138\uacc4\uac00 \uc0ac\ub791\ud558\ub294 No.1 \ubca0\uc2a4\ud2b8\uc140\ub7ec!",label:"\uc774\ud0c8\ub9ac\uc548 \ube44\uc5e0\ud2f0",calorie:"410kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/BLT_jMOm49kMY.jpg",text:"\uc624\ub9ac\uc9c0\ub110 \uc544\uba54\ub9ac\uce78 \ubca0\uc774\ucee8\uc758<br>\ud48d\ubbf8\uc640 \ubc14\uc0ad\ud568 \uadf8\ub300\ub85c",label:"\ube44\uc5d8\ud2f0",calorie:"380kcal"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/Meatball_xG5Qqboht.jpg",text:"\uc774\ud0c8\ub9ac\uc548 \uc2a4\ud0c0\uc77c \ube44\ud504 \ubbf8\ud2b8\ubcfc\uc5d0<br>\uc368\ube0c\uc6e8\uc774\ub9cc\uc758 \ud48d\ubd80\ud55c \ud1a0\ub9c8\ud1a0 \ud5a5\uc774<br>\r \uc0b4\uc544\uc788\ub294 \ub9c8\ub9ac\ub098\ub77c\uc18c\uc2a4\ub97c \ub4ec\ubfcd",label:"\ubbf8\ud2b8\ubcfc",calorie:"480kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/HAM_m2tPRoLEn.jpg",text:"\uae30\ubcf8 \uc911\uc5d0 \uae30\ubcf8! \ud48d\ubd80\ud55c \ud584\uc774 \ub9cc\ub4e4\uc5b4\ub0b4\ub294<br>\uc785 \uc548 \uac00\ub4dd \ub118\uce58\ub294 \ub9db\uc758 \ud5a5\uc5f0",label:"\ud584",calorie:"290kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/Tuna_wabO-aOW9.jpg",text:"\ub0a8\ub140\ub178\uc18c \ub204\uad6c\ub098 \uc88b\uc544\ud558\ub294 \ub2f4\ubc31\ud55c \ucc38\uce58\uc640<br>\uace0\uc18c\ud55c \ub9c8\uc694\ub124\uc988\uc758 \uc644\ubcbd\ud55c \uc870\ud654",label:"\ucc38\uce58",calorie:"480kcal"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/RoastedChicken_gX-AOSZjUES.jpg",text:"\uc624\ube10\uc5d0 \uad6c\uc6cc \ub2f4\ubc31\ud55c<br>\uc800\uce7c\ub85c\ub9ac \ub2ed\uac00\uc2b4\uc0b4\uc758 \uac74\uac15\ud55c \ud48d\ubbf8",label:"\ub85c\uc2a4\ud2b8 \uce58\ud0a8",calorie:"320kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/SubwayClub__NIGpwXTK.jpg",text:"\uba85\uc2e4\uacf5\ud788 \uc2dc\uadf8\ub2c8\ucc98 \uc368\ube0c!<br>\ud130\ud0a4, \ube44\ud504, \ud3ec\ud06c \ud584\uc758 \uc644\ubcbd\ud55c \uc559\uc0c1\ube14",label:"\uc368\ube0c\uc6e8\uc774 \ud074\ub7fd",calorie:"310kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/Turkey_AhX4BDLdRHK.jpg",text:"280kcal\ub85c \uc2ac\ub9bc\ud558\uac8c \uc990\uae30\ub294<br>\uc624\ub9ac\uc9c0\ub0a0 \ud130\ud0a4 \uc0cc\ub4dc\uc704\uce58",label:"\ud130\ud0a4",calorie:"280kcal"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/Veggie_Z5ixXjgJQ.jpg",text:"\uac13 \uad6c\uc6b4 \ube75\uacfc \uc2e0\uc120\ud55c 7\uac00\uc9c0 \uc57c\ucc44\ub85c<br>\uc990\uae30\ub294 \uae54\ub054\ud55c \ud55c\ub07c",label:"\ubca0\uc9c0",calorie:"230kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/Steak_Cheese_6LywAcTHA.jpg",text:"\uc721\uc999\uc774 \ud48d\ubd80\ud55c \ube44\ud504 \uc2a4\ud14c\uc774\ud06c\uc758<br>\ud48d\ubbf8\uac00 \uc785\uc548 \ud55c\uac00\ub4dd",label:"\uc2a4\ud14c\uc774\ud06c & \uce58\uc988",calorie:"380kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/TurkeyBaconAvocado_QQhz0Vktg.jpg",text:"\ub2f4\ubc31\ud55c \ud130\ud0a4\uc640 \ubc14\uc0ad\ud55c \ubca0\uc774\ucee8 \ud658\uc0c1\uc870\ud569\uc5d0 <br>\ubd80\ub4dc\ub7ec\uc6b4 \uc544\ubcf4\uce74\ub3c4\ub294 \uc2e0\uc758 \ud55c\uc218",label:"\ud130\ud0a4 \ubca0\uc774\ucee8 \uc544\ubcf4\uce74\ub3c4",calorie:"420kcal"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/SubwayMelt_sAEsp-uuu.jpg",text:"\uc790\uc2e0\uc788\uac8c \ucd94\ucc9c\ud558\ub294 \ud130\ud0a4, \ud584, \ubca0\uc774\ucee8\uc758<br>\uc644\ubcbd\ud55c \ub9db\uc758 \ubc38\ub7f0\uc2a4",label:"\uc368\ube0c\uc6e8\uc774 \uba5c\ud2b8",calorie:"365kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/SpicyItalian_bjTBcVYY1gp.jpg",text:"\uc0b4\ub77c\ubbf8, \ud398\ud37c\ub85c\ub2c8\uac00 \uc785\uc548 \ud55c\uac00\ub4dd!<br>\uc3d8 \ud56b\ud55c \uc774\ud0c8\ub9ac\uc544\uc758 \ub9db",label:"\uc2a4\ud30c\uc774\uc2dc \uc774\ud0c8\ub9ac\uc548",calorie:"480kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/ChickenTeriyaki_YT1wPfCPklS.jpg",text:"\ub2ec\ucf64\uc9ed\ucabc\ub984\ud55c \uc368\ube0c\uc6e8\uc774 \ud2b9\uc81c \ub370\ub9ac\uc57c\ub07c \uc18c\uc2a4\uc640 <br>\r \ub2f4\ubc31\ud55c \uce58\ud0a8\uc758 \ud658\uc0c1\uc801\uc778 \ub9cc\ub0a8",label:"\uce58\ud0a8 \ub370\ub9ac\uc57c\ub07c",calorie:"370kcal"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/HamEggCheese_re5ZHzOCe.jpg",text:"\ud479\uc2e0\ud55c \uc624\ubbc8\ub81b\uacfc \ud584\uc758 \uac00\uc7a5 \ud074\ub798\uc2dd\ud55c \uc870\ud654<br>\r \u203b\uc544\uce68\uba54\ub274 \uc81c\uacf5\uc2dc\uac04 : \uc624\uc804 11\uc2dc\uae4c\uc9c0",label:"\ud584, \uc5d0\uadf8&\uce58\uc988",calorie:"400kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/WesternEggCheese_693WHohlXO3.jpg",text:"\ud1a0\ub9c8\ud1a0, \ud53c\ub9dd, \uc591\ud30c \uc138\uac00\uc9c0 \uc57c\ucc44\uac00 \ub354\ud574\uc838<br>\ub354\uc6b1 \uc2e0\uc120\ud55c \ud558\ub8e8 \uc2dc\uc791<br>\r \u203b\uc544\uce68\uba54\ub274 \uc81c\uacf5\uc2dc\uac04 : \uc624\uc804 11\uc2dc\uae4c\uc9c0",label:"\uc6e8\uc2a4\ud134, \uc5d0\uadf8&\uce58\uc988",calorie:"370kcal"}),Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/BaconEggCheese_4OBBclCU-.jpg",text:"\uc624\ub9ac\uc9c0\ub110 \uc544\uba54\ub9ac\uce78 \ubca0\uc774\ucee8\uc73c\ub85c<br>\ub354\uc6b1 \ud48d\uc131\ud55c \uc544\uce68 \uc2dd\uc0ac<br>\r \u203b\uc544\uce68\uba54\ub274 \uc81c\uacf5\uc2dc\uac04 : \uc624\uc804 11\uc2dc\uae4c\uc9c0",label:"\ubca0\uc774\ucee8, \uc5d0\uadf8&\uce58\uc988",calorie:"450kcal"})]}),Object(i.jsx)("ul",{className:"cards__items",children:Object(i.jsx)(M,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-menu/SteakEggCheese_GQlCxlLzg.jpg",text:"\uc721\uc999 \uac00\ub4dd \ube44\ud504 \uc2a4\ud14c\uc774\ud06c\ub85c \ub4e0\ub4e0\ud55c \uc544\uce68 \uc2dd\uc0ac<br>\r \u203b\uc544\uce68\uba54\ub274 \uc81c\uacf5\uc2dc\uac04 : \uc624\uc804 11\uc2dc\uae4c\uc9c0",label:"\uc2a4\ud14c\uc774\ud06c, \uc5d0\uadf8&\uce58\uc988",calorie:"440kcal"})})]})})})}}]),s}(a.a.Component),H=function(e){Object(S.a)(s,e);var t=Object(C.a)(s);function s(){return Object(N.a)(this,s),t.apply(this,arguments)}return Object(y.a)(s,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll("img"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var s=e.target,i=s.getAttribute("data-lazy");s.setAttribute("src",i),t.unobserve(s)}}))}));e.forEach((function(e){t.observe(e)}))}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"cards",children:Object(i.jsx)("div",{className:"cards__container",children:Object(i.jsxs)("div",{className:"cards__wrapper",children:[Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-topping/DoubleUp_u4zycExZQSg.jpg",text:"\uc8fc \uc7ac\ub8cc\ub97c 2\ubc30\ub85c<br>\r \ub354 \ud478\uc9d0\ud558\uac8c \uc990\uae30\uc138\uc694",label:"\ub354\ube14\uc5c5"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-topping/BaconBits_zkiITZaJE.jpg",text:"\uc9ed\ucabc\ub984\ud55c \ubca0\uc774\ucee8 \ube44\uce20\ub85c \ub9db\uc758 \ud654\ub8e1\uc810\uc815\uc744!",label:"\ubca0\uc774\ucee8 \ube44\uce20"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-topping/Shrimp_Z3EtTddNeU6.jpg",text:"\uc0c8\uc6b0\uc758 \ud0f1\uae00\ud568\uacfc \uc2e0\uc120\ud568\uc744 2\ubc30\ub85c!",label:"\uc26c\ub9bc\ud504 \ub354\ube14\uc5c5"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-topping/EggMayo_KuMFX0oed.jpg",text:"\uc2e0\uc120\ud55c \ub2ec\uac40\uacfc<br>\r \uace0\uc18c\ud55c \ub9c8\uc694\ub124\uc988\uc758 \ub9cc\ub0a8",label:"\uc5d0\uadf8\ub9c8\uc694"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-topping/Omelet_aducoO-JG.jpg",text:"\ub354 \ubd80\ub4dc\ub7fd\uac8c, \ub354 \uace0\uc18c\ud558\uac8c",label:"\uc624\ubbc8\ub81b"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-topping/Avocado_8Q5Y96DN_.jpg",text:"\uc232\uc18d\uc758 \ubc84\ud130 \uc544\ubcf4\uce74\ub3c4\ub85c \uc601\uc591 UP",label:"\uc544\ubcf4\uce74\ub3c4"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-topping/Bacon_OfelFSiwj.jpg",text:"\uc9c4\ud55c \ud48d\ubbf8\uc640 \ubc14\uc0ad\ud55c \ubca0\uc774\ucee8",label:"\ubca0\uc774\ucee8"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-topping/Pepperoni_IU5ww8W0l.jpg",text:"\uc785\ub9db \ub2f9\uae30\ub294 \ud398\ud37c\ub85c\ub2c8\ub85c<br>\r \uc368\ube0c\uc6e8\uc774\ub97c \ub354 \ub9db\uc788\uac8c!",label:"\ud398\ud37c\ub85c\ub2c8"}),Object(i.jsx)(B,{src:"https://ik.imagekit.io/fsio0iplxb8/subway-topping/DoubleCheese_Ky4dgzxgh.jpg",text:"\uace0\uc18c\ud55c \uce58\uc988\ub97c 2\ubc30\ub85c!",label:"\ub354\ube14\uce58\uc988"})]})]})})})}}]),s}(a.a.Component);k.a.use([f.a,_.a,w.a,v.a]);var z=function(){var e=window.innerWidth<960,t=Object(c.useState)(!1),s=Object(r.a)(t,2),l=s[0],n=s[1],b=function(){n(!l)},j=Object(c.useState)(!1),o=Object(r.a)(j,2),d=o[0],x=o[1],u=function(){x(!d)},m=Object(c.useState)(!1),p=Object(r.a)(m,2),O=p[0],k=p[1],f=function(){k(!O)},_=Object(c.useState)(!1),w=Object(r.a)(_,2),v=w[0],N=w[1],y=function(){N(!v)},S=Object(c.useState)(!1),C=Object(r.a)(S,2),B=C[0],M=C[1],z=function(){M(!B)},F=Object(c.useState)(!1),D=Object(r.a)(F,2),U=D[0],q=D[1],Q=function(){q(!U)};return Object(i.jsx)(a.a.Fragment,{children:Object(i.jsxs)(h.a,{watchSlidesProgress:!0,spaceBetween:50,slidesPerView:1,navigation:!0,allowTouchMove:e,pagination:{clickable:!0},children:[Object(i.jsx)(g.a,{children:Object(i.jsxs)("div",{className:"swiper-slide-content-intro",children:["\uc368\ube0c\uc6e8\uc774\ub294 \ub2e4\uc591\ud55c \uba54\ub274\uc640 \uc7ac\ub8cc\ub97c \uc81c\uacf5\ud558\uc9c0\ub9cc",Object(i.jsx)("br",{}),"\uc8fc\ubb38 \uc2dc \ubc88\uac70\ub85c\uc6c0\uc73c\ub85c \uc778\ud574 \ub9dd\uc124\uc774\ub294 \uc0ac\ub78c\ub4e4\uc774 \ub9ce\uc2b5\ub2c8\ub2e4.",Object(i.jsx)("br",{}),"\uc5b4\ucf00\ud588Sub\uacfc \ud568\uaed8 \uc368\ube0c\uc6e8\uc774\ub97c \uc990\uaca8\ubcf4\uc138\uc694!"]})}),Object(i.jsx)(g.a,{children:Object(i.jsxs)("div",{className:"swiper-slide-content",children:[Object(i.jsx)("div",{className:"title-wrapper",children:Object(i.jsx)("h3",{className:"title-text",children:"STEP 1 \uba54\ub274 \uc120\ud0dd"})}),Object(i.jsxs)("div",{className:"detail-wrapper",children:[Object(i.jsxs)("div",{className:"detail-text",children:["\ub2e4\uc591\ud55c \uba54\ub274 \uc911 \uc6d0\ud558\ub294 \uba54\ub274\ub97c \uace0\ub974\uc138\uc694.",Object(i.jsx)("br",{}),"15cm, 30cm \uc911 \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.",Object(i.jsx)("br",{}),"\uc790\uc138\ud55c \uba54\ub274\ub294 \uc544\ub798 \ubc84\ud2bc\uc744 \ub20c\ub7ec \ucc38\uace0\ud558\uc138\uc694!",Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"modal-btnContainer",children:[Object(i.jsx)("button",{className:"modal-openBtn",onClick:function(){return b()},children:"\uba54\ub274 \ubcf4\uae30"}),Object(i.jsx)("div",{className:"modal-dialog modalShowing-".concat(l),children:Object(i.jsxs)("div",{className:"modal-body",children:[Object(i.jsx)("div",{className:"modal-closeBtnContainer",children:Object(i.jsx)("button",{className:"modal-closeBtn",onClick:function(){return b()},children:"\ub2eb\uae30"})}),Object(i.jsx)(T,{})]})})]})]})]})}),Object(i.jsx)(g.a,{children:Object(i.jsxs)("div",{className:"swiper-slide-content",children:[Object(i.jsx)("div",{className:"title-wrapper",children:Object(i.jsx)("h3",{className:"title-text",children:"STEP 2 \ube75 \uc120\ud0dd"})}),Object(i.jsxs)("div",{className:"detail-wrapper",children:[Object(i.jsxs)("span",{className:"detail-text",children:["6\uac00\uc9c0 \uc885\ub958 \uc911 \uc6d0\ud558\ub294 \ube75\uc73c\ub85c",Object(i.jsx)("br",{}),"\ubb34\uc5c7\uc774\ub4e0 \uc120\ud0dd\ud558\uc138\uc694.",Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"modal-btnContainer",children:[Object(i.jsx)("button",{className:"modal-openBtn",onClick:function(){return u()},children:"\ube75 \ubcf4\uae30"}),Object(i.jsx)("div",{className:"modal-dialog modalShowing-".concat(d),children:Object(i.jsxs)("div",{className:"modal-body",children:[Object(i.jsx)("div",{className:"modal-closeBtnContainer",children:Object(i.jsx)("button",{className:"modal-closeBtn",onClick:function(){return u()},children:"\ub2eb\uae30"})}),Object(i.jsx)(E,{})]})})]})]})]})}),Object(i.jsx)(g.a,{children:Object(i.jsxs)("div",{className:"swiper-slide-content",children:[Object(i.jsx)("div",{className:"title-wrapper",children:Object(i.jsx)("h3",{className:"title-text",children:"STEP 3 \ucd94\uac00\ud1a0\ud551 \uc120\ud0dd"})}),Object(i.jsxs)("div",{className:"detail-wrapper",children:[Object(i.jsxs)("span",{className:"detail-text",children:["\ubca0\uc774\ucee8, \uc0c8\uc6b0 \ub4f1 \ub2e4\uc591\ud55c \ud1a0\ud551\uc744 \ucd94\uac00\ud574",Object(i.jsx)("br",{}),"\ub098\ub9cc\uc758 \uc368\ube0c\uc6e8\uc774\ub97c \uc990\uae30\uc138\uc694!",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:"\ud1a0\ud551\uc740 \ucd94\uac00\ube44\uc6a9\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4"})]}),Object(i.jsxs)("div",{className:"modal-btnContainer",children:[Object(i.jsx)("button",{className:"modal-openBtn",onClick:function(){return f()},children:"\ud1a0\ud551 \ubcf4\uae30"}),Object(i.jsx)("div",{className:"modal-dialog modalShowing-".concat(O),children:Object(i.jsxs)("div",{className:"modal-body",children:[Object(i.jsx)("div",{className:"modal-closeBtnContainer",children:Object(i.jsx)("button",{className:"modal-closeBtn",onClick:function(){return f()},children:"\ub2eb\uae30"})}),Object(i.jsx)(H,{})]})})]})]})]})}),Object(i.jsx)(g.a,{children:Object(i.jsxs)("div",{className:"swiper-slide-content",children:[Object(i.jsx)("div",{className:"title-wrapper",children:Object(i.jsx)("h3",{className:"title-text",children:"STEP 4 \uce58\uc988 \uc120\ud0dd"})}),Object(i.jsxs)("div",{className:"detail-wrapper",children:[Object(i.jsxs)("span",{className:"detail-text",children:["3\uac00\uc9c0 \uc885\ub958\uc758 \uce58\uc988 \uc911",Object(i.jsx)("br",{}),"\uc6d0\ud558\ub294 \uce58\uc988\ub97c \uace0\ub974\uc138\uc694!",Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"modal-btnContainer",children:[Object(i.jsx)("button",{className:"modal-openBtn",onClick:function(){return y()},children:"\uce58\uc988 \ubcf4\uae30"}),Object(i.jsx)("div",{className:"modal-dialog modalShowing-".concat(v),children:Object(i.jsxs)("div",{className:"modal-body",children:[Object(i.jsx)("div",{className:"modal-closeBtnContainer",children:Object(i.jsx)("button",{className:"modal-closeBtn",onClick:function(){return y()},children:"\ub2eb\uae30"})}),Object(i.jsx)(A,{})]})})]})]})]})}),Object(i.jsx)(g.a,{children:Object(i.jsxs)("div",{className:"swiper-slide-content",children:[Object(i.jsx)("div",{className:"title-wrapper",children:Object(i.jsx)("h3",{className:"title-text",children:"STEP 5 \uc57c\ucc44&\uc18c\uc2a4 \uc120\ud0dd"})}),Object(i.jsxs)("div",{className:"detail-wrapper",children:[Object(i.jsxs)("span",{className:"detail-text",children:["\uc2eb\uc5b4\ud558\ub294 \uc57c\ucc44\ub294 \ub4dc\uc2e4 \ud544\uc694 \uc5c6\uc2b5\ub2c8\ub2e4!",Object(i.jsx)("br",{}),"\uc88b\uc544\ud558\ub294 \uc57c\ucc44\ub294 \ub9c8\uc74c\uaecf \ub4dc\uc138\uc694.",Object(i.jsx)("br",{}),"\uc18c\uc2a4\ub294 \ubb34\uc5c7\uc774\ub4e0 \uc120\ud0dd\ud574 \ub4dc\uc154 \ubcf4\uc138\uc694!",Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"modal-btnContainer",children:[Object(i.jsx)("button",{className:"modal-openBtn",onClick:function(){return z()},children:"\uc18c\uc2a4 \ubcf4\uae30"}),Object(i.jsx)("div",{className:"modal-dialog modalShowing-".concat(B),children:Object(i.jsxs)("div",{className:"modal-body",children:[Object(i.jsx)("div",{className:"modal-closeBtnContainer",children:Object(i.jsx)("button",{className:"modal-closeBtn",onClick:function(){return z()},children:"\ub2eb\uae30"})}),Object(i.jsx)(P,{})]})}),Object(i.jsx)("button",{className:"modal-openBtn",onClick:function(){return Q()},children:"\uc57c\ucc44 \ubcf4\uae30"}),Object(i.jsx)("div",{className:"modal-dialog modalShowing-".concat(U),children:Object(i.jsxs)("div",{className:"modal-body",children:[Object(i.jsx)("div",{className:"modal-closeBtnContainer",children:Object(i.jsx)("button",{className:"modal-closeBtn",onClick:function(){return Q()},children:"\ub2eb\uae30"})}),Object(i.jsx)(I,{})]})})]})]})]})}),Object(i.jsx)(g.a,{children:Object(i.jsxs)("div",{className:"swiper-slide-content",children:[Object(i.jsx)("div",{className:"title-wrapper",children:Object(i.jsx)("h3",{className:"title-text",children:"STEP 6 \uc138\ud2b8 \uc120\ud0dd"})}),Object(i.jsx)("div",{className:"detail-wrapper",children:Object(i.jsxs)("span",{className:"detail-text",children:["\uc368\ube0c\uc6e8\uc774\uc758 \ubcc4\ubbf8!",Object(i.jsx)("br",{}),"\ucfe0\ud0a4, \uce69\uacfc \ud568\uaed8 \uc990\uaca8\ubcf4\uc138\uc694!",Object(i.jsx)("br",{})]})})]})}),"..."]})})};var F=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(z,{}),Object(i.jsx)(O,{})]})};function D(){return Object(i.jsx)("h1",{className:"ingredients",children:"\uc7ac\ub8cc \ubcf4\uae30"})}function U(){return Object(i.jsx)("h1",{className:"combinations",children:"\uafc0 \uc870\ud569"})}function q(){return Object(i.jsx)("h1",{className:"sign-up",children:"SIGN UP"})}function Q(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(I,{}),Object(i.jsx)(O,{})]})}function W(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(E,{}),Object(i.jsx)(O,{})]})}function G(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(A,{}),Object(i.jsx)(O,{})]})}function L(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(P,{}),Object(i.jsx)(O,{})]})}var V=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(b.a,{children:[Object(i.jsx)(m,{}),Object(i.jsxs)(p.c,{children:[Object(i.jsx)(p.a,{path:"/subway-website/",exact:!0,component:F}),Object(i.jsx)(p.a,{path:"/subway-website/ingredients",exact:!0,component:D}),Object(i.jsx)(p.a,{path:"/subway-website/ingredients/bread",component:W}),Object(i.jsx)(p.a,{path:"/subway-website/ingredients/vegetable",component:Q}),Object(i.jsx)(p.a,{path:"/subway-website/ingredients/cheese",component:G}),Object(i.jsx)(p.a,{path:"/subway-website/ingredients/sauce",component:L}),Object(i.jsx)(p.a,{path:"/subway-website/combinations",component:U}),Object(i.jsx)(p.a,{path:"/subway-website/sign-up",component:q})]})]})})};n.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(V,{})}),document.getElementById("potato"))}},[[48,1,2]]]);
//# sourceMappingURL=main.9c83263d.chunk.js.map