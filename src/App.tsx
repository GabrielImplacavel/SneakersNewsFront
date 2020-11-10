import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import adidas from './img/adidas.jpg';
import jordan from './img/jordan.jpg';
import nike from './img/nike.jpg';


interface MyProps{
  image:string;
  title:string;
  text:string;
  button:string;
};


function Cartao({image,title,text,button}:MyProps){
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image}/>
    <Card.Body>
  <Card.Title >{title}</Card.Title>
    <Card.Text>{text}</Card.Text>
  <Button variant="primary">{button}</Button>
  </Card.Body>
</Card>)
}

function Title(){
  return <h1>Bem vindo a o Sneaker Library</h1>
}

function Layout(){
  return (
  <Container>
  <Row className="text-center">
    <Col>
      <Title/>
    </Col>
  </Row>

  <Row>
  <Col><Cartao button="Visualizar" title="Jordan" text="Tênis exclusivamente pensados e inspirados para basquete e StreetWear" image={jordan} /></Col>
  <Col><Cartao title="Adidas Originals" button="Visualizar" image={adidas} text="As famosas três listras (Sessão Originals)"/></Col>
  <Col><Cartao title="Nike" button="Visualizar" image={nike} text="O famoso swoosh"/></Col>
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
       <Layout />
    </div>
  );
}

export default App;
