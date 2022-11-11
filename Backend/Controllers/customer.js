import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { Customer } from '../models/customer.js';

export const addCustomer = async (req, res) => {

    const user = req.body;

    const nic = user.nic;
    const registredUser = await Customer.findOne({nic: nic});
    if (registredUser) {
        return res.json({message: "User have already registered"})
    } else {
        
        user.password = await bcrypt.hash(req.body.password, 10);
        // await bcrypt.genSalt(10, function(err, salt) {
        //     bcrypt.hash(password, salt, function(err, hash) {
        //     // returns hash
        //     user.password = hash;
        //     });
        // });

        const newCustomer = new Customer({
            name: user.name,
            email: user.email,
            address : user.address,
            city: user.city,
            homeCountry: user.homeCountry,
            nic: nic,
            type: user.type,
            birthday: user.birthday,
            durationStart: user.durationStart,
            durationend: user.durationEnd,
            password: user.password, 
            balance: "0.00",
            joinedDate: new Date()
        })

        await newCustomer.save()
        .then ((result) => {
            // res.json({message: "Successfully User Registered"});

            const payload = {
                id: result._id,
                name: result.name,
                
            };
            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {expiresIn: 86400},
                (err, token) => {
                    if (err) return res.json({message: err});
                    res.json({
                        message: 'Success',
                        token: "Bearer" + token
                    })
                }
            )
        })
        .catch((err) => {
            return res.json({message: "Couldn't register the user", error: err});
        })
    }
}

export const customerLogIn = async (req, res) => {

    const userLogIn = req.body;

    await Customer.findOne({nic: userLogIn.nic})
    .then((result) => {
        if (!result) {
            return res.json({
                message: "Invalid username or password"
            })
        }
        bcrypt.compare(userLogIn.password, result.password)
        .then((isCorrect) => {
            if (isCorrect) {
                const payload = {
                    id: result._id,
                    name: result.name,
                    
                };
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {expiresIn: 86400},
                    (err, token) => {
                        if (err) return res.json({message: err});
                        res.json({
                            message: 'Success',
                            token: "Bearer " + token
                        })
                    }
                )
            } else {
                return res.json({
                    message: "Invalid username or password"
                })
            }
        })
    })
}

export const getSelectedCustomer = async (req, res) => {
    const customer = await Customer.findOne({ _id: req.user.id });
    res.send(customer);
}

export const editCustomer = async (req, res) => {
    try {
        // console.log(req);
        const customer = await Customer.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                name: user.name,
                email: user.email,
                address : user.address,
                city: user.city,
                homeCountry: user.homeCountry,
                birthday: user.birthday,
                durationStart: user.durationStart,
                durationend: user.durationEnd,
                password: user.password
            },
            {
                new:true
            }
            );

        if (customer) {
            return res.json({
                status: true,
                details: customer  
            });
        } else {
            return res.json({
                status: false,
            });
        }

    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

export const deleteCustomer = async (req, res) => {
    const customer = await Customer.findOneAndDelete({ _id: req.params.id });
    return res.json(customer);
}

// export const getAllCustomers = async (req, res) => {
//     const customers = await CustomerModel.find({});
//     res.send(customers);
// }

// export const getAllCustomersCount = async (req, res) => {
//     const customers = await CustomerModel.find().count();
//     res.send(String(customers));
// }


// export const deleteCustomer = async (req, res) => {
//     const customer = await CustomerModel.findOneAndDelete({ _id: req.body.id });
//     res.send(customer);
// }

// export const editCustomer = async (req, res) => {
//     try {
//         console.log(req);
//         const customer = await CustomerModel.findOneAndUpdate(
//             {
//                 _id: req.body._id
//             },
//             {
//                 _id: req.body._id,
//                 name: req.body.name,
//                 email: req.body.email,
//                 address: req.body.address,
//                 nic: req.body.nic,
//                 contactNo: req.body.contactNo
//             },
//             {
//                 new:true
//             }
//             );

//         if (customer) {
//             res.send({
//                 status: true,
//                 details: customer  
//             });
//         } else {
//             res.send({
//                 status: false,
//             });
//         }

//     } catch (error) {
//         console.log(error.messaga)
//     }
// }



// export const getSelectedCustomer = async (req, res) => {
//     const customer = await CustomerModel.findOne({ _id: req.body.id });
//     res.send(customer);
// }

// export const getSelectedCustomerByNic = async (req, res) => {
//     const nic = req.params.nic;
//     const customer = await CustomerModel.findOne({ nic: nic });
//     res.send(customer);
// }


// export const logIn = async (req, res) => {
//     const customer = await CustomerModel.findOne({ email: req.body.email, nic: req.body.nic });
//     if (customer) {
//         res.send({
//             status: true,
//             details: customer  
//         });
//     } else {
//         res.send({
//             status: false,
//         });
//     }
// }