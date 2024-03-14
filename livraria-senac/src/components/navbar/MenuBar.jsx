import { Menu } from "../styles/Containers";
import { LogoImage } from "../styles/Images";
import { List, ListItem } from "../styles/Lists";
import logo from "../../images/logo.png"

const navItems = ['Lançamentos', 'Blog', 'Fale conosco'];

function MenuBar() {
    return (
        <Menu>
            <LogoImage src={logo} />
            <List>
                {
                    navItems.map((item, index) => {
                        return <ListItem key={item}>{item}</ListItem>
                    })
                }
            </List>
            <List>
            </List>
        </Menu>
    );
};

export default MenuBar;