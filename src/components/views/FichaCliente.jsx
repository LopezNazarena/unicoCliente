import React from "react";
import { Container, Form, Button, Table } from "react-bootstrap";

const FichaCliente = () => {
  return (
    <Container className="bajarFooter">
      <section>
        {" "}
        <h5 className="py-4">Ingrese los siguientes datos para la busqueda.</h5>
      </section>
      <Form>
        <Form.Group className="mb-3 row" controlId="formBasicusuario">
          <Form.Label className="fs-4">DNI/CUIL/CUIT:</Form.Label>
          <Form.Control type="usuario" />
        </Form.Group>
        <section className="d-flex justify-content-end">
          <Button variant="success" type="submit">
            Buscar
          </Button>
        </section>
      </Form>
      <hr></hr>
      <h5>Cliente:</h5>

      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Proucto adquirido</th>
            <th>Fecha vto.</th>
            <th>Saldo/capital</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Caja de Seguridad</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Creditos Personales</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Ahorro Comun</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>CIN</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Tarjeta de Credito VISA</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Tarjeta Propia</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <section>
        {" "}
        <p className="fs-4 mt-4 text-center">Total:</p>
      </section>
      <section className="d-flex justify-content-end">
        {" "}
        <Button variant="success" type="submit">
          Exportar
        </Button>
      </section>
    </Container>
  );
};

export default FichaCliente;
