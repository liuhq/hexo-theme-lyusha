const pagination = require('hexo-pagination');
const { sort } = require('timsort');

hexo.config.index_generator = Object.assign({
    per_page: typeof hexo.config.per_page === 'undefined' ? 10 : hexo.config.per_page,
    order_by: '-date'
}, hexo.config.index_generator);

hexo.extend.generator.register('article', locals => {
    const config = hexo.config;
    const paginationDir = config.pagination_dir || 'page';
    const path = hexo.theme.config.articles_folder || 'articles';
    const posts = locals.posts.sort(config.index_generator.order_by);
    sort(posts.data, (a, b) => (b.sticky || 0) - (a.sticky || 0));

    return pagination(path, posts, {
        perPage: config.index_generator.per_page,
        layout: 'page',
        format: paginationDir + '/%d/'
      });
});