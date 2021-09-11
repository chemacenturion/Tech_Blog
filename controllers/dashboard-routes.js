const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', withAuth, async (req, res) => {
    res.render('all-posts-admin', {layout: 'dashboard.handlebars'});
});

// router.get('/', withAuth, async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.sessions.user_id, {
//             include: [
//                 {
//                     model: Post,
//                 },
//             ],
//         });
    
//         const postsByUser = userData.get({ plain: true });
//         console.log(postsByUser);

//         res.render('all-posts-admin', {layout: 'dashboard', posts: postsByUser.posts});
//     } catch (e) {
//         res.status(500).json(e)
//     }
// });

module.exports = router;