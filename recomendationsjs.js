
let alumnos=[];
let sorted = alumnos.sort();
let names = [];
let lastnames = [];
let slastname = [];
 let ages= [];
  let assigments= [];
 let scores = [];
 let ids = [];
 let año =[3];
 let carrera =[];
 let promedies = [];
 let POO = []; let math =[]; let calculus=[]; let spanish =[]; let physics =[]; let physics2 =[]; let marketing =[]; 
 let law =[]; let micro=[]; let macro =[]; let history =[]; let theater =[]; let phyton =[]; let php =[]; let js =[]; 
 let html =[]; let java =[]; let ss=[]; let fe =[]; let art =[]; 
 carrera.push(math,calculus,spanish,POO,physics,physics2,marketing,law, micro,macro,history,theater,phyton, php,
    js,html,java, ss, fe, art)

    let letters=[];
    let letters_last_name = [];
    let an = []; let b = []; let c = []; let d = []; let e = []; let f = []; let g = []; let h = []; let i = [];
    let j = []; let k = []; let l = []; let m = []; let n = []; let o = []; let p = []; let q = []; let r = [];
    let s = []; let t = []; let u=[];   let v = []; let w = []; let x = []; let y = [];  let z = [];
    letters.push(an,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z);
    let al = []; let bl = []; let cl = []; let dl = []; let el = []; let fl = []; let gl = []; let hl = []; let il = [];
    let jl = []; let kl = []; let ll = []; let ml = []; let nl = []; let ol = []; let pl = []; let ql = []; let rl = [];
    let sl = []; let tl = []; let ul =[];   let vl = []; let wl = []; let xl = []; let yl = [];  let zl = [];
   letters_last_name.push(al,bl,cl,dl,el,fl,gl,hl,il,jl,kl,ll,ml,nl,ol,pl,ql,rl,sl,tl,ul,vl,wl,xl,yl,zl);
   console.log(carrera)
 /*
 Buscar por nombre.
 Buscar por apellido.
 Obtener promedio de un alumno.
 Obtener promedio del grupo.
 
 Obtener lista de alumnos ordenados ascendente y descendente por calificación.
 Con los datos almacenados en el prototipo agregar otro ordenamiento o búsqueda bajo el parámetro que quieran (Este es el punto extra).*/
 function courses(){
    console.log("En esta escuela se imparten :")
    let courses_list = document.getElementsByClassName("assignment-btn");
    for(let x=0; x< courses_list.length; x++){
        console.log(courses_list[x].value + " " + x)
        

    } 

   
 }
 function assign_courses(){

    for(let a = alumnos.length; a--;){
        courses_assigned = alumnos[a].courses
        let alumno = alumnos[a];
        let name_of = alumnos[a].name.toLowerCase();        
        let last_name = alumnos[a].flname.toLowerCase();
        let initial = name_of[0];
        let last_name_initial = last_name[0];

        switch  (initial){
            case "a":
                an.push(alumno);
                
            break;
            case "b":
              b.push(alumno);
              
          break;
          case "c":
              c.push(alumno);
              
          break;
          case "d":
              d.push(alumno);
              
          break;
          case "e":
              e.push(alumno);
              
          break;
          case "f":
              f.push(alumno);
              
          break;
       case "g":
                g.push(alumno);
                
            break;
       case "h":
                h.push(alumno);
                
            break;
            case "i":
              i.push(alumno);
              
          break;
       case "j":
                j.push(alumno);
                
            break;
            case "k":
              k.push(alumno);
              
          break;
          case "l":
              l.push(alumno);
              
          break;
       case "m":
                m.push(alumno);
                
            break;
            case "n":
              n.push(alumno);
              
          break;
          case "o":
              o.push(alumno);
              
          break;
          case "p":
              p.push(alumno);
              
          break;
          case "q":
              q.push(alumno);
              
          break;
          case "r":
              r.push(alumno);
              
          break;
          case "s":
              s.push(alumno);
              
          break;
          case "t":
              t.push(alumno);
              
          break;
          case "u":
              u.push(alumno);
              
          break;
          case "v":
              v.push(alumno);
              
          break;
          case "w":
              w.push(alumno);
              
          break;
          case "x":
              x.push(alumno);
              
          break;
          case "y":
              y.push(alumno);
              
          break;
          case "z":
              z.push(alumno);
              
          break;
          default:
              console.log("you dont exist or what");
              break;
         
      
      
        }
        
        switch  (last_name_initial){
          case "a":
              al.push(alumno);
              
          break;
          case "b":
            bl.push(alumno);
            
        break;
        case "c":
            cl.push(alumno);
            
        break;
        case "d":
            dl.push(alumno);
            
        break;
        case "e":
            el.push(alumno);
            
        break;
        case "f":
            fl.push(alumno);
            
        break;
      case "g":
              gl.push(alumno);
              
          break;
      case "h":
              hl.push(alumno);
              
          break;
          case "i":
            il.push(alumno);
            
        break;
      case "j":
              jl.push(alumno);
              
          break;
          case "k":
            kl.push(alumno);
            
        break;
        case "l":
            ll.push(alumno);
            
        break;
      case "m":
              ml.push(alumno);
              
          break;
          case "n":
            nl.push(alumno);
            
        break;
        case "o":
            ol.push(alumno);
            
        break;
        case "p":
            pl.push(alumno);
            
        break;
        case "q":
            ql.push(alumno);
            
        break;
        case "r":
            rl.push(alumno);
            
        break;
        case "s":
            sl.push(alumno);
            
        break;
        case "t":
            tl.push(alumno);
            
        break;
        case "u":
            ul.push(alumno);
            
        break;
        case "v":
            vl.push(alumno);
            
        break;
        case "w":
            wl.push(alumno);
            
        break;
        case "x":
            xl.push(alumno);
            
        break;
        case "y":
            yl.push(alumno);
            
        break;
        case "z":
            zl.push(alumno);
            
        break;
        default:
            console.log("you dont exist or what");
            break;
       
      
      
      }
        if(alumnos[a].assigments > 1){

            array_materias = courses_assigned.split(",")
            for(let d = array_materias.length; d--;){
                let param  = array_materias[d];
               
                switch (param){
                    case "math":
                        math.push(alumnos[a])
                        break;
                    case "Calculus 1":
                        calculus.push(alumnos[a])
                        
                        break;
                    case "Spanish":
                    spanish.push(alumnos[a])
                    break;
                    case "POO":
                        POO.push(alumnos[a])
                        break;
                     case "Physics":
                        physics.push(alumnos[a])
                        
                        break;
                    case "Physics 2":
                            physics2.push(alumnos[a])
                            break;       
                    case "Marketing":
                        marketing.push(alumnos[a])
                        break;
                    case "Law":
                        law.push(alumnos[a])
                        break;
                    case "Microeconomics":
                        micro.push(alumnos[a])
                        break;
                    case "Macroeconomics":
                        macro.push(alumnos[a])
                        break;
                    case "History":
                        history.push(alumnos[a])
                        
                        break;
                    case "Theater":
                        theater.push(alumnos[a])
                        
                        break;
                        case "Python":
                            phyton.push(alumnos[a])
                            
                            break;
                    case "PHP":
                        php.push(alumnos[a])
                        
                        break;
                    case "JS":
                        js.push(alumnos[a])
                        
                        break;
                    case "HTML,CSS":
                        html.push(alumnos[a])
                        
                        break;
                    case "JAVA":
                        java.push(alumnos[a])
                        
                        break;
                    case "security and servers":
                        ss.push(alumnos[a])
                        
                        break;
                    case "Financial Education":
                        fe.push(alumnos[a])
                        
                        break;
                    case "Art":
                        art.push(alumnos[a])
                        
                        break;
                    default: 
                    break;
                }
                

            }
        }else{
         
                switch (courses_assigned){
                    case "math":
                        math.push(alumnos[a])
                        break;
                    case "Calculus 1":
                        calculus.push(alumnos[a])
                        
                        break;
                    case "Spanish":
                    spanish.push(alumnos[a])
                    break;
                    case "POO":
                        POO.push(alumnos[a])
                        break;
                     case "Physics":
                        physics.push(alumnos[a])
                        
                        break;
                    case "Physics 2":
                            physics2.push(alumnos[a])
                            break;       
                    case "Marketing":
                        marketing.push(alumnos[a])
                        break;
                    case "Law":
                        law.push(alumnos[a])
                        break;
                    case "Microeconomics":
                        micro.push(alumnos[a])
                        break;
                    case "Macroeconomics":
                        macro.push(alumnos[a])
                        break;
                    case "HIstory":
                        history.push(alumnos[a])
                        
                        break;
                    case "Theater":
                        theater.push(alumnos[a])
                        
                        break;
                        case "Python":
                            phyton.push(alumnos[a])
                            
                            break;
                    case "PHP":
                        php.push(alumnos[a])
                        
                        break;
                    case "JS":
                        js.push(alumnos[a])
                        
                        break;
                    case "HTML":
                        html.push(alumnos[a])
                        
                        break;
                    case "JAVA":
                        java.push(alumnos[a])
                        
                        break;
                    case "security and servers":
                        ss.push(alumnos[a])
                        
                        break;
                    case "Financial Education":
                        fe.push(alumnos[a])
                        
                        break;
                    case "Art":
                        art.push(alumnos[a])
                        
                        break;
                    default: 
                    break;
                }
        }
          
      }
     
   
 }

