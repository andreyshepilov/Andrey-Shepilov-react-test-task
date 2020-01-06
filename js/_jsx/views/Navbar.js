var React = require('react'),
    _ = require('underscore');


var NavItem = React.createClass({displayName: "NavItem",
    propTypes: {
        item: React.PropTypes.object // One nav item in the navBar array
    },
    render: function() {
        var item = this.props.item;
        return (
            React.createElement("li", {className: "nav-item"}, 
                React.createElement("a", {
                    className: "nav-link", 
                    href: item.url, 
                    target: (item.newTab ? '_blank' : '_self')
                }, 
                    item.title
                )
            )
        );
    }
});

module.exports = React.createClass({displayName: "exports",
    propTypes: {
        navBar: React.PropTypes.array // The JSON array returned from js/model/NavModel.getNavBarItems passed on from main
    },
    render: function() {
        var navBar = this.props.navBar;

        function renderNavItems () {
            return (
                navBar.map(function (el) {
                    return (
                        React.createElement(NavItem, {item: el, key: el.id})
                    );
                })
            );
        }

        return (
            React.createElement("nav", {
                className: "navbar navbar-expand-lg navbar-light bg-light"
            }, 
                React.createElement("img", {
                    className: "navbar-brand logo-main", 
                    src: "https://ias.inspera.no/file/cil/mp_logo/file"}
                ), 
                React.createElement("button", {
                    className: "navbar-toggler", 
                    type: "button", 
                    "data-toggle": "collapse", 
                    "data-target": "#navbarNav", 
                    "aria-controls": "navbarNav", 
                    "aria-expanded": "false", 
                    "aria-label": "Toggle navigation"
                }, 
                    React.createElement("span", {className: "navbar-toggler-icon"})
                ), 
                React.createElement("div", {className: "collapse navbar-collapse", id: "navbarNav"}, 
                    React.createElement("ul", {className: "navbar-nav"}, 
                        renderNavItems()
                    )
                )
            )
        );
    }
});
