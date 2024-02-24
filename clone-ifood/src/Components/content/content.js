import { Button, TextField, Toolbar, Typography } from "@mui/material";
import { SvgIcon } from '@mui/material';
import './content.css';

function AppContent(){
    return(
        <>
        <Toolbar>
            <Typography className="content">
                <h1>Faça mercado no iFood</h1>
                <p>Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</p>
                <form>
                    <span class="material-symbols-outlined search-icon">search</span>
                    <div class="input-endereco">
                        <TextField fullWidth id="q" label="Em qual endereço você está?" variant="filled" />
                    </div>
                    <Button variant="contained" className="btn_red">Ver mercados próximos</Button>
                </form>
            </Typography>
        </Toolbar>

        </>
    )
}
export default AppContent;