import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.3,
      // damping: 9,
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  },
  exit: {
    x: '-100vw',
    transition: {ease: 'easeInOut'}
  }
}

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}



const Order = ({ pizza }) => {

  return (
    <motion.div className="container order"
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
    >
      Thank you for your order :)
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;