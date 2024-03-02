# Developing and Using APIs









Mindcool24 <https://mindcool.xyz>

# Basic concept

- APIs are a way of communicating between programs
- Mainly going to focus on HTTP APIs, specifically between
  frontend and backend.

# Examples

- Pastebin <https://pastebin.com/doc_api>
    - Uses the URL of <https://pastebin.com/api/api_post.php>
    - Accepts data in the form of JSON
    - Mainly used to get pastes from the site, but can also 
      create new pastes.

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
        - POST, PUT, and DELETE requests have a body
        - GET does not

# Request types
- GET
    - Gets a response from the server with a given URL
- POST
    - Sends data to the server via the body
- PUT
    - Similar to POST request
- DELETE
    - Deletes specified resource

# Request types (cont.)
- HEAD
    - Similar to GET request, but only gets headers
- CONNECT
    - Used to start a connection between two resources, e.g. a proxy
- TRACE
    - Used for debugging, gives information
- PATCH
    - Modifies a resource
- OPTIONS
    - Asks a server what request types are allowed by the server

