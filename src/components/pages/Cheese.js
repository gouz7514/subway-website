import React from 'react'
import '../../App.css';
import CheeseList from '../CheeseList';
import Footer from '../Footer';

export default function Cheese() {
  return (
    <>
      <CheeseList defer/>
      <Footer />
    </>
  )
}