class Alumno {
    constructor (name, flname, slname, age, assigments,courses, scores, idnumber, promedio){
        this.name = name;
        this.flname = flname;
        this.slname = slname;
        this.age = age;
        this.assigments = assigments;
        this.scores = scores;
        this.idnumber = idnumber;
        this.courses = courses;
        this.promedio  = this.getpromedio();
    }
    getpromedio(){
        let counter = this.scores;
        let suma = 0;
        for( let c = 0; c< counter.length; c++){
              let sc = counter[c].split(",")  
             suma = suma + parseInt(sc[1])
              

             
            }        
            let promedio_var = suma/(this.assigments);
            this.promedio = promedio_var
        }
     
      
        
    
      
   }
  


function newform(){
    let newform = document.getElementById("newalumn");
    let newformbtn = document.getElementById("btn");
    newform.style.display = "block";
    newform.style.textAlign = "center";
    
    let submitbtn = document.getElementById("submit");
    submitbtn.style.display = "block";




}
 
function searchform(){
    let searchform = document.getElementById("search_student");
    searchform.style.display = "block";
    searchform.style.textAlign = "center";
    selectbtn = document.getElementById("selectbtn");
    selectbtn.style.display = "block";

}
var count_a = 0;
$(document).ready(function(){
    $(".assignment-btn").click(function(){
        let checked = $(this).is(':checked');
       
        if(checked){
            $(this).parent().css("background", "green");
            count_a++;
            let name_assignment = this.value;

            let scores = document.getElementById("scores");
            let score= document.createElement("input");
            score.type="number";
            score.id = name_assignment
            score.className = "score";
            score.placeholder = "Score from " + name_assignment
            score.style.paddingLeft ="50px"
            score.style.marginLeft   ="50px"

            scores.append(score);
          
            
            
            

        }else{
              $(this).parent().css("background", "#aed392");
              count_a--;
            let scores_array =document.getElementById("scores");
            scores_array.removeChild(scores_array.children[count_a+1])
        }
       

   
    })});
    

