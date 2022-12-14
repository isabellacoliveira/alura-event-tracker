import { useState, Suspense} from 'react';
import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import { IEvento } from './interfaces/IEvento';
import Calendario from './components/Calendario';
import { RecoilRoot } from 'recoil'
import ListaDeEventos from './components/ListaDeEventos';
import { DebugObserver } from './components/DebbugerObserver';

function App() {

//   const [eventos, setEventos] = useState<IEvento[]>([
//     {
//         "descricao": "Estudar React",
//         "inicio": new Date("2022-01-15T09:00"),
//         "fim": new Date("2022-01-15T13:00"),
//         "completo": false,
//         "id": 1642342747
//     },
//     {
//         "descricao": "Estudar Recoil",
//         "inicio": new Date("2022-01-16T09:00"),
//         "fim": new Date("2022-01-16T11:00"),
//         "completo": false,
//         "id": 1642342959
//     }
// ])


  const [filtro, setFiltro] = useState<Date | null>()

  const adicionarEvento = (evento: IEvento) => {
    evento.id = Math.round((new Date()).getTime() / 1000)
    // eventos.push(evento)
    // setEventos([...eventos])
  }

  return (
    <RecoilRoot>
      <DebugObserver />
      <Suspense fallback="está carregando">
      <div className={style.App}>
        <div className={style.Coluna}>
          <Card>
            <Formulario />
          </Card>
          <hr />
          <Card>
            <ListaDeEventos/>
          </Card>
        </div>
        <div className={style.Coluna}>
          <Calendario />
        </div>
      </div>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;