<template>
    <form @submit.prevent="someAction">
        <div class="wrap first-step" :class="formStep.firstStep ? '' : 'hidden'">
            <div class="header">
                <h2>Контактная информация</h2>
                <p class="step-by-step"> Шаг 1 из 3</p>
            </div>

            <div class="form-input" :class="hasErrorAfterTouch(v$.formData.firstName)">
                <input 
                    id="name" 
                    class="form-element-input" 
                    type="input"
                    placeholder="Введите ваше ФИО" 
                    @input="getFullName($event.target.value)"
                    @change="setClassName"
                    @blur="hasErrorAfterBlur(v$.formData.firstName)"
                />
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="name">ФИО*</label>
                <small class="form-element-hint" v-if="v$.formData.firstName.$error">Введите ваше имя и фамилию</small>
            </div>

            <div class="form-input" :class="hasErrorAfterTouch(v$.formData.birthday)">
                <input 
                    id="birthday" 
                    class="form-element-input" 
                    type="date"
                    v-model="formData.birthday"
                    placeholder="Введите вашу дату рождения"
                    @change="setClassName"
                    @blur="hasErrorAfterBlur(v$.formData.birthday)"
                />
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="birthday">Дата рождения*</label>
                <small class="form-element-hint" v-if="v$.formData.birthday.$error">Введите вашу дату рождения</small>
            </div>

            <div class="form-input" :class="hasErrorAfterTouch(v$.formData.phoneNumber)">
                <input 
                    id="phoneNumber" 
                    class="form-element-input" 
                    type="text"
                    placeholder="Формат: 7XXXXXXXXXX"
                    @input="getPhoneNumber" 
                    @blur="hasErrorAfterBlur(v$.formData.phoneNumber)"
                    @change="setClassName"
                />
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="phoneNumber">Номер телефона*</label>
                <small class="form-element-hint" v-if="v$.formData.phoneNumber.$error">Введите ваш номер телефона</small>
            </div>

            <div class="form-radio">
                <label class="form-label">Пол</label>
                <div class="btn-switch">	
                    <input type="radio" id="yes" name="switch" class="btn-switch__radio btn-switch__radio_yes" @click="formData.sex = 'женский'"/>
                    <input type="radio" checked id="no" name="switch" class="btn-switch__radio btn-switch__radio_no" @click="formData.sex = 'мужской'"/>
                    <label for="yes" class="btn-switch__label btn-switch__label_yes"><span class="btn-switch__txt">Жен</span></label>
                    <label for="no" class="btn-switch__label btn-switch__label_no"><span class="btn-switch__txt">Муж</span></label>
                </div>
            </div>

            <div class="form-select" :class="hasErrorAfterTouch(v$.formData.groupClient)">
                <label for="groupClient" class="form-label">Группа клиента*</label>
                <select  
                    size="3" 
                    class="form-element-select" 
                    name="groupClient" 
                    id="groupClient" 
                    v-model="formData.groupClient"
                    @blur="hasErrorAfterBlur(v$.formData.groupClient)" 
                    multiple
                >
                    <option value="VIP">VIP</option>
                    <option value="Проблемные">Проблемные</option>
                    <option value="ОМС">ОМС</option>
                </select>
                <small class="form-element-hint" v-if="v$.formData.groupClient.$error">Выберите вашу группу</small>
            </div>

            <div class="form-select">
                <label for="doctor" class="form-label">Лечащий врач:</label>
                <select 
                    name="doctor" 
                    class="form-element-select" 
                    id="doctor" 
                    v-model="formData.doctor"
                >
                    <option value="Иванов">Иванов</option>
                    <option value="Захаров">Захаров</option>
                    <option value="Чернышева">Чернышева</option>
                </select>
                    
            </div>

            <div class="form-checkbox">
                <input type="checkbox" id="sms" v-model="formData.withoutSMS">
                <label for="sms">Не отправлять СМС</label>
            </div>
            
            <div class="form-submit" >
                <button type="submit">Далее</button>
            </div>
        </div>

        <div class="wrap second-step" :class="formStep.secondStep ? '' : 'hidden'">

            <div class="header">
                <h2>Адрес регистрации</h2>
                <p class="step-by-step"> Шаг 2 из 3</p>
            </div>

            <div class="form-input">
                <input
                    @change="setClassName" 
                    class="form-element-input"  
                    id="postal" 
                    type="text" 
                    v-model="formAddress.index"
                >
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="postal">Индекс</label>
            </div>
                
            <div class="form-input">
                <input 
                    @change="setClassName" 
                    class="form-element-input" 
                    id="country" 
                    type="text" 
                    v-model="formAddress.country"
                >
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="country">Страна</label>
            </div>
                
            <div class="form-input">
                <input 
                    @change="setClassName" 
                    class="form-element-input" 
                    id="region" 
                    type="text" 
                    v-model="formAddress.region"
                >
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="region">Область</label>
            </div>
                
            <div class="form-input" :class="hasErrorAfterTouch(v$.formAddress.city)">
                <input  
                    @change="setClassName" 
                    class="form-element-input" 
                    id="city" 
                    type="text" 
                    v-model="formAddress.city"
                    @blur="hasErrorAfterBlur(v$.formAddress.city)" 
                >
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="city">Город*</label>
                <small class="form-element-hint" v-if="v$.formAddress.city.$error">Введите город проживания</small>
            </div>
                
            <div class="form-input">
                <input 
                    @change="setClassName" 
                    class="form-element-input" 
                    id="street" 
                    type="text" 
                    v-model="formAddress.street"
                >
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="street">Улица</label>
            </div>
                
            <div class="form-input">
                <input 
                    @change="setClassName" 
                    class="form-element-input" 
                    id="home" 
                    type="text" 
                    v-model="formAddress.home"
                >
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="home">Дом</label>
            </div>
                
            <div class="form-input">
                <input 
                    @change="setClassName" 
                    class="form-element-input" 
                    id="apartment" 
                    type="text" 
                    v-model="formAddress.apartment">
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="apartment">Квартира</label>
            </div>       

            <div class="form-submit" >
                <button type="submit">Далее</button>
            </div>     
        </div>

        <div class="wrap third-step" :class="formStep.thirdStep ? '' : 'hidden'">

            <div class="header">
                <h2>Личные данные</h2>
                <p class="step-by-step"> Шаг 3 из 3</p>
            </div>

            <div class="form-select" :class="hasErrorAfterTouch(v$.formDocument.type)">
                <label class="form-label" for="document">Тип документа*</label>
                <select  
                    class="form-element-select" 
                    name="document" 
                    id="document" 
                    v-model="formDocument.type"
                    @blur="hasErrorAfterBlur(v$.formDocument.type)" 
                >
                    <option value="Паспорт">Паспорт</option>
                    <option value="Свидетельство о рождении">Свидетельство о рождении</option>
                    <option value="Вод. удостоверение">Вод. удостоверение</option>
                </select>
                <small class="form-element-hint" v-if="v$.formDocument.type.$error">Выберете документ</small>
            </div>
                
            <div class="form-input">
                <input 
                    @change="setClassName" 
                    class="form-element-input" 
                    id="seriesNumber" 
                    type="text" 
                    v-model="formDocument.series"
                >
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="seriesNumber">Серия</label>
            </div>

            <div class="form-input">
                <input 
                    @change="setClassName" 
                    class="form-element-input" 
                    id="seriesNumber" 
                    type="text" 
                    v-model="formDocument.number"
                >
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="seriesNumber">Номер</label>
            </div>    
                
            <div class="form-input">
                <input 
                    @change="setClassName" 
                    class="form-element-input" 
                    id="issued" 
                    type="text" 
                    v-model="formDocument.issued">
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="issued">Кем выдан</label>
            </div>
                
            <div class="form-input" :class="hasErrorAfterTouch(v$.formDocument.date)">
                <input  
                    @change="setClassName" 
                    class="form-element-input" 
                    id="date" 
                    type="date" 
                    @blur="hasErrorAfterBlur(v$.formDocument.type)" 
                    v-model="formDocument.date">
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="date">Дата выдачи*</label>
                <small class="form-element-hint" v-if="v$.formDocument.date.$error">Введите дату выдачи документа</small>
            </div>

            <div class="form-submit" >
                <button type="submit">Отправить</button>
            </div>  
        </div>
    </form>
