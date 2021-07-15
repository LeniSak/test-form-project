(function(t){function e(e){for(var a,n,i=e[0],l=e[1],m=e[2],c=0,f=[];c<i.length;c++)n=i[c],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&f.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,m||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},s={app:0},o=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/test-form-project/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var m=0;m<i.length;m++)e(i[m]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"337a":function(t,e,r){},"517b":function(t,e,r){"use strict";r("337a")},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Registration")},o=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.someAction.apply(null,arguments)}}},[r("div",{staticClass:"wrap first-step",class:t.formStep.firstStep?"":"hidden"},[t._m(0),r("div",{staticClass:"form-input",class:t.hasErrorAfterTouch(t.v$.formData.firstName)},[r("input",{staticClass:"form-element-input",attrs:{id:"name",type:"input",placeholder:"Введите ваше ФИО"},on:{input:function(e){return t.getFullName(e.target.value)},change:t.setClassName,blur:function(e){return t.hasErrorAfterBlur(t.v$.formData.firstName)}}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"name"}},[t._v("ФИО*")]),t.v$.formData.firstName.$error?r("small",{staticClass:"form-element-hint"},[t._v("Введите ваше имя и фамилию")]):t._e()]),r("div",{staticClass:"form-input",class:t.hasErrorAfterTouch(t.v$.formData.birthday)},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.birthday,expression:"formData.birthday"}],staticClass:"form-element-input",attrs:{id:"birthday",type:"date",placeholder:"Введите вашу дату рождения"},domProps:{value:t.formData.birthday},on:{change:t.setClassName,blur:function(e){return t.hasErrorAfterBlur(t.v$.formData.birthday)},input:function(e){e.target.composing||t.$set(t.formData,"birthday",e.target.value)}}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"birthday"}},[t._v("Дата рождения*")]),t.v$.formData.birthday.$error?r("small",{staticClass:"form-element-hint"},[t._v("Введите вашу дату рождения")]):t._e()]),r("div",{staticClass:"form-input",class:t.hasErrorAfterTouch(t.v$.formData.phoneNumber)},[r("input",{staticClass:"form-element-input",attrs:{id:"phoneNumber",type:"text",placeholder:"Формат: 7XXXXXXXXXX"},on:{input:t.getPhoneNumber,blur:function(e){return t.hasErrorAfterBlur(t.v$.formData.phoneNumber)},change:t.setClassName}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"phoneNumber"}},[t._v("Номер телефона*")]),t.v$.formData.phoneNumber.$error?r("small",{staticClass:"form-element-hint"},[t._v("Введите ваш номер телефона")]):t._e()]),r("div",{staticClass:"form-radio"},[r("label",{staticClass:"form-label"},[t._v("Пол")]),r("div",{staticClass:"btn-switch"},[r("input",{staticClass:"btn-switch__radio btn-switch__radio_yes",attrs:{type:"radio",id:"yes",name:"switch"},on:{click:function(e){t.formData.sex="женский"}}}),r("input",{staticClass:"btn-switch__radio btn-switch__radio_no",attrs:{type:"radio",checked:"",id:"no",name:"switch"},on:{click:function(e){t.formData.sex="мужской"}}}),t._m(1),t._m(2)])]),r("div",{staticClass:"form-select",class:t.hasErrorAfterTouch(t.v$.formData.groupClient)},[r("label",{staticClass:"form-label",attrs:{for:"groupClient"}},[t._v("Группа клиента*")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.groupClient,expression:"formData.groupClient"}],staticClass:"form-element-select",attrs:{size:"3",name:"groupClient",id:"groupClient",multiple:""},on:{blur:function(e){return t.hasErrorAfterBlur(t.v$.formData.groupClient)},change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.formData,"groupClient",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"VIP"}},[t._v("VIP")]),r("option",{attrs:{value:"Проблемные"}},[t._v("Проблемные")]),r("option",{attrs:{value:"ОМС"}},[t._v("ОМС")])]),t.v$.formData.groupClient.$error?r("small",{staticClass:"form-element-hint"},[t._v("Выберите вашу группу")]):t._e()]),r("div",{staticClass:"form-select"},[r("label",{staticClass:"form-label",attrs:{for:"doctor"}},[t._v("Лечащий врач:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.doctor,expression:"formData.doctor"}],staticClass:"form-element-select",attrs:{name:"doctor",id:"doctor"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.formData,"doctor",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"Иванов"}},[t._v("Иванов")]),r("option",{attrs:{value:"Захаров"}},[t._v("Захаров")]),r("option",{attrs:{value:"Чернышева"}},[t._v("Чернышева")])])]),r("div",{staticClass:"form-checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.withoutSMS,expression:"formData.withoutSMS"}],attrs:{type:"checkbox",id:"sms"},domProps:{checked:Array.isArray(t.formData.withoutSMS)?t._i(t.formData.withoutSMS,null)>-1:t.formData.withoutSMS},on:{change:function(e){var r=t.formData.withoutSMS,a=e.target,s=!!a.checked;if(Array.isArray(r)){var o=null,n=t._i(r,o);a.checked?n<0&&t.$set(t.formData,"withoutSMS",r.concat([o])):n>-1&&t.$set(t.formData,"withoutSMS",r.slice(0,n).concat(r.slice(n+1)))}else t.$set(t.formData,"withoutSMS",s)}}}),r("label",{attrs:{for:"sms"}},[t._v("Не отправлять СМС")])]),t._m(3)]),r("div",{staticClass:"wrap second-step",class:t.formStep.secondStep?"":"hidden"},[t._m(4),r("div",{staticClass:"form-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formAddress.index,expression:"formAddress.index"}],staticClass:"form-element-input",attrs:{id:"postal",type:"text"},domProps:{value:t.formAddress.index},on:{change:t.setClassName,input:function(e){e.target.composing||t.$set(t.formAddress,"index",e.target.value)}}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"postal"}},[t._v("Индекс")])]),r("div",{staticClass:"form-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formAddress.country,expression:"formAddress.country"}],staticClass:"form-element-input",attrs:{id:"country",type:"text"},domProps:{value:t.formAddress.country},on:{change:t.setClassName,input:function(e){e.target.composing||t.$set(t.formAddress,"country",e.target.value)}}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"country"}},[t._v("Страна")])]),r("div",{staticClass:"form-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formAddress.region,expression:"formAddress.region"}],staticClass:"form-element-input",attrs:{id:"region",type:"text"},domProps:{value:t.formAddress.region},on:{change:t.setClassName,input:function(e){e.target.composing||t.$set(t.formAddress,"region",e.target.value)}}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"region"}},[t._v("Область")])]),r("div",{staticClass:"form-input",class:t.hasErrorAfterTouch(t.v$.formAddress.city)},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formAddress.city,expression:"formAddress.city"}],staticClass:"form-element-input",attrs:{id:"city",type:"text"},domProps:{value:t.formAddress.city},on:{change:t.setClassName,blur:function(e){return t.hasErrorAfterBlur(t.v$.formAddress.city)},input:function(e){e.target.composing||t.$set(t.formAddress,"city",e.target.value)}}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"city"}},[t._v("Город*")]),t.v$.formAddress.city.$error?r("small",{staticClass:"form-element-hint"},[t._v("Введите город проживания")]):t._e()]),r("div",{staticClass:"form-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formAddress.street,expression:"formAddress.street"}],staticClass:"form-element-input",attrs:{id:"street",type:"text"},domProps:{value:t.formAddress.street},on:{change:t.setClassName,input:function(e){e.target.composing||t.$set(t.formAddress,"street",e.target.value)}}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"street"}},[t._v("Улица")])]),r("div",{staticClass:"form-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formAddress.home,expression:"formAddress.home"}],staticClass:"form-element-input",attrs:{id:"home",type:"text"},domProps:{value:t.formAddress.home},on:{change:t.setClassName,input:function(e){e.target.composing||t.$set(t.formAddress,"home",e.target.value)}}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"home"}},[t._v("Дом")])]),r("div",{staticClass:"form-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formAddress.apartment,expression:"formAddress.apartment"}],staticClass:"form-element-input",attrs:{id:"apartment",type:"text"},domProps:{value:t.formAddress.apartment},on:{change:t.setClassName,input:function(e){e.target.composing||t.$set(t.formAddress,"apartment",e.target.value)}}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"apartment"}},[t._v("Квартира")])]),t._m(5)]),r("div",{staticClass:"wrap third-step",class:t.formStep.thirdStep?"":"hidden"},[t._m(6),r("div",{staticClass:"form-select",class:t.hasErrorAfterTouch(t.v$.formDocument.type)},[r("label",{staticClass:"form-label",attrs:{for:"document"}},[t._v("Тип документа*")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.formDocument.type,expression:"formDocument.type"}],staticClass:"form-element-select",attrs:{name:"document",id:"document"},on:{blur:function(e){return t.hasErrorAfterBlur(t.v$.formDocument.type)},change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.formDocument,"type",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"Паспорт"}},[t._v("Паспорт")]),r("option",{attrs:{value:"Свидетельство о рождении"}},[t._v("Свидетельство о рождении")]),r("option",{attrs:{value:"Вод. удостоверение"}},[t._v("Вод. удостоверение")])]),t.v$.formDocument.type.$error?r("small",{staticClass:"form-element-hint"},[t._v("Выберете документ")]):t._e()]),r("div",{staticClass:"form-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formDocument.series,expression:"formDocument.series"}],staticClass:"form-element-input",attrs:{id:"seriesNumber",type:"text"},domProps:{value:t.formDocument.series},on:{change:t.setClassName,input:function(e){e.target.composing||t.$set(t.formDocument,"series",e.target.value)}}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"seriesNumber"}},[t._v("Серия")])]),r("div",{staticClass:"form-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formDocument.number,expression:"formDocument.number"}],staticClass:"form-element-input",attrs:{id:"seriesNumber",type:"text"},domProps:{value:t.formDocument.number},on:{change:t.setClassName,input:function(e){e.target.composing||t.$set(t.formDocument,"number",e.target.value)}}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"seriesNumber"}},[t._v("Номер")])]),r("div",{staticClass:"form-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formDocument.issued,expression:"formDocument.issued"}],staticClass:"form-element-input",attrs:{id:"issued",type:"text"},domProps:{value:t.formDocument.issued},on:{change:t.setClassName,input:function(e){e.target.composing||t.$set(t.formDocument,"issued",e.target.value)}}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"issued"}},[t._v("Кем выдан")])]),r("div",{staticClass:"form-input",class:t.hasErrorAfterTouch(t.v$.formDocument.date)},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formDocument.date,expression:"formDocument.date"}],staticClass:"form-element-input",attrs:{id:"date",type:"date"},domProps:{value:t.formDocument.date},on:{change:t.setClassName,blur:function(e){return t.hasErrorAfterBlur(t.v$.formDocument.type)},input:function(e){e.target.composing||t.$set(t.formDocument,"date",e.target.value)}}}),r("div",{staticClass:"form-element-bar"}),r("label",{staticClass:"form-element-label",attrs:{for:"date"}},[t._v("Дата выдачи*")]),t.v$.formDocument.date.$error?r("small",{staticClass:"form-element-hint"},[t._v("Введите дату выдачи документа")]):t._e()]),t._m(7)])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("h2",[t._v("Контактная информация")]),r("p",{staticClass:"step-by-step"},[t._v(" Шаг 1 из 3")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"btn-switch__label btn-switch__label_yes",attrs:{for:"yes"}},[r("span",{staticClass:"btn-switch__txt"},[t._v("Жен")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"btn-switch__label btn-switch__label_no",attrs:{for:"no"}},[r("span",{staticClass:"btn-switch__txt"},[t._v("Муж")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-submit"},[r("button",{attrs:{type:"submit"}},[t._v("Далее")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("h2",[t._v("Адрес регистрации")]),r("p",{staticClass:"step-by-step"},[t._v(" Шаг 2 из 3")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-submit"},[r("button",{attrs:{type:"submit"}},[t._v("Далее")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("h2",[t._v("Личные данные")]),r("p",{staticClass:"step-by-step"},[t._v(" Шаг 3 из 3")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-submit"},[r("button",{attrs:{type:"submit"}},[t._v("Отправить")])])}],l=r("e3e1"),m=r("25a0"),u={name:"Registration",setup(){return{v$:Object(m["a"])()}},data(){return{formData:{lastName:"",firstName:"",patronymic:"",birthday:null,phoneNumber:"",sex:"мужской",groupClient:[],doctor:"",withoutSMS:!1},formAddress:{index:"",country:"",region:"",city:"",street:"",home:"",apartment:""},formDocument:{type:"",series:"",number:"",date:"",issued:""},formStep:{firstStep:!0,secondStep:!1,thirdStep:!1}}},validations(){return{formData:{lastName:{required:l["a"]},firstName:{required:l["a"]},patronymic:{},birthday:{required:l["a"],validDate:t=>{const e=new Date(t),r=new Date("1900-01-01"),a=new Date;return e>r&&e<a}},phoneNumber:{required:l["a"],validPhone:t=>11===t.length},sex:{},groupClient:{required:l["a"]},doctor:{},withoutSMS:{}},formAddress:{index:{},country:{},region:{},city:{required:l["a"]},street:{},home:{},apartment:{}},formDocument:{type:{required:l["a"]},series:{},number:{},date:{required:l["a"],validDate:t=>{const e=new Date(t),r=new Date("1900-01-01"),a=new Date;return e>r&&e<a}},issued:{}}}},methods:{hasErrorAfterTouch(t){if(t.$error)return"form-has-error"},hasErrorAfterBlur(t){t.$touch()},setClassName(t){t.target.value?t.target.classList.add("hasValue"):t.target.classList.remove("hasValue")},getFullName(t){const e=t.match(/([а-яА-Яa-zA-Z]+)/g)||["","",""];this.formData.firstName=e[1],this.formData.lastName=e[0],this.formData.patronymic=e.slice(2).join(" ")},getPhoneNumber(t){const e=t.target.value.replace(/\D/g,"").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);this.formData.phoneNumber=e[0],e[1]&&(e[1]=7),t.target.value=e[2]?e[1]+(e[3]?"("+e[2]+") "+e[3]+(e[4]?"-"+e[4]+(e[5]?"-"+e[5]:""):""):e[2]):e[1]},someAction(){this.formStep.thirdStep&&(this.v$.formDocument.$touch(),this.v$.formDocument.$error||alert("Регистрация успешно завершена")),this.formStep.secondStep&&(this.v$.formAddress.$touch(),this.v$.formAddress.$error||(console.log("2 этап завершен. Ещё 1!"),this.formStep.secondStep=!1,this.formStep.thirdStep=!0)),this.formStep.firstStep&&(this.v$.formData.$touch(),this.v$.formData.$error||(console.log("1 этап завершен. Ещё 2!"),this.formStep.firstStep=!1,this.formStep.secondStep=!0))}}},c=u,f=(r("517b"),r("2877")),d=Object(f["a"])(c,n,i,!1,null,null,null),p=d.exports,v={name:"App",components:{Registration:p}},h=v,b=Object(f["a"])(h,s,o,!1,null,null,null),C=b.exports;a["default"].config.productionTip=!1,a["default"].config.devtools=!0,new a["default"]({render:function(t){return t(C)}}).$mount("#app")}});
//# sourceMappingURL=app.1cb91ff2.js.map