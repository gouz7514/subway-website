(this["webpackJsonpsubway-website"]=this["webpackJsonpsubway-website"]||[]).push([[0],{10:function(e,s,t){},13:function(e,s,t){},26:function(e,s,t){},32:function(e,s,t){},33:function(e,s,t){},34:function(e,s,t){},35:function(e,s,t){},36:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),i=t.n(a),n=t(19),r=t.n(n),l=t(12),j=t(4),b=(t(26),["btn--primary","btn--outline"]),d=["btn--medium","btn--large"],m=function(e){var s=e.children,t=e.type,a=e.onClick,i=e.buttonStyle,n=e.buttonSize,r=b.includes(i)?i:b[0],l=d.includes(n)?n:d[0];return Object(c.jsx)(j.b,{to:"/subway-website/sign-up",className:"btn-mobile",children:Object(c.jsx)("button",{className:"btn ".concat(r," ").concat(l),onClick:a,type:t,children:s})})},x=(t(32),[{title:"\ube75",path:"/subway-website/ingredients/bread",cName:"dropdown-link"},{title:"\uc57c\ucc44",path:"/subway-website/ingredients/vegetable",cName:"dropdown-link"},{title:"\uce58\uc988",path:"/subway-website/ingredients/cheese",cName:"dropdown-link"},{title:"\uc18c\uc2a4",path:"/subway-website/ingredients/sauce",cName:"dropdown-link"}]);t(33);var o=function(){var e=Object(a.useState)(!1),s=Object(l.a)(e,2),t=s[0],i=s[1],n=function(){return i(!1)},r=function(){document.querySelector(".menu-icon .fas").click()};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{onClick:function(){return i(!t)},className:t?"dropdown-menu clicked":"dropdown-menu",children:x.map((function(e,s){return Object(c.jsx)("li",{onClick:n,children:Object(c.jsx)(j.b,{className:e.cName,to:e.path,onClick:r,children:e.title})},s)}))})})};var u=function(){var e=Object(a.useState)(!1),s=Object(l.a)(e,2),t=s[0],i=s[1],n=Object(a.useState)(!0),r=Object(l.a)(n,2),b=r[0],d=r[1],x=function(){return i(!1)},u=function(e){e.target.closest(".nav-dropdown")||document.querySelector(".dropdown-menu").classList.remove("active")},g=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(a.useEffect)((function(){g()}),[]),Object(a.useEffect)((function(){return document.addEventListener("click",u),function(){document.removeEventListener("click",u)}})),window.addEventListener("resize",g),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsxs)("div",{className:"navbar-container",children:[Object(c.jsx)(j.b,{to:"/subway-website/",className:"navbar-logo",onClick:x,children:"\uc5b4\ucf00\ud588Sub"}),Object(c.jsx)("div",{className:"menu-icon",onClick:function(){return i(!t)},children:Object(c.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(c.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{to:"/subway-website/",className:"nav-links",onClick:x,children:"\uc774\uc6a9 \ubc29\ubc95"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)("div",{className:"nav-links nav-dropdown",onClick:function(){document.querySelector(".dropdown-menu").classList.toggle("active")},children:["\uc7ac\ub8cc \uc18c\uac1c ",Object(c.jsx)("i",{className:"fas fa-caret-down"}),Object(c.jsx)(o,{})]})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{to:"/subway-website/combinations",className:"nav-links",onClick:x,children:"\uafc0 \uc870\ud569"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{to:"/subway-website/sign-up",className:"nav-links-mobile",onClick:x,children:"Sign Up"})})]}),b&&Object(c.jsx)(m,{buttonStyle:"btn--outline",children:"SIGN UP"})]})})})},g=t(2);t(8);var h=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{className:"cards__item",children:Object(c.jsxs)(j.b,{className:"cards__item__link",to:e.path,children:[Object(c.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(c.jsx)("img",{src:e.src,alt:"\uc5b4\ucf00\ud588sub img",className:"cards__item__img"})}),Object(c.jsx)("div",{className:"cards__item__info",children:Object(c.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};t(10);var O=function(){return Object(c.jsxs)("div",{className:"cards",children:[Object(c.jsx)("h1",{children:"Check out these EPIC destinations!"}),Object(c.jsx)("div",{className:"cards__container",children:Object(c.jsxs)("div",{className:"cards__wrapper",children:[Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(h,{src:"images/img-9.jpg",text:"Explore the hidden waterfall deep insdie the Amazon jungle",label:"adventure",path:"/subway-website/ingredients"}),Object(c.jsx)(h,{src:"images/img-2.jpg",text:"Travel through the islands of bali",label:"luxury",path:"/subway-website/ingredients"})]}),Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(h,{src:"images/img-9.jpg",text:"Explore the hidden waterfall deep insdie the Amazon jungle",label:"adventure",path:"/subway-website/ingredients"}),Object(c.jsx)(h,{src:"images/img-2.jpg",text:"Travel through the islands of bali",label:"luxury",path:"/subway-website/ingredients"}),Object(c.jsx)(h,{src:"images/img-2.jpg",text:"Travel through the islands of bali",label:"luxury",path:"/subway-website/ingredients"})]})]})})]})};t(34);var _=function(){return Object(c.jsxs)("div",{className:"footer-container",children:[Object(c.jsxs)("section",{className:"footer-subscription",children:[Object(c.jsx)("p",{className:"footer-subscription-heading",children:"\uc601\ud654 \ub9c8\ub2c8\uc544, \ud53c\uc544\ub2c8\uc2a4\ud2b8\uc774\uc790 \ud480\uc2a4\ud0dd\uc744 \uc815\ubcf5\ud558\uace0\uc790 \ud558\ub294 \uac1c\ubc1c\uc790"}),Object(c.jsx)("p",{className:"footer-subscription-text",children:"\uae40\ud559\uc7ac\uc785\ub2c8\ub2e4"})]}),Object(c.jsx)("section",{className:"social-media",children:Object(c.jsxs)("div",{className:"social-media-wrap",children:[Object(c.jsx)("small",{className:"website-rights",children:"\uc5b4\ucf00\ud588Sub 2021 by KHJ"}),Object(c.jsxs)("div",{className:"social-icons",children:[Object(c.jsx)(j.b,{className:"social-icon-link github",to:{pathname:"https://github.com/gouz7514/subway-website"},target:"_blank","aria-label":"github",children:Object(c.jsx)("i",{className:"fab fa-github"})}),Object(c.jsx)(j.b,{className:"social-icon-link instagram",to:{pathname:"https://www.instagram.com/haaaaaaa_kjae/"},target:"_blank","aria-label":"instagram",children:Object(c.jsx)("i",{className:"fab fa-instagram"})})]})]})})]})};t(35);var p=function(){return Object(c.jsxs)("div",{className:"hero-container",children:[Object(c.jsx)("h1",{children:"ADVENTURE AWAITS"}),Object(c.jsx)("p",{children:"What are you waiting for?"}),Object(c.jsxs)("div",{className:"hero-btns",children:[Object(c.jsx)(m,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"}),Object(c.jsxs)(m,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:["WATCH TRAILER ",Object(c.jsx)("i",{className:"far fa-play-circle"})]})]})]})};var N=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{}),Object(c.jsx)(O,{}),Object(c.jsx)(_,{})]})};function v(){return Object(c.jsx)("h1",{className:"ingredients",children:"\uc7ac\ub8cc \ubcf4\uae30"})}function w(){return Object(c.jsx)("h1",{className:"combinations",children:"\uafc0 \uc870\ud569"})}function f(){return Object(c.jsx)("h1",{className:"sign-up",children:"SIGN UP"})}var y=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{className:"ingredient__item",children:Object(c.jsxs)("div",{className:"ingredient__item__link",children:[Object(c.jsx)("figure",{className:"ingredient__item__pic-wrap","data-category":e.label,children:Object(c.jsx)("img",{src:e.src,alt:e.label+" \uc774\ubbf8\uc9c0",className:"cards__item__img"})}),Object(c.jsx)("div",{className:"ingredient__item__info",children:Object(c.jsx)("div",{className:"ingredient__item__text__wrapper",children:Object(c.jsx)("h5",{className:"ingredient__item__text bigger",children:e.text})})})]})})})};t(13);var k=function(){return Object(c.jsx)("div",{className:"cards",children:Object(c.jsx)("div",{className:"cards__container",children:Object(c.jsxs)("div",{className:"cards__wrapper",children:[Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(y,{src:"../images/vegetables/lettuce.jpg",text:"5kcal",label:"\uc591\uc0c1\ucd94"}),Object(c.jsx)(y,{src:"../images/vegetables/tomato.jpg",text:"5kcal",label:"\ud1a0\ub9c8\ud1a0"}),Object(c.jsx)(y,{src:"../images/vegetables/cucumber.jpg",text:"5kcal",label:"\uc624\uc774"})]}),Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(y,{src:"../images/vegetables/peppers.jpg",text:"5kcal",label:"\ud53c\ub9dd"}),Object(c.jsx)(y,{src:"../images/vegetables/onions.jpg",text:"5kcal",label:"\uc591\ud30c"}),Object(c.jsx)(y,{src:"../images/vegetables/pickle.jpg",text:"5kcal",label:"\ud53c\ud074"})]}),Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(y,{src:"../images/vegetables/olive.jpg",text:"5kcal",label:"\uc62c\ub9ac\ube0c"}),Object(c.jsx)(y,{src:"../images/vegetables/jalapeno.jpg",text:"5kcal",label:"\ud560\ub77c\ud53c\ub1e8"}),Object(c.jsx)(y,{src:"../images/vegetables/avocado.jpg",text:"60kcal",label:"\uc544\ubcf4\uce74\ub3c4"})]})]})})})};function S(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsx)(_,{})]})}var C=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{className:"ingredient__item",children:Object(c.jsxs)("div",{className:"ingredient__item__link",children:[Object(c.jsx)("figure",{className:"ingredient__item__pic-wrap","data-category":e.label,children:Object(c.jsx)("img",{src:e.src,alt:e.label+" \uc774\ubbf8\uc9c0",className:"cards__item__img"})}),Object(c.jsx)("div",{className:"ingredient__item__info",children:Object(c.jsx)("h5",{className:"ingredient__item__text",children:e.text.replace("<br>","\n")})})]})})})};var E=function(){return Object(c.jsx)("div",{className:"cards",children:Object(c.jsx)("div",{className:"cards__container",children:Object(c.jsxs)("div",{className:"cards__wrapper",children:[Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(C,{src:"../images/breads/HoneyOat.jpg",text:"\uace0\uc18c\ud55c \uc704\ud2b8\ube75\uc5d0 \uc624\ud2b8\ubc00 \uac00\ub8e8\ub97c \ubb3b\ud600<br>\uace0\uc18c\ud568\uacfc \uc2dd\uac10\uc774 \ub450\ubc30\ub85c",label:"\ud5c8\ub2c8\uc624\ud2b8"}),Object(c.jsx)(C,{src:"../images/breads/HeartyItalian.jpg",text:"\ubd80\ub4dc\ub7ec\uc6b4 \ud654\uc774\ud2b8\ube75\uc5d0 \uc625\uc218\uc218\uac00\ub8e8\ub97c \ubb3b\ud600<br>\uac89\uc740 \ubc14\uc0ad\ud558\uace0 \uace0\uc18c\ud558\uba70 \uc18d\uc740 \ubd80\ub4dc\ub7fd\uac8c",label:"\ud558\ud2f0 \uc774\ud0c8\ub9ac\uc548"}),Object(c.jsx)(C,{src:"../images/breads/Wheat.jpg",text:"9\uac00\uc9c0 \uace1\ubb3c\ub85c \ub9cc\ub4e4\uc5b4<br>\uac74\uac15\ud558\uace0 \uace0\uc18c\ud55c \ub9db\uc758 \uace1\ubb3c\ube75",label:"\uc704\ud2b8"})]}),Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(C,{src:"../images/breads/ParmesanOregano.jpg",text:"\ubd80\ub4dc\ub7ec\uc6b4 \ud654\uc774\ud2b8\ube75\uc5d0\r \ud30c\ub9c8\uc0b0 \uc624\ub808\uac00\ub178 \uc2dc\uc988\ub2dd\uc744 \ubb3b\ud600 \ud5c8\ube0c\ud5a5 \uac00\ub4dd",label:"\ud30c\ub9c8\uc0b0 \uc624\ub808\uac00\ub178"}),Object(c.jsx)(C,{src:"../images/breads/White.jpg",text:"\uac00\uc7a5 \ud074\ub798\uc2dd\ud55c \ube75\uc73c\ub85c<br>\ubd80\ub4dc\ub7ec\uc6b4 \uc2dd\uac10\uc774 \ub9e4\ub825 \ud3ec\uc778\ud2b8",label:"\ud654\uc774\ud2b8"}),Object(c.jsx)(C,{src:"../images/breads/FlatBread.jpg",text:"\uc774\ub984\ucc98\ub7fc \ub0a9\uc791 \ubaa8\uc591\uc5d0<br>\ud53c\uc790\ub3c4\uc6b0\ucc98\ub7fc \ucac0\ub4dd\ud55c \ub9db\uc774 \uc77c\ud488",label:"\ud50c\ub7ab \ube0c\ub808\ub4dc"})]})]})})})};function F(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(E,{}),Object(c.jsx)(_,{})]})}var A=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{className:"ingredient__item",children:Object(c.jsxs)("div",{className:"ingredient__item__link",children:[Object(c.jsx)("figure",{className:"ingredient__item__pic-wrap","data-category":e.label,children:Object(c.jsx)("img",{src:e.src,alt:e.label+" \uc774\ubbf8\uc9c0",className:"cards__item__img"})}),Object(c.jsx)("div",{className:"ingredient__item__info",children:Object(c.jsx)("div",{className:"ingredient__item__text__wrapper",children:Object(c.jsx)("h5",{className:"ingredient__item__text bigger",children:e.text})})})]})})})};var T=function(){return Object(c.jsx)("div",{className:"cards",children:Object(c.jsx)("div",{className:"cards__container",children:Object(c.jsx)("div",{className:"cards__wrapper",children:Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(A,{src:"../images/cheeses/AmericanCheese.jpg",text:"40kcal",label:"\uc544\uba54\ub9ac\uce78 \uce58\uc988"}),Object(c.jsx)(A,{src:"../images/cheeses/ShreddedCheese.jpg",text:"50kcal",label:"\uc288\ub808\ub4dc \uce58\uc988"}),Object(c.jsx)(A,{src:"../images/cheeses/MozzarellaCheese.jpg",text:"44kcal",label:"\ubaa8\ucc28\ub810\ub77c \uce58\uc988"})]})})})})};function z(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(T,{}),Object(c.jsx)(_,{})]})}var H=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{className:"ingredient__item",children:Object(c.jsxs)("div",{className:"ingredient__item__link",children:[Object(c.jsx)("figure",{className:"ingredient__item__pic-wrap","data-category":e.label,children:Object(c.jsx)("img",{src:e.src,alt:e.label+" \uc774\ubbf8\uc9c0",className:"cards__item__img"})}),Object(c.jsx)("div",{className:"ingredient__item__info",children:Object(c.jsx)("div",{className:"ingredient__item__text__wrapper",children:Object(c.jsx)("h5",{className:"ingredient__item__text",children:e.text.replace("<br>","\n")})})})]})})})};var I=function(){return Object(c.jsx)("div",{className:"cards",children:Object(c.jsx)("div",{className:"cards__container",children:Object(c.jsxs)("div",{className:"cards__wrapper",children:[Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(H,{src:"../images/sauces/Ranch.jpg",text:"\uace0\uc18c\ud55c \ub9c8\uc694\ub124\uc988\uc640 \ub808\ubaac\uc999\uc758 \ub9cc\ub0a8! <br>\uace0\uc18c\ud568\uc774 \ub450\ubc30!",label:"\ub79c\uce58"}),Object(c.jsx)(H,{src:"../images/sauces/Mayonnaise.jpg",text:"\ub9d0\uc774 \ud544\uc694\uc5c6\ub294 \uace0\uc18c\ud568\uc758 \ub300\uba85\uc0ac,<br>\ub9c8\uc694\ub124\uc988 \uc18c\uc2a4",label:"\ub9c8\uc694\ub124\uc988"}),Object(c.jsx)(H,{src:"../images/sauces/SweetOnion.jpg",text:"\uc368\ube0c\uc6e8\uc774\ub9cc\uc758 \ud2b9\uc81c \ub808\uc2dc\ud53c\ub85c \ub9cc\ub4e0<br>\ub2ec\ucf64\ud55c \uc591\ud30c\uc18c\uc2a4",label:"\uc2a4\uc704\ud2b8 \uc5b4\ub2c8\uc5b8"})]}),Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(H,{src:"../images/sauces/HoneyMustard.jpg",text:"\uaca8\uc790\uc528\uac00 \uc544\ub08c\uc5c6\uc774 \ub4e4\uc5b4\uac04<br>\ub2ec\ucf64\ud55c \uba38\uc2a4\ud0c0\ub4dc \uc18c\uc2a4",label:"\ud5c8\ub2c8 \uba38\uc2a4\ud0c0\ub4dc"}),Object(c.jsx)(H,{src:"../images/sauces/SweetChilli.jpg",text:"\uba55\uc2dc\ucf54 \uace0\ucd94\uc640 \uc0ac\uacfc\ud4e8\ub808\uc758 \ud658\uc0c1\uc801\uc778 \uc870\ud654!<br>\uae30\ubd84\uc88b\uc740 \ub2ec\ucf64\ud568",label:"\uc2a4\uc704\ud2b8 \uce60\ub9ac"}),Object(c.jsx)(H,{src:"../images/sauces/HotChilli.jpg",text:"\ub9e4\uc6b4\ub9db\uc744 \ubcf4\uace0\uc2f6\ub2e4\uba74?<br>\ud0dc\uad6d\uace0\ucd94\ub85c \ub9cc\ub4e0 \uc368\ube0c\uc6e8\uc774\ub9cc\uc758 \ub9e4\uc6b4\ub9db",label:"\ud56b \uce60\ub9ac"})]}),Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(H,{src:"../images/sauces/SouthwestChipotle.jpg",text:"\ud0dc\uad6d \uace0\ucd94 \ud56b\uce60\ub9ac\uc640 \uace0\uc18c\ud55c \ub9c8\uc694\ub124\uc988\uac00 \ub9cc\ub09c<br>\uc774\uad6d\uc801\uc778 \ub9e4\ucf64\ud55c \ub9db",label:"\uc0ac\uc6b0\uc2a4\uc6e8\uc2a4\ud2b8 \uce58\ud50c\ub808"}),Object(c.jsx)(H,{src:"../images/sauces/YellowMustard.jpg",text:"\uaca8\uc790\uc528\ub85c \ub9cc\ub4e0 \uc624\ub9ac\uc9c0\ub0a0 \uba38\uc2a4\ud0c0\ub4dc \uc18c\uc2a4",label:"\uba38\uc2a4\ud0c0\ub4dc"}),Object(c.jsx)(H,{src:"../images/sauces/Horseradish.jpg",text:"\uace0\uc18c\ud55c \ub9c8\uc694\ub124\uc988\uc640 \uace0\ucd94\ub0c9\uc774\uc758 \uc774\uc0c9\uc801\uc778 \ub9cc\ub0a8!<br>\ub9e4\ub2c8\uc544\uce35\uc744 \uc0ac\ub85c\uc7a1\uc740 \ub9e4\ub825No.1 \uc18c\uc2a4",label:"\ud640\uc2a4\ub798\ub514\uc26c"})]}),Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(H,{src:"../images/sauces/OliveOil.jpg",text:"\ub2f4\ubc31\ud558\uace0 \uae54\ub054\ud558\uac8c \uc990\uae30\uace0 \uc2f6\ub2e4\uba74<br>\uc8fc\uc800\ud558\uc9c0 \ub9d0\uace0 \uc62c\ub9ac\ube0c\uc624\uc77c",label:"\uc62c\ub9ac\ube0c \uc624\uc77c"}),Object(c.jsx)(H,{src:"../images/sauces/RedWineVinaigrette.jpg",text:"\ub808\ub4dc\uc640\uc778\uc744 \ubc1c\ud6a8\uc2dc\ucf1c \ud48d\ubbf8\uac00 \uac00\ub4dd\ud55c \uc2dd\ucd08",label:"\ub808\ub4dc\uc640\uc778 \uc2dd\ucd08"}),Object(c.jsx)(H,{src:"../images/sauces/Salt.jpg",text:"",label:"\uc18c\uae08"})]}),Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(H,{src:"../images/sauces/BlackPepper.jpg",text:"",label:"\ud6c4\ucd94"}),Object(c.jsx)(H,{src:"../images/sauces/SmokeBBQ.jpg",text:"\uc2a4\ubaa8\ud06c \ud5a5\uacfc \ub2ec\ucf64\ud55c \ubc14\ube44\ud050\uc758 \uc644\ubcbd\ud55c \uc870\ud654",label:"\uc2a4\ubaa8\ud06c \ubc14\ube44\ud050"})]})]})})})};function W(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(I,{}),Object(c.jsx)(_,{})]})}var L=function(){return Object(c.jsx)(j.a,{basename:"/subway-website",children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(j.a,{children:[Object(c.jsx)(u,{}),Object(c.jsxs)(g.c,{children:[Object(c.jsx)(g.a,{path:"/subway-website/",exact:!0,component:N}),Object(c.jsx)(g.a,{path:"/subway-website/ingredients",exact:!0,component:v}),Object(c.jsx)(g.a,{path:"/subway-website/ingredients/bread",component:F}),Object(c.jsx)(g.a,{path:"/subway-website/ingredients/vegetable",component:S}),Object(c.jsx)(g.a,{path:"/subway-website/ingredients/cheese",component:z}),Object(c.jsx)(g.a,{path:"/subway-website/ingredients/sauce",component:W}),Object(c.jsx)(g.a,{path:"/subway-website/combinations",component:w}),Object(c.jsx)(g.a,{path:"/subway-website/sign-up",component:f})]})]})})})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("potato"))},8:function(e,s,t){}},[[36,1,2]]]);
//# sourceMappingURL=main.d6883382.chunk.js.map