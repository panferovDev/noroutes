import React from 'react';

export default function Layout({ initState, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script defer src="/js/app.js" />
        <script defer src="/js/vendor.js" />
        <link rel="stylesheet" href="/css/styles.css" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />
        <title>Document</title>
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
