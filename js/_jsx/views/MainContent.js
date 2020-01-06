var React = require('react');

module.exports = React.createClass({displayName: "exports",
    render: function() {
        return (
            React.createElement("article", {className: "frontpage-article"}, 
                React.createElement("h1", null, "Lorem ipsum dolor"), 
                React.createElement("p", null, "sit amet, consectetur adipiscing elit. Ut euismod metus ut hendrerit tincidunt. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras mauris ex, suscipit a mi ac, cursus tempus dolor. Vivamus sed eleifend turpis. Suspendisse congue quis ligula at condimentum. Aenean cursus cursus urna eget lobortis. Morbi sagittis dolor magna, vitae blandit ex cursus eget. Suspendisse nec auctor nunc. Nulla sit amet laoreet quam, eget ultrices metus."), 

                React.createElement("h2", null, "Morbi at tincidunt diam."), 
                React.createElement("p", null, "Donec elementum vel diam sit amet varius. Quisque eu rutrum felis, quis facilisis libero. Suspendisse gravida lacus ut sapien commodo, et feugiat risus dapibus. Donec vel magna ullamcorper, fermentum risus ac, euismod nibh. Curabitur hendrerit nibh eu pellentesque scelerisque. Cras dui neque, luctus nec suscipit in, suscipit vel dui. Sed sit amet sapien ornare, venenatis diam nec, consectetur dui. Donec eu eleifend est. Phasellus non dui ut diam imperdiet pharetra. Sed interdum vitae lectus a pretium. Curabitur eget ligula elit. Donec malesuada aliquam ligula, vitae cursus purus vehicula id. In convallis fringilla turpis id iaculis."), 

                React.createElement("h2", null, "Fusce lobortis"), 
                React.createElement("p", null, "condimentum quam, vitae eleifend arcu. Sed vel lacus sed ante consectetur aliquam vel et lectus. Vivamus semper, nisi eget bibendum blandit, turpis lectus malesuada metus, id placerat mauris ipsum et metus. Nam vel lacus fringilla, convallis ante nec, dapibus risus. Sed lacus dolor, consectetur non metus a, dictum fermentum quam. Proin non ipsum porta, dignissim nunc vitae, bibendum ligula. Nunc eu consequat dolor. Sed tristique justo eros, a bibendum libero posuere vitae. Phasellus suscipit congue nisi sed luctus. Quisque non rhoncus augue. Donec in massa magna."), 

                React.createElement("h4", null, "Aenean bibendum rhoncus"), 
                React.createElement("p", null, "odio, quis ultricies arcu feugiat et. Morbi sollicitudin, tellus ac eleifend tincidunt, massa urna vulputate enim, ac consectetur"), 
                React.createElement("h4", null, "Massa turpis quis dolor."), 
                React.createElement("p", null, "Aliquam interdum ultrices erat, non dictum leo. Maecenas aliquet eu risus ut feugiat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean volutpat mollis odio et fringilla. Nullam pulvinar enim vitae magna mattis, in consectetur risus finibus. Maecenas fermentum odio libero, sit amet commodo est sollicitudin ut. Vivamus vulputate ultrices convallis. Etiam non dignissim odio, ac posuere quam."), 

                React.createElement("h2", null, "In viverra augue id elit tempor euismod."), 
                React.createElement("p", null, "Maecenas euismod nisi sit amet blandit tincidunt. Donec ut lacinia sem, vitae finibus nibh. Aliquam molestie urna mauris, ac gravida enim molestie ut. Proin vel neque ut erat auctor mattis at sit amet leo. Donec aliquet at velit sed fringilla. Nunc porttitor mollis ante, blandit malesuada ipsum laoreet et. Phasellus viverra sagittis porttitor. Sed a tristique sapien. Maecenas eu lectus nisl.")

            )
        );
    }
});