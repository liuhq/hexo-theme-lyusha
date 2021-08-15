/**
 * Modify the permalink prefix of the article
 */
hexo.extend.filter.register('post_permalink', function (data) {
    var path = hexo.theme.config.articles_folder || 'articles/';
    if (path[path.length - 1] != '/') path += '/';
    data = path + data;
    // console.info('\x1b[32mINFO', '\x1b[37mPermalink modified: \x1b[36m', data);
    // console.count();
    return data;
});