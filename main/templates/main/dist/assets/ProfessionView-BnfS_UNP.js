import{d as x,r as l,c as d,u as o,a as e,b as c,w as u,t as _,e as g,f as h,g as k,o as f,h as m}from"./index-_0_APcvh.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const w={key:0,class:"container2 s1ip"},b={class:"menu"},V={class:"h1Text"},y={class:"posterBlock2"},I=["src"],N=["src"],P={id:"mainText"},T={class:"menu",style:{margin:"40px 0"}},C={key:1,class:"container2 s1ip"},D={class:"menu"},E={class:"h1Text"},O=x({__name:"ProfessionView",setup(R){let t=l({id:0,title:"",text:"",img1:"",img2:""}),v=g(),i=l([]),r=l(0),n=l("");return(()=>{h.get(window.origin+"/api/professions/").then(p=>{if(i.value=p.data,i.value===void 0){n.value="Страница не найдена";return}let s=i.value.filter(a=>a.id===Number(v.params.professionId))[0];if(s===void 0){n.value="Страница не найдена";return}r.value=i.value.indexOf(t.value)+1,i.value[r.value]===void 0&&(r.value=-1),t.value=s})})(),(p,s)=>{const a=k("router-link");return f(),d("main",null,[o(n)?(f(),d("section",C,[e("div",D,[c(a,{to:"/",class:"backBtn"},{default:u(()=>s[2]||(s[2]=[m("На главную")])),_:1})]),e("h2",E,_(o(n)),1)])):(f(),d("section",w,[e("div",b,[c(a,{to:"/",class:"backBtn"},{default:u(()=>s[0]||(s[0]=[m("На главную")])),_:1})]),e("h2",V,_(o(t).title),1),e("div",null,[e("div",y,[e("img",{id:"mainImg",src:o(t).img1,alt:"Картинка 1"},null,8,I),e("img",{id:"secImg",src:o(t).img2,alt:"Картинка 2"},null,8,N)]),e("p",P,_(o(t).text),1)]),e("div",T,[c(a,{to:"/",class:"backBtn"},{default:u(()=>s[1]||(s[1]=[m("На главную")])),_:1})])]))])}}}),z=B(O,[["__scopeId","data-v-40fd8fc6"]]);export{z as default};
