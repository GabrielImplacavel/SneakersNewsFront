import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Botao(){
  return <Button variant="outline-dark">Dark</Button>
}

function Cartao(){
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.lojanike.com.br/1024x1024/produto/193004_2017424_20200318180045.jpg" />
    <Card.Body>
    <Card.Title><strong>Jordan 720 Aerospace</strong></Card.Title>
    <Card.Text>
      Um tênis fodido de bonito mas não se encontra
      mais nas lojas brasileiras
    </Card.Text>
    <Button variant="primary">Ver modelo</Button>
  </Card.Body>
</Card>)
}

function Title(){
  return <h1>Bem vindo a sneakers news</h1>
}

function Layout(){
  return (
  <Container>
  <Row><Title/></Row>
  <Row>
  <Col><Cartao /></Col>
  <Col><Cartao /></Col>
  <Col><Cartao /></Col>
  </Row>
  <Row>
  <Col><Cartao /></Col>
  <Col><Cartao /></Col>
  <Col><Cartao /></Col>
  </Row>
  </Container>
  );
}



function App() {
  return (
    <div className="App">
      <Title />
       <Botao />
       <Layout />
    </div>
  );
}

export default App;
