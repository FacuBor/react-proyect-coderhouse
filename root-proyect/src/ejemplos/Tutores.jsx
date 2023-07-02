
import { Usuario } from "./Usuario"



export const Tutores = () =>{
    
    return(
        <div>
            <h3>Usuarios CoderHouse</h3>
            <hr />
            <ul>
            <Usuario nombre="Facundo borssolasco" rol="Alumno" edad={26}/>
            <Usuario nombre="Conrado Lanusse" rol="Profesor" edad={31}/>
            <Usuario nombre="Fede Blautzik" rol="Tutor" edad={27}/>
            </ul>
        </div>
    )
}