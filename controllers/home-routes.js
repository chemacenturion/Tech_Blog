const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();

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

    
    res.render('homepage', { postData: allPosts });
    } catch (err) {
        res.status(500).json('There was an error');
    }
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/dashboard', withAuth, async (req, res) => {
    res.render('dashboard', {layout: 'dashboard2.handlebars'});
});

router.get('/logout', async (req, res) => {
    res.render('login', {layout: 'main.handlebars'});
});

// router.get('/dashboard', withAuth, async (req, res) => {
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

//         res.render('dashboard', { posts: postsByUser.posts });
//     } catch (e) {
//         res.status(500).json(e)
//     }
// });

module.exports = router;