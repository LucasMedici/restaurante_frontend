"use client"
import Head from 'next/head'

import './styles/globals.css'

export default function RootLayout({children}){

  return (
    <html> 
      <Head>Restaurante</Head>
      <body style={{background:'#D9D9D9', margin: 0, padding: 0}}>
        {children}
      </body>
    </html>
  );
}