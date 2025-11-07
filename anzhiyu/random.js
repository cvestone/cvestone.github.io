var posts=["articles/wp/251025_deadfaceCTF learning record.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };