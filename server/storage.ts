import { 
  type User, 
  type InsertUser,
  type BlogPost,
  type InsertBlogPost,
  type Testimonial,
  type InsertTestimonial,
  users,
  blogPosts,
  testimonials
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllBlogPosts(page?: number, pageSize?: number): Promise<{ posts: BlogPost[]; total: number }>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  
  getVerifiedTestimonials(): Promise<Testimonial[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getAllBlogPosts(page: number = 1, pageSize: number = 10): Promise<{ posts: BlogPost[]; total: number }> {
    const offset = (page - 1) * pageSize;
    
    const [postsResult, countResult] = await Promise.all([
      db
        .select()
        .from(blogPosts)
        .orderBy(desc(blogPosts.publishedAt))
        .limit(pageSize)
        .offset(offset),
      db
        .select({ count: db.$count(blogPosts) })
        .from(blogPosts)
    ]);
    
    return {
      posts: postsResult,
      total: countResult[0]?.count ?? 0
    };
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug));
    return post || undefined;
  }

  async getVerifiedTestimonials(): Promise<Testimonial[]> {
    return await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.verified, true))
      .orderBy(desc(testimonials.publishedAt));
  }
}

export const storage = new DatabaseStorage();
