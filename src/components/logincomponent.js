import Form from 'react-bootstrap/Form';

function login() {
  return (
    <>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="username"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">User Name</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
    </>
  );
}

export default login;