import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
   host: "192.99.34.118",
   user: "codewithx_db_user",
   password: "Project2023",
   database: "codewithx_Project"
})




//if there is any authentication problem 
// ALTER USER 'codewithx_Project' IDENTIFIED WITH mysql_native_password BY 'project2023';




app.use(express.json());
app.use(cors());
//app.use(express.static(path.join(__dirname,'static')));



app.get("/", (req, res) => {
   res.json("hello this is the backend")

})
app.get("/salesrep", (req, res) => {
   const q = "SELECT * FROM sales_rep"
   db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);

   })

})



app.post("/add", (req, res) => {
   const q = "INSERT * FROM sales_rep"
   db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
   })
})

app.get("/stock", (req, res) => {
   const p = "SELECT * FROM stock"
   db.query(p, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
   })
})





app.post("/userpw", (req, res) => {
   const userid = req.body.userid;
   const password = req.body.password;

   db.query(
      "select * from userpw where userid=? and password =?",
      [userid, password],
      (err, result) => {
         if (err) {
            res.send({ err: err })
         }
         if (result.length > 0) {
            res.send(result);
         } else {
            res.send({ message: "wrong combination" });
         }
      }
   );
});














app.get("/user", (req, res) => {
   const r = "SELECT * FROM userpw "
   db.query(r, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);

   })

})




app.post("/userreg", (req, res) => {


   const r = "INSERT INTO `projectwork`.`userpw` (`userid`, `password`) VALUES (?,?);"

   const values = [
      req.body.userid,
      req.body.password

   ];
   db.query(r, values, (err, data) => {
      if (err) return res.json(err)
      return res.json("username , password values has been created successfully");

   })
})








app.post("/stock", (req, res) => {
   const p = "INSERT INTO `projectwork`.`stock` (`stockID`, `qty`, `productname`, `name`, `price`, `manufacturedate`, `expirydate`, `discount`) VALUES (?,?,?,?,?,?,?,?);"

   const values = [
      req.body.stockID,
      req.body.qty,
      req.body.productname,
      req.body.name,
      req.body.price,
      req.body.manufacturedate,
      req.body.expirydate,
      req.body.discount
   ];
   db.query(p, values, (err, data) => {
      if (err) return res.json(err)
      return res.json("stock values has been created successfully");
   })
})




app.post("/salesreptempadd", (req, res) => {
   const q = "INSERT INTO `projectwork`.`sales_rep` (`fullname`, `NIC`, `registrationdate`,  `password`,`reenterpassword`, `email`, `phonenumber`,  `sex`) VALUES (?,?,?,?,?,?,?,?);"

   const values = [
      req.body.fullname,
      req.body.NIC,
      req.body.registrationdate,
      req.body.password,
      req.body.reenterpassword,
      req.body.email,
      req.body.phonenumber,
      req.body.sex,
   
   ];

   // console.log(values);
   db.query(q, values, (err, data) => {
      if (err) return res.json(err)
      return res.json("salesrep values has been created temporarily successfully");
   })
})



app.get("/salesreptemp", (req, res) => {
   const r = "SELECT * FROM sales_repTemp "
   db.query(r, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);

   })

})


















app.post("/salesrep", (req, res) => {
   const q = "INSERT INTO `projectwork`.`sales_rep` (`RID`, `NIC`, `registrationdate`, `fullname`, `password`, `email`, `phoneNo`, `type`, `address`) VALUES (?,?,?,?,?,?,?,?,?);"

   const values = [
      req.body.rid,
      req.body.nic,
      req.body.registrationdate,
      req.body.fullname,
      req.body.password,
      req.body.email,
      req.body.phoneNo,
      req.body.type,
      req.body.address
   ];

   // console.log(values);
   db.query(q, values, (err, data) => {
      if (err) return res.json(err)
      return res.json("salesrep values has been created successfully");
   })
})



app.listen(8800, () => {
   console.log("Connected to backend !1")

})



