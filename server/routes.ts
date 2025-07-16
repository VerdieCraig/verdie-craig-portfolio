import type { Express } from "express";
import { storage } from "./storage";
import contactRoutes from "./contact.ts";

export async function registerRoutes(app: Express): Promise<void> {
   app.use("/api", contactRoutes);
  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)
}
