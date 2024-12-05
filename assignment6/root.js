// root.js
function PublicBlogPost(myblogpost) {
  return <div className="blog-post">
    <h2>{myblogpost.title}</h2>
    <p className="meta">By {myblogpost.author} on {myblogpost.date}</p>
    <p>{myblogpost.content}</p>
  </div>
}

function PrivateBlogPost(myblogpost) {
return <div className="private-posts">
  <h2>{myblogpost.title}</h2>
  <p className="meta">By {myblogpost.author} on {myblogpost.date}</p>
  <p>The content of this post is private</p>
</div>
}

function BlogList( { myblogposts } ) {
return <div className="blog-list">
  {
    myblogposts.map(
      (blogpost) => { 
        return blogpost.private ? 
         <PrivateBlogPost key={blogpost.title} title={blogpost.title} 
        author={blogpost.author} date={blogpost.date} />  
        : <PublicBlogPost key={blogpost.title} title={blogpost.title} 
        author={blogpost.author} date={blogpost.date} content={blogpost.content}/>
      }
      
    )
  }
</div>
}


function Header(myblog) {
  return <header>
    <h1>{myblog.title}</h1>
    <p>{myblog.tagline}</p>
  </header>
}

function Footer({ year }) {
  return <footer>
    <p>&copy; {year} My Blog. All rights reserved.</p>
  </footer>
};

function App() {
  const blogPosts = [
    {
      title: 'My First Blog Post',
      author: 'John Doe',
      date: 'June 1, 2023',
      content: 'Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.',
      private: true
    },
    {
      title: 'My Second Blog Post',
      author: 'Jane Smith',
      date: 'June 5, 2023',
      content: 'In this post, I’m discussing the importance of work-life balance. It’s essential to find time for both professional and personal activities to maintain overall well-being.',
      private: false
    },
    {
      title: 'A Day in the Life',
      author: 'Alice Johnson',
      date: 'June 10, 2023',
      content: 'Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation.',
      private: false
    },
    {
      title: 'Tips for Healthy Eating',
      author: 'Bob Lee',
      date: 'June 15, 2023',
      content: 'Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.',
      private: true
    },
    {
      title: 'Traveling on a Budget',
      author: 'Susan White',
      date: 'June 20, 2023',
      content: 'Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.',
      private: false
    }
  ];

return <>
  <Header title="My Blog" tagline="A blog about everything" />
  {/* <BlogPost title={blogPosts[0].title} author={blogPosts[0].author} date={blogPosts[0].date} content={blogPosts[0].content} /> */}
  <BlogList myblogposts={blogPosts} />
  <Footer year={2024} />
</>

};

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)