import express  from "express";
import { getAllBlogs,
         getBlogByMentorId,
         createBlog} from "../controllers/blog.js";

const router = express.Router();

router.get('/', getBlogByMentorId);
router.post('/', createBlog);

export default router;
