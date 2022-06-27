import { createClient } from '../../prismicio'
import Blog from "../../scenes/Blog/Blog"

export async function getStaticProps() {
  const client = createClient()
  const page = await client.getByUID('blog', 'blog')
  return {
    props: { page },
  }
}

function BlogPage({ page }) {

  return (
    <div>
      <Blog page={page.data.slices} />
    </div>
  );
}

export default BlogPage;
