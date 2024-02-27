# Developing and Using APIs








Mindcool24 <https://mindcool.xyz>

# Basic concept

- APIs are a way of communicating between programs

# Examples

- Pastebin <https://pastebin.com/doc_api>
    - Uses the URL of <https://pastebin.com/api/api_post.php>
    - Accepts data in the form of JSON
    - Example request:
    TODO put something here
    - Can also be used to get pastes using GET requests

- SWAPI (Star Wars API) <https://swapi.dev>
    - Uses the base URL of <https://swapi.dev/api/>
    - Only allows GET requests
    - Example request:
    `GET https://swapi.dev/api/people/1`

# HTTP Requests
- Request
    - Header
        - Contains info about the request
        - info can be:
            - type of content in the body
            - length of content
            - many other things
    - Body
        - Contains data to be sent to the server
        - Can be images, JSON data, xml, etc.

# Request types
- GET
    - Gets a response from the server with a given URL
- HEAD
    - Similar to GET request, but only gets headers
- POST
    - Sends data to the server via the body
- PUT
    - Similar to POST request, should always do the same thing
- DELETE
    - Deletes specified resource

# Request types (cont.)
- CONNECT
    - Used to start 
- TRACE
    - Used for debugging, gives information
- PATCH
    - Modifies a resource
- OPTIONS
    - Asks a server what request types are allowed by the server
