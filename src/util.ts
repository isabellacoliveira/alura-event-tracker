// quero que ele me de um id incremental 
let id = 0; 

export const obterId = () : number => {
    return id++; 
    // retornar o id e depois incrementar ele 
}