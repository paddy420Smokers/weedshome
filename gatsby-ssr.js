import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
     <script
        key="mantis"
        type="text/javascript"
        src="https://assets.mantisadnetwork.com/mantodea.min.js"
      />,
  ]);
}
