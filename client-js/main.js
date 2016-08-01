//  This is where all the client side js stuff is required so it can be bundled 
//  via Browserify. 
//  All the heavy old-school javascript libraries are exposed as browserify globals
//  because its easy and they don't play well with browserify without some work.
//
//  So far, as a general pattern I've been puting jQuery javascript
//  in smaller files. Then I just require them  here and execute the function to 
//  bind any events and whatever else to the page. 

require('./connection.js')();
require('./connection-admin.js')();
require('./user-admin.js')();

// used on queries.ejs for reading the query filter form and doing the ajax
require('./query-filter-form.js')();

// All the stuff that happens when viewing/working with a single query happens here
//require('./query-editor.js')();


// stuff below is gradually being converted into react
// as more react components are available these can be 
// managed in a more elegant way 
// for now page.js is gradually being worked in. 
var page = require('page');
var React = require('react');
var ReactDOM = require('react-dom');


var ConfigValues = require('./ConfigValues.js');

if (document.getElementById('config-values')) {
    ReactDOM.render(
        <ConfigValues/>,
        document.getElementById('config-values')
    );
}


var FilterableQueryList = require('./FilterableQueryList.js');
page.base(baseUrl);
page('/queries', function (ctx) {
    ReactDOM.render(
        <FilterableQueryList/>,
        document.getElementById('react-applet')
    )
})
page({click: false});
/*
if (document.getElementById('filterable-query-list')) {
    ReactDOM.render(
        <FilterableQueryList/>,
        document.getElementById('filterable-query-list')
    )
}
*/