const { Post, User, Comment } = require('../models');
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

    
    res.render('homepage', { postData: allPosts });
    } catch (err) {
        res.status(500).json('There was an error');
    }
});

router.get('/post/:id', async (req, res) => {
  const postData = await postData.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Comments
      }
    ],
  });

  const singlePost = postData.get({ plain: true });
  console.log(singlePost);

  res.render('single-post', singlePost);
});

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
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
  res.render('dashboard');
});

// router.get('/dashboard', withAuth, async (req, res) => {
//   try {
//     const userData = await Post.findByPk(req.session.user_id, {
//       include: [
//         {
//           model: Post,
//         },
//       ],
//     });
//     const postsByUser = userData.get({ plain: true });

//     console.log(postsByUser);

//     res.render('dashboard', { post: postsByUser.post });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(e); 
//   }
// });

module.exports = router;