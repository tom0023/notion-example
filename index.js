import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID

const response = await notion.databases.retrieve({
  database_id: databaseId,
  filter: {
    property: 'Last ordered',
    date: {
      past_week: {},
    },
  }
});
console.log(response);

// データ挿入
// async function addItem(text) {
//   try {
//     await notion.request({
//       path: "pages",
//       method: "POST",
//       body: {
//         parent: { database_id: databaseId },
//         properties: {
//           title: { 
//             title:[
//               {
//                 "text": {
//                   "content": text
//                 }
//               }
//             ]
//           }
//         }
//       },
//     })
//     console.log("Success! Entry added.")
//   } catch (error) {
//     console.error(error.body)
//   }
// }

// addItem("追記テスト")

