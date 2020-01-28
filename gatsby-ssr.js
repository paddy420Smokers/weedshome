
import React from "react";
const React = require("react")
exports.onRenderBody = ({
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script
      key="mantis"
      type="text/javascript"
      src="https://assets.mantisadnetwork.com/mantodea.min.js"
    />,
  ])
}
