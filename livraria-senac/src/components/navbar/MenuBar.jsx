import { Menu } from "../styles/Containers";
import { LogoImage } from "../styles/Images";
import { List, ListItem } from "../styles/Lists";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";

const navItems = ['Lançamentos', 'Blog', 'Fale conosco'];

function MenuBar() {
    return (
        <Menu>
            <Link to='/'>
                <LogoImage src={logo} />
            </Link>
            <List>
                {
                    navItems.map((item, index) => {
                        return <ListItem key={item}>{item}</ListItem>
                    })
                }
                <ListItem>
                    <Link to="/register">Cadastro</Link>
                </ListItem>
            </List>
        </Menu>
    );
};

export default MenuBar;