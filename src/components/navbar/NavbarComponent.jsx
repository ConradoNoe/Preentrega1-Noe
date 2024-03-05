
import CartWidget from "../CartWidget/CartWidget"
import ButtonComponent from "../button/ButtonComponent"
import "./NavbarComponent.css"


export const NavbarComponent = () =>{
    
    return(
        <>
        <header>
            <nav  className="navbar-container">
                <div className="navbar-brand">
                    <h2>SuperMarket</h2>
                </div>
                <div className="navbar-nav">
                    <ul>
                        <li><ButtonComponent texto='Inicio'/></li>
                        <li><ButtonComponent texto='sobre nosotros'/></li>
                        <li><ButtonComponent  texto='productos'/></li>
                        <li> <CartWidget /></li>
                    </ul>   
                </div>
            </nav>
        </header>
        </>
    )
}