
var _ = require('underscore');

var navBarJSON = [
    {
        'title': 'Inspera Assessment',
        'url': 'https://ia.inspera.no',
        'newTab': true
    },
    {
        'title': 'Idunn',
        'url': 'http://www.idunn.no',
        'newTab': true
    },
    {
        'title': 'Creaza',
        'url': 'http://www.creaza.no',
        'newTab': true
    }
];

var getNavBarItems = function (navBarJSON) {
    var navBarItems = navBarJSON.map(function(el) {
        el.id = _.uniqueId();
        return el;
    });

    navBarItems.sort(function (a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    });

    return navBarItems;
};

module.exports = {
    navBarJSON: navBarJSON,
    getNavBarItems : getNavBarItems
};
