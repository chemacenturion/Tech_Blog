const { Post, User } = require('../models');
const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
    const postData = await Post.findAll({
        include: [
            {
                model: User,
                attributes: ['username'],
            },
        ],
    });

    const allPosts = postData.map((post) =>
        post.get({ plain: true })
    );

    
    res.render('all-posts', { postData: allPosts });
    } catch (err) {
        res.status(500).json('There was an error');
    }
});

router.get('/login', async (req, res) => {
    console.log(req.session)
    if (req.session.logged_in) {
        res.redirect('/');
      } else {
        res.render('login');
      }
});

router.get('/signup', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
      } else {
        res.render('signup');
      }
});

router.get('/dashboard', withAuth, async (req, res) => {
    // if (req.session.logged_in) {
    //     res.redirect('/dashboard');
    //   } else {
        res.render('dashboard');
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

//         res.render('all-posts-admin', {layout: 'dashboard.handlebars', posts: postsByUser.posts});
//     } catch (e) {
//         res.status(500).json(e)
//     }
// });

module.exports = router;