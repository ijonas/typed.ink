(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var EditableRow = require('./editable')

var TypedInkApp = React.createClass({displayName: 'TypedInkApp',

  getInitialState: function() {
    return {data: [
      {key: "1", text: "# This is an H1", tag: 'h1'}, 
      {key: "2",  text: "## This is an H1", tag: 'h2'},
      {key: "3", text: "This is body text that should hopefully spread across the whole page. lorem Lorem ipsum Officia ea ut. Lorem ipsum Cillum ut dolor laborum fugiat in ex occaecat ad eiusmod reprehenderit velit Excepteur quis pariatur minim eiusmod irure enim tempor sit Duis id cupidatat consectetur.", tag: 'span'},
    ]}
  },

  render: function() {
    var contentRows = this.state.data.map(function (row) {
      return (
        React.createElement(EditableRow, {data: row})
      );
    });
    return (
      React.createElement("article", {className: "container"}, 
        contentRows
      )
    );
  }
});

React.render(
  React.createElement(TypedInkApp, null),
  document.body
);

TypedInkApp = React.createFactory(TypedInkApp);
React.render(TypedInkApp(), document.body);
},{"./editable":2}],2:[function(require,module,exports){
var EditableMixin = {
  onKeyPress: function(e) {
    console.log(e.type, e.which, e.timeStamp);
    if (e.which === 13) {
      console.log("enter was pressed.");
    };
  }  
}

var EditableSpan = React.createClass({displayName: 'EditableSpan',
  mixins: [EditableMixin],
  render: function () {
    return ( React.createElement("span", {className: "contentEditable", onKeyPress: this.onKeyPress, contentEditable: "true"}, this.props.data.text) );
  }
});

var EditableH1 = React.createClass({displayName: 'EditableH1',
  mixins: [EditableMixin],
  render: function () {
    return (React.createElement("h1", {className: "contentEditable", onKeyPress: this.onKeyPress, contentEditable: "true"}, this.props.data.text));
  }
});

var EditableH2 = React.createClass({displayName: 'EditableH2',
  mixins: [EditableMixin],
  render: function () {
    return (React.createElement("h2", {className: "contentEditable", onKeyPress: this.onKeyPress, contentEditable: "true"}, this.props.data.text));
  }
});

var EditableRow = React.createClass({displayName: 'EditableRow',


  render: function() {

    var element;
    switch (this.props.data.tag) {
      case "h1" : element = React.createElement(EditableH1, {data: this.props.data});
                  break;
      case "h2" : element = React.createElement(EditableH2, {data: this.props.data});
                  break;
      default   : element = React.createElement(EditableSpan, {data: this.props.data});
    }

    return (
      React.createElement("section", {className: "row", key: this.props.data.key}, 
        React.createElement("section", {className: "col-md-12"}, 
          element
        )
      )
    );
  }
});

module.exports  = EditableRow;
},{}]},{},[1]);
