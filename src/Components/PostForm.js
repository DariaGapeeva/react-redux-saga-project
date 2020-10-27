import React from "react";
import { connect } from "react-redux";
import { appShowAlert } from "../redux/appReduser";
import Alert from "./Alert";
import { postsCreatePost } from "./../redux/postsReduser";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      return this.props.appShowAlert("Поле обязательно к заполнению");
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };
    console.log(newPost);
    this.props.postsCreatePost(newPost);
    this.setState({
      title: "",
    });
  };

  changeInputHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert alertMessage={this.props.alert} />}
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, { postsCreatePost, appShowAlert })(
  PostForm
);
