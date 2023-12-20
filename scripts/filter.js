/**
 * Modify the permalink prefix of the article
 */
hexo.extend.filter.register('post_permalink', function (data) {
    var path = hexo.theme.config.articles_folder || 'articles/';
    if (path[path.length - 1] != '/') path += '/';
    data = path + data;
    return data;
});
