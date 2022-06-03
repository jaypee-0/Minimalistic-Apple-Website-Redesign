import React from 'react'
import BetheFirst from '../Components/Home/BetheFirst'
import MacAir from '../Components/Home/MacAir'
import Welcome from '../Components/Home/Welcome'
import '../Styles/Home.scss'

export const Home = () => {
  return (
    <div>
        <Welcome />
        <MacAir />
        <BetheFirst />
    </div>
  )
}
