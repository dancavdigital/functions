
var contador = 0
function cargaRestanteBateria(tamanhoBateria, cargaAtual){
   
    let cargaRestante = tamanhoBateria - cargaAtual;
    
    if (cargaRestante => tamanhoBateria && cargaRestante < cargaAtual){
        for (i= tamanhoBateria; i < cargaAtual; i = i + 3){
         
             contador++
         console.log(`Teste da bateria rodou e ganhou mais ${tamanhoBateria}, agora tem ${i}` )
         }
    }
    let final = i
return final
}

let resultado = cargaRestanteBateria(13,145)
console.log(`A carga atual da bateria é de ${resultado}, que é a ideal.  Agora tem, OMS e ele passou ${contador} vezes no posto para `)




