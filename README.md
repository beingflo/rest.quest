## rest.quest

A tiny, opinionated todo list application.
Freely available at [rest.quest](https://rest.quest).

![Screenshot of rest.quest](assets/Screenshot%202022-07-16%20at%2017.57.59.png)

Tasks can be displayed in a traditional list, or a 2D grid. In the grid view, checked off tasks leave a gap to visualize progress in the project.

### Intended use

This web application has been developed to be used on a desktop browser. It keeps its state in localstorage and is ideal as a quick scratchpad to keep track of tasks. Optionally there is a simple S3 integration for backup and synchronization across devices.

### How to use

| Command        | Description                                 |
| -------------- | ------------------------------------------- |
| h              | Toggle help screen                          |
| p              | New project                                 |
| n              | New quest in current project                |
| click on quest | Check off quest                             |
| c              | Toggle configuration screen                 |
| s              | Synchronize state with remote if configured |
| v              | Toggle view of quests                       |
| arrow up       | Select previous project                     |
| arrow down     | Select next project                         |
| ctrl+d         | Delete selected project                     |
| b y e          | Purge all local data                        |

### S3 synchronization

Add your S3 credentials on the config screen (press c). Any data added here never leaves your browsers local storage. The application will synchronize the local state to the remote bucket whenever a new quest is added, or after pressing s.
During synchronization, a merge of local quests and projects with remote ones is performed based on recency of modification. This way, it is quite unlikely to run into data loss even when using two instances of the application concurrently and occasionally synchronizing their state .

#### Configuration

Make sure to set the appropriate CORS configuration on your bucket to allow the web application access:

```
<?xml version="1.0" ?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <CORSRule>
    <AllowedOrigin>https://rest.quest</AllowedOrigin>
    <AllowedMethod>HEAD</AllowedMethod>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>DELETE</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
  </CORSRule>
</CORSConfiguration>
```
