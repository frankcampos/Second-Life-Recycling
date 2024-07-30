/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap';
import { useRouter } from 'next/router';
import { signOut } from '../utils/auth';
import logo from '../assets/rrr-logo.png';

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <Navbar style={{ backgroundColor: 'rgb(175, 197, 168)', marginBottom: '50px' }} collapseOnSelect expand="lg">
      <Container fluid>
        <Navbar.Brand href="">
          <Image
            src={logo}
            width={70}
            height={50}
            className="d-inline-block align-top"
            alt="Reduce Reuse Recycle Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/new">
              <Nav.Link>Add Item</Nav.Link>
            </Link>
            <Link passHref href="/cart">
              <Nav.Link>Cart</Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button variant="outline-light" type="submit">Search</Button>
          </Form>
          <Nav className="ms-auto">
            <Button variant="dark" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
