import React, { useState } from 'react';
import { Page, Grid, Article, Form, Col } from '../components/electrons/Containers';
import { Button } from '../components/electrons/Buttons';
import { Input } from '../components/electrons/Inputs';
import { login } from '../services/user.services';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  async function auth(e) {
    const res = await login(user);
    console.log(res);
    return false;
  }

  return (
    <Page>
      <Grid>
        <Article>
          <Form onSubmit={auth.bind(this)}>
            <Col xs={12}>
              <h1>Login</h1>
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
                Entrar
              </Button>
            </Col>
          </Form>
        </Article>
      </Grid>
    </Page>
  );
};

export default Login;
