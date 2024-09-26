import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3003;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "documents.json");

app.use(express.json());

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};

// Middleware for loading documents
let cachedDocuments = null;
const loadDocuments = async () => {
  if (!cachedDocuments) {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      cachedDocuments = JSON.parse(data);
    } catch (err) {
      console.error("Error parsing JSON file:", err.message);
      throw new Error("Failed to load documents.");
    }
  }
  return cachedDocuments;
};

// GET /search
app.get("/search", async (req, res, next) => {
  try {
    const documents = await loadDocuments();
    const query = req.query.q ? req.query.q.toLowerCase() : null;

    const filteredDocuments = query
      ? documents.filter(document =>
          Object.values(document)
            .map(value => String(value).toLowerCase())
            .some(value => value.includes(query))
        )
      : documents;

    res.json(filteredDocuments);
  } catch (error) {
    next(error);
  }
});

// POST /search
app.post("/search", async (req, res, next) => {
  try {
    const { q } = req.query;
    const { fields } = req.body;

    if (q && fields) {
      const error = new Error("Cannot provide both query and fields");
      error.status = 400;
      return next(error);
    }

    let documents = await loadDocuments();

    if (q) {
      documents = documents.filter(document =>
        Object.values(document).some(value =>
          String(value).toLowerCase().includes(q.toLowerCase())
        )
      );
    }

    if (fields && Object.keys(fields).length > 0) {
      documents = documents.filter(document =>
        Object.entries(fields).every(([key, value]) =>
          document[key] && String(document[key]) === String(value)
        )
      );
    }

    res.json(documents);
  } catch (error) {
    next(error);
  }
});

// GET /documents/:id
app.get("/documents/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const documents = await loadDocuments();
    const document = documents.find(doc => doc.id == Number(id));

    if (document) {
      res.json(document);
    } else {
      const error = new Error("Document not found");
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

// Error-handling middleware should be defined last
app.use(errorHandler);

// Only listen on port if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}
