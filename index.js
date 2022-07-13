import prompt from 'prompt-sync';


const entrada = prompt()


function ordenar (){
    let arr = []
    let pedirEntrada = entrada("Insira a propriedade do CSS!")

    while(true){
        if(pedirEntrada.toUpperCase() != "SAIR"){
            arr.push(pedirEntrada)
            pedirEntrada = entrada("Insira a proriedade do CSS!")
            
        }else{
            const resultado = arr.sort().join("\n")
            console.log(resultado)
            return false

        }
        
        
    }

        
}



ordenar()


