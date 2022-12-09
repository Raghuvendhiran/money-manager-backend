const Income = require('../models/Income');


exports.getTransactions = (req, res) => {
    try {
        Income.find((err, data) => {
            if (err) {
                return res.status(400).send({ message: 'Error while retrieving employees.' })
            }
            res.status(200).send(data);
        })
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
};

exports.getIdTransactions = (req, res) => {
    try {
        Income.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                return res.status(400).send({ message: 'Error while retrieving employees.' })
            }
            res.status(200).send(data);
        })
    } catch (err) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
};

exports.addTransaction = async (req, res) => {
    try {
        // const { dateTime, description, amount, categories, divisons } = req.body;
        // const amd = dateTime.toString();
        // const object = { dateTime, description, amount: amd, categories, divisons }
        const payload = req.body;
        let trans = new Income(payload);
        await trans.save((err, data) => {
            if (err) {
                return res.status(400).send({ message: 'Error while registration.' })
            }
            res.status(200).send({ Id: data._id, message: 'Data has been registered successfully.' })
        })
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
}


exports.updateTransaction = (req, res) => {
    try {
        Income.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, data) => {
            if (err) {
                return res.status(400).send({ message: "Error while updating an Income." })
            }
            res.status(200).send({ employeeID: req.params.id, message: 'Income has been updated successfully.' })
        })
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' })
    }
}