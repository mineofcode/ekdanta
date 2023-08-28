self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={Bt:function Bt(d){this.a=d},hH:function hH(d,e,f){this.a=d
this.b=e
this.c=f},AS:function AS(){},
apt(d){var x,w,v,u,t,s,r
if(d==null)return new A.ca(null,y.b)
x=y.P.a(C.N.bZ(0,d))
w=J.f(x)
v=y.N
u=A.w(v,y.a)
for(t=J.am(w.gaY(x)),s=y.j;t.t();){r=t.gD(t)
u.l(0,r,A.fn(s.a(w.h(x,r)),!0,v))}return new A.ca(u,y.b)},
t4:function t4(){},
PO:function PO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
PP:function PP(d){this.a=d},
CZ:function CZ(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
asF(){return new B.l2(null)},
l2:function l2(d){this.a=d},
Mt:function Mt(d){var _=this
_.d=!0
_.e=$
_.a=null
_.b=d
_.c=null},
a7g:function a7g(d,e){this.a=d
this.b=e},
a7h:function a7h(d){this.a=d}},A,D,F,E,C,J
B=a.updateHolder(c[4],B)
A=c[0]
D=c[5]
F=c[7]
E=c[8]
C=c[2]
J=c[1]
B.Bt.prototype={
gUm(){return 40},
gUb(){return 40},
L(d,e){var x,w,v,u=null,t=A.aG(e),s=t.RG.w.e9(u),r=s.b
r.toString
switch(A.xp(r).a){case 0:x=t.ax
break
case 1:x=t.ay
break
default:x=u}w=this.gUm()
v=this.gUb()
r=D.afz(F.jD,E.tR,u)
return D.aeW(u,new A.ao(w,v,w,v),C.ag,new A.d6(x,r,u,u,u,u,C.jE),C.U,u,u)}}
B.hH.prototype={
k(d,e){var x=this
if(e==null)return!1
if(J.Y(e)!==A.A(x))return!1
return e instanceof B.hH&&e.a===x.a&&e.b===x.b&&e.c===x.c},
gv(d){return A.a1(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"AssetBundleImageKey(bundle: "+this.a.j(0)+', name: "'+this.b+'", scale: '+A.j(this.c)+")"},
ga9(d){return this.b}}
B.AS.prototype={
Gq(d,e,f){return D.agx(null,this.oS(e,f),e.b,null,e.c)},
oS(d,e){return this.U5(d,e)},
U5(d,e){var x=0,w=A.V(y.p),v,u=2,t,s=[],r,q,p
var $async$oS=A.W(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:q=null
u=4
x=7
return A.R(d.a.cV(0,d.b),$async$oS)
case 7:q=g
u=2
x=6
break
case 4:u=3
p=t
if(A.ac(p) instanceof A.m5){A.a($.mI.jf$,"_imageCache").Fr(d)
throw p}else throw p
x=6
break
case 3:x=2
break
case 6:if(q==null){A.a($.mI.jf$,"_imageCache").Fr(d)
throw A.c(A.O("Unable to read data"))}v=e.$1(A.bY(q.buffer,0,null))
x=1
break
case 1:return A.T(v,w)
case 2:return A.S(t,w)}})
return A.U($async$oS,w)}}
B.t4.prototype={
gl1(){return"../icons/iconuser.jpeg"},
GD(d){var x,w={},v=d.a
if(v==null)v=$.P1()
w.a=w.b=null
v.a0J("AssetManifest.json",B.axg(),y.v).aR(0,new B.PO(w,this,d,v),y.H).ia(new B.PP(w))
x=w.a
if(x!=null)return x
x=new A.a6($.a3,y.E)
w.b=new A.aX(x,y.A)
return x},
Q9(d,e,f){var x,w,v,u=e.b
if(u==null||f==null||J.fN(f))return d
x=D.abW(y.i,y.N)
for(w=J.am(f);w.t();){v=w.gD(w)
x.l(0,this.C7(v),v)}u.toString
return this.Ri(x,u)},
Ri(d,e){var x,w,v
if(d.jV(e)){x=d.h(0,e)
x.toString
return x}w=d.a0v(e)
v=d.ZT(e)
if(w==null)return d.h(0,v)
if(v==null)return d.h(0,w)
if(e<2||e>(w+v)/2)return d.h(0,v)
else return d.h(0,w)},
C7(d){var x,w,v,u
if(d==="../icons/iconuser.jpeg")return 1
x=A.jA(d)
w=x.giz().length>1?x.giz()[x.giz().length-2]:""
v=$.akm().wG(w)
if(v!=null&&v.b.length-1>0){u=v.b[1]
u.toString
return A.OA(u)}return 1},
k(d,e){if(e==null)return!1
if(J.Y(e)!==A.A(this))return!1
return e instanceof B.t4&&e.gl1()===this.gl1()&&!0},
gv(d){return A.a1(this.gl1(),null,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'AssetImage(bundle: null, name: "'+this.gl1()+'")'}}
B.CZ.prototype={}
B.l2.prototype={
ar(){return new B.Mt(C.n)}}
B.Mt.prototype={
gl7(){var x=this.e
return x===$?this.e=[]:x},
aQ(){this.bg()
this.pH()},
pH(){var x=0,w=A.V(y.z),v=this,u,t,s,r,q,p,o,n,m
var $async$pH=A.W(function(d,e){if(d===1)return A.S(e,w)
while(true)switch(x){case 0:o=$.Gq.ab().rm("members")
x=2
return A.R(o==null?null:o.gam(o).Xk(2),$async$pH)
case 2:n=e
m=[]
for(u=J.a4(n),t=y.N,s=y.z,r=0;r<u.gm(n);++r){q=u.h(n,r)
p=J.a4(q)
m.push(A.aC(["no",p.h(q,0),"title",C.b.T(C.b.T(J.P2(p.h(q,3)," "),p.h(q,4))+" ",p.h(q,5)),"contact",p.h(q,7),"type",p.h(q,2),"roomType",p.h(q,1)],t,s))}A.jT(n)
v.aj(new B.a7g(v,m))
return A.T(null,w)}})
return A.U($async$pH,w)},
L(d,e){var x=D.aeZ(E.D6,!0,E.IH),w=A.b([],y.D)
if(this.d)w.push(F.bO)
w.push(new B.CZ(1,C.kv,D.abx(new B.a7h(this),this.gl7().length,C.R),null))
return D.ahr(x,D.abS(!0,D.Cc(w,C.aq,C.bt),C.a6,!0),null)}}
var z=a.updateTypes(["o5(a5,i)","ak<an<l,r<l>>?>(l?)"])
B.PO.prototype={
$1(d){var x,w=this,v=w.b,u=v.gl1(),t=d==null?null:J.ai(d,v.gl1())
t=v.Q9(u,w.c,t)
t.toString
x=new B.hH(w.d,t,v.C7(t))
v=w.a
u=v.b
if(u!=null)u.ca(0,x)
else v.a=new A.ca(x,y.f)},
$S:368}
B.PP.prototype={
$2(d,e){this.a.b.j4(d,e)},
$S:22}
B.a7g.prototype={
$0(){var x=this.a
x.e=this.b
x.d=!1},
$S:0}
B.a7h.prototype={
$2(d,e){var x=null,w=this.a,v=D.db(C.b.T(J.P2(w.gl7()[e].h(0,"no")," - "),w.gl7()[e].h(0,"title")),x,x)
return D.afg(D.v8(E.uK,x,!1,D.db(w.gl7()[e].h(0,"contact"),x,x),v,D.db(C.b.T(J.P2(w.gl7()[e].h(0,"type"),"-"),w.gl7()[e].h(0,"roomType")),x,x)),x)},
$S:z+0};(function installTearOffs(){var x=a._static_1
x(B,"axg","apt",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Bt,A.aI)
x(B.hH,A.z)
x(B.AS,D.eI)
x(B.t4,B.AS)
x(B.PO,A.bq)
w(A.lT,[B.PP,B.a7h])
x(B.CZ,D.ug)
x(B.l2,A.ad)
x(B.Mt,A.ar)
x(B.a7g,A.lS)})()
A.a7G(b.typeUniverse,JSON.parse('{"Bt":{"aI":[],"m":[]},"AS":{"eI":["hH"]},"t4":{"eI":["hH"],"eI.T":"hH"},"CZ":{"cS":["cl"],"aP":[],"m":[],"cS.T":"cl"},"l2":{"ad":[],"m":[]},"Mt":{"ar":["l2"]}}'))
var y=(function rtii(){var x=A.X
return{p:x("iO"),D:x("t<m>"),a:x("r<l>"),j:x("r<@>"),P:x("an<l,@>"),N:x("l"),f:x("ca<hH>"),b:x("ca<an<l,r<l>>?>"),A:x("aX<hH>"),E:x("a6<hH>"),i:x("F"),z:x("@"),v:x("an<l,r<l>>?"),H:x("~")}})();(function constants(){E.tR=new B.t4()
E.uK=new B.Bt(null)
E.II=new A.em("",null,F.rO,null,null)
E.D6=new D.w1(E.II,C.C,null)
E.IH=new A.em("Members",null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ayf","akm",()=>A.c_("/?(\\d+(\\.\\d*)?)x$",!0))})()}
$__dart_deferred_initializers__["eHcj5g7IPINVh+beCyfTcmX/swk="] = $__dart_deferred_initializers__.current
