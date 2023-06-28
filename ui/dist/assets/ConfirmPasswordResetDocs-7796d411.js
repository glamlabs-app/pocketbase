import{S as Pe,i as he,s as Re,e as r,w as S,b as v,c as ve,f as b,g as d,h as n,m as we,x as K,aa as me,ab as Oe,k as Ce,ac as Ne,n as We,t as Z,a as x,o as f,d as Se,ae as $e,C as Ee,p as Te,r as U,u as ge,a9 as Ae}from"./index-7c20673d.js";import{S as De}from"./SdkTabs-9d65f898.js";function ue(o,s,l){const a=o.slice();return a[5]=s[l],a}function be(o,s,l){const a=o.slice();return a[5]=s[l],a}function _e(o,s){let l,a=s[5].code+"",_,u,i,p;function m(){return s[4](s[5])}return{key:o,first:null,c(){l=r("button"),_=S(a),u=v(),b(l,"class","tab-item"),U(l,"active",s[1]===s[5].code),this.first=l},m(P,h){d(P,l,h),n(l,_),n(l,u),i||(p=ge(l,"click",m),i=!0)},p(P,h){s=P,h&4&&a!==(a=s[5].code+"")&&K(_,a),h&6&&U(l,"active",s[1]===s[5].code)},d(P){P&&f(l),i=!1,p()}}}function ke(o,s){let l,a,_,u;return a=new Ae({props:{content:s[5].body}}),{key:o,first:null,c(){l=r("div"),ve(a.$$.fragment),_=v(),b(l,"class","tab-item"),U(l,"active",s[1]===s[5].code),this.first=l},m(i,p){d(i,l,p),we(a,l,null),n(l,_),u=!0},p(i,p){s=i;const m={};p&4&&(m.content=s[5].body),a.$set(m),(!u||p&6)&&U(l,"active",s[1]===s[5].code)},i(i){u||(Z(a.$$.fragment,i),u=!0)},o(i){x(a.$$.fragment,i),u=!1},d(i){i&&f(l),Se(a)}}}function ye(o){var re,de;let s,l,a=o[0].name+"",_,u,i,p,m,P,h,q=o[0].name+"",j,ee,H,R,L,W,z,O,B,te,M,$,se,G,F=o[0].name+"",J,le,Q,E,V,T,X,g,Y,C,A,w=[],ae=new Map,oe,D,k=[],ne=new Map,N;R=new De({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${o[3]}');

        ...

        await pb.collection('${(re=o[0])==null?void 0:re.name}').confirmPasswordReset(
            'TOKEN',
            'NEW_PASSWORD',
            'NEW_PASSWORD_CONFIRM',
        );
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${o[3]}');

        ...

        await pb.collection('${(de=o[0])==null?void 0:de.name}').confirmPasswordReset(
          'TOKEN',
          'NEW_PASSWORD',
          'NEW_PASSWORD_CONFIRM',
        );
    `}});let I=o[2];const ie=e=>e[5].code;for(let e=0;e<I.length;e+=1){let t=be(o,I,e),c=ie(t);ae.set(c,w[e]=_e(c,t))}let y=o[2];const ce=e=>e[5].code;for(let e=0;e<y.length;e+=1){let t=ue(o,y,e),c=ce(t);ne.set(c,k[e]=ke(c,t))}return{c(){s=r("h3"),l=S("Confirm password reset ("),_=S(a),u=S(")"),i=v(),p=r("div"),m=r("p"),P=S("Confirms "),h=r("strong"),j=S(q),ee=S(" password reset request and sets a new password."),H=v(),ve(R.$$.fragment),L=v(),W=r("h6"),W.textContent="API details",z=v(),O=r("div"),B=r("strong"),B.textContent="POST",te=v(),M=r("div"),$=r("p"),se=S("/api/collections/"),G=r("strong"),J=S(F),le=S("/confirm-password-reset"),Q=v(),E=r("div"),E.textContent="Body Parameters",V=v(),T=r("table"),T.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr></thead> 
    <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>token</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The token from the password reset request email.</td></tr> 
        <tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>password</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The new password to set.</td></tr> 
        <tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>passwordConfirm</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The new password confirmation.</td></tr></tbody>`,X=v(),g=r("div"),g.textContent="Responses",Y=v(),C=r("div"),A=r("div");for(let e=0;e<w.length;e+=1)w[e].c();oe=v(),D=r("div");for(let e=0;e<k.length;e+=1)k[e].c();b(s,"class","m-b-sm"),b(p,"class","content txt-lg m-b-sm"),b(W,"class","m-b-xs"),b(B,"class","label label-primary"),b(M,"class","content"),b(O,"class","alert alert-success"),b(E,"class","section-title"),b(T,"class","table-compact table-border m-b-base"),b(g,"class","section-title"),b(A,"class","tabs-header compact left"),b(D,"class","tabs-content"),b(C,"class","tabs")},m(e,t){d(e,s,t),n(s,l),n(s,_),n(s,u),d(e,i,t),d(e,p,t),n(p,m),n(m,P),n(m,h),n(h,j),n(m,ee),d(e,H,t),we(R,e,t),d(e,L,t),d(e,W,t),d(e,z,t),d(e,O,t),n(O,B),n(O,te),n(O,M),n(M,$),n($,se),n($,G),n(G,J),n($,le),d(e,Q,t),d(e,E,t),d(e,V,t),d(e,T,t),d(e,X,t),d(e,g,t),d(e,Y,t),d(e,C,t),n(C,A);for(let c=0;c<w.length;c+=1)w[c]&&w[c].m(A,null);n(C,oe),n(C,D);for(let c=0;c<k.length;c+=1)k[c]&&k[c].m(D,null);N=!0},p(e,[t]){var fe,pe;(!N||t&1)&&a!==(a=e[0].name+"")&&K(_,a),(!N||t&1)&&q!==(q=e[0].name+"")&&K(j,q);const c={};t&9&&(c.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        await pb.collection('${(fe=e[0])==null?void 0:fe.name}').confirmPasswordReset(
            'TOKEN',
            'NEW_PASSWORD',
            'NEW_PASSWORD_CONFIRM',
        );
    `),t&9&&(c.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await pb.collection('${(pe=e[0])==null?void 0:pe.name}').confirmPasswordReset(
          'TOKEN',
          'NEW_PASSWORD',
          'NEW_PASSWORD_CONFIRM',
        );
    `),R.$set(c),(!N||t&1)&&F!==(F=e[0].name+"")&&K(J,F),t&6&&(I=e[2],w=me(w,t,ie,1,e,I,ae,A,Oe,_e,null,be)),t&6&&(y=e[2],Ce(),k=me(k,t,ce,1,e,y,ne,D,Ne,ke,null,ue),We())},i(e){if(!N){Z(R.$$.fragment,e);for(let t=0;t<y.length;t+=1)Z(k[t]);N=!0}},o(e){x(R.$$.fragment,e);for(let t=0;t<k.length;t+=1)x(k[t]);N=!1},d(e){e&&f(s),e&&f(i),e&&f(p),e&&f(H),Se(R,e),e&&f(L),e&&f(W),e&&f(z),e&&f(O),e&&f(Q),e&&f(E),e&&f(V),e&&f(T),e&&f(X),e&&f(g),e&&f(Y),e&&f(C);for(let t=0;t<w.length;t+=1)w[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function qe(o,s,l){let a,{collection:_=new $e}=s,u=204,i=[];const p=m=>l(1,u=m.code);return o.$$set=m=>{"collection"in m&&l(0,_=m.collection)},l(3,a=Ee.getApiExampleUrl(Te.baseUrl)),l(2,i=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "token": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}]),[_,u,i,a,p]}class Fe extends Pe{constructor(s){super(),he(this,s,qe,ye,Re,{collection:0})}}export{Fe as default};
