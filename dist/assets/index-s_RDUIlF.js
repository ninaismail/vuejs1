import{o as a,c as n,a as t,t as e,F as r,r as d,b as x,u as p}from"./app-CW6mUF6E.js";import{g as u}from"./api-8CAHU-Ck.js";const m={class:"w-11/12 py-40 mx-auto 2xl:w-8/12 lg:w-10/12"},g={class:"font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6"},_={class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px] text-justify"},f={role:"list",class:"grid grid-cols-3 gap-6 mt-10 lg:gap-3 list-style-none"},h=t("div",{class:"w-full h-40 bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]"},null,-1),b={class:"flex flex-col gap-3 p-6 lg:gap-6"},y={class:"text-accent2 font-[200] max-sm:text-[14px]"},w={class:"text-accent1 font-[400] sm:text-lg"},k={class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px] text-justify"},B={__name:"PostsList",props:{category:String,sectiontitle:String,sectiondescription:String,data:Array},setup(s){return(i,c)=>(a(),n("section",m,[t("h1",g,e(s.sectiontitle),1),t("p",_,e(s.sectiondescription),1),t("ul",f,[(a(!0),n(r,null,d(s.data,(o,l)=>(a(),n("li",{key:l,class:"flex-grow lg:col-span-1 ms:col-span-2 col-span-3 w-full relative group sm:min-h-[135px] rounded-[16px] border-2 border-bg2"},[h,t("div",b,[t("h3",y,e(o.date),1),t("h2",w,e(o.title),1),t("p",k,e(o.summary),1)])]))),128))])]))}},v={__name:"index",setup(s){const i=u();return(c,o)=>(a(),x(B,{sectiontitle:"All Blogs",category:"blog",sectiondescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.",data:p(i)},null,8,["data"]))}};export{v as default};