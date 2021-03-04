import React, { useState } from 'react';
import { 
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
 } from 'reactstrap';

const Menu = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <Container>
                    <NavbarBrand href="/">Saulo Aguiar</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Início</NavLink>
                                </NavItem>                            
                                <NavItem>
                                    <NavLink href="/orcamento">Orçamentos</NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarText>
                                <NavLink href="/contatos">Contatos</NavLink>
                            </NavbarText>
                        </Collapse>

                </Container>
            </Navbar>
        </div>
    );
}

export default Menu;