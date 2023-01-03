import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const Logueo = () => {
  return (
    <Container className="bajarFooter py-5">
      {" "}
      <section>
        {" "}
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="formBasicusuario">
            <Form.Label className="fs-4">Usuario</Form.Label>
            <Form.Control type="usuario" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fs-4">Contraseña</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <a href="/contraseña">¿Olvidaste tu contraseña?</a>
          </Form.Group>
          <section className="d-flex justify-content-end">
            {" "}
            <Button variant="success" type="submit">
              Iniciar sesion
            </Button>
          </section>
        </Form>
      </section>
    </Container>
  );
};

export default Logueo;
