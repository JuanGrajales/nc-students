import React, { Component } from "react";

class Fetch extends Component {
  state = {
    posts: [],
    apod: "",
  };

  getRequest = () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.setState({
          posts: data,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  getApod = () => {
    const url =
      "https://api.nasa.gov/planetary/apod?api_key=mea2RvTstpD57Da7U9IZRFZzXiaS7Rknfl5zSoTt";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.setState({
          apod: data.url,
          displayComponent: true,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  displayPosts = () => {
    if (this.state.posts.length) {
      return this.state.posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      });
    } else {
      return <li>No posts</li>;
    }
  };

  render() {
    return (
      <>
        <h1>Fetch</h1>
        <button onClick={this.getRequest}>Projects</button>
        <button onClick={this.getApod}>Get APOD</button>
        <img src={this.state.apod} />
        <ul>{this.displayPosts()}</ul>
        {/* {this.state.displayComponent ? <Component /> : ""} */}
      </>
    );
  }
}

export default Fetch;
