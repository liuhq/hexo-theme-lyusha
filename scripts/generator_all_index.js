hexo.extend.generator.register('index', locals => {
    return {
        path: '',
        layout: 'index',
        data: {
            __index: true
        }
    };
});

hexo.extend.generator.register('categories', locals => {
    return {
        path: '/categories/',
        data: locals.posts,
        layout: 'category'
    }
});

hexo.extend.generator.register('tags', locals => {
    return {
        path: '/tags/',
        data: locals.posts,
        layout: 'tag'
    }
});