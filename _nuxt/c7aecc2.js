(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{499:function(e,t,n){"use strict";n.r(t);var c=n(10),o=(n(46),{name:"Advice",data:function(){return{query:"",adviceList:{}}},mounted:function(){},methods:{loadAdviceByTopic:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$buefy.loading.open({container:null}),t.next=3,e.$store.dispatch("advice/getAdviceSlipByTopic",e.query);case 3:e.adviceList=t.sent,0===e.adviceList.length&&e.$buefy.snackbar.open({message:"No data returned for: "+e.query,type:"is-warning",position:"is-top"}),n.close();case 6:case"end":return t.stop()}}),t)})))()}}}),r=n(64),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section"},[n("section",{staticClass:"column is-4 section"},[n("b-field",{staticClass:"is-3",attrs:{label:"Topic"}},[n("b-input",{model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),e._v(" "),n("button",{staticClass:"button is-primary",on:{click:e.loadAdviceByTopic}},[e._v("Search")])],1),e._v(" "),n("section",{staticClass:"column is-9 section"},e._l(e.adviceList,(function(t){return n("h2",{key:t.id,staticClass:"title is-3"},[e._v('\n      "'+e._s(t.advice)+'"\n    ')])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);