function searchby(){

    let result = $('#search_by :selected').text();
   let searchtool = document.getElementById("search_type");
   $(searchtool).empty()
   search_criteria = document.createElement("input");
   search_criteria.id = "criteria"
   searchtool.appendChild(search_criteria);
   searchbtn = document.createElement("button");
   searchbtn.innerText ="search"
    searchbtn.addEventListener("click", function(){
        let result = $('#search_by :selected').text();
        let value = document.getElementById("criteria").value.toLowerCase();
       let initial  = value[0];


        

        switch (result) {
            case "Name":
                switch  (initial){
                    case "a":
                        console.log(an)
                        for(let j = 0; j<an.length; j++){
                            if(an[j].name === value ){
                                console.log(an[j].name.toLowerCase())
                                console.log("student's ID " + an[j].idnumber )
                            }
                        }
                     
                        
                    break;
                    case "b":
                        console.log(b)
                        for(let j = 0; j<b.length; j++){
                            if(b[j].name === value ){
                                console.log("student's ID " + b[j].idnumber )
                            }
                        }
                      
                  break;
                  case "c":
                    console.log(c)
                    for(let j = 0; j<c.length; j++){
                        if(c[j].name === value ){
                            console.log("student's ID " + c[j].idnumber )
                        }
                    }
                      
                  break;
                  case "d":
                    console.log(d)
                    for(let j = 0; j<d.length; j++){
                        if(d[j].name === value ){
                            console.log("student's ID " + d[j].idnumber )
                        }
                    }
                      
                  break;
                  case "e":
                    console.log(e)
                    for(let j = 0; j<e.length; j++){
                        if(e[j].name === value ){
                            console.log("student's ID " + e[j].idnumber )
                        }
                    }
                      
                  break;
                  case "f":
                    console.log(f)
                    for(let j = 0; j<f.length; j++){
                        if(f[j].name === value ){
                            console.log("student's ID " + f[j].idnumber )
                        }
                    }
                      
                  break;
               case "g":
                console.log(g)
                for(let j = 0; j<g.length; j++){
                    if(g[j].name === value ){
                        console.log("student's ID " + g[j].idnumber )
                    }
                }
                        
                    break;
               case "h":
                console.log(h)
                for(let j = 0; j<h.length; j++){
                    if(h[j].name === value ){
                        console.log("student's ID " + h[j].idnumber )
                    }
                }
                        
                    break;
                    case "i":
                        console.log(i)
                        for(let j = 0; j<i.length; j++){
                            if(i[j].name === value ){
                                console.log("student's ID " + i[j].idnumber )
                            }
                        }
                      
                  break;
               case "j":
                console.log(j)
                for(let j = 0; j<j.length; j++){
                    if(j[j].name === value ){
                        console.log("student's ID " + j[j].idnumber )
                    }
                }
                        
                    break;
                    
                    case "k":
                        console.log(k)
                        for(let j = 0; j<k.length; j++){
                            if(k[j].name === value ){
                                console.log("student's ID " + k[j].idnumber )
                            }
                        }
                      
                  break;
                  case "l":
                    console.log(l)
                    for(let j = 0; j<l.length; j++){
                        if(l[j].name === value ){
                            console.log("student's ID " + l[j].idnumber )
                        }
                    }
                      
                  break;
               case "m":
                console.log(m)
                for(let j = 0; j<m.length; j++){
                    if(m[j].name === value ){
                        console.log("student's ID " + m[j].idnumber )
                    }
                }
                        
                    break;
                    case "n":
                        console.log(n)
                        for(let j = 0; j<n.length; j++){
                            if(n[j].name === value ){
                                console.log("student's ID " + n[j].idnumber )
                            }
                        }
                      
                  break;
                  case "o":
                    console.log(o)
                    for(let j = 0; j<o.length; j++){
                        if(o[j].name === value ){
                            console.log("student's ID " + o[j].idnumber )
                        }
                    }
                      
                  break;
                  case "p":
                    console.log(p)
                    for(let j = 0; j<p.length; j++){
                        if(p[j].name === value ){
                            console.log("student's ID " + p[j].idnumber )
                        }
                    }
                      
                  break;
                  case "q":
                    console.log(q)
                    for(let j = 0; j<q.length; j++){
                        if(q[j].name === value ){
                            console.log("student's ID " + q[j].idnumber )
                        }
                    }                      
                  break;
                  case "r":
                    console.log(r)
                    for(let j = 0; j<r.length; j++){
                        if(r[j].name === value ){
                            console.log("student's ID " + r[j].idnumber )
                        }
                    }
                      
                  break;
                  case "s":
                    console.log(s)
                    for(let j = 0; j<s.length; j++){
                        if(s[j].name === value ){
                            console.log("student's ID " + s[j].idnumber )
                        }
                    }
                      
                  break;
                  case "t":
                    console.log(t)
                    for(let j = 0; j<t.length; j++){
                        if(t[j].name === value ){
                            console.log("student's ID " + t[j].idnumber )
                        }
                    }
                      
                  break;
                  case "u":
                    console.log(u)
                    for(let j = 0; j<u.length; j++){
                        if(u[j].name === value ){
                            console.log("student's ID " + u[j].idnumber )
                        }
                    }
                      
                  break;
                  case "v":
                    console.log(v)
                    for(let j = 0; j<v.length; j++){
                        if(v[j].name === value ){
                            console.log("student's ID " + v[j].idnumber )
                        }
                    }                      
                  break;
                  case "w":
                    console.log(w)
                    for(let j = 0; j<w.length; j++){
                        if(w[j].name === value ){
                            console.log("student's ID " + w[j].idnumber )
                        }
                    }                      
                  break;
                  case "x":
                    console.log(x)
                    for(let j = 0; j<x.length; j++){
                        if(x[j].name === value ){
                            console.log("student's ID " + x[j].idnumber )
                        }
                    }
                      
                  break;
                  case "y":
                    console.log(y)
                    for(let j = 0; j<y.length; j++){
                        if(y[j].name === value ){
                            console.log("student's ID " + y[j].idnumber )
                        }
                    }
                      
                  break;
                  case "z":
                    console.log(z)
                    for(let j = 0; j<z.length; j++){
                        if(z[j].name === value ){
                            console.log("student's ID " + z[j].idnumber )
                        }
                    }
                      
                  break;
                  default:
                      console.log("you dont exist or what");
                      break;
                 
              
              
                }
                break;
                case "Father's last name":
                    switch  (initial){
                        case "a":
                            console.log(al)
                           
                            for(let j = 0; j<al.length; j++){
                                if(al[j].flname.toLowerCase() === value ){
                                    console.log("student's ID " + al[j].idnumber )}}
                            
                        break;
                        case "b":
                            console.log(bl)
                            for(let j = 0; j<bl.length; j++){
                                
                                if(bl[j].flname.toLowerCase() === value ){
                                    console.log("student's ID " + bl[j].idnumber )
                                }
                            }
                          
                      break;
                      case "c":
                        console.log(cl)
                        for(let j = 0; j<cl.length; j++){
                                
                            if(cl[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + cl[j].idnumber )
                            }
                        }
                          
                      break;
                      case "d":
                        console.log(dl)
                                            
                        for(let j = 0; j<dl.length; j++){
                                
                            if(dl[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + dl[j].idnumber )
                            }
                        }
                          
                      break;
                      case "e":
                        console.log(el)
                        for(let j = 0; j<el.length; j++){
                                
                            if(el[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + el[j].idnumber )
                            }
                        }                   

                          
                      break;
                      case "f":
                        console.log(fl)
                        for(let j = 0; j<fl.length; j++){
                                
                            if(fl[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + fl[j].idnumber )
                            }
                        }
                          
                      break;
                   case "g":
                    console.log(gl)
                    for(let j = 0; j<gl.length; j++){
                                
                        if(gl[j].flname.toLowerCase() === value ){
                            console.log("student's ID " + gl[j].idnumber )
                        }
                    }
                            
                        break;
                   case "h":
                    console.log(hl)
                    for(let j = 0; j<hl.length; j++){
                        if(hl[j].flname.toLowerCase() === value ){
                            console.log("student's ID " + hl[j].idnumber )}}
    
                        break;
                        case "i":
                            console.log(il)
                            for(let j = 0; j<il.length; j++){
                                if(il[j].flname.toLowerCase() === value ){
                                    console.log("student's ID " + il[j].idnumber )}}
                          
                      break;
                   case "j":
                    console.log(jl)
                    for(let j = 0; j<jl.length; j++){
                        if(jl[j].flname.toLowerCase() === value ){
                            console.log("student's ID " + jl[j].idnumber )}
                        }
                            
                        break;
                        
                        case "k":
                            console.log(kl)
                            for(let j = 0; j<kl.length; j++){
                                if(kl[j].flname.toLowerCase() === value ){
                                    console.log("student's ID " + kl[j].idnumber )}}
                          
                      break;
                      case "l":
                        console.log(ll)
                        for(let j = 0; j<ll.length; j++){
                            if(ll[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + ll[j].idnumber )}}
                          
                      break;
                   case "m":
                    console.log(ml)
                    for(let j = 0; j<ml.length; j++){
                        if(ml[j].flname.toLowerCase() === value ){
                            console.log("student's ID " + ml[j].idnumber )}}
                            
                        break;
                        case "n":
                            console.log(nl)
                            for(let j = 0; j<nl.length; j++){
                                if(nl[j].flname.toLowerCase() === value ){
                                    console.log("student's ID " + nl[j].idnumber )}}
                          
                      break;
                      case "o":
                        console.log(ol)
                        for(let j = 0; j<ol.length; j++){
                            if(ol[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + ol[j].idnumber )}}
                          
                      break;
                      case "p":
                        console.log(pl)
                        for(let j = 0; j<pl.length; j++){
                            if(pl[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + pl[j].idnumber )}}
                          
                      break;
                      case "q":
                        console.log(ql)
                        for(let j = 0; j<ql.length; j++){
                            if(ql[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + ql[j].idnumber )}}                   
                      break;
                      case "r":
                        console.log(rl)
                        for(let j = 0; j<rl.length; j++){
                            if(rl[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + rl[j].idnumber )}}
                          
                      break;
                      case "s":
                        console.log(sl)
                        for(let j = 0; j<sl.length; j++){
                            if(sl[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + sl[j].idnumber )}}
                          
                      break;
                      case "t":
                        console.log(tl)
                        for(let j = 0; j<tl.length; j++){
                            if(tl[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + tl[j].idnumber )}}
                          
                      break;
                      case "u":
                        console.log(ul)
                        for(let j = 0; j<ul.length; j++){
                            if(ul[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + ul[j].idnumber )}}
                          
                      break;
                      case "v":
                        console.log(vl)
                        for(let j = 0; j<vl.length; j++){
                            if(vl[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + vl[j].idnumber )}}                    
                      break;
                      case "w":
                        console.log(wl)
                        for(let j = 0; j<wl.length; j++){
                            if(wl[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + wl[j].idnumber )}}
                                          
                      break;
                      case "x":
                        console.log(xl)
                        for(let j = 0; j<xl.length; j++){
                            if(xl[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + xl[j].idnumber )}}
                          
                      break;
                      case "y":
                        console.log(yl)
                        for(let j = 0; j<yl.length; j++){
                            if(yl[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + yl[j].idnumber )}}
                          
                      break;
                      case "z":
                        console.log(zl)
                        for(let j = 0; j<zl.length; j++){
                            if(zl[j].flname.toLowerCase() === value ){
                                console.log("student's ID " + zl[j].idnumber )}}
                          
                      break;
                      default:
                          console.log("you dont exist or what");
                          break;
                     
                  
                  
                    }

                    break;
                    
                        case "Assignment":

                        for(let j = alumnos.length; j--;){
                            let assingment_search = alumnos[j].courses;

                            let courses_array = assingment_search.split(",")
                            
                            for (let count=0; count <courses_array.length; count++){
                                if(courses_array[count]===value){
                                    console.log("alumno con id: " + alumnos[j].idnumber + ", Nombre: " + alumnos[j].name+" se encuentra inscrito en " + value)
                                }
                            }
                        }
                       
                        
                            break;
                        
                                                   
            default:
                break;
           }

    })
   searchtool.appendChild(searchbtn)
   
}
function scores_search(){

    let display = document.getElementById("display");
    $(display).empty();  

    let doc = document;
    let title = doc.createElement("h2")
    title.innerText = "Promedios por curso/ listado por curso"
    let courses_list = document.getElementsByClassName("assignment-btn"); 
    display.appendChild(title)
    for(let x=0; x< courses_list.length; x++){
        let course_score = [];
        let names = [];
        let lnames = [];
        let ids = [];
        let ind = carrera[x].length;
        let iterador = carrera[x]
        console.log(ind)
       
        for( let y = 0; y < ind; y++){
        let  calif =  iterador[y].scores.toString().split(",")
        let length = calif.length;
        console.log(calif)
        names.push(iterador[y].name)
        lnames.push(iterador[y].flname)
        ids.push(iterador[y].idnumber)

          for ( u = 0; u < length; u++ ){
            if(courses_list[x].value === calif[u])
            if(calif[u+1]){
                
                course_score.push(parseInt(calif[u+1]))


            }

            }

       }
       console.log(ids)
       console.log(names)
       console.log(course_score)
       
        let carrera_btn = doc.createElement("button");
        let promedie = doc.createElement("span")
        carrera_btn.classList.add("course_btn");
        carrera_btn.textContent = courses_list[x].value;
        carrera_btn.style.textAlign = "left"
        carrera_btn.style.display = "flex"
       carrera_btn.style.flexDirection = "row"
       carrera_btn.style.justifyContent = "space-between"
    
        promedie_value = (course_score.reduce((a,b)=>a+b,0))/course_score.length;
        promedie. innerText = promedie_value
        if(promedie_value > 0){
           carrera_btn.appendChild(promedie)
          

        }
        display.appendChild(carrera_btn)
        carrera_btn.addEventListener("click", function(){
            let score_by_course = doc.createElement("table")
            let trow = doc.createElement("tr")
          
          let th_id = doc.createElement("th")
            let th_name = doc.createElement("th")
            let th_score = doc.createElement("th")
           
            trow.style.display ="flex"
            trow.style.flexDirection ="row"
            trow.style.justifyContent ="space-around"
            score_by_course.style.width = "90%"
            th_id.innerText = "ID"
            th_name.innerText = "NAME"
            th_score.innerText = "SCORE"
            trow.appendChild(th_id)
            trow.appendChild(th_name)
            trow.appendChild(th_score)
            score_by_course.appendChild(trow)

            $(display).empty();  
            

            for(let w = 0; w < names.length; w++){
              
                let row = doc.createElement("tr")
                let td_id =  doc.createElement("td");
                let td_name =  doc.createElement("td");
                let td_score =  doc.createElement("td");
                td_id.innerText = ids[w];
                td_name.innerText = names[w] + " " + lnames[w];
                td_score.innerText = course_score[w]
                row.appendChild(td_id)
                row.appendChild( td_name)
                row.appendChild( td_score)
                 score_by_course.appendChild(row)

            }
          display.appendChild(score_by_course)


        })
    } 

}

