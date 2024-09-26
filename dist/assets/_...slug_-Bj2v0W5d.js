import{c as b,o,b as l,d as t,F as p,e as _,f as x,w as f,g as m,h as u,t as c,u as g,R as v,r as y,C as w,O as k}from"./app-BB_-N6j8.js";import{a as $,b as B}from"./api-HRY4cavj.js";const R={class:"w-11/12 pt-20 mx-auto 2xl:w-8/12 lg:w-10/12"},S={key:0,role:"list",class:"grid grid-cols-1 gap-3 mt-10 lg:grid-cols-2 sm:grid-cols-2 list-style-none"},C={class:"relative overflow-hidden aspect-video bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]"},I={key:0,class:"p-2 absolute top-3 right-3 w-1/4 h-fit backdrop-blur-[16px] rounded-[8px]"},P=["src","alt"],z={class:"flex flex-col gap-3 p-6"},L={class:"p-2 relative w-fit z-[3] bottom-10 -mb-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2"},j={class:"flex flex-wrap justify-between gap-3 pb-3 border-b border-bg2"},D={class:"text-accent1 font-[400] sm:text-xl"},T={class:"text-accent2 font-[200] max-sm:text-[14px]"},V={class:"text-accent1 font-[700] 2xl:text-3xl lg:text-2xl md:text-xl text-[30px]"},H={class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px] min-h-[120px]"},M={key:1,class:"lg:w-full relative group bg-extended-noise bg-cover bg-center bg-opacity-50 rounded-[16px] mt-10 mx-auto"},N={__name:"RelatedPosts",props:{data:Array,industry:String,currentId:Number},setup(n){const i=n,d=b(()=>i.data.filter(a=>a.industry===i.industry&&a.id!==i.currentId)),r=a=>a==="Blog post"?"blog":a.toLowerCase().replace(/\s+/g,"-");return(a,s)=>(o(),l("section",R,[s[2]||(s[2]=t("h1",{class:"font-[500] text-accent1 md:text-4xl text-[30px] uppercase mb-6"},"Related Insights",-1)),d.value.length>0?(o(),l("ul",S,[(o(!0),l(p,null,_(d.value,(e,h)=>(o(),l("li",{key:h,class:"flex-grow group w-full relative group sm:min-h-[135px] rounded-[16px] border-2 border-bg2"},[e.slug&&e.publication_type?(o(),x(g(v),{key:0,id:"go-to-"+e.title+"-page","aria-label":"read more about "+e.title,to:{path:`/resource-center/${r(e.publication_type)}/${e.slug}`}},{default:f(()=>[t("div",C,[t("div",{class:"absolute inset-0 z-[-1] duration-500 transform group-hover:scale-110",style:m({backgroundImage:"url("+e.image+")",backgroundSize:"cover",backgroundPosition:"center"})},null,4),e.customer_logo?(o(),l("div",I,[t("img",{src:e.customer_logo,alt:e.title,width:"100%",height:"100%",center:"",cover:"",responsive:"",loading:"lazy",class:"mx-auto aspect-1.72/1 scale-125"},null,8,P)])):u("",!0)]),t("div",z,[t("h2",L,c(e.publication_type),1),t("div",j,[t("h2",D,c(e.industry),1),t("h3",T,c(e.published_at),1)]),t("h2",V,c(e.title),1),t("p",H,c(e.summary),1),s[0]||(s[0]=t("span",{class:"border-accent2 w-[34px] h-[34px] cursor-pointer grid place-content-center mt-auto mb-0 ms-auto me-0 border-2 hover:border-bg2 text-xl rounded-full"},[t("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"none",class:"transition-all stroke-accent2 duration-400 hover:stroke-bg2","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),t("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),t("g",{id:"SVGRepo_iconCarrier"},[t("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),t("polyline",{points:"7 7 17 7 17 17"})])])],-1))])]),_:2},1032,["id","aria-label","to"])):u("",!0)]))),128))])):(o(),l("div",M,s[1]||(s[1]=[t("div",{class:"md:px-10 p-6 relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2"},[t("h3",{class:"2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500]"},"No related insights.")],-1)])))]))}},E={class:"w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12"},F={class:"font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6"},G={class:"flex flex-col gap-6 mt-10"},A={key:0,class:"p-2 absolute top-3 right-3 w-1/4 h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]"},O=["src","alt"],q={class:"text-accent2 font-[200] max-sm:text-[14px] mb-6"},J=["innerHTML"],K=["innerHTML"],Q={__name:"PostDetails",props:{item:Object},setup(n){return(i,d)=>(o(),l("section",E,[t("h1",F,c(n.item.title),1),t("div",G,[t("div",{class:"relative overflow-hidden aspect-video rounded-[16px]",style:m({backgroundImage:"url("+n.item.image+")",backgroundSize:"cover",backgroundPosition:"center"})},[n.item.customer_logo?(o(),l("div",A,[t("img",{src:n.item.customer_logo,alt:n.item.title,width:"100%",height:"100%",center:"",cover:"",responsive:"",loading:"lazy",class:"mx-auto aspect-1.72/1 scale-125"},null,8,O)])):u("",!0)],4),t("h3",q,c(n.item.published_at),1),t("div",{class:"space-y-6 tracking-wide text-accent2",innerHTML:n.item.content},null,8,J),t("div",{class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px]",innerHTML:n.item.cta_description},null,8,K)])]))}},U={key:0},W=["content"],X={key:1},tt={__name:"[...slug]",setup(n){const i=k(),d=B(),r=y(null);console.log("post",r.value);const a=s=>{try{r.value=$(s)}catch(e){console.error("Failed to fetch post:",e)}};return a(i.params.slug),w(()=>i.params.slug,s=>{s&&(a(s),console.log("newSlug",s))}),(s,e)=>(o(),l(p,null,[r.value?(o(),l("head",U,[t("title",null,c(r.value.title),1),t("meta",{name:"description",content:r.value.summary},null,8,W)])):(o(),l("head",X,e[0]||(e[0]=[t("title",null,"AITS - Resource Center",-1)]))),t("section",null,[r.value?(o(),x(Q,{key:0,item:r.value},null,8,["item"])):u("",!0),g(d).length>0&&r.value?(o(),x(N,{key:1,data:g(d),currentId:r.value.id,industry:r.value.industry},null,8,["data","currentId","industry"])):u("",!0)])],64))}};export{tt as default};
