
# Wiki Express

An API build on express JS to fetch a short summary on any topic .


## API Reference

#### Searching for any topic

Here you can search for anything , this will return the topics name.
```http
  GET /search?topic={query}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` | **Required**. |

#### Getting short summary of a topic
Here you have to search for topic with proper spellings , for this first hit /search endpoint then get all topics name then search from there. This will return the short summary of that topic
```http
  GET /summary?topic=${query}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `string` | **Required**. Name of the topic |



## Run Locally

Clone the project

```bash
  git clone https://github.com/Sonu-Hansda/wiki_express
```

Go to the project directory

```bash
  cd wiki_express
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