function add(){

    let name = document.getElementById("name").value;
    let flname = document.getElementById("flname").value;
    let edad = document.getElementById("edad").value;
    let slname = document.getElementById("slname").value;
    let numero_materias = document.getElementById("nummaterias").value;
    let id = alumnos[alumnos.length-1].idnumber+1
    console.log(id) 
     let scores = document.getElementById("scores");
    $(scores).empty();
    document.getElementById("num_materias").innerText = " "+numero_materias;
    let alumno = new Alumno(name,flname, slname, edad, numero_materias, null, id)
    alumnos.push(alumno);
    let materiasform = document.getElementById("Materias_displonibles");
    materiasform.style.display = "block";
    names.push(name);
    lastnames.push(flname)
    slastname.push(slname)
     ages.push(edad)
    ids.push(id)
    orange.style.width = "650px"
    let orange_father = document.getElementById("orange_father");
    alumno.idnumber = id;
    orange_father.style.left = "250px"
   
    //disapear form
    let newform = document.getElementById("newalumn");
    newform.style.display = "none";
    let submitbtn = document.getElementById("submit");
    submitbtn.style.display = "none";
    let submit_assignments = document.createElement("button")
    let assigments_div = document.getElementById("assignments");
    submit_assignments.innerText="selected";
    submit_assignments.style.width = "20%";
    scores.style.display ="block"
 assigments_div.append(scores);
  // saving different initials
  let initial = name[0];
  console.log(initial);
  let last_name_initial = flname[0];

  switch  (initial){
      case "a":
          an.push(alumno);
          
      break;
      case "b":
        b.push(alumno);
        
    break;
    case "c":
        c.push(alumno);
        
    break;
    case "d":
        d.push(alumno);
        
    break;
    case "e":
        e.push(alumno);
        
    break;
    case "f":
        f.push(alumno);
        
    break;
 case "g":
          g.push(alumno);
          
      break;
 case "h":
          h.push(alumno);
          
      break;
      case "i":
        i.push(alumno);
        
    break;
 case "j":
          j.push(alumno);
          
      break;
      case "k":
        k.push(alumno);
        
    break;
    case "l":
        l.push(alumno);
        
    break;
 case "m":
          m.push(alumno);
          
      break;
      case "n":
        n.push(alumno);
        
    break;
    case "o":
        o.push(alumno);
        
    break;
    case "p":
        p.push(alumno);
        
    break;
    case "q":
        q.push(alumno);
        
    break;
    case "r":
        r.push(alumno);
        
    break;
    case "s":
        s.push(alumno);
        
    break;
    case "t":
        t.push(alumno);
        
    break;
    case "u":
        u.push(alumno);
        
    break;
    case "v":
        v.push(alumno);
        
    break;
    case "w":
        w.push(alumno);
        
    break;
    case "x":
        x.push(alumno);
        
    break;
    case "y":
        y.push(alumno);
        
    break;
    case "z":
        z.push(alumno);
        
    break;
    default:
        console.log("you dont exist or what");
        break;
   


  }
  switch  (last_name_initial){
    case "a":
        al.push(alumno);
        
    break;
    case "b":
      bl.push(alumno);
      
  break;
  case "c":
      cl.push(alumno);
      
  break;
  case "d":
      dl.push(alumno);
      
  break;
  case "e":
      el.push(alumno);
      
  break;
  case "f":
      fl.push(alumno);
      
  break;
case "g":
        gl.push(alumno);
        
    break;
case "h":
        hl.push(alumno);
        
    break;
    case "i":
      il.push(alumno);
      
  break;
case "j":
        jl.push(alumno);
        
    break;
    case "k":
      kl.push(alumno);
      
  break;
  case "l":
      ll.push(alumno);
      
  break;
case "m":
        ml.push(alumno);
        
    break;
    case "n":
      nl.push(alumno);
      
  break;
  case "o":
      ol.push(alumno);
      
  break;
  case "p":
      pl.push(alumno);
      
  break;
  case "q":
      ql.push(alumno);
      
  break;
  case "r":
      rl.push(alumno);
      
  break;
  case "s":
      sl.push(alumno);
      
  break;
  case "t":
      tl.push(alumno);
      
  break;
  case "u":
      ul.push(alumno);
      
  break;
  case "v":
      vl.push(alumno);
      
  break;
  case "w":
      wl.push(alumno);
      
  break;
  case "x":
      xl.push(alumno);
      
  break;
  case "y":
      yl.push(alumno);
      
  break;
  case "z":
      zl.push(alumno);
      
  break;
  default:
      console.log("you dont exist or what");
      break;
 


}
  submit_assignments.addEventListener("click", function(){
    selected=[] 
    console.log(count_a)
       console.log(numero_materias)
    if(count_a == numero_materias){
        let materias_inscripcion = document.getElementsByClassName("assignment-btn");
         let calificaciones_alumno = [numero_materias]; 
       for(let i = materias_inscripcion.length; i--;){
           
      
         if(materias_inscripcion[i].checked === true){
        
         selected.push(materias_inscripcion[i].value)
         let bringer  = document.getElementsByClassName("score");
        
         for(let k=0; k<numero_materias; k++){
            let variable = [bringer[k].id , bringer[k].value];
            let avar = variable.toString();
            calificaciones_alumno[k] =  avar;
         }
     
           
        }
      
       }
     count_a = 0;
     alumno.scores= calificaciones_alumno;
     console.log(calificaciones_alumno)
    }else{
        console.log("numero de materias incorrecto")
        let form = document.getElementById("newalumn");
        form.reset();
        count_a = 0;

   
            alumnos.pop();
    
        
    }  
    assigments_div.removeChild(submit_assignments);

    //request for scores
    let array_for_scores = [];
    let scores_assingment = document.getElementsByClassName("score");
    for(let g=0; g< scores_assingment.length; g++){
       array_for_scores[g] =  scores_assingment[g].id + ": " + scores_assingment[g].value;
    }
    let realscores = array_for_scores.toString()    
    
    alumno.courses = selected.toString();
    console.log(alumno.courses)
    
    materiasform.style.display = "none";
    let info_display = document.getElementById("info");
    info_display.style.display = "flex";
    info_display.style.flexDirection = "column";
    info_display.style.alignItems = "center";
    info_display.style.width = "350px";
    info_display.style.position = "absolute";
    info_display.style.left = "40%";

    let information = document.getElementsByClassName("information");


    information[0].innerText = "Name: "+alumno.name
    information[1].innerText ="Father's last name: "+alumno.flname
    information[2].innerText = "Mother's last name: "+alumno.slname
    information[3].innerText = "Student's age: "+alumno.age
    information[4].innerText = "Studen's new ID number: "+alumno.idnumber
    information[5].innerText = "Selected courses: " +alumno.courses
    information[6].innerText = "Scores: " +realscores;


   
    let close = document.createElement("button");
    close.innerText = "Finished";
    let orange =  document.getElementById("orange")
   orange.append(close);
   close.style.position = "absolute";
   close.style.left = "240px";
   close.style.top = "300px";
   console.log(information + " " + information.length)
   for(let inf = information.length; inf--;){
    let newp = document.createElement("p")
    newp.innerText = information[inf].innerText
    orange.append(newp)

   }
    close.addEventListener("click", function(){
        let btnnewform = document.getElementById("btn");
        btnnewform.style.display = "inline-block";
        orange.removeChild(close);
        info_display.style.display="none"
        selected=[]
        $(orange).empty()
        orange.style.width = "400px"
        orange_father.style.left = "400px"
       assign_courses();
       assign_promedies();
       alumnos[alumnos.length-1].getpromedio();
        
         })

  })
 
      
      
    assigments_div.append(submit_assignments);
$(".assignment-btn").prop("checked", false);
$(".assignment-btn").parent().css("background", "#aed392");
console.log(alumno)
}