</template>

<script>
import { required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

export default {
    name: "Registration",
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            formData: {
                lastName: '',
                firstName: '',
                patronymic: '',
                birthday: null,
                phoneNumber: '',
                sex: 'мужской',
                groupClient: [],
                doctor: '',
                withoutSMS: false,
            },
            formAddress: {
                index: '',
                country: '',
                region: '',
                city: '',
                street: '',
                home: '',
                apartment: '',
            },
            formDocument: {
                type: '',
                series: '',
                number: '',
                date: '',
                issued: '',
            },
            formStep: {
                firstStep: true,
                secondStep: false,
                thirdStep: false,
            }
        }
    },
    validations() {
        return {
            formData: {
                lastName: {required},
                firstName: {required},
                patronymic: {},
                birthday: {
                    required,
                    validDate: val => {
                        const birthDay = new Date (val)
                        const datemin = new Date ('1900-01-01')
                        const datemax = new Date()

                        return birthDay > datemin && birthDay < datemax
                    }
                },
                phoneNumber: {
                    required, 
                    validPhone: val => (val.length === 11)
                },
                sex: {},
                groupClient: {
                    required
                },
                doctor: {},
                withoutSMS: {},
            },
            formAddress: {
                index: {},
                country: {},
                region: {},
                city: {required},
                street: {},
                home: {},
                apartment: {},
            },
            formDocument: {
                type: {required},
                series: {},
                number: {},
                date: {
                    required,
                    validDate: val => {
                        const birthDay = new Date (val)
                        const datemin = new Date ('1900-01-01')
                        const datemax = new Date()

                        return birthDay > datemin && birthDay < datemax
                    }
                },
                issued: {},
            },
        }
    },
    methods: {
        hasErrorAfterTouch(value) {
            if (value.$error) {
                return 'form-has-error'
            }
        },
        hasErrorAfterBlur(value) {
            value.$touch()
        },
        setClassName(event) {
            if (event.target.value) {
                event.target.classList.add('hasValue')
            } else {
                event.target.classList.remove('hasValue');
            }
        },
        getFullName (value) {
            const fullName = value.match(/([а-яА-Яa-zA-Z]+)/g) || ['','','']

            this.formData.firstName = fullName[1]
            this.formData.lastName = fullName[0]
            this.formData.patronymic = fullName.slice(2).join(' ')
        },
        getPhoneNumber(event) {
            const x = event.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            this.formData.phoneNumber = x[0]
            x[1] ? x[1] = 7 : ''
            event.target.value = !x[2] 
                                        ? x[1] 
                                        : x[1] + (x[3]
                                            ? '(' + x[2] +')' + ' ' + x[3] + (x[4]
                                                ? '-' + x[4] + (x[5]
                                                    ? '-' + x[5]
                                                    : '')
                                                : '')
                                            : x[2])
        },
        someAction() {
            if (this.formStep.thirdStep) {
                this.v$.formDocument.$touch()
                if (!this.v$.formDocument.$error) {
                    alert('Регистрация успешно завершена')
                }
            }
            if (this.formStep.secondStep) {
                this.v$.formAddress.$touch()
                if (!this.v$.formAddress.$error) {
                    console.log('2 этап завершен. Ещё 1!')
                    this.formStep.secondStep = false
                    this.formStep.thirdStep = true
                }
            }
            if (this.formStep.firstStep) {
                this.v$.formData.$touch()
                if (!this.v$.formData.$error) {
                    console.log('1 этап завершен. Ещё 2!')
                    this.formStep.firstStep = false
                    this.formStep.secondStep = true
                }
            }
        },
    },
    
}
</script>


