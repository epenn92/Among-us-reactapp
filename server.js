/* 
 * This is the template for a server.js file.  Follow the steps below and read
 * the comments for creating your own (or you can just copy this file).
 */

/* Step 1
 *
 * Import needed packages
 *
 */
const express = require('express');
const app = express()
require('dotenv').config()
const cors = require('cors')


/* Step 2
 * 
 * import routers from controllers/
 *
 */
const { characterRouter } = require('./controllers/character.js')


/* Step 3
 *
 * Register middleware...
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    res.setHeader('Content-Type', 'application/json')
});

app.use(cors())

/* Step 3.a
 * ...to parse the body of the HTTP requests from a URL encoded string 
 */
app.use(express.urlencoded({ extended: true }))
// express.urlencoded([options])

/* Step 3.b 
 *
 * ...to parse the body of the HTTP requests from a JSON string  
 */
app.use(express.json())



/* Step 3.c
 *
 * use the `./client/build` directory to host static resources such as css and
 * image files 
 */
app.use(express.static(`${__dirname}/client/build`))


/* Step 4
 *
 * add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */
app.use('/api/v1/character', characterRouter)


/* Step 5
*
* add catch all route to serve up the built react app for any request not made to our
* /api/... routes.
*/
var prdEnv = process.env.NODE_ENV === 'production'
if (prdEnv) {
    app.get('/*', async (ctx, next) => {
        //judge if it request a normal file,if not ,return the index.html
        if (parseMime(ctx.url) === 'unknown') {
            ctx.type = 'text/html'
            ctx.response.body = fs.readFileSync(path.join(__dirname, '../build/index.html'), 'binary')
        } else {
            ctx.type = parseMime(ctx.url)
            ctx.response.body = fs.readFileSync(path.join(__dirname, '../build/', ctx.url))
        }
    })
}

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }
// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)
// })


/* Step 6
 *
 * Set the port the server is to run on
 *
 * NOTE: keep these lines at the bottom of the file 
 */
const PORT = process.env.PORT || 8080

/* Step 7
 *
 * Start the server
 */
// app.use((req, res, next) => {
//     res.send('Welcome to Express');
// });

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
