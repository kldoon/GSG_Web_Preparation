const postList = document.getElementById('post-list');

const POSTS = [];
const post = {
  author: {
    displayName: '',
    subtitle: '',
    avatar: ''
  },
  img: '',
  desc: '',
  likesCount: 0,
  time: new Date()
}

const renderPost = () => {
  const postHTML = `
    <div class="post">
        <header>
          <div class="av-title">
            <div class="gradient-box">
              <img src="./imgs/avatar.jpg" alt="avatar" height="50" />
            </div>
            <div class="title">
              <span class="name">Ahmad Mohammad</span>
              <span class="subtitle">creative person</span>
            </div>
          </div>
          <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
        </header>
        <div class="content">
          <img src="./imgs/post-image.jpg" alt="nature">
          <p>Lorem ipsum dolor sit <a class="hash" href="">#amet_consectetur</a> adipisicing elit. Possimus unde
            commodi, nisi
            reprehenderit, illo at
            iusto quam fugit sint ipsum nostrum ipsam nemo animi esse ad, architecto reiciendis illum dolorum?</p>
        </div>
        <ul class="actions">
          <li><i class="fa-regular fa-heart"></i></li>
          <li><i class="fa-regular fa-comment"></i></li>
          <li><i class="fa-regular fa-paper-plane"></i></li>
          <li><i class="fa-regular fa-bookmark"></i></li>
        </ul>
      </div>
`;

  postList.insertAdjacentHTML('beforeend', postHTML);
}

for (let i = 0; i < 100; i++) {
  renderPost();
}

