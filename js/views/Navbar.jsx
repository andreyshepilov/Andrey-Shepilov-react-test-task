var React = require('react'),
    _ = require('underscore');


var NavItem = React.createClass({
    propTypes: {
        item: React.PropTypes.object // One nav item in the navBar array
    },
    render: function() {
        var item = this.props.item;
        return (
            <li className="nav-item">
                <a
                    className="nav-link"
                    href={item.url}
                    target={(item.newTab ? '_blank' : '_self')}
                >
                    {item.title}
                </a>
            </li>
        );
    }
});

module.exports = React.createClass({
    propTypes: {
        navBar: React.PropTypes.array // The JSON array returned from js/model/NavModel.getNavBarItems passed on from main
    },
    render: function() {
        var navBar = this.props.navBar;

        function renderNavItems () {
            return (
                navBar.map(function (el) {
                    return (
                        <NavItem item={el} key={el.id} />
                    );
                })
            );
        }

        return (
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light"
            >
                <img
                    className="navbar-brand logo-main"
                    src="https://ias.inspera.no/file/cil/mp_logo/file"
                />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {renderNavItems()}
                    </ul>
                </div>
            </nav>
        );
    }
});
