import React, { Fragment, useState } from "react";
import classes from "./ItemCard.module.css";
import lighter from "../../assets/lighter.jpg";
import { FaSearch } from "react-icons/fa";
const ItemCard = (props) => {
  const [search, setSearch] = useState();

  const searchHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    //     <div className={classes.item_main}>
    //       <div className={classes.wrap_div}>
    //         {/* img of item */}
    //         {/* <img src = {biscuit} /> */}

    //   <div>
    //         {/* <table>
    //             <tbody>
    //                 <tr>
    //                     <td className={classes.left_td}>Name</td>
    //                     <td className={classes.right_td}>OREO</td>
    //                 </tr>
    //                 <tr>
    //                     <td className={classes.left_td}>Price</td>
    //                     <td className={classes.right_td}>RS.150.00</td>
    //                 </tr>
    //                 <tr>
    //                     <td className={classes.left_td}>Manufacture</td>
    //                     <td className={classes.right_td}>MUNCHEE</td>
    //                 </tr>
    //                 <tr>
    //                     <td className={classes.left_td}>Mfg date:</td>
    //                     <td className={classes.right_td}>2/3/2023</td>
    //                 </tr>
    //                 <tr>
    //                     <td className={classes.left_td}>Exp date:</td>
    //                     <td className={classes.right_td}>2/3/2023</td>
    //                 </tr>
    //                 <tr>
    //                     <td className={classes.left_td}>Discount</td>
    //                     <td className={classes.right_td}>RS.2.00</td>
    //                 </tr>
    //                 <tr>
    //                     <td className={classes.left_td}>Availability</td>
    //                     <td className={classes.right_td}>500 units</td>
    //                 </tr>
    //             </tbody>
    //         </table> */}
    //         </div>

    //       </div>

    //       {/* <button className={classes.update}>Update</button>
    //       <button className={classes.cancel}>Delete</button> */}

    //     </div>
    <div className={`${classes.prdct_main} ${props.style}`}>
      {/* <div className={classes.inpt_div}>
    <input type='text'  placeholder=' Search....'  value={search}  onChange = {searchHandler}/>
    <button> <FaSearch className={classes.svg}/></button>

    </div> */}
      <div className={classes.ic_main}>
        <div className={classes.prdct_left}>
          <img src={lighter} alt="product image" />
          <div className={classes.prdct_head}>
            <h1>Munchee cream craker sss</h1>
            <h3>RS.480.00</h3>
            <h3>Discount </h3>
          </div>
        </div>
        <div className={classes.prdct_right}>
          <div className={classes.item_desc}>
            <div className={classes.right_des}>
              <span className={classes.sp_left}>Manufacture</span> <br></br>
              <span className={classes.sp_right}>Munchee</span>
            </div>

            <div className={classes.right_des}>
              <span className={classes.sp_left}>mdf date</span> <br></br>
              <span className={classes.sp_right}>2023-02-28</span>
            </div>

            <div className={classes.right_des}>
              <span className={classes.sp_left}>exp date</span> <br></br>
              <span className={classes.sp_right}>2023-02-28</span>
            </div>

            <div className={classes.right_des}>
              <span className={classes.sp_left}>exp date</span> <br></br>
              <span className={classes.sp_right}>2023-02-28</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
