const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const mysql = require('mysql')
const app = express()
app.use(cors())
app.use(bodyparser.json())
// const connection = require('./Model/stud_data')
// // Database connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'studentsys',
//     port:3306
});

// Get All Records 
app.get('/students',(req,res)=>{
    db.query("SELECT * FROM students",
    (err,result)=>{
        if(err)
        {console.log(err)}
    else
    {res.send(result);}
    });
})

// Add New Student
app.post('/addstud',(req,res)=>{
    const id=req.body.id
    const name=req.body.name
    const marks=req.body.marks

    db.query("INSERT INTO students(id,name,marks)VALUES(?,?,?)",
    [id,name,marks],
    (err,result)=>{
        if(err)
        {console.log(err)}
    else
    {res.send("Values Inserted");}
    });
})

// Update Student Details
app.put('/updtstud/:uid',(req,res)=>{
    const id=req.body.id
    const name=req.body.name
    const marks=req.body.marks

    db.query(`UPDATE  students set id=${req.body.id},
                        name='${req.body.name}',
                        marks=${req.body.marks}
                         WHERE id=${req.params.uid} `,
    (err,result)=>{
        if(err)
        {console.log(err)}
    else
    {res.json(result);}
    });
})


// Delete Single Student
app.delete('/del-stud/:id',(req,res)=>{
    console.log(req.params.id)
    db.query(`DELETE FROM students WHERE id=${req.params.id}`,
    (err,result)=>{
        if(err)
        {console.log(err)}
    else
    {res.json(result);}
    });
})

// Delete All Records
app.delete('/delall',(req,res)=>{
    
    db.query(`DELETE FROM students`,
    (err,result)=>{
        if(err)
        {console.log(err)}
    else
    {res.json(result);}
    });
})

// Search By Name
app.get('/searchstu/:name',(req,res)=>{
    db.query(`SELECT * FROM students where name = '${req.params.name}' `,
    (err,result)=>{
        if(err)
        {console.log(err)}
    else
    {res.send(result);}
    });
})
// Search By ID
app.get('/searchstudid/:id',(req,res)=>{
    db.query(`SELECT * FROM students where id = ${req.params.id} `,
    (err,result)=>{
        if(err)
        {console.log(err)}
    else
    {res.send(result);}
    });
})


// Update student by id
app.get('/updtstu/:uid',(req,res)=>{
    db.query(`SELECT * FROM students where id = ${req.params.uid} `,
    (err,result)=>{
        if(err)
        {console.log(err)}
    else
    {res.json(result);}
    });
})



app.listen(3500,()=>{console.log("Server is running on port 3500.")})