/** @jsx createVNode */
import { createVNode } from "../../lib";
import { globalStore } from "../../stores/globalStore.js";
import { toTimeFormat } from "../../utils/index.js";

export const Post = ({ id, author, time, content, likeUsers }) => {
  const { loggedIn, currentUser, posts } = globalStore.getState();

  const activationLike = likeUsers.includes(currentUser?.username);

  const handleLikeClick = () => {
    if (!loggedIn) {
      alert("로그인 후 이용해주세요");
      return;
    }

    const alreadyLiked = likeUsers.includes(currentUser.username);

    const updatedLikeUsers = alreadyLiked
      ? likeUsers.filter((username) => username !== currentUser.username)
      : [...likeUsers, currentUser.username];

    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          likeUsers: updatedLikeUsers,
        };
      }
      return post;
    });

    globalStore.setState({ posts: updatedPosts });
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center mb-2">
        <div>
          <div className="font-bold">{author}</div>
          <div className="text-gray-500 text-sm">{toTimeFormat(time)}</div>
        </div>
      </div>
      <p>{content}</p>
      <div className="mt-2 flex justify-between text-gray-500">
        <span
          onClick={handleLikeClick}
          className={`like-button cursor-pointer${activationLike ? " text-blue-500" : ""}`}
        >
          좋아요 {likeUsers.length}
        </span>
        <span>댓글</span>
        <span>공유</span>
      </div>
    </div>
  );
};
