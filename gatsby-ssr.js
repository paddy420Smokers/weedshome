const React = require("react")
exports.onRenderBody = ({
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script
      type="text/javascript"
      src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e2927b3c07a82ea"
    />,
  ])
}
