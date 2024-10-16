const postList = document.getElementById('post-list');

const POSTS = [];
const defaultPost = {
  id: 0,
  author: {
    displayName: '',
    subtitle: '',
    avatar: ''
  },
  img: '',
  desc: '',
  likesCount: 0,
  time: new Date().toDateString()
}

const renderPost = (post = defaultPost) => {
  const postHTML = `
    <div class="post">
        <header>
          <div class="av-title">
            <div class="gradient-box">
              <img src="${post.author.avatar}" alt="avatar" height="50" />
            </div>
            <div class="title">
              <span class="name">${post.author.displayName}</span>
              <span class="subtitle">${post.author.subtitle}</span>
            </div>
            </div>
            <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
        </header>
        <div class="content">
          <img src="${post.img}" alt="nature">
          <div class="likes-date">
            ${post.likesCount > 0 ? `<span class="likes-count">${post.likesCount} likes</span>` : ''}
            <span class="date">${post.time}</span>
          </div>
          <p>${post.desc}</p>
        </div>
        <ul class="actions">
          <li onclick="likePost(${post.id})"><i class="fa-regular fa-heart"></i></li>
          <li><i class="fa-regular fa-comment"></i></li>
          <li><i class="fa-regular fa-paper-plane"></i></li>
          <li><i class="fa-regular fa-bookmark"></i></li>
        </ul>
      </div>
`;

  postList.insertAdjacentHTML('beforeend', postHTML);
}

const renderAllPosts = () => {
  postList.innerHTML = '';
  DATA.forEach(post => {
    renderPost(post);
  });
}

const likePost = (id) => {
  // for (let i = 0; i < DATA.length; i++) {
  //   if (DATA[i].id === id) {
  //     DATA[i].likesCount += 1;
  //   }
  // }

  DATA.forEach(post => {
    if (post.id === id) {
      post.likesCount += 1;
    }
  });

  renderAllPosts();
}


renderAllPosts();

const addNewPost = () => {
  const imgInput = document.getElementById("img-input");
  const descInput = document.getElementById("desc-input");

  const newPost = { ...defaultPost };  //to make shallow copy
  newPost.desc = descInput.value;
  newPost.img = imgInput.value;
  // newPost.likesCount = 0; // It's already filled in the defaultPost
  newPost.author = {};
  newPost.author.displayName = "Khaldoun Halawani";
  newPost.author.subtitle = "Just a web developer";
  newPost.author.avatar = './imgs/avatar.jpg';

  DATA.unshift(newPost);
  renderAllPosts();
  toggleModal();
}

const toggleModal = () => {
  const modalElement = document.getElementById("addModal");
  modalElement.classList.toggle("shown");
}