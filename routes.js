// import fs method
const fs = require('fs');

// create an anonymous arrow function which we store in a constant, requestHandler is the function name
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    // if at home page, create form which takes input and redirect to /message page on click
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html');
        return res.end();

    }

    // if at /message page AND method is POST, create file with user inputted text from form
    // statusCode 302 is a redirect code
    if (url === '/message' && method === 'POST') {
        // req.on to listen for data, receive chunk and perform function as specified below
        // node.js will perform the below until all chunks received and pushed to body array
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        // after we load the data (sent in thru the form with the button), we need to parse it
        // we create a buffer called parsedBody and all the chunks from inside the body to it
        // it appears as 'message=...' in your terminal when the page is run
        // then we split that message and take the right side of the '=' and save it into const message
        // now we put fs.writeFileSync inside the function for it to run after all this and actually store that message into our text file
        // if we have something that depends on the incoming data we need to move it also inside the event listener too so that we ensure it runs after it
        // otherwise fs.writeFileSync will run immediately and it won't load correctly, it'll run before all this happens, node.js doesn't wait
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        })
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html');
    res.end();
};

module.exports = requestHandler;