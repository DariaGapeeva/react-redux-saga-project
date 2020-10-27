import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="text-center"> Постов пока нет</p>;
  }
  return syncPosts.map((post) => <Post post={post.title} key={post.id} />);
};

const mapStateToProps = (state) => ({
  syncPosts: state.posts.posts,
});

const mapDispacthToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispacthToProps)(Posts);
