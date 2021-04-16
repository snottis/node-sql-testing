const bookshelf = require('./bookshelf');

const Post = bookshelf.model('Post', {
    tableName: 'posts'
})

module.exports = Post