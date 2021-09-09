const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/user', userRoutes);

router.post('/post', postRoutes);

router.comment('/comment', commentRoutes);

module.exports = router; 
