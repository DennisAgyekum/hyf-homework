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

// Function to handle filtering logic
const filterDocuments = (documents, { q, fields }) => {
  if (q && fields) {
    const error = new Error("Cannot provide both query and fields");
    error.status = 400;
    throw error;
  }

  // Filter by query if provided
  if (q) {
    const query = q.toLowerCase();
    documents = documents.filter(document =>
      Object.values(document).some(value =>
        String(value).toLowerCase().includes(query)
      )
    );
  }

  // Filter by fields if provided
  if (fields && Object.keys(fields).length > 0) {
    documents = documents.filter(document =>
      Object.entries(fields).every(([key, value]) =>
        document[key] && String(document[key]) === String(value)
      )
    );
  }

  return documents;
};

// GET /search endpoint
app.get("/search", async (req, res, next) => {
  try {
    let documents = await loadDocuments();
    const { q } = req.query;
    documents = filterDocuments(documents, { q, fields: null });

    res.json(documents);
  } catch (error) {
    next(error);
  }
});

// POST /search endpoint
app.post("/search", async (req, res, next) => {
  try {
    const { q } = req.query;
    const { fields } = req.body;

    let documents = await loadDocuments();

    documents = filterDocuments(documents, { q, fields });

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




app.use(errorHandler);
