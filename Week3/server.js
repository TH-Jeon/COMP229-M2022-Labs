//require built-in modules
const http = require('http');   //CommonJS Module pattern (CJS)
const fs = require('fs');   //fs = file system
const mime = require('mime-types');

let lookup = mime.lookup;   //alias for mime.lookup

const port = 3000;

//when we create a server instance, it is IMMUTABLE = cannot be changed until the server is restarted
//When the server is instantiated(created), it is IMMUTABLE
const server = http.createServer(function(req, res) //req = request, res = response    
{
    let path = req.url; //alias for req.url

    if(path =="/" || path =="/home")
    {
        path = "/index.html";
    }

    let mime_type = lookup(path.substring(1));  //1 -> 2nd letter in path = i  
    console.log(`MIME TYPE: ${mime_type}`);

    //Reads a file from the file system
    fs.readFile(__dirname + path, function(err, data)
    {
        //Some error exists with the url
        if(err)
        {
            res.writeHead(404); //status - file not found = file does not exist
            //console.log(`ERROR: ${err.message}`);   //output to the dev console
            return res.end("ERROR: 404 - File Not Found");   //output the error message to the page
        }
        //else = no error
        res.setHeader("X-Content-Type-Options", "nosniff"); //security guard
        res.writeHead(200, {'Content-Type': mime_type}); //status - all ok
        return res.end(data);   //console.log(`DATA: ${data}`); --> output the file that was read to the page
    });
});

server.listen(port, function() 
{
    console.log(`Server running at Port: ${port}`);
}); 
