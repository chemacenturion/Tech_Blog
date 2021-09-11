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

module.exports = router;