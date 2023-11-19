import { Posts } from '../models/Posts';

export async function createPosts(post: string): Promise<Posts> {
  // Create a new post
  const newPost = await Posts.create({
    post
  }).save();
 
  return newPost;
}

export async function getPostsById(id: number): Promise<Posts | null> {
  return  await Posts.findOneBy({id: id});
}

export async function analysePost(post: string, id:number): Promise<Posts | object> {
  // Removing the punctuations and splitting the complete posts into words
  const totalWords = post.replace(/[^\w\s]/g, '').split(/\s+/);
  
  // Calculating the total count of words
  const wordsCount = totalWords.length;

  // Calculating the length of all the words
  const wordsLength = totalWords.reduce((alph, eachWord) => alph + eachWord.length, 0);

  // Calculate avg length
  const avgLength = wordsCount > 0 ? wordsLength / wordsCount : 0;

  return {
    post,
    id,
    "Number of Words": wordsCount,
    "Average Word Length": avgLength
  }




}