<style lang='scss'>
label, .btn-switch, .form-element-select, .form-checkbox, .form-checkbox label {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.hidden {
    display: none;
}
body {
    background: #fff;
    padding: 30px;
}
.wrap {
    padding: 40px 30px;
    background: #FFF;
    max-width: 500px;
    margin: auto;
    top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 50px;

    .step-by-step {
        margin: 10px 0 ;
        font-size: 1.2rem;
        color: #a6a6a6;
    }

    h2 {
        margin: 0;
    }
}

.form-input {
    min-width: 250px;
    height: auto;
    background: white;
    position: relative;
    margin-bottom: 50px;
    text-align: center;
}

.form-submit {
    display: flex;
    justify-content: center;
    padding-bottom: 50px;

    button {
        background-color: white;
        border: 0;
        outline: none;
        padding: 1.5rem 2rem;
        box-shadow: 0px 5px 10px darken(dodgerblue, 40%);
        transition: .3s;
        cursor: pointer;
        font-size: 1.2rem;
        border-radius: 5px;
        border-bottom: 4px solid lighten(gray, 70%);

        &:active {
            box-shadow: 0px 4px 8px darken(dodgerblue, 30%);
            transform: scale(.98);
        }
    }
}

.form-select {
    text-align: center;
    margin-bottom: 40px;
    label {
        font-size: 1.2rem;
    }
}

.form-element-select{
    width: 100%;
    padding: .25em .4em .25em .4em;
    margin-top: 20px;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 2px 2px 8px #999;
    background: #eee;
    border: none;
    outline: none;
    display: inline-block;
    -webkit-appearance:none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    font-size: 1rem;
}

.form-checkbox {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px
}

.form-element-input {
  outline: none;
  height: 1.5em;
  display: block;
  background: none;
  padding: 0.125em 0.125em 0.0625em;
  font-size: 1.2rem;
  border: 0;
  line-height: 1.5;
  width: 100%;
  color: #333;
  box-shadow: none;
  opacity: 0.001;
  transition: opacity 0.28s ease;
  will-change: opacity;
}

.form-element-input::placeholder {
  color: #a6a6a6;
  transform: scale(0.9);
  transform-origin: left top;
}

.form-element-bar {
  height: 1px;
  background: #999;
  position: relative;
  display: block;
}

.form-element-bar:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: #337ab7;
  height: 2px;
  display: block;
  transform: rotateY(90deg);
  transition: transform .28s ease;
  will-change: transform;
}

