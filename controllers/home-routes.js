const { Post, User } = require('../models');

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

router.get('/dashboard', async (req, res) => {
    res.render('dashboard');
})

// router.get('/logout', async (req, res) => {
//     res.render('homepage', { postData: allPosts });
// })

module.exports = router;

// stopped video at 45:09