## rest.quest

A tiny, opinionated todo list application.

#### Intended use

This web application has been developed to be used on a desktop browser. It keeps it's state in localstorage and is ideal as a quick scratchpad to keep track of tasks. There is no sophisticated sync mechanism, only a simple S3 integration for backup and synchronization across devices.

![Screenshot of rest.quest](assets/Screenshot%202022-07-16%20at%2017.57.59.png)

#### How to use

| Command        | Description                  |
| -------------- | ---------------------------- |
| h              | Toggle help screen           |
| p              | New project                  |
| n              | New quest in current project |
| click on quest | Check off quest              |
| c              | Toggle configuration screen  |
| v              | Toggle view of quests        |
| arrow up       | Select previous project      |
| arrow down     | Select next project          |
| ctrl+d         | Delete selected project      |
| b y e          | Purge all local data         |

#### S3 synchronization

Add your S3 credentials on the config screen (c). Any data added here never leaves your browsers localstorage. The application will synchronize the local state to the remote bucket whenever the window gains or loses focus.
To determine which state is newer, the application compares a single, global `version` field between the local and the remote state. It then either pushes the full local state to the bucket or replaces the local state with the remote state as appropriate.

**Warning:** If a device does not get the change to synchronize it's state to the bucket due to missing connectivity or other circumstances, data loss may well occur due to state overwriting.

**Configuration:** Make sure to set the appropriate CORS configuration on your bucket to allow the web application access:

```
<?xml version="1.0" ?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>HEAD</AllowedMethod>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>DELETE</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
  </CORSRule>
</CORSConfiguration>
```
