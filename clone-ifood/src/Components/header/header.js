
import { Button, Toolbar, Typography} from "@mui/material";
import './header.css';

function AppBar(){
    return(
        <>
        
        <Toolbar className="toolBar">
          <Typography  variant="h6" className="logo">
                <img className="tamanho" src="https://logopng.com.br/logos/ifood-43.png"/>
            </Typography> 
          <div className="navLinks">
            <Typography className="link" href="">Entregador</Typography>
            <Typography className="link" href="">Restaurante e Mercado</Typography>
            <Typography className="link" href="">Carreiras</Typography>
            <Typography className="link" href="">iFood Card</Typography>
          </div>
          <div className="btn_c">
            <Typography className="link login" href="">Cria conta</Typography>
            <Button variant="contained" className="btn_red">Entrar</Button>
          </div>
        </Toolbar>
        </>
    )
}

export default AppBar;

