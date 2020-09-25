import React from 'react'
import Head from 'next/head'

import logo from '../assets/logo.svg'
import { Container } from '../styles/pages/Home'

export default function Home(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <img src={logo} alt="Logo NextJS" />
      <h1>Setup NextJS</h1>
      <p>A ReactJS + Next.js structure</p>
    </Container>
  )
}
