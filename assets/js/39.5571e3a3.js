(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{416:function(t,e,l){},536:function(t,e,l){"use strict";var a=l(416);l.n(a).a},757:function(t,e,l){"use strict";l.r(e);l(0);var a={data:function(){return{activePrompt:!1,activePrompt2:!1,val:"",valMultipe:{value1:"",value2:""}}},computed:{validName:function(){return this.valMultipe.value1.length>0&&this.valMultipe.value2.length>0}},methods:{acceptAlert:function(t){this.$vs.notify({color:"success",title:"Accept Selected",text:"Lorem ipsum dolor sit amet, consectetur"})},close:function(){this.$vs.notify({color:"danger",title:"Closed",text:"You close a dialog!"})}}},v=(l(536),l(1)),n=Object(v.a)(a,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"centerx con-exemple-prompt"},[l("div",{staticClass:"modelx"},[t._v("\n    "+t._s(null==t.val?"null":t.val)+"\n  ")]),t._v(" "),l("vs-button",{attrs:{color:"primary",type:"border"},on:{click:function(e){t.activePrompt=!0}}},[t._v("Run prompt")]),t._v(" "),l("div",{staticClass:"modelx"},[t._v("\n     "+t._s(t.valMultipe.value1)+"\n     "+t._s(t.valMultipe.value2)+"\n   ")]),t._v(" "),l("vs-button",{attrs:{color:"primary",type:"border"},on:{click:function(e){t.activePrompt2=!0}}},[t._v("Run prompt inputs")]),t._v(" "),l("vs-prompt",{attrs:{"vs-active":t.activePrompt},on:{"vs-cancel":function(e){t.val=""},"vs-accept":t.acceptAlert,"vs-close":t.close,"update:vsActive":function(e){t.activePrompt=e}}},[l("div",{staticClass:"con-exemple-prompt"},[t._v("\n        Enter the security code\n       "),l("vs-input",{attrs:{placeholder:"Code","vs-placeholder":"Code"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)]),t._v(" "),l("vs-prompt",{attrs:{"vs-is-valid":t.validName,"vs-active":t.activePrompt2},on:{"vs-cancel":function(e){t.valMultipe.value1="",t.valMultipe.value2=""},"vs-accept":t.acceptAlert,"vs-close":t.close,"update:vsActive":function(e){t.activePrompt2=e}}},[l("div",{staticClass:"con-exemple-prompt"},[t._v("\n     Enter your first and last name to "),l("b",[t._v("continue")]),t._v(".\n       "),l("vs-input",{attrs:{placeholder:"Name"},model:{value:t.valMultipe.value1,callback:function(e){t.$set(t.valMultipe,"value1",e)},expression:"valMultipe.value1"}}),t._v(" "),l("vs-input",{attrs:{placeholder:"Last Name"},model:{value:t.valMultipe.value2,callback:function(e){t.$set(t.valMultipe,"value2",e)},expression:"valMultipe.value2"}}),t._v(" "),l("vs-alert",{attrs:{"vs-active":!t.validName,color:"danger","vs-icon":"new_releases"}},[t._v("\n         Fields can not be empty please enter the data\n       ")])],1)])],1)},[],!1,null,null,null);n.options.__file="Prompt.vue";e.default=n.exports}}]);