---
noteId: '9b6a8aa0ee8311ec95ed6bec380c6da6'
tags: []
---

# render

The render() method is required, and is the method that actually outputs the HTML to the DOM.

<pre>
class Header extends React.Component {
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));


</pre>
