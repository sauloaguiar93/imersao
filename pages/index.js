import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';


function Home(){
    return (
        <div>
            <Menu />

            <Jumbotron fluid className="descr-top">
            <style>
                {`
                    .descr-top{
                        background-color:#050c3d;
                        color: #00a1fc;
                        margin-bottom: 0rem !important;
                    }
                `}
            </style>
                <Container className="text-center">
                    <h1 className="display-4">Temos a solução que a sua empresa precisa!</h1>
                    <p className="lead">This is a simple hero init, a simple Jumbotron-style Component for calling extra attention to featured content or information.</p>
                    <p className="lead">
                        <a href="/orcamento" className="btn btn-outline-primary btn-lg mt-4">Faça seu orçamento!</a>
                    </p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="servicos">
            <style>
                {`
                    .servicos {
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }
                    .circulo {
                        width: 140px;
                        height: 140px;
                        background-color: #0A197D;

                        color: #FFF;
                        font-size: 52px;
                        padding-top: 24px;
                    }

                    .centralizar {
                        margin: 0 auto !important;
                        float: none !important;
                    }
                    
                `}
            </style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">Serviços</h2>
                        <p className="lead pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non mi risus. Nullam vehicula laoreet est ac sollicitudin.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">A</div>
                            <h2 className="mt-4 mb-4">Serviço 1</h2>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non mi risus. Nullam vehicula laoreet est ac sollicitudin.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">B</div>
                            <h2 className="mt-4 mb-4">Serviço 2</h2>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non mi risus. Nullam vehicula laoreet est ac sollicitudin.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">C</div>
                            <h2 className="mt-4 mb-4">Serviço 3</h2>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non mi risus. Nullam vehicula laoreet est ac sollicitudin.</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

        <Rodape />
        </div>
        )
}

export default Home;