
let contador = 0
let final = 0 

function cargaRestanteBateria(tamanhoBateria, cargaAtual){
   
    
    let cargaRestante = tamanhoBateria - cargaAtual;
    
    if (cargaRestante <= tamanhoBateria && cargaRestante < cargaAtual){
        for (let i= tamanhoBateria; i <= cargaAtual; i = i + 3){
         
             contador = contador + 1
             final = i
         console.log(`Teste da bateria rodou e ganhou mais 3, agora tem ${i}` )
         
        }
    }
    
}

let resultado = cargaRestanteBateria(75,80)
console.log(`A carga atual da bateria é de ${final}, que é a ideal. passou ${contador} vezes no posto para carregar`)




