var EditableMixin = {
  onKeyPress: function(e) {
    console.log(e.type, e.which, e.timeStamp);
    if (e.which === 13) {
      console.log("enter was pressed.");
    };
  }  
}

var EditableSpan = React.createClass({
  mixins: [EditableMixin],
  render: function () {
    return ( <span className="contentEditable" onKeyPress={this.onKeyPress} contentEditable="true">{this.props.data.text}</span> );
  }
});

var EditableH1 = React.createClass({
  mixins: [EditableMixin],
  render: function () {
    return (<h1 className="contentEditable" onKeyPress={this.onKeyPress} contentEditable="true">{this.props.data.text}</h1>);
  }
});

var EditableH2 = React.createClass({
  mixins: [EditableMixin],
  render: function () {
    return (<h2 className="contentEditable" onKeyPress={this.onKeyPress} contentEditable="true">{this.props.data.text}</h2>);
  }
});

var EditableRow = React.createClass({


  render: function() {

    var element;
    switch (this.props.data.tag) {
      case "h1" : element = <EditableH1 data={this.props.data}/>;
                  break;
      case "h2" : element = <EditableH2 data={this.props.data}/>;
                  break;
      default   : element = <EditableSpan data={this.props.data}/>;
    }

    return (
      <section className="row" key={this.props.data.key}>
        <section className="col-md-12">
          {element}
        </section>
      </section>
    );
  }
});

module.exports  = EditableRow;