alumnos.push(new Alumno("Pepe", "Juarez", "", 23, 1,"Spanish",['Spanish, 10'], 111111, 10))
alumnos.push(new Alumno("Susan", "Benavidez", "", 23, 1,"PHP",['PHP, 8' ], 111112))
alumnos.push(new Alumno("Juana", "Jimenez", "", 23, 1,"POO", ['POO, 9'], 111113))
alumnos.push(new Alumno("Chona", "Hernandez", "", 23, 1,"Microeconomics",['Microeconomics, 9' ], 111114))
alumnos.push(new Alumno("ana", "Barcena", "", 23, 1, "Marketing", ['Marketing, 10' ], 111115))
alumnos.push(new Alumno("Ricardo", "Barcena", "", 23, 3,"Microeconomics,math,Macroeconomics", ['Microeconomics, 10', 'math, 10', 'Macroeconomics, 9'], 111116))
alumnos.push(new Alumno("Jose", "Juarez", "", 23, 1,"HTML", ['HTML, 10' ], 111116))
alumnos.push(new Alumno("Ester", "Chong", "", 32, 1,"Microeconomics",['Microeconomics, 10' ], 11117))
alumnos.push(new Alumno("Estela", "Van Hasselt", "",15 ,1 ,"JS", ['JS, 10' ], 11118))
alumnos.push(new Alumno("Cindy", "CH", "", 24, 1 ,"JS", ['JS, 10' ], 11119))
alumnos.push(new Alumno("Tanya", "andrea", "", 25 , 2 ,"Law,Physics",['Law, 10', 'Physics, 10' ], 11120))
alumnos.push(new Alumno("Charlie", "Real", "", 26 ,2 ,"Microeconomics,Physics",['Microeconomics, 10', 'Physics, 10' ], 11121))
alumnos.push(new Alumno("Charles", "Gonzales", "", 29 , 1,"Physics",['Physics, 10' ], 11122))
alumnos.push(new Alumno("Chris", "Serrano", "",30 ,2 ,"History,Physics",['History, 10', 'Physics, 10' ], 11123))
alumnos.push(new Alumno("Mario", "Limon", "", 32, 1,"Fincancial Education,Physics",['Financial education, 10', 'Physics, 10' ], 11124))
alumnos.push(new Alumno("Selena", "Val", "",32 ,1 ,"HTML",['HTML, 10' ], 11125))
alumnos.push(new Alumno("Justin", "Varga", "", 33,1 ,"JAVA",['JAVA, 10' ], 11126))
alumnos.push(new Alumno("Sergio", "Pedrero", "", 34, 2,"POO,JS",['POO, 10', 'JS, 8' ], 11127))
console.log(alumnos)
assign_courses()

function assign_promedies(){
    const promedies = [];
    const original = [];
    let ascending_promedies = [];
    for(let a = 0; a < alumnos.length; a++){
 
    alumnos[a].getpromedio();
    let promedie = alumnos[a].promedio
    promedies.push(promedie)
        original.push(promedie)

 }
 //console.log("original " + original);


let comparison =  promedies.sort((a,b)=>{return a-b});
//console.log("comparison "+comparison)

for(let c = 0; c < alumnos.length; c++){
        //console.log("looking for " + comparison[c])
        //console.log("in original we found "+ original)
        //console.log("original has it in index " + original.indexOf(comparison[c]))
        
        let variable = original.indexOf(comparison[c])
        //console.log(alumnos[variable])

        ascending_promedies.push(alumnos[variable])
        //console.log("")
}

return promedies;

 }
function order_by_class(){
        let cummulative_array = [];
        let scores_course = [];
    
       for(let e = 0; e < course.length; e++){
        cummulative_array = course[e].scores;
    
    let extract = cummulative_array.toString().split(",")
        for(let i = extract.length; i--;){
            if(i%2 === 1){
                scores_course.push(extract[i])
            }
        }
       } 
       
       scores_course.sort((a,b)=>{return a-b})
    console.log(scores_course)

   
}


