import styles from "./BlogPost.module.scss";
import richTextIteration from '../../../../utils/richTextIteration'

const BlogPost = ({ data, slug }) => {
    let postImage, postTitle, postDate, postText, postVideoURL;
  
    if(slug === 'main-post') {
      const { primary } = data[0];
      const {blogHeroImageCover, blogHeroTitle, blogHeroDate, blogHeroText, video} = primary;
      postImage = blogHeroImageCover;
      postTitle = blogHeroTitle;
      postDate = blogHeroDate;
      postText = blogHeroText;
      postVideoURL = video.embed_url.replace('youtu.be', 'www.youtube.com/embed');
    } else {
      const { items } = data[1];
      const currentPage = slug.split('-')[1] - 1
      const {latestPostsImageCover, latestPostsTitle, latestPostsDate, latestPostsText, video} = items[currentPage];
      postImage = latestPostsImageCover;
      postTitle = latestPostsTitle;
      postDate = latestPostsDate;
      postText = latestPostsText;
      postVideoURL = video.embed_url.replace('youtu.be', 'www.youtube.com/embed');
    }
  
    return (
      <div className={styles.wrapper}>
        <div
          className={styles.postPreview}
          style={{
            backgroundImage: `url(${postImage.url})`,
          }}
        />
        <div className="container">
          <div className={styles.inner_container}>          
            <h1 className={styles.postTitle}>{postTitle}</h1>
            <p className={styles.postDescription}>{postDate}</p>
            <div className={styles.postDescription}>{richTextIteration(postText)}</div>          
          </div>
          <div className={styles.videoContainer}>
            <iframe width="560" height="315" src={postVideoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogPost;