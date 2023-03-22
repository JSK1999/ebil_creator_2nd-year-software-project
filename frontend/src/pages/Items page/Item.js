import React from 'react';
import classes from './Item.module.css';
import NavbarAdmin from '../../ui/navbar/NavbarAdmin';
import ItemCard from './ItemCard';
import {FaSearch} from 'react-icons/fa';

const Item = () => {
  return (
    <div>
      <NavbarAdmin > <> <input className={classes.nav_input} type='text'  placeholder=' Search....'  />
    <button className={classes.nav_btn}> <FaSearch className={classes.svg}/></button> </></NavbarAdmin>
      <ItemCard  style = {classes.itemcard_style}/>
    </div>
  )
}

export default Item