/*function scores_order(){
    let comparison = [];
    let ass_comparison = [];
    let original = [];
 for(let ye = alumnos.length; ye--;){
    let calif = alumnos[ye].scores;
    string_calif = calif.toString().split(",")
    comparison.push(string_calif[1])
    original.push(string_calif[1])


} 
comparison.sort(function(a, b){return a-b});
console.log("comparison")


for ( let ya =0;ya< alumnos.length; ya++){
    console.log(comparison[ya])

    ass_comparison.push(string_calif)
   let variable = original.indexOf(comparison[ya])
  console.log(ass_comparison[variable]) 
  ass_comparison.splice(variable,1)

} 
console.log(ass_comparison)
console.log(original)
console.log(comparison)
}/*


//guarda en los pares las materias y en nones as calificaciones
       // un array por cada alumno
    // recorre el array de alumnos en el largo de cada linea de calificaciones
    recupera las calificaciones, junto con la posicion de las materias y de los numeros, 
    se acomodan las calificaciones, y se acomodan de acuerdo al index la calificacion 
*/

function scores_backwards(){
    let comparison = [];
    let ass_comparison = [];
    let individual_scores = [];
    let original = [];
 for(let ye = alumnos.length; ye--;){ //recorre alumnos
    let calif = alumnos[ye].scores; //recupera calificaciones [materia, calificacion]
 
    string_calif = calif.toString().split(",")  //guarda en los pares las materias y en nones as calificaciones
    
    individual_scores.push(string_calif)
    let length = string_calif.length/2
    console.log(length)//guarda en los pares las materias y en nones as calificaciones
    for(let y = 0; y <= length; y++){
        if(y%2 !== 0){
            
            original.push(string_calif[y])
           
            
        }
    }
}
console.log(original)
comparison = original.sort((a,b) => {return a-b})
//recorre alumnos
    for(let c = 0; c <alumnos.length; c++){
    if(comparison[c] === original[c]){
        let variable = original.indexOf(comparison[c])
        
   console.log(original[c])  

    }
}

console.log(comparison)
console.log(ass_comparison)

}


