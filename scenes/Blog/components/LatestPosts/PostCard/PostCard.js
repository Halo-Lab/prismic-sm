import Link from "next/link";
import styles from "./PostCard.module.scss";
import cutDescription from '../../../../../utils/cutDescription'

const PostCard = ({ post }) => {
  const { latestPostsImage, latestPostsTitle, latestPostsText, latestPostsLink } = post;

  return (
    <div>
      <Link href={`/blog/${latestPostsLink}`}>
        <a className={styles.postCard}>
          <div className={styles.postImageBox}>
            <img
              src={latestPostsImage.url}
              className={styles.postImg}
              alt={''}
            />
          </div>
          <h3 className={styles.postTitle}>{latestPostsTitle}</h3>
          <p className={styles.postDescription}>
            {cutDescription(latestPostsText[0].text, 87)}
          </p>
        </a>
      </Link>
    </div>
  );
};

export default PostCard;
