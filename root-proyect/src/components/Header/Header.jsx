import'./header.scss'

export const Header = () =>{


    
    
    
    
    
    
    return(
        <header className="header">
            <div className="header__container">
                <img className="header__logo" src="/src/assets/react.svg" alt="" srcset="" />


                <h1 className="header__title">Titulo web</h1>
                
                <nav className="navbar">
                    <a className="navbar__link" href="">enlace 1</a>
                    <a className="navbar__link" href="">enlace 2</a>
                    <a className="navbar__link" href="">enlace 3</a>
                </nav>
            </div>
        </header>
    )
}