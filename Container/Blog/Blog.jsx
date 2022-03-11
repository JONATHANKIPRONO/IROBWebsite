import React from 'react';
import Article from '../../components/article/article';
import { fb, Gihub, google, IG, slack} from './imports';
import './Blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={Gihub} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={fb} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={IG} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={google} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={slack} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;