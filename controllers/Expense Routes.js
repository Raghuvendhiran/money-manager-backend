const Expense = require('../models/Expense');


exports.getExTransactions = (req, res) => {
    try {
        Expense.find((err, data) => {
            if (err) {
                return res.status(400).send({ message: 'Error while retrieving employees.' })
            }
            res.status(200).send(data);
        })
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
};

exports.getIdExTransactions = (req, res) => {
    try {
        Expense.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                return res.status(400).send({ message: 'Error while retrieving employees.' })
            }
            res.status(200).send(data);
        })
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
};


exports.addExTransaction = async (req, res) => {
    try {
        const payload = req.body;
        let trans = new Expense(payload);
        await trans.save((err, data) => {
            if (err) {
                return res.status(400).send({ message: 'Error while registration.' })
            }
            res.status(200).send({ ID: data._id, message: 'Data has been registered successfully.' })
        })
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
}



exports.updateExTransaction = (req, res) => {
    try {
        Expense.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, data) => {
            if (err) {
                return res.status(400).send({ message: "Error while updating an Expense." })
            }
            res.status(200).send({ employeeID: req.params.id, message: 'Expense has been updated successfully.' })
        })
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' })
    }
}