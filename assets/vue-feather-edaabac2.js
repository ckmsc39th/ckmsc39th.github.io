import{f as d,a as s}from"./feather-icons-2421efd9.js";import{d as h,h as o}from"./@vue-7bfcc9e4.js";/*! vue-feather v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */var m=h({name:"VueFeather",props:{animation:{type:String,default:void 0},animationSpeed:{type:String,default:void 0},fill:{type:String,default:"none"},size:{type:[Number,String],default:24},stroke:{type:String,default:"currentColor"},strokeLinecap:{type:String,default:"round"},strokeLinejoin:{type:String,default:"round"},strokeWidth:{type:[Number,String],default:2},tag:{type:String,default:"i"},type:{type:String,default:"feather",validator(i){if(!d)throw new Error("The Feather icons is required.");if(!s.icons[i])throw new Error(`"${i}" is not an available icon type.`);return!0}}},computed:{isRemSize(){return typeof this.size=="string"&&this.size.endsWith("rem")}},render(){const{animation:i,animationSpeed:n,isRemSize:r,size:t,type:e}=this,a=s.icons[e];return o(this.tag,{...this.$attrs,"data-name":e,"data-tags":a.tags,"data-type":e,class:{"vue-feather":!0,[`vue-feather--${e}`]:e,[`vue-feather--${i}`]:i,[`vue-feather--${n}`]:n},style:r?{height:t,width:t}:void 0},[o("svg",{...a.attrs,fill:this.fill,height:r?void 0:t,stroke:this.stroke,"stroke-linecap":this.strokeLinecap,"stroke-linejoin":this.strokeLinejoin,"stroke-width":this.strokeWidth,width:r?void 0:t,class:[a.attrs.class,"vue-feather__content"],innerHTML:a.contents})])}});function f(i,n){n===void 0&&(n={});var r=n.insertAt;if(!(!i||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",r==="top"&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i))}}var u="@keyframes vue-feather--spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.vue-feather{display:inline-block;overflow:hidden}.vue-feather--spin{animation:vue-feather--spin 2s linear infinite}.vue-feather--pulse{animation:vue-feather--spin 2s steps(8) infinite}.vue-feather--slow{animation-duration:3s}.vue-feather--fast{animation-duration:1s}.vue-feather__content{display:block;height:inherit;width:inherit}";f(u);export{m as s};
