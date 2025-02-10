import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mock_interview", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("json_mock_resp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExperince: varchar("jobExperince").notNull(),
  resume: varchar("resume"),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt"),
  mockId: varchar("mockId").notNull(),
});

export const UserAnswer = pgTable("user_answer", {
  id: serial("id").primaryKey(),
  mockId: varchar("mockId").notNull(),
  question: varchar("question").notNull(),
  correctAnswer: varchar("correctAnswer").notNull(),
  userAnswer: text("userAnswer"),
  feedback: text("feedback"),
  rating: text("rating"),
  userEmail: varchar("userEmail"),
  createdAt: varchar("createdAt"),
});