.form-element-label {
  position: absolute;
  top: .85em;
  left: 0;
  line-height: 1.5em;
  pointer-events: none;
  padding-left: 0.125em;
  z-index: 1;
  font-size: 1.2rem;
  margin: 0;
  color: #a6a6a6;
  transform: translateY(-50%);
  transform-origin: left center;
  transition: transform .28s ease, color .28s linear, opacity .28s linear;
  will-change: transform, color, opacity;
  cursor: text;
}

.form-element-hint {
  color: #aaa;
}

.form-element-input.hasValue ~ .form-element-bar::after,
.form-element-input:focus ~ .form-element-bar::after {
  transform: rotateY(0deg);
}
.form-element-input.hasValue ~ .form-element-label,
.form-element-input:focus ~ .form-element-label {
  color: #337ab7;
}
.form-element-input.hasValue,
.form-element-input:focus {
  opacity: 1;
}
.form-element-input.hasValue ~ .form-element-label,
.form-element-input:focus ~ .form-element-label {
  transform: translateY(-100%) translateY(-0.5em) translateY(-2px);
  cursor: pointer;
  pointer-events: auto;
}

.form-has-error .form-element-label.form-element-label,
.form-has-error .form-label,
.form-has-error .form-element-hint {
  color: #d9534f;
}

.form-has-error .form-element-bar:after {
  background: #d9534f;
}

.form-has-error .form-element-input.hasValue ~ .form-element-label,
.form-has-error .form-element-input:focus ~ .form-element-label {
  transform: translateY(-100%) translateY(-0.5em) translateY(-2px);
  color: #d9534f;
  cursor: pointer;
  pointer-events: auto;
}

.form-radio {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    margin-bottom: 40px;
}

.btn-switch {
    font-size: .7rem;
	position: relative;
	display: inline-block;		
}

.btn-switch__radio {
	display: none;
}

.btn-switch__label {
	display: inline-block;	
	padding: .75rem .5rem .75rem .75rem;
	vertical-align: top;
	font-size: 1rem;
	font-weight: 700;
	line-height: 1.5;
	color: #666;
    cursor: pointer;
	transition: color .2s ease-in-out;
}

.btn-switch__label + .btn-switch__label {
  padding-right: .75rem;
	padding-left: 0;
}

.btn-switch__txt {
	position: relative;
	z-index: 2;
  display: inline-block;
   min-width: 1.5rem;
	opacity: 1;
	pointer-events: none;
	transition: opacity .2s ease-in-out;
}

.btn-switch__radio_no:checked ~ .btn-switch__label_yes .btn-switch__txt,
.btn-switch__radio_yes:checked ~ .btn-switch__label_no .btn-switch__txt {
	opacity: 0;
}

.btn-switch__label:before {
	content: "";
	position: absolute;
	z-index: -1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: #f0f0f0;
	border-radius: 1.5rem;
	box-shadow: inset 0 .0715em .3572em rgba(43,43,43,.05);
}

.btn-switch__label_no:after {
	content: "";
	position: absolute;
	z-index: 2;
	top: .5rem;
	bottom: .5rem;
	left: .5rem;
	width: 2rem;
	background: #337ab7;
	border-radius: 1rem;	
	pointer-events: none;
	box-shadow: 0 .1429rem .2143rem rgba(43,43,43,.2), 0 .3572rem .3572rem rgba(43,43,43,.1);
	transition: left .2s ease-in-out, background .2s ease-in-out;
}

.btn-switch__radio_yes:checked ~ .btn-switch__label_no:after {
	left: calc(100% - 2.5rem);
	background: #337ab7;
}

.btn-switch__radio_no:checked ~ .btn-switch__label_yes:before,
.btn-switch__radio_yes:checked ~ .btn-switch__label_no:before {
	z-index: 1;
}

input[type="checkbox"] { display: none; }

input[type="checkbox"] + label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  font: 14px/20px ;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

input[type="checkbox"] + label:last-child { margin-bottom: 0; }

input[type="checkbox"] + label:before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #666;
  position: absolute;
  left: 0;
  top: -3px;
  opacity: .6;
  -webkit-transition: all .12s, border-color .08s;
  transition: all .12s, border-color .08s;
}

input[type="checkbox"]:checked + label:before {
  width: 10px;
  top: -7px;
  left: 5px;
  border-radius: 0;
  opacity: 1;
  border-top-color: transparent;
  border-left-color: transparent;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>