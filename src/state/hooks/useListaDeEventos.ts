import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../../servidores"

const useListaDeEventos = () => {
  return useRecoilValue(eventosFiltradosState)
}

export default useListaDeEventos