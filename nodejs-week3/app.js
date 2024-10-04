import knex from "knex";
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from "express";
const app = express();
const port = process.env.PORT || 3006;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

/* contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  if ("sort" in req.query) {
    const orderBy = req.query.sort.toString();
    if (orderBy.length > 0) {
      query = query.orderByRaw(orderBy);
    }
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
 */

const validSortField = (field) => {
  const allowedSortFields = ["id", "name", "email"];
  return allowedSortFields.includes(field);
};

contactsAPIRouter.get("/", async (req, res) => {
  try {
    let query = knexInstance.select("*").from("contacts");

    if ("sort" in req.query) {
      const orderBy = req.query.sort.toString();
      if (validSortField(orderBy)) {
        query = query.orderBy(orderBy);
      } else {
        return res.status(400).json({ error: "Invalid sort parameter" });
      }
    }

    // Log the SQL query for debugging (consider removing in production)
    console.log("SQL", query.toSQL().sql);

    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// injection to drop contact table
//http://localhost:3006/api/contacts?sort=id; DROP TABLE contacts
