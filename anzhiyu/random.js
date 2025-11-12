var posts=["articles/wp/251025_deadfaceCTF learning record.html","articles/wp/251016_QnQSecCTF learning record.html","articles/wp/251107_infobahnCTF learning record.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };