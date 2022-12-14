import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { obterId } from "../../util"
import { listaDeEventosState } from "../atom"

const useAdicionarEvento = () => {

  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

  return (evento: IEvento) => {
    const hoje = new Date()
    // se o usuario tentar cadastrar um produto numa data menor que a de hoje, ele dá erro 
    if (evento.inicio < hoje) {
      throw new Error("Eventos não podem ser cadastrados com data menor do que a atual.")
    }
    evento.id = obterId()
    return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
  }

}

export default useAdicionarEvento
// vamos em formulario 