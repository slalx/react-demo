// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox1. 
      </div>
    );
  }
});

React.renderComponent(  
  <CommentBox />,
  document.getElementById('content')
);