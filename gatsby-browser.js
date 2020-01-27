exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname)
  console.log('old pathname', prevLocation ? prevLocation.pathname : null)
}
exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")
}
