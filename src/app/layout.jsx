"use client"
import Head from 'next/head'

import '../styles/globals.css'

export default function RootLayout({children}){

  return (
    <html> 
      <Head>Restaurante</Head>
      <body style={{background:'#fff', margin: 50, padding: 0}}>
        {children}
      </body>
    </html>
  );
}