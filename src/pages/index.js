import React from 'react'
import Header from '../components/Header'
import Helmet from 'react-helmet'

const index = () => {
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
      </Helmet>
      <Header />
    </div>
  )
}

export default index
