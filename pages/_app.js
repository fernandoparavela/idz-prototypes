import '../styles/bootstrap/bootstrap.css'
import '../styles/bootstrap/bootstrap-reboot.css'
import '../styles/bootstrap/bootstrap-utilities.css'
import '../styles/bootstrap/bootstrap-grid.css'
import '../styles/global.css'
import React from 'react'
import App from 'next/app'



export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
          <Component {...pageProps} />
      </div>
    )
  }
}