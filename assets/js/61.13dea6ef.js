(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{438:function(n,o,a){},558:function(n,o,a){"use strict";var t=a(438);a.n(t).a},650:function(n,o,a){"use strict";a.r(o);var t={data:function(){return{backgroundLoading:"#22c16b"}},methods:{openLoadingBackground:function(){var n=this;this.$vs.loading({background:this.backgroundLoading,color:"rgb(255, 255, 255)"}),setTimeout(function(){n.$vs.loading.close()},3e3)}}},e=(a(558),a(1)),c=Object(e.a)(t,function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",{staticClass:"centerx"},[a("input",{directives:[{name:"model",rawName:"v-model",value:n.backgroundLoading,expression:"backgroundLoading"}],attrs:{type:"color",name:"",value:""},domProps:{value:n.backgroundLoading},on:{input:function(o){o.target.composing||(n.backgroundLoading=o.target.value)}}}),n._v(" "),a("vs-button",{attrs:{type:"gradient",color:"success"},on:{click:n.openLoadingBackground}},[n._v("Success")])],1)},[],!1,null,null,null);c.options.__file="Background.vue";o.default=c.exports}}]);