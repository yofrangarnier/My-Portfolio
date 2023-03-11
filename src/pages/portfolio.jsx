import React from 'react'
import CardPortfolio from '../../components/CardPortfolio'
import Message from '../../components/Message'

const portfolio = () => {
  return (
    <div>
      <Message heading="Yofran Garnier" message="desplácese hacia abajo para saber de mis proyecto"/>
      <CardPortfolio/>
    </div>
  )
}

export default portfolio