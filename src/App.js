import { useState, useEffect } from 'react';
import useFormulario from './hooks/useFormulario';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';
import Button from './components/Button';
import styled, { keyframes } from 'styled-components';
import Header from './components/Header';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DivCont = styled.div`
  background: linear-gradient(to bottom, #006400, #000000);
  animation: ${fadeIn} 1s ease; /* Agrega la animación de 1 segundo */
`;

const Footer = styled.div`
  background: linear-gradient(to bottom right, #00FF00, #000000);
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  color: white;
  animation: ${fadeIn} 1s ease; /* Agrega la animación de 1 segundo */
`;

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [formulario, handleChange, reset] = useFormulario({
    name: '',
    email: '',
    lastname: '',
  });

  const submit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, formulario]);
    reset();
  };

  console.log(formulario, usuarios);

  useEffect(() => {
    // Puedes agregar más lógica o efectos de entrada aquí si es necesario.
  }, []);

  return (
    <DivCont>
      <Header />
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input
                name="name"
                label="Nombre"
                value={formulario.name}
                onChange={handleChange}
                placeholder="Nombre"
              />

              <Input
                name="lastname"
                label="Apellido"
                value={formulario.lastname}
                onChange={handleChange}
                placeholder="Apellido"
              />

              <Input
                name="email"
                label="Correo"
                value={formulario.email}
                onChange={handleChange}
                placeholder="email"
              />

              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map((x) => (
              <li key={x.email}>{`${x.name} ${x.lastname} : ${x.email}`} </li>
            ))}
          </ul>
        </Card>
      </Container>
      <Footer>Awesome Corporation &#169; 2023</Footer>
    </DivCont>
  );
}

export default App;
