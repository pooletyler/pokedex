(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{26:function(e,n,t){e.exports=t(43)},35:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){},40:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(11),o=t.n(c),i=t(10),s=t(5),l=t(2),u=t(23),m=new function e(n,t,a,r,c,o,i){Object(u.a)(this,e),this.loading=void 0,this.numberOfPokemon=void 0,this.pokemonList=void 0,this.offset=void 0,this.searchInputValue=void 0,this.searchString=void 0,this.recentSearches=void 0,this.loading=n||!0,this.numberOfPokemon=t||0,this.pokemonList=a||[],this.offset=r||void 0,this.searchInputValue=c||"",this.searchString=o||"",this.recentSearches=i||[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_LOADING":return Object(l.a)(Object(l.a)({},e),{},{loading:n.payload});case"SET_NUMBER_OF_POKEMON":return Object(l.a)(Object(l.a)({},e),{},{numberOfPokemon:n.payload});case"SET_POKEMON_LIST":return Object(l.a)(Object(l.a)({},e),{},{pokemonList:n.payload});case"SET_OFFSET":return Object(l.a)(Object(l.a)({},e),{},{offset:n.payload});case"SET_SEARCH_INPUT_VALUE":return Object(l.a)(Object(l.a)({},e),{},{searchInputValue:n.payload});case"SET_SEARCH_STRING":return Object(l.a)(Object(l.a)({},e),{},{searchString:n.payload});case"SET_RECENT_SEARCHES":return Object(l.a)(Object(l.a)({},e),{},{recentSearches:n.payload});case"SET_POKEDEX_STATE":return n.payload;default:return e}},d=Object(s.b)({pokedex:p}),f=Object(s.c)(d),E=t(45),h=t(24),k=function(e){var n="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===n.length)return n.pop().split(";").shift()},v=function(e,n,t){var a=new Date;a.setTime(a.getTime()+24*t*60*60*1e3);var r="expires=".concat(a.toUTCString());document.cookie="".concat(e,"=").concat(n,";").concat(r,";path=/")},b=t(15),S=(t(35),function(e){var n=Object(a.useState)(!1),t=Object(b.a)(n,2),c=t[0],o=t[1],i=e.inputValue,s=e.recentSearches,l=e.onClick,u=e.onChange,m=function(e){var n=e.target;l(n.innerHTML)},p=function(e){if("Enter"===e.key||" "===e.key){var n=e.target;l(n.innerHTML)}};return r.a.createElement("div",{className:"SearchBar-container",onFocus:function(){o(!0)},onBlur:function(e){e.currentTarget.contains(e.relatedTarget)||o(!1)}},r.a.createElement("input",{className:"SearchBar-input",value:i,onChange:function(e){u(e.target.value)}}),r.a.createElement("button",{className:"SearchBar-button",type:"button",onClick:function(e){e.target.blur(),l(i)}},"Search"),s.length>0&&c&&r.a.createElement("div",{className:"SearchBar-recentSearchContainer"},r.a.createElement("div",{className:"SearchBar-recentSearchTitle"},"Recent Searches"),s.map((function(e){return r.a.createElement("div",{className:"SearchBar-recentSearch",onClick:m,onKeyDown:p,role:"button",tabIndex:0},e)}))))});S.defaultProps={inputValue:"",recentSearches:[],onClick:function(){},onChange:function(){}};var C=S,N=t(6),O=t.n(N),g=t(14);function T(){return(T=Object(g.a)(O.a.mark((function e(n,t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:"GET",headers:Object(l.a)({"Content-Type":"application/json"},t)});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(e,n){return T.apply(this,arguments)},y=t(25),j=function(){var e=Object(g.a)(O.a.mark((function e(n,t,a,r,c,o,i,s){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.all(r.filter((function(e){return e&&e.name.toLowerCase().includes(c.toLowerCase())})).slice(a.lower,a.upper).map((function(e){return e.url?o(e.url).then((function(e){return e})):e}))).then((function(e){var t=Object(y.a)(r);e.forEach((function(e){t[e.id-1]=e})),n(i(t)),n(s(!1))}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,a,r,c,o,i,s){return e.apply(this,arguments)}}(),_=function(e,n,t,a,r){var c=t("recentSearches")&&JSON.parse(t("recentSearches"))||[];""!==n&&c.push(n),c.length>10&&c.shift(),a("recentSearches",JSON.stringify(c),10),e(r(c))},x=function(e){return{type:"SET_LOADING",payload:e}},w=function(e){return{type:"SET_NUMBER_OF_POKEMON",payload:e}},L=function(e){return{type:"SET_POKEMON_LIST",payload:e}},I=function(e){return{type:"SET_OFFSET",payload:e}},R=function(e){return{type:"SET_RECENT_SEARCHES",payload:e}},B=(t(37),function(e){var n=Object(a.useState)(!1),t=Object(b.a)(n,2),c=t[0],o=t[1],i=e.name,s=e.id,l=e.image,u=e.types,m=e.abilities,p=e.moves,d=e.varieties;return r.a.createElement("div",{className:"PokemonCard-container".concat(c?" PokemonCard-containerExpanded":""),onClick:function(){o(!c)},onKeyUp:function(e){"Enter"!==e.key&&" "!==e.key||o(!c)},role:"button",tabIndex:0},r.a.createElement("div",{className:"PokemonCard-imageContainer"},!c&&r.a.createElement("img",{className:"PokemonCard-image",src:l||"https://vignette.wikia.nocookie.net/pokemon-glitch/images/8/8e/Spr_3r_000.png/revision/latest?cb=20130324000249",alt:i})),r.a.createElement("div",{className:"PokemonCard-descriptionContainer".concat(c?" PokemonCard-descriptionContainerExpanded":"")},r.a.createElement("div",{className:"PokemonCard-descriptionContainerText"},r.a.createElement("span",{className:"PokemonCard-descriptionContainerDescriptor"},"Type:"),"  ".concat(u[0]),u[1]&&" / ".concat(u[1])),r.a.createElement("div",{className:"PokemonCard-descriptionContainerText"},r.a.createElement("span",{className:"PokemonCard-descriptionContainerDescriptor"},"Name:"),"  ".concat(i)),r.a.createElement("div",{className:"PokemonCard-descriptionContainerText"},r.a.createElement("span",{className:"PokemonCard-descriptionContainerDescriptor"},"No:"),"  ".concat(s)),c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"PokemonCard-descriptionContainerText"},r.a.createElement("span",{className:"PokemonCard-descriptionContainerDescriptor"},"Abilities:")," ".concat(m.map((function(e){return" ".concat(e)})))),r.a.createElement("div",{className:"PokemonCard-descriptionContainerText"},r.a.createElement("span",{className:"PokemonCard-descriptionContainerDescriptor"},"Moves:")," ".concat(p.map((function(e){return" ".concat(e)})))),r.a.createElement("div",{className:"PokemonCard-descriptionContainerText"},r.a.createElement("span",{className:"PokemonCard-descriptionContainerDescriptor"},"Varieties:")," ".concat(d.map((function(e){return" ".concat(e)})))))))});B.defaultProps={name:"??????????",id:"000",image:"https://vignette.wikia.nocookie.net/pokemon-glitch/images/8/8e/Spr_3r_000.png/revision/latest?cb=20130324000249",types:[""],abilities:[""],moves:[""],varieties:[""]};var A=B,D=(t(38),function(){return r.a.createElement("div",{className:"SpinningPokeball-container"},r.a.createElement("div",{className:"SpinningPokeball-pokeball"},r.a.createElement("div",{className:"SpinningPokeball-pokeballUpper"},r.a.createElement("div",{className:"SpinningPokeball-pokeballInner"})),r.a.createElement("div",{className:"SpinningPokeball-pokeballMiddle"}),r.a.createElement("div",{className:"SpinningPokeball-pokeballLower"},r.a.createElement("div",{className:"SpinningPokeball-pokeballInner"}))))}),M=(t(39),function(){return r.a.createElement("div",{className:"Loading-container"},r.a.createElement(D,null))}),H=(t(40),function(){var e=Object(i.c)((function(e){return e.pokedex})),n=e.loading,t=e.numberOfPokemon,c=e.pokemonList,o=e.offset,s=e.searchInputValue,l=e.searchString,u=e.recentSearches,m=Object(i.b)(),p=Object(a.useRef)(null);Object(a.useEffect)((function(){_(m,l,k,v,R),function(e,n,t,a){t("".concat(n,"pokemon/?limit=1")).then((function(n){e(a(n.count))}))}(m,"https://pokeapi.co/api/v2/",P,w)}),[]),Object(a.useEffect)((function(){!function(e,n,t,a,r,c){t>0&&a("".concat(n,"pokemon/?limit=").concat(t)).then((function(n){e(r(n.results)),e(c(0))}))}(m,"https://pokeapi.co/api/v2/",t,P,L,I)}),[t]),Object(a.useEffect)((function(){_(m,l,k,v,R)}),[l]),Object(a.useEffect)((function(){m(x(!0)),j(m,Promise,{lower:o,upper:o+20},c,l,P,L,x)}),[o,l]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Pokedex-header"}),r.a.createElement("div",{className:"Pokedex-heroBanner"},r.a.createElement("div",{className:"Pokedex-heroBannerTitle"},"Who's That",r.a.createElement("br",null),"Pokemon?!",r.a.createElement("div",{className:"Pokedex-searchBarContainer"},r.a.createElement(C,{inputValue:s,recentSearches:u,onClick:function(e){p.current.scrollTo(0,0),m(I(0)),m(function(e){return{type:"SET_SEARCH_STRING",payload:e}}(e))},onChange:function(e){m(function(e){return{type:"SET_SEARCH_INPUT_VALUE",payload:e}}(e))}})))),n&&r.a.createElement("div",{className:"Pokedex-loader"},r.a.createElement(M,null)),r.a.createElement("div",{className:"Pokedex-pokemonCardContainer",ref:p,onScroll:function(){!function(e,n,t,a){n.current.scrollHeight-n.current.scrollTop===n.current.clientHeight&&e(a(t+20))}(m,p,o,I)}},c.filter((function(e){return e&&e.name.toLowerCase().includes(l.toLowerCase())})).slice(0,o+20).map((function(e){return r.a.createElement(A,{name:e.name&&e.name,id:e.id&&e.id,image:e.sprites&&e.sprites.front_default,types:e.types&&e.types.map((function(e){return e.type.name})),abilities:e.abilities&&e.abilities.map((function(e){return e.ability.name})),moves:e.moves&&e.moves.map((function(e){return e.move.name})),varieties:e.forms&&e.forms.map((function(e){return e.name}))})}))))}),V=function(){var e=Object(h.a)(),n=(/#!(\/.*)$/.exec(window.location.href)||[])[1];return n&&e.replace(n),r.a.createElement(E.b,{history:e},r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",component:H})))},F=(t(42),function(){return r.a.createElement(i.a,{store:f},r.a.createElement(V,null))});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.806d1082.chunk.js.map