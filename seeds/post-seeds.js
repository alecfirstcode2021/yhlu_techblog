const { Post } = require('../models');

const postData = [{
        title: 'Lorem Ipsum Sentences 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1

    },
    {
        title: 'Lorem Ipsum Sentences 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur ridiculus mus mauris vitae.',
        user_id: 2
    },
    {
        title: 'Lorem Ipsum 10 words',
        content: 'pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;