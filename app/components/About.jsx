var React = require('react');

// var About = React.createClass({
//   render: function (){
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a weather app build on React. <a href="https://github.com/Raghu-Ch/ReactWeather" target="_blank">ReactWeather</a> app was built as a part of complete React web app developer cource.
      </p>
      <p>
        Some of the tools i used for weather app:
      </p>
      <ul>
        <li> <a href="https://facebook.github.io/react/" target="_blank">React</a> -A JavaScript framework by facebook.</li>
        <li> <a href="https://openweathermap.org/" target="_blank">Open weather Map</a> -I used openweathermap API for serching weather based on city name</li>
        <li> <a href="http://foundation.zurb.com/" target="_blank">Foundation</a> -I used foundation to get advanced responsive for front-end</li>
      </ul>
    </div>
  );
};

module.exports = About;
