self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={BG:function BG(d){this.a=d},hK:function hK(d,e,f){this.a=d
this.b=e
this.c=f},B4:function B4(){},
aqe(d){var x,w,v,u,t,s,r
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
Dc:function Dc(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
atv(){return new B.l7(null)},
l7:function l7(d){this.a=d},
MO:function MO(d){var _=this
_.d=!0
_.e=$
_.a=null
_.b=d
_.c=null},
a7L:function a7L(d,e){this.a=d
this.b=e},
a7M:function a7M(d){this.a=d}},A,D,F,E,C,J
B=a.updateHolder(c[4],B)
A=c[0]
D=c[5]
F=c[7]
E=c[8]
C=c[2]
J=c[1]
B.BG.prototype={
gUI(){return 40},
gUx(){return 40},
L(d,e){var x,w,v,u=null,t=A.aI(e),s=t.RG.w.eb(u),r=s.b
r.toString
switch(A.xy(r).a){case 0:x=t.ax
break
case 1:x=t.ay
break
default:x=u}w=this.gUI()
v=this.gUx()
r=D.agb(F.jG,E.tU,u)
return D.afz(u,new A.ap(w,v,w,v),C.a3,new A.dc(x,r,u,u,u,u,C.jH),C.W,u,u)}}
B.hK.prototype={
k(d,e){var x=this
if(e==null)return!1
if(J.T(e)!==A.B(x))return!1
return e instanceof B.hK&&e.a===x.a&&e.b===x.b&&e.c===x.c},
gv(d){return A.a2(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"AssetBundleImageKey(bundle: "+this.a.j(0)+', name: "'+this.b+'", scale: '+A.j(this.c)+")"},
ga9(d){return this.b}}
B.B4.prototype={
Gz(d,e,f){return D.ah9(null,this.oU(e,f),e.b,null,e.c)},
oU(d,e){return this.Uq(d,e)},
Uq(d,e){var x=0,w=A.X(y.p),v,u=2,t,s=[],r,q,p
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
if(A.ae(p) instanceof A.m9){A.a($.mL.jm$,"_imageCache").FB(d)
throw p}else throw p
x=6
break
case 3:x=2
break
case 6:if(q==null){A.a($.mL.jm$,"_imageCache").FB(d)
throw A.c(A.P("Unable to read data"))}v=e.$1(A.c_(q.buffer,0,null))
x=1
break
case 1:return A.V(v,w)
case 2:return A.U(t,w)}})
return A.W($async$oU,w)}}
B.tg.prototype={
gl6(){return"../icons/iconuser.jpeg"},
GM(d){var x,w={},v=d.a
if(v==null)v=$.Pl()
w.a=w.b=null
v.a1a("AssetManifest.json",B.ay7(),y.v).aP(0,new B.Q8(w,this,d,v),y.H).ij(new B.Q9(w))
x=w.a
if(x!=null)return x
x=new A.a8($.a6,y.E)
w.b=new A.aY(x,y.A)
return x},
Qp(d,e,f){var x,w,v,u=e.b
if(u==null||f==null||J.fQ(f))return d
x=D.acu(y.i,y.N)
for(w=J.am(f);w.t();){v=w.gD(w)
x.l(0,this.Cg(v),v)}u.toString
return this.Rz(x,u)},
Rz(d,e){var x,w,v
if(d.k6(e)){x=d.h(0,e)
x.toString
return x}w=d.a0X(e)
v=d.a_j(e)
if(w==null)return d.h(0,v)
if(v==null)return d.h(0,w)
if(e<2||e>(w+v)/2)return d.h(0,v)
else return d.h(0,w)},
Cg(d){var x,w,v,u
if(d==="../icons/iconuser.jpeg")return 1
x=A.jE(d)
w=x.giE().length>1?x.giE()[x.giE().length-2]:""
v=$.al1().wN(w)
if(v!=null&&v.b.length-1>0){u=v.b[1]
u.toString
return A.rO(u)}return 1},
k(d,e){if(e==null)return!1
if(J.T(e)!==A.B(this))return!1
return e instanceof B.tg&&e.gl6()===this.gl6()&&!0},
gv(d){return A.a2(this.gl6(),null,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'AssetImage(bundle: null, name: "'+this.gl6()+'")'}}
B.Dc.prototype={}
B.l7.prototype={
am(){return new B.MO(C.l)}}
B.MO.prototype={
glc(){var x=this.e
return x===$?this.e=[]:x},
aK(){this.bb()
this.pL()},
pL(){var x=0,w=A.X(y.z),v=this,u,t,s,r,q,p,o,n,m
var $async$pL=A.Y(function(d,e){if(d===1)return A.U(e,w)
while(true)switch(x){case 0:o=$.GJ.aa().rr("members")
x=2
return A.S(o==null?null:o.gao(o).XL(2),$async$pL)
case 2:n=e
m=[]
for(u=J.a7(n),t=y.N,s=y.z,r=0;r<u.gm(n);++r){q=u.h(n,r)
p=J.a7(q)
m.push(A.aB(["no",p.h(q,0),"title",C.b.T(C.b.T(J.Pm(p.h(q,3)," "),p.h(q,4))+" ",p.h(q,5)),"contact",p.h(q,7),"type",p.h(q,2),"roomType",p.h(q,1)],t,s))}A.jY(n)
v.ag(new B.a7L(v,m))
return A.V(null,w)}})
return A.W($async$pL,w)},
L(d,e){var x=D.afC(E.DJ,!0,E.Jt),w=A.b([],y.D)
if(this.d)w.push(F.bR)
w.push(new B.Dc(1,C.kx,D.ac5(new B.a7M(this),this.glc().length,C.T),null))
return D.ai4(x,D.acq(!0,D.oh(w,C.a5,C.b1),C.a9,!0),null)}}
var z=a.updateTypes(["ob(a4,i)","ak<an<k,r<k>>?>(k?)"])
B.Q8.prototype={
$1(d){var x,w=this,v=w.b,u=v.gl6(),t=d==null?null:J.ar(d,v.gl6())
t=v.Qp(u,w.c,t)
t.toString
x=new B.hK(w.d,t,v.Cg(t))
v=w.a
u=v.b
if(u!=null)u.cb(0,x)
else v.a=new A.cb(x,y.f)},
$S:371}
B.Q9.prototype={
$2(d,e){this.a.b.jb(d,e)},
$S:26}
B.a7L.prototype={
$0(){var x=this.a
x.e=this.b
x.d=!1},
$S:0}
B.a7M.prototype={
$2(d,e){var x=null,w=this.a,v=D.cZ(C.b.T(J.Pm(w.glc()[e].h(0,"no")," - "),w.glc()[e].h(0,"title")),x,x)
return D.afU(D.vi(E.uN,x,!1,D.cZ(w.glc()[e].h(0,"contact"),x,x),v,D.cZ(C.b.T(J.Pm(w.glc()[e].h(0,"type"),"-"),w.glc()[e].h(0,"roomType")),x,x)),x)},
$S:z+0};(function installTearOffs(){var x=a._static_1
x(B,"ay7","aqe",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.BG,A.aK)
x(B.hK,A.z)
x(B.B4,D.eL)
x(B.tg,B.B4)
x(B.Q8,A.br)
w(A.lX,[B.Q9,B.a7M])
x(B.Dc,D.ur)
x(B.l7,A.ad)
x(B.MO,A.ao)
x(B.a7L,A.lW)})()
A.a8a(b.typeUniverse,JSON.parse('{"BG":{"aK":[],"m":[]},"B4":{"eL":["hK"]},"tg":{"eL":["hK"],"eL.T":"hK"},"Dc":{"cW":["cm"],"aR":[],"m":[],"cW.T":"cm"},"l7":{"ad":[],"m":[]},"MO":{"ao":["l7"]}}'))
var y=(function rtii(){var x=A.Z
return{p:x("iQ"),D:x("t<m>"),a:x("r<k>"),j:x("r<@>"),P:x("an<k,@>"),N:x("k"),f:x("cb<hK>"),b:x("cb<an<k,r<k>>?>"),A:x("aY<hK>"),E:x("a8<hK>"),i:x("E"),z:x("@"),v:x("an<k,r<k>>?"),H:x("~")}})();(function constants(){E.tU=new B.tg()
E.uN=new B.BG(null)
E.Jw=new A.cs("",null,F.rR,null,null)
E.DJ=new D.wc(E.Jw,C.B,null)
E.Jt=new A.cs("Members",null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"az9","al1",()=>A.c0("/?(\\d+(\\.\\d*)?)x$",!0))})()}
$__dart_deferred_initializers__["ToeEq1dV7jV5EtAjDZF6w8QOUi8="] = $__dart_deferred_initializers__.current
