// vamos fazer um filtro para aplicar a todos os componentes 
import {selector} from 'recoil'; 
import { IEvento } from '../interfaces/IEvento';
import { filtroDeEventos, listaDeEventosState } from '../state/atom';

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState', 
    // get vai obter valores do recoil 
    get: ({get}) => {
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState)

  const eventos = todosOsEventos.filter(evento => {
    if(!filtro.data){
      return true 
    }
    const ehOMesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
    return ehOMesmoDia
  })
  return eventos 
    }
})

export const eventosAsync = selector({
    // vamos obter os dados que estão na porta 8080
    key: 'eventosAsync',  
    get: async () => {
        // vamos usar o nativo que é o fetch 
        // coloco await para ele aguardar essa resposta 
        const respostaHttp = await  fetch('http://localhost:8080/eventos')
        // tranformar respotsa em json (o json é uma promise: ou seja, assincrono)
        const eventosJson: IEvento[] = await respostaHttp.json()
        return eventosJson.map(evento => ({
            ...evento, 
            inicio: new Date(evento.inicio), 
            fim: new Date(evento.fim)
        }))
    }
})
// teremos que fazer uma requisição e definir o servidor como padrão, no atomo 