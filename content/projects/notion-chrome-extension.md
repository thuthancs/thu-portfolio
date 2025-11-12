---
title: "notion-chrome-extension"
description: "how to connect notion database with chrome extension to keep track of your leetcode performance"
category: ["web", "chrome extension"]
date: "2024-02-15"
---

# Demo

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe 
    src="https://www.loom.com/embed/4f515ead60824168b7edc59c4b87b703" 
    frameborder="0" 
    allowfullscreen 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
  ></iframe>
</div>
<br>

# Why?

## Problem Characterization

As a job applicant preparing for technical interviews, I was struggling to find a system to help me keep track of my LeetCode performance. I tried different templates on Notion, but none truly worked for me, and when I finally found one, _the process of updating the database was really manual_. At first, I thought of creating a separate web application to solve my problem, but then that would be too much of a hassle, given that I would have to create a separate database and interface for the application.

Because almost all of my data lives in Notion, I asked myself: **How can I combine a Chrome Extension and Notion to better interact with my data?** Over the past few months, I’ve been practicing LC and manually updating the records. I know how important it is to _accurately keep track of my performance so that I can identify areas for improvement_.

This manual data entry labeling is sometimes inaccurate because I was so into solving the problem that I forgot to set the timer, for example. I also have to manually copy and paste the problem description and solution. As a result, I want a better, more automated way to interact with my data and also **accurately update it so that it reflects my true performance**!

## Current Flow

![image.png](/images/notion-chrome-extension/image.png)

1. Open the LeetCode problem page
2. Set up a timer based on the difficulty level of the question: 30 mins for hards, 20 mins for mediums, and 10 mins for easies.

   ![Screenshot 2025-09-08 at 3.25.16 PM.png](/images/notion-chrome-extension/Screenshot_2025-09-08_at_3.25.16_PM.png)

3. If the time it takes to solve the problem exceeds the set timer, manually reset the timer, because there is no sound notifying me when I’m out of time.
   1. Copied and pasted the first attempted solution to the page
4. After solving the problem, I manually copied and pasted the final solution to the page of that specific problem.
5. Manually update the fields:
   1. Icon (overtime, within time, etc.)
   2. Repetition
   3. Time taken
   4. Type (solved without hints, solved with hints, and read solutions)

## Solution Decision

Whenever deciding on a solution or many solutions, I’d like to think of the cost-impact framework, which basically asks the question: Does the impact of this solution outweigh the cost of developing it? The cost here can be in terms of money and effort to develop and maintain the solution. The impact can also be in terms of money (do we earn more than we spend?) and the user experience (can the users easily implement the solution to solve their problems?)

| Solution                              | Database                                        | Frontend                                         | Backend                        | Money                                         |
| ------------------------------------- | ----------------------------------------------- | ------------------------------------------------ | ------------------------------ | --------------------------------------------- |
| Standalone Web App                    | A separate database like PostgreSQL or Supabase | Design a whole new interface to display the data | Design a whole new set of APIs | Might cost a bit when using external services |
| Notion + Chrome Extension Integration | Free                                            | Simple using HTML/CSS                            | Built-in Notion API            | Cost to publish the Chrome extension          |

_Not everything has to be a standalone solution if a better integration provides a much more significant impact!_

# Design

> How might we design an **automated solution** to better interact with Notion database and **accurately update** the data records when interacting with web browsers?

## Ideal User Flow

1. User authorizes access to Notion to modify their database.
2. Open the LeetCode problem page.
3. Open the Chrome Extension.
4. The Chrome Extension automatically extracts the following information:
   1. Problem Name
   2. Difficulty
   3. Topic (graph, tree, array, etc.)
5. The CE sets the timer based on the level of difficulty of the problem.
   1. 30 mins for hard
   2. 20 mins for medium
   3. 10 mins for easy
6. User clicks the start button, and the timer starts.
7. When the time is up, there is a sound notifying the user that.
8. **If the problem is solved earlier than the set timer**, the user _clicks “Done”_:
   1. The Duration field will be updated depending on whether it’s the first, second, or third duration.
   2. The problem description and the solution will be appended to the page of that problem.
   3. Updates the date that the problem is reviewed.
9. **If the problem is not yet solved**, then the user _clicks the “Update” button:_
   1. The initial solution will be added to the page of that problem, and the _timer will be extended automatically_.
   2. The process repeats until the problem is solved.
10. **If the problem is successfully solved**, the user should update the field of whether it is solved with hints, without hints, or if they read the solutions and _click the button “Solved”_.
    1. After the “Solved” button is clicked, the Duration field will be updated depending on whether it’s the first, second, or third duration.
    2. The problem description and the solution will be appended to the page of that problem.
    3. Updates the date that the problem is reviewed.

## Features

| Feature                                 | Explanation                                                                                                                              |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Database Connection & Authorization** | User authorizes Notion to allow access to the database(s)                                                                                |
| **Dynamic Schema Display**              | Different data sources have different schemas, and the ideal solution should display the corresponding schema of the chosen data source. |

For example, when I choose the LC database, the schema of the database will be displayed. On the other hand, when I choose the connections database, the schema for that database will be displayed. |

## User Interface

![user_interface.png](/images/notion-chrome-extension/user_interface.png)

# Implementation

> _How can we implement the solution in a simple and maintainable way?_

## APIs

