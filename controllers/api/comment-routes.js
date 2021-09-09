const router = require('express').Router();
const Comment = require('../../models/comment');

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id,
            post_id: req.body.post_id
        });

        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const commentData = await Post.update(
            {
                title: req.body.title,
                content: req.body.content
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )

        res.status(200).json(commentData);
    } catch {
        console.log(err);
        res.status(500);
    }
});

router.delete(':/id', async (req, res) => {
    try {
        const commentData = await Post.findByPk(req.params.id);

        await commentData.destroy();
        res.status(200).json({ message: 'Comment has been successfully deleted!' });
    } catch {
        console.log (err);
        res.status(500);
    }
});

module.exports = router;