import{r as x,c as I,a as P,o as r,b as c,d as t,n as v,F as m,e as h,t as u,f as z,w as D,g as V,h as w,u as d,R as $,i as _}from"./app-B6cr72mb.js";import{g as q}from"./api-DUrFBSW7.js";import{_ as S}from"./InnerHero-D-Xjpddm.js";const B={class:"w-11/12 mx-auto 2xl:w-8/12 lg:w-10/12"},E={class:"flex flex-wrap justify-end gap-3 mt-10 sm:gap-6"},L=["id","aria-label","onClick"],R={role:"list",class:"grid grid-cols-1 gap-3 mt-10 lg:grid-cols-3 sm:grid-cols-2 list-style-none"},N={class:"relative overflow-hidden aspect-video bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]"},F={key:0,class:"p-2 absolute top-3 right-3 w-1/4 h-fit backdrop-blur-[16px] rounded-[8px]"},G=["src","alt"],T={class:"flex flex-col gap-3 p-6"},j={class:"p-2 relative w-fit z-[3] bottom-10 -mb-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2"},H={class:"text-accent2 font-[200] max-sm:text-[14px]"},U={class:"text-accent1 font-[400] sm:text-xl"},J={class:"text-accent1 font-[200] sm:text-xl"},K={class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px]"},M={class:"mx-auto mt-10 text-end"},b=6,O={__name:"PostsList",props:{data:Array,uniqueIndustries:Array},setup(f){const l=f,o=x(null),i=x(l.data),n=x(1),p=a=>{o.value=a,a==="All"?i.value=l.data:i.value=l.data.filter(s=>s.industry===a),n.value=1};p("All");const k=a=>a.toLowerCase().replace(/\s+/g,"-"),y=I(()=>{const a=(n.value-1)*b,s=a+b;return i.value.slice(a,s)}),C=a=>{n.value=a};return(a,s)=>{const A=P("vue-awesome-paginate");return r(),c("section",B,[t("div",E,[t("button",{onClick:s[0]||(s[0]=e=>p("All")),class:v(["px-2 sm:px-4 py-3 w-fit max-sm:text-[14px] backdrop-blur-[16px] transition-all duration-400 rounded-[16px] text-accent1 bg-transparent hover:border-accent1 outline-none",{"border-b-2 border-accent1":o.value==="All","border-b-2 border-bg2":o.value!="All"}])}," All",2),(r(!0),c(m,null,h(l.uniqueIndustries,(e,g)=>(r(),c("button",{key:g,id:e+(o.value===e?"-active":""),"aria-label":"show "+e,class:v(["px-2 sm:px-4 py-3 w-fit max-sm:text-[14px] backdrop-blur-[16px] transition-all duration-400 rounded-[16px] text-accent1 bg-transparent hover:border-accent1 outline-none",{"border-b-2 border-accent1":o.value===e,"border-b-2 border-bg2":o.value!=e}]),onClick:W=>p(e)},u(e),11,L))),128))]),t("ul",R,[(r(!0),c(m,null,h(y.value,(e,g)=>(r(),c("li",{key:g,class:"flex-grow group w-full relative group sm:min-h-[135px] rounded-[16px] border-2 border-bg2"},[e.slug&&e.publication_type?(r(),z(d($),{key:0,id:"go-to-"+e.title+"-page","aria-label":"read more about "+e.title,to:`/resource-center/${k(e.publication_type)}/${e.slug}`},{default:D(()=>[t("div",N,[t("div",{class:"absolute inset-0 z-[-1] duration-500 transform group-hover:scale-110",style:V({backgroundImage:"url("+e.image+")",backgroundSize:"cover",backgroundPosition:"center"})},null,4),e.customer_logo?(r(),c("div",F,[t("img",{src:e.customer_logo,alt:e.title,width:"100%",height:"100%",center:"",cover:"",responsive:"",loading:"lazy",class:"mx-auto aspect-1.72/1 scale-125"},null,8,G)])):w("",!0)]),t("div",T,[t("h2",j,u(e.publication_type),1),t("h3",H,u(e.published_at),1),t("h2",U,u(e.industry),1),t("h2",J,u(e.title),1),t("p",K,u(e.summary),1),s[2]||(s[2]=t("span",{class:"border-accent2 text-accent2 w-[34px] h-[34px] cursor-pointer grid place-content-center ms-auto me-0 border-2 transition-all duration-400 hover:text-bg2 hover:border-bg2 text-xl rounded-full"}," 🡥 ",-1))])]),_:2},1032,["id","aria-label","to"])):w("",!0)]))),128))]),t("div",M,[_(A,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=e=>n.value=e),"total-items":i.value.length,"items-per-page":b,"max-pages-shown":5,onPageChange:C},null,8,["modelValue","total-items"])])])}}},Q="/images/banners/resources.webp",ee={__name:"index",setup(f){const l=q();let o=[...new Set(l.map(i=>i.industry))];return console.log(o),(i,n)=>(r(),c(m,null,[n[0]||(n[0]=t("head",null,[t("title",null,"AITS - Resource Center"),t("meta",{name:"description",content:"Got a knack for reading? Gain access to free resources including whitepapers, industry insights, educational blogs, and specialized webinars."})],-1)),_(S,{pagebanner:d(Q),pagetitle:"Innovation Insights Hub",pagedescription:"Explore the latest resources designed to keep you informed and ahead in the fast-paced world of industrial digital transformation."},null,8,["pagebanner"]),_(O,{uniqueIndustries:d(o),data:d(l)},null,8,["uniqueIndustries","data"])],64))}};export{ee as default};
