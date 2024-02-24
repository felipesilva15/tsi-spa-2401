import { Toolbar, Typography } from "@mui/material";
import './cards.css';


function AppCards(){
    return(
        <>
        <Toolbar className="main"> 
            <div className="card">
                <section class="container grid">
                    <div class="item1">
                        <h2>Restaurante</h2>
                        <div>
                            <span>Ver opções</span>
                            <span class="material-symbols-outlined">chevron_right</span>
                        </div>
                    </div>
                    <div class="item2">
                        <h2>Mercado</h2>
                        <div>   
                            <span>Buscar Lojas</span>
                            <span class="material-symbols-outlined">chevron_right</span>
                        </div>
                    </div>
                </section>
            </div>
        </Toolbar>  
        </>
        )
    }
    export default AppCards;