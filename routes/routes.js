var dbConn = require('../config/db.config');
var express = require('express');
var router = express.Router();
console.log("we are in routes")

router.get('/:id', (req, res) => {
    console.log("Fetching user with id: " + req.params.id)

    const userId = req.params.id
    const queryString = "SELECT * FROM employees WHERE id = ?"
    dbConn.query(queryString, [userId], (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for users: " + err)
        res.sendStatus(500)
        return
        // throw err
      }
      console.log("I think we fetched users successfully")
  
      const users = rows.map((row) => {
        return {firstName: row.first_name, lastName: row.last_name}
      })
  
      res.json(users)
    })
  
    // res.end()
  })

router.get('/',(req , res)=>{
    const userId = req.params.id
    const queryString = "SELECT * FROM employees"
    dbConn.query(queryString, [userId], (err, rows, fields) => {
        if (err) {
          console.log("Failed to query for users: " + err)
          res.sendStatus(500)
          return
          // throw err
        }
        console.log("I think we fetched users successfully")
    
        const users = rows.map((row) => {
          return {firstName: row.first_name, lastName: row.last_name}
        })
    
        res.json(users)
      })
    })
    router.delete('/:id' ,(req , res)=>{
      console.log("we are in delete api "+req.params.id)
      const userId = req.params.id
      const queryString = "delete FROM employees where id =?"
      dbConn.query(queryString, [userId], (err, rows, fields) => {
        if (err) {
          console.log("Failed to query for users: " + err)
          res.sendStatus(500)
          return
          // throw err
        }
      res.send("done")


  })
})





router.post('/:id' ,(req , res)=>{
    console.log("we are in post api "+req.body)
    console.log(req.body)
    const data={
        id:req.params.id,
        firstName: req.body.firstName,
        lastName:  req.body.lastName
    }
    const queryString = "INSERT INTO employees(id , first_name , last_name)values(?,?,?)"
    dbConn.query(queryString, Object.values(data), (err, rows, fields) => {
        if (err) {
          console.log("Failed to query for users: " + err)
          res.sendStatus(500)
        }
        else{
            res.json({status:"success", data:data})
        }
})
})

router.put('/:id',(req , res)=>{
  console.log("we are in put api ")
  console.log(req.body)
  const data={
    firstame: req.body.firstName,
    lastName:  req.body.lastName,
    id:req.params.id
}
    const queryString = "UPDATE employees SET first_name=?,last_name=? where id = ?"
    dbConn.query(queryString, Object.values(data), (err, rows, fields) => {
        if (err) {
          console.log("Failed to query for users: " + err)
          res.sendStatus(500)    
        }
        else{
          console.log("I think we fetched users successfully")
          res.json({status:"success", data:data})
        }
      })


})
  
  module.exports = router;