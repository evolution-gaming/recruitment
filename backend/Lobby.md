# Backend Lobby API task

## Overview

Develop a server for a JSON-based protocol.

It is up to you whether to support WebSocket, REST or both.

It is up to you to choose the technical stack, however we suggest that you use one which is relevant to the
position you are interviewing for and with which you are proficient. If in doubt, please use the technology 
stack listed in the job description.

A client UI is not required.

The server should be able to handle multiple concurrent clients.

The server should authenticate user `admin` with password `admin` successfully.
    
Please document clearly how to launch the server, limitations that your solution has, and what you would
improve if you would have more time to spend on the project.

Should you wish, you are free to improve the solution until the interview (add features, add tests, refactor). 
If you do so, please notify the recruiter about this so that we can review the latest version.

Please publish the solution in a private [GitHub](https://github.com/) repository and give user 
[@evo-home-task](https://github.com/evo-home-task) access to the repository. 

### REST

The server should be hosted on port `9000`. URLs for different operations should be defined under the
base URL `/lobby_api` following the best practices of REST API design. The request and response models,
described below, are more suitable for WebSocket than for REST, so they can be adjusted as needed.

### WebSocket

The server should be hosted on port `9000`. All operations should flow through the same base URL `/lobby_api`.

## Security

### Authentication

The server should support two user types: `admin` and `user`.

#### WebSocket

The following authentication flow should be implemented. The client sends:

```json
{
  "$type": "login",
  "username": "user1234",
  "password": "password1234"
}
```

The server responds:

```json
{
  "$type": "login_failed"
}
```

Or:

```json
{
  "$type": "login_successful",
  "user_type": "admin"
}
```

#### REST

HTTP basic authentication should be used for every request.

### Privileged commands

Only the `admin` is allowed to use commands marked `privileged`, otherwise the server responds:

```json
{
	"$type": "not_authorized"
}
```

## Health Check

### WebSocket

The client can ping the server to check the connectivity. The ping request includes the sequence number, which
allows to trace the exact ping duration:

```json
{
  "$type": "ping",
  "seq": 1
}
```

The server responds:

```json
{
  "$type": "pong",
  "seq": 1
}
```

### REST

Include a health check URL.

## Getting or subscribing to the list of tables

### WebSocket

The client sends:

```json
{
  "$type": "subscribe_tables"
}
```

The server responds with the list of tables:

```json
{
  "$type": "table_list",
  "tables": [
    {
      "id": 1,
      "name": "table - James Bond",
      "participants": 7
    }, {
      "id": 2,
      "name": "table - Mission Impossible",
      "participants": 4
    }
  ]
}
```

The server then updates the client with `table_added`, `table_removed` and `table_updated` messages whenever
there are changes to the list of tables.

When a table is added:

```json
{
  "$type": "table_added",
  "after_id": 1,
  "table": {
    "id": 3,
    "name": "table - Foo Fighters",
    "participants": 9
  }
}
```

When a table is updated:

```json
{
  "$type": "table_updated",
  "table": {
    "id": 3,
    "name": "table - Foo Fighters",
    "participants": 9
  }
}
```

When a table is removed:

```json
{
  "$type": "table_removed",
  "id": 1
}
```

Finally, the client can unsubscribe from the list of tables at any time:

```json
{
  "$type": "unsubscribe_tables"
}
```

No response from the server is expected upon the unsubcription request. Moreover, once it is processed, the 
server must stop sending `table_added`, `table_removed` and `table_updated` messages to the client.

### REST

The client executes an appropriate HTTP request, and the server responds with the list of tables:

```json
{
  "$type": "table_list",
  "tables": [
    {
      "id": 1,
      "name": "table - James Bond",
      "participants": 7
    }, {
      "id": 2,
      "name": "table - Mission Impossible",
      "participants": 4
    }
  ]
}
```

## Adding a table (privileged)

### WebSocket

The client sends:

```json
{
  "$type": "add_table",
  "after_id": 1,
  "table": {
    "id": 3,
    "name": "table - Foo Fighters",
    "participants": 4
  }
}
```

If `after_id` is `-1`, the table must be added at the beginning of the list of tables. Otherwise, `after_id`
specifies the `id` of the table after which the added table should be inserted.

### REST

Support adding a table with the same functionality as in the WebSocket section. 

## Updating a table (privileged)

### WebSocket

The client sends:

```json
{
  "$type": "update_table",
  "table": {
    "id": 3,
    "name": "table - Foo Fighters",
    "participants": 5
  }
}
```

### REST

Support updating a table with the same functionality as in the WebSocket section. 

## Removing a table (privileged)

### WebSocket

The client sends:

```json
{
  "$type": "remove_table",
  "id": 3
}
```

### REST

Support removing a table with the same functionality as in the WebSocket section. 
