webpackJsonp([22],{Fjo1:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={name:"",props:{id:String},created:function(){var t=this,a={};a="4"===this.$route.query.type?{flowId:this.id,from:"bdcrm",token:this.$store.state.token}:{enterFlowId:this.id,from:"bdcrm",token:this.$store.state.token},this.axios.approveDetail(a).then(function(a){var e=a.data;e.success&&(t.$set(t,"data",e.data),t.loading=!1),e.success||t.$toast({message:e.msg,position:"model",duration:3e3})}).catch(function(t){console.log(t)})},data:function(){return{selected:"1",loading:!0,data:{},approvalList:["城市","大区","总部","风控","业务"],type:{1:"入驻申请",2:"资料修改",3:"续签申请",4:"客户经理变更"},approvalState:{2:"待城市经理审批",3:"待大区经理审批",5:"待总部审核",6:"待风控审核",7:"待业务方审核","-2":"城市经理拒绝","-3":"大区经理拒绝","-5":"总部拒绝","-6":"风控拒绝","-7":"业务方拒绝",9:"审核通过"}}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.loading?t._e():e("div",{},[e("mt-header",{attrs:{title:"审批详情"}},[e("router-link",{attrs:{slot:"left",to:"/approvalCenter"},slot:"left"},[e("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1),t._v(" "),1!==t.$store.state.user.roleLevel&&"4"===t.$route.query.type?e("mt-button",{attrs:{slot:"right"},slot:"right"},[e("span",{staticClass:"rightbtn",on:{click:function(a){t.$router.push({name:"approval",query:{approvalState:t.data.customEnter.approvalState,customId:t.data.custom.customId,enterFlowId:t.data.customEnter.id,type:t.$route.query.type}})}}},[t._v("审批")])]):t._e()],1),t._v(" "),e("mt-field",{attrs:{readonly:!0,disableClear:!0,label:"发起时间",value:t.data.custom.createDate}}),t._v(" "),e("mt-field",{attrs:{readonly:!0,disableClear:!0,label:"发起人",value:t.data.customEnter.createBy}}),t._v(" "),e("mt-field",{attrs:{readonly:!0,disableClear:!0,label:"发起事项",value:t.type[t.data.customEnter.type]}}),t._v(" "),"4"==t.data.customEnter.type?e("mt-field",{attrs:{readonly:!0,disableClear:!0,label:"原客户经理",value:t.data.oldUserName}}):t._e(),t._v(" "),"4"==t.data.customEnter.type?e("mt-field",{attrs:{readonly:!0,disableClear:!0,label:"变更客户经理",value:t.data.newUserName}}):t._e(),t._v(" "),"4"==t.data.customEnter.type?e("mt-field",{attrs:{readonly:!0,disableClear:!0,label:"变更原因",value:t.data.remark}}):t._e(),t._v(" "),"4"==t.data.customEnter.type?e("mt-field",{attrs:{readonly:!0,disableClear:!0,label:"生效时间",value:t.data.effectiveTime}}):t._e(),t._v(" "),"4"!=t.data.customEnter.type?e("mt-field",{attrs:{readonly:!0,disableClear:!0,label:"商户门店简称",value:t.data.custom.customName}}):t._e(),t._v(" "),"4"!=t.data.customEnter.type?e("mt-field",{attrs:{readonly:!0,disableClear:!0,label:"营业执照名称",value:t.data.custom.customFullName}}):t._e(),t._v(" "),"4"!=t.data.customEnter.type?e("mt-field",{attrs:{readonly:!0,disableClear:!0,label:"业务线",value:t.data.custom.busLineName}}):t._e(),t._v(" "),"4"!=t.data.customEnter.type?e("mt-field",{attrs:{readonly:!0,disableClear:!0,label:"行业",value:t.data.custom.categoryName}}):t._e(),t._v(" "),"2"==t.data.customEnter.type||"1"==t.data.customEnter.type?e("mt-cell",{attrs:{title:1==t.data.customEnter.type?"商户信息":"商户变更信息","is-link":""},nativeOn:{click:function(a){t.$router.push({path:"/busInfo/"+t.data.custom.customId,query:{approval:!0}})}}}):t._e(),t._v(" "),"2"==t.data.customEnter.type||"1"==t.data.customEnter.type?e("mt-cell",{attrs:{title:1==t.data.customEnter.type?"合同信息":"合同变更信息","is-link":""},nativeOn:{click:function(a){t.$router.push({name:"contractInfo",query:{id:t.data.custom.customId,canEdit:!1}})}}},[t._v(t._s(1!==t.$store.state.user.roleLevel?"资料版本V"+t.data.custom.versionId:""))]):t._e(),t._v(" "),e("div",{staticClass:"step"},[e("div",{staticClass:"step_title"},[t._v("审批流程")]),t._v(" "),e("div",{staticClass:"step_body"},[e("div",[e("div",{staticClass:"step_list"},[e("div",{staticClass:"item1 flex3"},[e("span",[t._v("提交")]),t._v("发起申请  "+t._s(t.data.custom.userFullName)+"\n          ")]),t._v(" "),e("div",{staticClass:"item2 flex2"},[t._v(t._s(t.data.custom.createDate))])]),t._v(" "),e("div",{staticClass:"step_line"})]),t._v(" "),t._l(t.approvalList,function(a,s){return e("div",{key:s},[e("div",{staticClass:"step_list"},[e("div",{staticClass:"item1"},[e("span",[t._v(t._s(a))]),t._v(t._s(t.data.approvalList[s]?t.data.approvalList[s].titleFullName:"")+"\n          ")]),t._v(" "),0==t.data.approvalList.length||s==t.data.approvalList.length&&9!=t.data.customEnter.approvalState&&1==t.data.approvalList[s-1].approvalState?e("div",{staticClass:"item2"},[t._v("\n            等待审批\n          ")]):s<t.data.approvalList.length-1||s==t.data.approvalList.length-1&&9!=t.data.customEnter.approvalState&&1==t.data.approvalList[s].approvalState?e("div",{staticClass:"item2"},[t._v("\n            "+t._s(t.data.approvalList[s].approvalTime)+"\n          ")]):t.data.approvalList[s]&&s==t.data.approvalList.length-1&&9!=t.data.customEnter.approvalState?e("div",{staticClass:"item2"},[t._v("\n            "+t._s(-1==[2,3,5,6,7].indexOf(t.data.customEnter.approvalState)?"审批拒绝":"等待审批")+"\n          ")]):s==t.data.approvalList.length-1&&9==t.data.customEnter.approvalState&&1==t.data.approvalList[s].approvalState?e("div",{staticClass:"item2"},[t._v("\n            审批通过\n          ")]):t._e()]),t._v(" "),s<t.approvalList.length-1?e("div",{staticClass:"step_line"}):t._e()])})],2)])],1)},staticRenderFns:[]};var r=e("vSla")(s,l,!1,function(t){e("W97k")},"data-v-154b5719",null);a.default=r.exports},W97k:function(t,a){}});
//# sourceMappingURL=22.4986aef5fdd753273e96.js.map