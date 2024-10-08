const express = require('express');
const { register, login, getDetails, updateUser, deleteUser, checkOldPassword, sendVerificationKey, changePassword, routsInit, getUsers } = require('../controllers/auth.controllers');
const { verify } = require('jsonwebtoken');

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.post('/profile', getDetails);

router.put('/updateUser', updateUser);

router.post('/deleteUser', deleteUser);

router.post('/resetPassword', checkOldPassword);

router.post('/sendVerificationCode', sendVerificationKey);

router.post('/changePassword', changePassword);

router.post('/getAllUsers', getUsers);

module.exports = router;