import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const RecuperarContraseña = () => {
  return (
    <Container className="bajarFooter">
      <section>
        {" "}
        <h3 className="mt-4 text-center">¿Olvido su contraseña?</h3>
      </section>
      <section>
        <Form>
          <Form.Group className="my-4" controlId="formBasicEmail">
            <Form.Label className="fs-4">Usuario</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <article className="d-flex justify-content-end">
            {" "}
            <Button variant="success" type="submit">
              Resetear contraseña
            </Button>
          </article>
        </Form>
      </section>
    </Container>
  );
};

export default RecuperarContraseña;
