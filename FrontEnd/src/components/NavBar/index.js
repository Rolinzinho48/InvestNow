import {BarLat} from './style'
import Logo from '../../Assets/Logo.png'

export function NavBar(){
    
    return (
        <BarLat>
            <img src ={Logo}/>
            <ul>
                <li><a>Home</a></li>
                <li><a>Investimentos</a></li>
                <li><a>Historico</a></li>
            </ul>
        </BarLat>
    )
}