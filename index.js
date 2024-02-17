const http = require("http");

const preimage_url =
  "https://images.mirror-media.xyz/publication-images/tjtQ7ZJaeVVLauO2oiVzf.png?height=672&width=1344";
const postimage_1 =
  "https://arweave.net/Yreyl7-ZFTR8H-EZl7_Jk50S5JuXH48FulZpIfAZnDE";
const postimage_2 =
  "https://arweave.net/uZaQdegxucnWHYhEr-XCEhTqfmdpoZB55yYnlNMw-GI";
const postimage_3 =
  "https://arweave.net/y-smGQwDJTcVJM0n4UFCc1GDvtL6fd2xIY6MVRYAF38";

const REPORT_LINK =
  "https://mirror.xyz/post3.eth/M9fc-1rXGRak0i3gtkXHOlKLT8WTmd43I8A_A3YtMTg?referrerAddress=0x";

const DATASET_LINK =
  "https://market.oceanprotocol.com/asset/did:op:dee9e208d792567f0e22106073c4da918ac77862106aba7fcd3be15e28775780";

const MORE_LINK = "https://bento.me/post3";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
     <html>
       <head>
         <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
         <meta charSet="utf-8"/>
         <meta name="viewport" content="width=device-width"/>
         <meta property="og:title" content="Weekly Report" />
         <meta property='og:image' content=${preimage_url} />
         <meta property="fc:frame" content="vNext" />
         <meta property="fc:frame:image" content=${preimage_url} />
         <meta property="fc:frame:button:1" content="Full Report 📊" />
         <meta property="fc:frame:button:1:action" content="link" />
         <meta property="fc:frame:button:1:target" content=${REPORT_LINK} />
         <meta property="fc:frame:button:2" content="Next ⏩" />
         <meta property="fc:frame:post_url" content="https://post-3-reports-macrodrigues.replit.app/slide_1" />
       </head>
       <body>
        <p style="font-family: 'Open Sans', sans-serif; font-size: 50px;">More about Post3 <a href=${MORE_LINK} target="_blank" style="color: rgb(0, 122, 255);">here</a>.</p>
       </body>
     </html>
       `);
    res.end();
  } else if (req.url === "/slide_1") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
    <html>
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
          <meta property="og:title" content="Weekly Report" />
          <meta property='og:image' content=${postimage_1} />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content=${postimage_1} />          
          <meta property="fc:frame:button:1" content="Next ⏩" />
          <meta property="fc:frame:post_url" content="https://post-3-reports-macrodrigues.replit.app/slide_2" />
      </head>
       <body>
        <p style="font-family: 'Open Sans', sans-serif; font-size: 50px;">More about Post3 <a href="https://bento.me/post3" target="_blank" style="color: rgb(0, 122, 255);">here</a>.</p>
       </body>
    </html>
       `);
    res.end();
  } else if (req.url === "/slide_2") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
    <html>
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
          <meta property="og:title" content="Weekly Report" />
          <meta property='og:image' content=${postimage_2} />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content=${postimage_2} />
          <meta property="fc:frame:button:1" content="Next ⏩" />
          <meta property="fc:frame:post_url" content="https://post-3-reports-macrodrigues.replit.app/slide_3" />
      </head>
       <body>
        <p style="font-family: 'Open Sans', sans-serif; font-size: 50px;">More about Post3 <a href="https://bento.me/post3" target="_blank" style="color: rgb(0, 122, 255);">here</a>.</p>
       </body>
    </html>
       `);
    res.end();
  } else if (req.url === "/slide_3") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
    <!DOCTYPE html>
    <html>
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
          <meta property="og:title" content="Weekly Report" />
          <meta property='og:image' content=${postimage_3} />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content=${postimage_3} />
          <meta property="fc:frame:button:1" content="Full Report 📊" />
          <meta property="fc:frame:button:1:action" content="link" />
          <meta property="fc:frame:button:1:target" content=${REPORT_LINK} />
          <meta property="fc:frame:button:2" content="Buy Dataset 🌊" />
          <meta property="fc:frame:button:2:action" content="link" />
          <meta property="fc:frame:button:2:target" content=${DATASET_LINK} />
      </head>
      <body>
       <p style="font-family: 'Open Sans', sans-serif; font-size: 50px;">More about Post3 <a href="https://bento.me/post3" target="_blank" style="color: rgb(0, 122, 255);">here</a>.</p>
      </body>
    </html>
       `);
    res.end();
  } else {
    // Catchall 404 Route
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
