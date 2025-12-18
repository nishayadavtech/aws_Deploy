const connection = require('../../Model/dbConnect');

const getcustomer = (req, res) => {
  const query = 'SELECT * FROM customer';

  connection.query(query, (error, result) => {
    if (error) {
      return res.status(500).send(error.sqlMessage);
    }
    res.send(result);
  });
};

const postcustomer = (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };

  const query = 'INSERT INTO customer SET ?';

  connection.query(query, data, (error, result) => {
    if (error) {
      return res.status(500).send(error.sqlMessage);
    }
    res.send(result);
  });
};



const deletecustomer = (req, res) => {
  const id = req.params.id;

  const query = 'DELETE FROM customer WHERE id = ?';

  connection.query(query, id, (error, result) => {
    if (error) {
      return res.status(500).send(error.sqlMessage);
    }
    res.send(result);
  });
};

const patchcustomer = (req, res) => {
  const data = [req.body.phone, req.params.id];

  const query = 'UPDATE customer SET phone = ? WHERE id = ?';

  connection.query(query, data, (error, result) => {
    if (error) {
      return res.status(500).send(error.sqlMessage);
    }
    res.send(result);
  });
};


const putcustomer = (req, res) => {
  const data = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.params.id
  ];

  const query = `UPDATE customer SET name = ?, email = ?, phone = ?WHERE id = ?`;

  connection.query(query, data, (error, result) => {
    if (error) {
      return res.status(500).send(error.sqlMessage);
    }
    res.send(result);
  });
};


  module.exports = {
  getcustomer,
  postcustomer,
  deletecustomer,
  patchcustomer,
  putcustomer
};




