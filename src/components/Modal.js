import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence  } from 'framer-motion';


const Modal = ({ showModal }) => {

}

export default function Modal() {

  return (
    <AnimatePresence exitBeforeEnter>
      { showModal && (
        
      ) }
    </AnimatePresence>
  )
}
