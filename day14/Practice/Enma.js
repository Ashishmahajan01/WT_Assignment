import * as React from 'react'
// import Addition from './Addition'
// import PropsMagic from './Addition'
// import Add from './Addition'
import Calculation from './Parent'
import AcceptDetails from './ConditionalRendering'
import CurrencyConverter from '../Practice/CurrencyConverter'

export default function Enma() {
    return (
        <main>     
            {/* <Addition></Addition>     */}
            {/* <PropsMagic num1={50}/> */}
            {/* <PropsMagic/> */}
            {/* <Add></Add> */}
            <Calculation/>
            <AcceptDetails/>
            
            <CurrencyConverter/>
        </main>
    )
  }