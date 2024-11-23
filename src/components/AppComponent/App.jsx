import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import {StateComponent} from "../StateComponent.jsx";
import {RenderComponent} from "../RenderComponent.jsx";
import {ImmutableComponent} from "../ImmutableComponent.jsx";
import { MyComponent } from '../MyComponent/MyComponent.jsx';
import {EventComponent} from "../EventComponent.jsx";
import {UserComponent} from '../UserComponent/UserComponent.jsx'


const getUserFromServer = {
    name: 'Nik',
    age: 23,
    email: 'puschkov@mail.ru',
    phone: '+7-999-999-99-99'
}


export default function App() {
    const [count, setCount] = useState(0)

    const user = getUserFromServer


  return (
    <>
        <header className={styles.header}>HEADER</header>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <MyComponent/>
        <StateComponent />
        <ImmutableComponent />
        <RenderComponent />
        <EventComponent/>

        <div className={styles.app}>
            <label className={styles['app-label']}>Приложение:</label>
            <div>Разная информация приложения</div>
            <UserComponent {...user}/>
        </div>
    </>
  )
}


