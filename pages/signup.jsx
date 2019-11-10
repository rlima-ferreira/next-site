import React, { useState } from 'react';
import { Page, Grid, Article, Form, Col } from '../components/electrons/Containers';
import { Button } from '../components/electrons/Buttons';
import { Input } from '../components/electrons/Inputs';
import { signup } from '../services/user.services';

const SignUp = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  async function register(e) {
    const res = await signup(user);
    console.log(res);
    return false;
  }

  return (
    <Page>
      <Grid>
        <Article>
          <Form onSubmit={register.bind(this)}>
            <Col xs={12}>
              <h1>Cadastro</h1>
            </Col>
            <Col xs={12}>
              <Input 
                type="text"
                placeholder="Nome"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
              />
            </Col>
            <Col xs={12}>
              <Input 
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </Col>
            <Col xs={12}>
              <Input 
                type="password"
                placeholder="Senha"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </Col>
            <Col xs={12}>
              <Button type="submit">
                Cadastrar
              </Button>
            </Col>
          </Form>
        </Article>
      </Grid>
    </Page>
  );
};

export default SignUp;
