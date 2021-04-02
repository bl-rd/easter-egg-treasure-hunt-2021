import{o as e,c as t,e as r,v as n,a as o,m as s,f as a,p as u,g as c,t as l,h as i,i as d,T as h}from"./index.e78bb540.js";const p="numeric",m="text";var w=[b(0,"Here be your first question...","42",p),b(1,"And what is yer second question?","cheese",m)];function b(e,t,r,n){return{number:e,clue:t,answer:r,inputType:n}}const x={data:()=>({model:null}),props:{answer:{type:String,required:!0},inputType:{type:String,required:!0}},computed:{isNumeric(){return this.inputType===p},inputAttrs(){return this.isNumeric?{inputmode:"numeric",pattern:"[0-9]*"}:null},isCorrect(){const{model:e,answer:t}=this;return e===t}},methods:{handleSubmit(){const{model:e}=this;e&&this.$emit("answer",{correct:this.isCorrect})}}},y=o("label",{for:"input"},"Your answer:",-1),T=o("button",{type:"submit"}," Go ",-1);x.render=function(u,c,l,i,d,h){return e(),t("form",{onSubmit:c[2]||(c[2]=a(((...e)=>h.handleSubmit&&h.handleSubmit(...e)),["prevent"]))},[y,r(o("input",s({id:"input",type:"text","onUpdate:modelValue":c[1]||(c[1]=e=>u.model=e)},h.inputAttrs),null,16),[[n,u.model]]),T],32)};const v={props:{correct:{type:Boolean,required:!0}},computed:{outcomeText(){return this.correct?"Correct!":"Too bad me heartie..."},buttonText(){return this.correct?"Next clue":"Try again..."}},methods:{handleClick(){const e=this.correct?"next":"again";this.$emit(e)}}},C=i();u("data-v-50962da6");const A={class:"modal"};c();const f=C(((r,n,s,a,u,c)=>(e(),t("div",A,[o("h2",null,l(c.outcomeText),1),o("button",{onClick:n[1]||(n[1]=(...e)=>c.handleClick&&c.handleClick(...e))},l(c.buttonText),1)]))));v.render=f,v.__scopeId="data-v-50962da6";const g=i();const M={components:{AnswerInput:x,CorrectModal:v},data:()=>({model:null,showCorrectModal:!1,correctAnswer:!1}),computed:{haveData(){return!!this.clueData},clueData(){var e;return null!=(e=w[this.clue-1])?e:null},clueText(){var e;return(null==(e=this.clueData)?void 0:e.clue)?`${this.clue}: ${this.clueData.clue}`:"Ack! There be no clue 'ere."},clueAnswer(){var e;return null==(e=this.clueData)?void 0:e.answer},clueInputType(){var e;return null==(e=this.clueData)?void 0:e.inputType}},methods:{handleCorrect(){this.showCorrectModal=!0},handleWrong(){this.showCorrectModal=!1},handleAnswer({correct:e}){this.showCorrectModal=!0,this.correctAnswer=e},handleNext(){this.showCorrectModal=!1,this.$emit("next")}}},N=Object.assign(M,{expose:[],props:{clue:Number},setup:function(r){return g(((n,s)=>(e(),t("div",{class:"clue",key:r.clue},[o("p",null,l(n.clueText),1),o(x,{answer:n.clueAnswer,inputType:n.clueInputType,onAnswer:n.handleAnswer},null,8,["answer","inputType","onAnswer"]),o(h,{name:"fade"},{default:g((()=>[n.showCorrectModal?(e(),t(v,{key:0,correct:n.correctAnswer,onNext:n.handleNext,onAgain:s[1]||(s[1]=e=>n.showCorrectModal=!1)},null,8,["correct","onNext"])):d("",!0)])),_:1})]))))}});N.__scopeId="data-v-eba0a502";export default N;