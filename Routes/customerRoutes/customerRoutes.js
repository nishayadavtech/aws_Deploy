const express = require('express');
const router = express.Router();

const {
  getcustomer,
  postcustomer,
  deletecustomer,
  patchcustomer,
  putcustomer
} = require('../../Controller/custumerController/custumerController');


router.get('/viewcustomers', getcustomer);
router.post('/customers', postcustomer);
router.delete('/customers/:id', deletecustomer);
router.patch('/customers/:id', patchcustomer);
router.put('/customers/:id', putcustomer);

module.exports = router;
