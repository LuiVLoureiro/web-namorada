import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Se estiver usando React Router

import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <Container id='container' className="mt-5">
      <Row>
        <Col md={6} className="mx-auto text-center">
          <h1 className="display-4">Oops! Página não encontrada</h1>
          <p className="lead">A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.</p>
          <Link to="/">
            <Button>Voltar para a página inicial</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorPage;