
const blogs = [
    { title: 'Blog Title 1', content: 'Full blog content for Blog 1...' },
    { title: 'Blog Title 2', content: 'Full blog content for Blog 2...' },
    { title: 'Blog Title 3', content: 'Full blog content for Blog 3...' },
    { title: 'Blog Title 4', content: 'Full blog content for Blog 4...' },
    { title: 'Blog Title 5', content: 'Full blog content for Blog 5...' }
  ];
  
  let currentIndex = 2; 
  

  function openBlog(index) {
    const blog = blogs[index];
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <html>
      <head>
        <title>${blog.title}</title>
        <style>
          body { font-family: Arial, sans-serif; color: #333; padding: 20px; }
          h1 { font-size: 36px; color: #000; }
          p { font-size: 20px; color: #555; line-height: 1.6; }
        </style>
      </head>
      <body>
        <h1>${blog.title}</h1>
        <p>${blog.content}</p>
      </body>
      </html>
    `);
  }
  

  function moveCarousel(direction) {
    const blogCards = document.querySelectorAll('.blog-card');
    currentIndex = (currentIndex + direction + blogCards.length) % blogCards.length;
  
    blogCards.forEach((card, index) => {
      card.classList.remove('active');
      card.style.transform = translateX(${(index - currentIndex) * 250}px);
    });
  
    blogCards[currentIndex].classList.add('active');
  }
  

  moveCarousel(0);