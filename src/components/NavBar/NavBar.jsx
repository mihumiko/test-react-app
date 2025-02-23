import './NavBar.css'
import ShoppingCartIcon from 'D:/code/test-react-app/src/assets/shoping.svg'
import { Link } from 'react-router-dom'
export default function NavBar(){
    return (
        <nav className='navbar'>
            <Link to= '/'>Главная</Link>
            <Link to= '/info/about'>О нас</Link>
            <Link to= '/info/contact'>Связь</Link>
            
            <Link className='korzina' to = '/cart'>
                <img src={ShoppingCartIcon} alt='Корзина' className='icon-korzina'/>
            </Link>
        </nav>
    )
}