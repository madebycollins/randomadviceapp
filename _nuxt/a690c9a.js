(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{270:function(e,t,n){"use strict";n.r(t);var c=n(9),r=(n(44),{name:"AdviceId",data:function(){return{adviceId:this.$route.params.adviceId,advice:{}}},mounted:function(){this.loadAdviceById()},methods:{loadAdviceById:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("advice/getAdviceSlipById",e.adviceId);case 2:e.advice=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}}),d=n(51),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section"},[n("h2",{staticClass:"title is-3"},[e._v('\n    "'+e._s(e.advice.advice)+'"\n  ')])])}),[],!1,null,"7d589946",null);t.default=component.exports}}]);