const router = require('express').Router();
const apiRoutes = require('./api');
// const postRoutes
// const commentRoutes

router.use('/api', apiRoutes);

module.exports = router; 
