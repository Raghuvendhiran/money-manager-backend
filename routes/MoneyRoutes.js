const express = require('express');
const router = express.Router();

const { getTransactions, addTransaction, updateTransaction, getIdTransactions } = require('../controllers/Income Routes');
const { getExTransactions, addExTransaction, updateExTransaction, getIdExTransactions } = require('../controllers/Expense Routes');


router.get("/get-income", getTransactions);
router.get("/get-income/:id", getIdTransactions);
router.post("/get-income", addTransaction);
router.put("/get-income/:id", updateTransaction);


router.get("/get-expense", getExTransactions);
router.get("/get-expense/:id", getIdExTransactions);
router.post("/get-expense", addExTransaction);
router.put("/get-expense/:id", updateExTransaction);


module.exports = router;

