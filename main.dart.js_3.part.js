self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={BH:function BH(d){this.a=d},hK:function hK(d,e,f){this.a=d
this.b=e
this.c=f},B5:function B5(){},
aqg(d){var x,w,v,u,t,s,r
if(d==null)return new A.cb(null,y.b)
x=y.P.a(C.Q.c_(0,d))
w=J.f(x)
v=y.N
u=A.x(v,y.a)
for(t=J.am(w.gaY(x)),s=y.j;t.t();){r=t.gD(t)
u.l(0,r,A.fq(s.a(w.h(x,r)),!0,v))}return new A.cb(u,y.b)},
tg:function tg(){},
Q8:function Q8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Q9:function Q9(d){this.a=d},
Dd:function Dd(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
atx(){return new B.l7(null)},
l7:function l7(d){this.a=d},
MO:function MO(d){var _=this
_.d=!0
_.e=$
_.a=null
_.b=d
_.c=null},
a7O:function a7O(d,e){this.a=d
this.b=e},
a7P:function a7P(d){this.a=d}},A,D,F,E,C,J
B=a.updateHolder(c[4],B)
A=c[0]
D=c[5]
F=c[7]
E=c[8]
C=c[2]
J=c[1]
B.BH.prototype={
gUJ(){return 40},
gUy(){return 40},
L(d,e){var x,w,v,u=null,t=A.aI(e),s=t.RG.w.eb(u),r=s.b
r.toString
switch(A.xz(r).a){case 0:x=t.ax
break
case 1:x=t.ay
break
default:x=u}w=this.gUJ()
v=this.gUy()
r=D.age(F.jH,E.tY,u)
return D.afC(u,new A.aq(w,v,w,v),C.a4,new A.dc(x,r,u,u,u,u,C.jI),C.W,u,u)}}
B.hK.prototype={
k(d,e){var x=this
if(e==null)return!1
if(J.T(e)!==A.B(x))return!1
return e instanceof B.hK&&e.a===x.a&&e.b===x.b&&e.c===x.c},
gv(d){return A.a2(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"AssetBundleImageKey(bundle: "+this.a.j(0)+', name: "'+this.b+'", scale: '+A.j(this.c)+")"},
ga9(d){return this.b}}
B.B5.prototype={
GA(d,e,f){return D.ahc(null,this.oU(e,f),e.b,null,e.c)},
oU(d,e){return this.Ur(d,e)},
Ur(d,e){var x=0,w=A.X(y.p),v,u=2,t,s=[],r,q,p
var $async$oU=A.Y(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:q=null
u=4
x=7
return A.S(d.a.cY(0,d.b),$async$oU)
case 7:q=g
u=2
x=6
break
case 4:u=3
p=t
if(A.ae(p) instanceof A.ma){A.a($.mM.jm$,"_imageCache").FC(d)
throw p}else throw p
x=6
break
case 3:x=2
break
case 6:if(q==null){A.a($.mM.jm$,"_imageCache").FC(d)
throw A.c(A.P("Unable to read data"))}v=e.$1(A.c_(q.buffer,0,null))
x=1
break
case 1:return A.V(v,w)
case 2:return A.U(t,w)}})
return A.W($async$oU,w)}}
B.tg.prototype={
gl6(){return"../icons/iconuser.jpeg"},
GN(d){var x,w={},v=d.a
if(v==null)v=$.Pl()
w.a=w.b=null
v.a1a("AssetManifest.json",B.ay9(),y.v).aP(0,new B.Q8(w,this,d,v),y.H).ij(new B.Q9(w))
x=w.a
if(x!=null)return x
x=new A.a8($.a6,y.E)
w.b=new A.aY(x,y.A)
return x},
Qq(d,e,f){var x,w,v,u=e.b
if(u==null||f==null||J.fQ(f))return d
x=D.acx(y.i,y.N)
for(w=J.am(f);w.t();){v=w.gD(w)
x.l(0,this.Ch(v),v)}u.toString
return this.RA(x,u)},
RA(d,e){var x,w,v
if(d.k6(e)){x=d.h(0,e)
x.toString
return x}w=d.a0X(e)
v=d.a_k(e)
if(w==null)return d.h(0,v)
if(v==null)return d.h(0,w)
if(e<2||e>(w+v)/2)return d.h(0,v)
else return d.h(0,w)},
Ch(d){var x,w,v,u
if(d==="../icons/iconuser.jpeg")return 1
x=A.jE(d)
w=x.giE().length>1?x.giE()[x.giE().length-2]:""
v=$.al3().wN(w)
if(v!=null&&v.b.length-1>0){u=v.b[1]
u.toString
return A.lv(u)}return 1},
k(d,e){if(e==null)return!1
if(J.T(e)!==A.B(this))return!1
return e instanceof B.tg&&e.gl6()===this.gl6()&&!0},
gv(d){return A.a2(this.gl6(),null,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'AssetImage(bundle: null, name: "'+this.gl6()+'")'}}
B.Dd.prototype={}
B.l7.prototype={
am(){return new B.MO(C.l)}}
B.MO.prototype={
glc(){var x=this.e
return x===$?this.e=[]:x},
aK(){this.bc()
this.pL()},
pL(){var x=0,w=A.X(y.z),v=this,u,t,s,r,q,p,o,n,m
var $async$pL=A.Y(function(d,e){if(d===1)return A.U(e,w)
while(true)switch(x){case 0:o=$.GJ.aa().rr("members")
x=2
return A.S(o==null?null:o.gao(o).XM(2),$async$pL)
case 2:n=e
m=[]
for(u=J.a7(n),t=y.N,s=y.z,r=0;r<u.gm(n);++r){q=u.h(n,r)
p=J.a7(q)
m.push(A.aB(["no",p.h(q,0),"title",C.b.T(C.b.T(J.Pm(p.h(q,3)," "),p.h(q,4))+" ",p.h(q,5)),"contact",p.h(q,7),"type",p.h(q,2),"roomType",p.h(q,1)],t,s))}A.jY(n)
v.ag(new B.a7O(v,m))
return A.V(null,w)}})
return A.W($async$pL,w)},
L(d,e){var x=D.afF(E.DL,!0,E.Jz),w=A.b([],y.D)
if(this.d)w.push(F.bR)
w.push(new B.Dd(1,C.ky,D.ac8(new B.a7P(this),this.glc().length,C.T),null))
return D.ai7(x,D.act(!0,D.oh(w,C.Z,C.aF),C.a9,!0),null)}}
var z=a.updateTypes(["ob(a4,i)","ak<an<k,r<k>>?>(k?)"])
B.Q8.prototype={
$1(d){var x,w=this,v=w.b,u=v.gl6(),t=d==null?null:J.ap(d,v.gl6())
t=v.Qq(u,w.c,t)
t.toString
x=new B.hK(w.d,t,v.Ch(t))
v=w.a
u=v.b
if(u!=null)u.cb(0,x)
else v.a=new A.cb(x,y.f)},
$S:371}
B.Q9.prototype={
$2(d,e){this.a.b.jb(d,e)},
$S:26}
B.a7O.prototype={
$0(){var x=this.a
x.e=this.b
x.d=!1},
$S:0}
B.a7P.prototype={
$2(d,e){var x=null,w=this.a,v=D.cC(C.b.T(J.Pm(w.glc()[e].h(0,"no")," - "),w.glc()[e].h(0,"title")),x,x)
return D.afX(D.vi(E.uR,x,!1,D.cC(w.glc()[e].h(0,"contact"),x,x),v,D.cC(C.b.T(J.Pm(w.glc()[e].h(0,"type"),"-"),w.glc()[e].h(0,"roomType")),x,x)),x)},
$S:z+0};(function installTearOffs(){var x=a._static_1
x(B,"ay9","aqg",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.BH,A.aK)
x(B.hK,A.z)
x(B.B5,D.eL)
x(B.tg,B.B5)
x(B.Q8,A.br)
w(A.lY,[B.Q9,B.a7P])
x(B.Dd,D.ur)
x(B.l7,A.ad)
x(B.MO,A.ao)
x(B.a7O,A.lX)})()
A.a8d(b.typeUniverse,JSON.parse('{"BH":{"aK":[],"m":[]},"B5":{"eL":["hK"]},"tg":{"eL":["hK"],"eL.T":"hK"},"Dd":{"cX":["cn"],"aR":[],"m":[],"cX.T":"cn"},"l7":{"ad":[],"m":[]},"MO":{"ao":["l7"]}}'))
var y=(function rtii(){var x=A.Z
return{p:x("iQ"),D:x("t<m>"),a:x("r<k>"),j:x("r<@>"),P:x("an<k,@>"),N:x("k"),f:x("cb<hK>"),b:x("cb<an<k,r<k>>?>"),A:x("aY<hK>"),E:x("a8<hK>"),i:x("E"),z:x("@"),v:x("an<k,r<k>>?"),H:x("~")}})();(function constants(){E.tY=new B.tg()
E.uR=new B.BH(null)
E.JC=new A.cc("",null,F.rU,null,null)
E.DL=new D.wc(E.JC,C.B,null)
E.Jz=new A.cc("Members",null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"azb","al3",()=>A.c0("/?(\\d+(\\.\\d*)?)x$",!0))})()}
$__dart_deferred_initializers__["KwnMDUp+w/ipulrMxJhjZrbhY2A="] = $__dart_deferred_initializers__.current
