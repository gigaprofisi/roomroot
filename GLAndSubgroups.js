class F{
  constructor(p,n){
    this.p=p
    this.n=n
  }
  add(a,b){}
  sub(a,b){}
  mul(a,b){}
  div(a,b){}
}
function Sym(n){}
function Alt(n){}
function Dih(n){}
function Cyc(n){}
function GL(n,q){
  if(typeof q=="number")q= F(q,0)
}
function PGL(n,q){}
function SL(n,q){}
function PSL(n,q){}


function AssertMaxSG(G,H){}
function AssertSG(G,H){}
function AssertIso(G,H){}
function AssertOrder(G,n){}

let n=24
AssertIso( PSL(n,2), GL(n,2) )
AssertIso( PGL(n,2), GL(n,2) )
AssertIso( SL(n,2), GL(n,2) )
AssertIso( GL(n,2), GL(n,2) )
// ≅ < > ⥶ ⥸ 𝔽₂ 𝔽₄ 𝔽₈ 𝔽₁₆   𝔽₃ 𝔽₉   𝔽₅ 𝔽₇ 𝔽₁₁ 𝔽₁₃


AssertIso( PSL(2,7), GL(3,2))
AssertIso( Alt(8), GL(4,2))

AssertMaxSG( "360", Alt(8))
AssertMaxSG( "576", Alt(8))
AssertMaxSG( "720", Alt(8))
AssertMaxSG( "1344", Alt(8))
AssertMaxSG( "2520", Alt(8))

AssertSG( "M", GL(196882,2) )
AssertSG( "B", GL(4370,2) )
AssertSG( "Ly", GL(111,5) )



/*
GL(196882,2) > 𝕄
GL(4370,2) > B
GL(4371,3) > B
GL(4371,5) > B



GL(10,2) > M12
GL(16,4) > M12
GL(44,2) > M12
GL(144,2) > M12
GL(10,3) > M12
GL(15,3) > M12
GL(34,3) > M12
GL(45,3) > M12
GL(54,3) > M12
GL(99,3) > M12
GL(11,5) > M12
GL(16,5) > M12
GL(45,5) > M12
GL(55,5) > M12
GL(66,5) > M12
GL(78,5) > M12
GL(98,5) > M12
GL(120,5) > M12
GL(11,11) > M12
GL(16,11) > M12
GL(29,11) > M12
GL(53,11) > M12
GL(55,11) > M12
GL(66,11) > M12
GL(91,11) > M12
GL(99,11) > M12
GL(176,11) > M12

GL(6,3) > 2.M12
GL(12,5) > 2.M12


GL(10,2) > M12:2
GL(32,2) > M12:2
GL(44,2) > M12:2
GL(144,2) > M12:2
GL(20,3) > M12:2
GL(30,3) > M12:2
GL(34,3) > M12:2
GL(45,3) > M12:2
GL(54,9) > M12:2
GL(90,3) > M12:2
GL(99,3) > M12:2
GL(22,) > M12:2
GL(32,) > M12:2
GL(45,) > M12:2
GL(54,) > M12:2
GL(66,) > M12:2
GL(78,) > M12:2
GL(98,) > M12:2
GL(110,5) > M12:2
GL(120,25) > M12:2
GL(16,11) > M12:2
GL(22,11) > M12:2
GL(29,11) > M12:2
GL(53,11) > M12:2
GL(55,11) > M12:2
GL(66,11) > M12:2
GL(91,11) > M12:2
GL(99,11) > M12:2
GL(110,11) > M12:2
GL(176,11) > M12:2


GL(10,3) > 2.M12:2
GL(12,3) > 2.M12:2
GL(88,3) > 2.M12:2
GL(168,3) > 2.M12:2


*/
