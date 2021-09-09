const router = require('express').Router();
const userRoutes = require('./user-routes');
// const postRoutes
// const commentRoutes

router.use('/user', userRoutes);

module.exports = router; 
