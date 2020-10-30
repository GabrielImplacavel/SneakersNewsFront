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

interface MyProps{
  image?:string;
  title?:string;
};


function Cartao({image}:MyProps){
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image}/>
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
  <Col><Cartao image="https://magicfeet.vteximg.com.br/arquivos/ids/177878-500-500/Tenis-Air-Jordan-1-Mid-GS-Infantil-Multicolor.jpg?v=637232446316130000" /></Col>
  <Col><Cartao image="https://images.lojanike.com.br/1024x1024/produto/261404_2611462_20201007114540.jpg"/></Col>
  <Col></Col>
  </Row>
  <Row>
  <Col></Col>
  <Col></Col>
  <Col></Col>
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
