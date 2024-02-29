import './navBarstyled.css';
import Logo from '../../assets/img/vatralogo.png';
import CartWidget from '../CartWidget';

function Navbar() {
    const handleclick = (event) => {
        console.log(event);
    };

    return (
        <div className="navBar">
            <img src={Logo} alt="logo" className="logo"/>

            <ul className="navbar-links">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Nosotros</a>
                </li>
                <li>
                    <a href="#">Tienda</a>
                </li>
                <li>
                    <a className="Cart" href="#"></a>
                </li>
            </ul>
            <CartWidget number={3} />
        </div>
        
    );
};



export default Navbar;
