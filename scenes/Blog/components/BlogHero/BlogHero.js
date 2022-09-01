import Image from 'next/image';

import styles from "./BlogHero.module.scss";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import ArrowIcon from "../../../../assets/ArrowIcon/ArrowIcon";
import cutDescription from '../../../../utils/cutDescription'

const BlogHero = ({ data }) => {  
  const {items} = data;
  const { postimage, posttitle, posttext, postlink } = items[0];

  return (
    <div className="hero">
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{posttitle}</h1>
            <p className={styles.heroSubtitle}>
              {cutDescription(posttext[0].text, 189)}
            </p>
            <ButtonPrimary
              buttonLink={`/blog/${postlink}`}
              mod="button--regular"
              Icon={ArrowIcon}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image src={postimage.url} className={styles.image} alt={postimage.alt} layout="fill" priority /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
