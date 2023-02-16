import express from "express"
import mysql from "mysql2"
const app = express()

const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "203010@#NAmaths",
   database: "projectwork"
})

//if there is any authentication problem 
// ALTER USER 'root'@'3306' IDENTIFIED WITH mysql_native_password BY '203010@#NAmaths';

app.use(express.json())




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
app.post("/salesrep", (req, res) => {
   const q = "INSERT INTO sales_rep (RID,NIC,registrationdate,fullname,password,email,phoneNo,type,address) VALUES (?,?,?,?,?,?,?,?,?)"

   const values = [
      req.body.RID,
      req.body.NIC,
      req.body.registrationdate,
      req.body.fullname,
      req.body.password,
      req.body.email,
      req.body.phoneNo,
      req.body.type,
      req.body.address,
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





