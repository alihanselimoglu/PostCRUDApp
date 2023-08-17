import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  creator: { type: String, required: true },
});

const Post = mongoose.model('Post', postSchema);

export default Post;
