var EditableRow = require('./editable')

var TypedInkApp = React.createClass({

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
        <EditableRow data={row}/>
      );
    });
    return (
      <article className="container">
        {contentRows}
      </article>
    );
  }
});

React.render(
  <TypedInkApp />,
  document.body
);

TypedInkApp = React.createFactory(TypedInkApp);
React.render(TypedInkApp(), document.body);