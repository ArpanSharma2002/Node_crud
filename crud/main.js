const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../crud/views'));


//  Show All employee
app.get('/employee', (req, res) => {
    db.query('SELECT * FROM employee', (err, results) => {
      if (err) throw err;
      res.render('employee/index', { employee: results });
    });
  });
  
  //  Show Create Form
  app.get('/employee/create', (req, res) => {
    res.render('employee/create');
  });
  
  //  Handle Create
  app.post('/employee/create', (req, res) => {
    const { name, email } = req.body;
    db.query('INSERT INTO employee (name, email) VALUES (?, ?)', [name, email], (err) => {
      if (err) throw err;
      res.redirect('/employee');
    });
  });
  
  //  Show Edit Form
  app.get('/employee/edit/:id', (req, res) => {
    db.query('SELECT * FROM employee WHERE id = ?', [req.params.id], (err, result) => {
      if (err) throw err;
      res.render('employee/edit', { user: result[0] });
    });
  });
  
  //  Handle Update
  app.post('/employee/edit/:id', (req, res) => {
    const { name, email } = req.body;
    db.query('UPDATE employee SET name = ?, email = ? WHERE id = ?', [name, email, req.params.id], (err) => {
      if (err) throw err;
      res.redirect('/employee');
    });
  });
  
  //  Handle Delete
  app.get('/employee/delete/:id', (req, res) => {
    db.query('DELETE FROM employee WHERE id = ?', [req.params.id], (err) => {
      if (err) throw err;
      res.redirect('/employee');
    });
  });
  
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });