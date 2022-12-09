const mongoose = require('mongoose');


const moneyExpense = new mongoose.Schema(
    {
        dateTime: {
            type: Date,
            default: Date.now(),
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        amount: {
            type: Number,
            required: true,
            trim: true
        },
        categories: {
            type: String,
            required: true,
            trim: true
        },
        summary: {
            type: String,
            required: true,
            trim: true
        },
        divisons: {
            type: String,
            required: true,
            trim: true
        }


    });

module.exports = mongoose.model('MoneyExpense', moneyExpense);