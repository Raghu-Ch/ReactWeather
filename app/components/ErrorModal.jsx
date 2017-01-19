var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function (){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    return (
      <div id="error-modal" className="tiny reveal text-center" data-reveal="">
        <h4>Hey, Excuse me</h4>
        <p>error: city not found</p>
        <p>
          <button className="button hollow warning" data-close="">
            Try Another city
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