| Request                            | Endpoint                                               | Client Side                                                                                                                                                                                               |
| ---------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create a new page in a data source | `https://api.notion.com/v1/pages`                      | When user clicks _start timer button_. A new page with below properties will be created:<br>1. Problem Name<br>2. Topic<br>3. Difficulty                                                                  |
| Update page properties             | `https://api.notion.com/v1/pages/{page_id}`            | When user clicks _Done or Solved_ button, the page properties that will be updated are:<br>4. Duration<br>5. Repetitions<br>6. Review Date<br>7. Status<br>8. Source (will be set to default as LeetCode) |
| Append block children              | `https://api.notion.com/v1/blocks/{block_id}/children` | When use clicks _Extend_ button, the children block with the first attempted solution will be appended to the page.                                                                                       |

## Bugs Fixed

### **Handle duplicates**

> If the page ID already exists, return the page ID and update the subsequent reviews accordingly (e.g., if the first review is null, update that and the same applies for the second and the third review. A new page is only created when the page ID does not exist.

- The code has handled the duplicate names properly. If you check the `server.js` file, you'll see that from line 29-66, there is a logic to query the page that contains the `problemName` and if the page ID already exists that it just returns that page, else a new page is created.
- One important note here is that because Notion has just changed their database definition so now a single table is called a data source while a database consists of many data sources (e.g, tables). Check out this [doc](https://developers.notion.com/reference/query-a-data-source).
- I kept encountering this error: `TypeError: notion.databases.query is not a function` and I realized **I used the database ID instead of the data source ID, which is a mistake**! You can easily get the data source ID by following the screenshot above.

### **Append solution as code blocks**

> After the user clicks the Solved button, the `content.js` file will scrape the code written on LeetCode page and the code block is appended as the content page.

- I encountered an error when I treated the code as a property of the data source while it is not so I got the below error

  ```
  request fail {
  code: 'validation_error',
  message: 'Code is not a property that exists.',

  ```

- The second one is that the Notion API for code blocks expects the code content in the `rich_text` field (not `text`) so we need to be careful about that.

### **Other fixes/add-ons**

- I added a pop-up that shows the time is up. Originally I was thinking of adding sound but I think showing a visually message at the center of the page is enough to notify the user so I opted for this simpler approach.
- I also fixed the logic to accumulate time spent on the problem if the use clicks extend.

# Tutorial

## **Requirements**

1. **Google Chrome:** The extension is a side panel and only works on Google Chrome. Other browsers (like Arc) are not supported.
2. **Node.js & npm:** Required to run the backend server.
3. **Notion Integration**
   - You must create a Notion integration and obtain an internal integration secret (API Key).
   - The integration must have access to your Notion data source (see below).
4. **Notion Data Source ID**
   - You must use the **data source ID** (not the old database ID) for your Notion table.

---

## **Setup & Installation**

**1. Create a Notion Integration**

- Follow this [tutorial](https://developers.notion.com/docs/create-a-notion-integration) to create your integration.
- Copy the generated API key.

**2. Share Your Notion Data Source**

- Open your Notion data source (table).
- Click the ••• menu at the top right, choose **Add connections**, and add your integration.

**3. Get Your Data Source ID**

- Open your data source in Notion.
- Copy the ID from the URL (see [Notion docs](https://developers.notion.com/docs/upgrade-guide-2025-09-03) for details).
- **Note:** Make sure you are using the data source ID, not the database ID.

**4. Configure the `.env` File**

Create a `.env` file in the `server` directory with the following content:

```
NOTION_KEY={your-api-key}
NOTION_DATASOURCE_ID={your-datasource-id}
```

---

## **Load and Unpack the Chrome Extension**

1. Go to `chrome://extensions/` in Chrome.
2. Enable **Developer mode** (top right).
3. Click **Load unpacked** and select the `extension` folder.
4. The extension icon should appear in your Chrome toolbar.

---

## **Running the App**

1. **Install dependencies:**Open a terminal, navigate to the `server` directory, and run:

   ```
   npm install
   ```

2. **Start the backend server**

   ```
   npm start
   ```

   ```
   node server.js
   ```

3. **Use the extension:**
   - Visit a LeetCode problem page.
   - Open the extension from the side panel.
   - Start the timer, solve the problem, and click `Solved`—your data will be sent to Notion!

# Appendix

https://developers.notion.com/docs/getting-started

## Conventions (APIs & JSON)

- `HTTPS` is required for all API requests
- `base URL` to send all requests: [https://api.notion.com](https://api.notion.com/)
- Top-level resources: `object` property that determines the type of resource (`database`)
- Property names are in `snake_case`
- The Notion API does not support empty strings. Use `null` explicitly.
- `block` object represents a piece of content within Notion:

  ```json
  {
    "object": "block",
    "id": "c02fc1d3-db8b-45c5-a222-27595b15aea7",

    "parent": {
      "type": "page_id",
      "page_id": "59833787-2cf9-4fdf-8782-e53db20768a5"
    },

    "created_time": "2022-03-01T19:05:00.000Z",
    "last_edited_time": "2022-07-06T19:41:00.000Z",
    "created_by": {
      "object": "user",
      "id": "ee5f0f84-409a-440f-983a-a5315961c6e4"
    },
    "last_edited_by": {
      "object": "user",
      "id": "ee5f0f84-409a-440f-983a-a5315961c6e4"
    },
    "has_children": false
  }
  ```