/*function createarray(num){
    let i= 0;
    let array2=[];
    let name = "Alumno"
    let flname = "Student";
    let edad = 21;
    let slname = "Doer";
   
    console.log("working")
    let materias = 3;
 

    
    let calificaciones = document.getElementById("calificaciones").value.split(",") ;
    for (i; i<num; i++){
        
        array2.push(new Alumno(name,flname, slname, edad, materias, calificaciones, i, courses));
    } 
    alumnos=array2;
   return alumnos;

}
let array = createarray(15);
console.log(alumnos)

function addclass(id, clas){
   
alumnos[id].assigments.push(clas);
console.log(alumnos[id].assigments)
console.log("materia agregada fue "+ clas);
}

/*function createarray(num){
    let i= 0;
    let array2=[];
    for (i; i<num; i++){
    
        array2.push(i);
    }
   return array2;
}
let array = createarray(10000);
console.log(array);


function busquedaBinaria(setDatos, numeroABuscar) {
    let first = 0;
    let last = setDatos.length - 1;
    let position = -1;
    let isFound = false;
    let middle;
    let steps = 0;
  
    while (isFound === false && first <= last) {
      steps++;
      middle = Math.floor((first + last) / 2)
      if (setDatos[middle] === numeroABuscar) {
          isFound = true
          position = middle
      } else if (setDatos[middle] > numeroABuscar) {
          last = middle - 1
      } else {
          first = middle + 1
      }
    }
  
    return [position, steps]
  }
let setnuevo = busquedaBinaria(array,9998);
console.log(setnuevo)
let num;

function createarray(num){
    let i= 0;
    let array2=[];
    for (i; i<num; i++){
    
        array2.push(i);
    }
   return array2;
}
let array = createarray(10000);
console.log(array);


function loop(param,search){
   let dec=Math.floor(param.length/10);
   let smaller = true;
   let bigger = false;

let count = 0;
    if(search%2 === 0){
        pair_array = [];
        console.log("search is pair " )

        for (let j=0; j<=param.length; j++){
            if(param[j]%2===0){
                pair_array.push(param[j]);

            }

            
        }
        console.log(pair_array)
        let prev=0;
        for (let i = 0; i<=pair_array.length; i=i+Math.floor(pair_array.length/2)){
            console.log(i);

            if(pair_array[i]<search){
                
                count++;
                console.log ("number " + pair_array[i] + " was smaller still searching step " + count + "position " + i );
                prev = i;

            }
                else{
                smaller = false;
                bigger= true;
                   console.log(count)
                let newarray = param.slice(pair_array[i],pair_array[i]+1);
                if(newarray[0]=search){
                    console.log("found between" + prev + " position " +i)
                }
               i=pair_array.length;
                if(newarray.length > 10){
                 loop(newarray,search);
        
           
             }else if(newarray.length < 10){
                console.log(newarray);
             }
                 }
        
        
             }
    }else if(search%2 === 1){
        non = [];
        console.log("search is non " )

        for (let j=0; j<param.length; j++){
        if(param[j]%2===1){
            non.push(param[j]);
        }}
    }
   
    

    }

loop(array,9998);*/
/*s
else{
    bigger = true;
    smaller = false;
    var newarray = array.slice(param[i]-10,param[i]);
    if(newarray.length <= 10){
        loop(newarray);
        console.log(newarray);
    }

    if(newarray.lenght<=1){
        console.log(newarray);
    }*/
  
