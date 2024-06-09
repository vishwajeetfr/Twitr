import React, { useEffect, useState, useCallback } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = useCallback(async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost, postsCollectionRef]);

  return (
    <div className="homePage">
      {postLists &&
        postLists.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="postHeader">
                <div className="title"> {post && <h1> {post.title}</h1>}</div>
                <div className="deletePost">
                  {isAuth &&
                    post.author &&
                    post.author.id === auth.currentUser.uid && (
                      <button
                        onClick={() => {
                          post.id && deletePost(post.id);
                        }}
                      >
                        delete
                      </button>
                    )}
                </div>
              </div>
              <div className="postTextContainer"> {post && post.postText} </div>
              {post.author && <h3>@{post.author.name}</h3>}
            </div>
          );
        })}
    </div>
  );
}

export default Home;
