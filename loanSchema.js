import mongoose from 'mongoose';
const { Schema } = mongoose;

const loanSchema = new Schema({
    Id : int,
    customerName: String,
    phoneNumber: int,
    address: String,
    loanAmount: int,
    interest: int,
    loanTermYears: int,
    loanType: String,
    description: String,
    createdDate: Date,
    insertedDate: Date
});
const Loan = mongoose.model('Loan', loanSchema);