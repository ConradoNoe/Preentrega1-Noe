
export const NavbarComponent = () =>{
    
    return(
        <>
        <header>
            <nav className="navbar-container">
                <div className="navbar-brand">
                    <h2>SuperMarket</h2>
                </div>
                <div className="navbar-nav">
                    <ul>
                        <li><button>inicio</button></li>
                        <li><button>sobre nosotros</button></li>
                        <li><button>productos</button></li>
                        <li><button><span className="navbar-span">🛒</span></button></li>
                    </ul>   
                </div>
            </nav>
        </header>
        </>
    )
}