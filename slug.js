import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Navbar from '../../component/Navbar';

export default function Post({ contentHtml, data }) {
  return (
    <>
      <Navbar />
      <main className="px-6 py-12 bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white transition-colors duration-500">
        <div className="max-w-3xl mx-auto">
          <img
            src={data.coverImage}
            alt={data.title}
            className="w-full h-64 object-cover mb-6 rounded"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">{data.date}</p>
          <h1 className="text-3xl font-bold mt-2 mb-4">{data.title}</h1>
          <article
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.md$/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      contentHtml,
      data,
    },
  };
}
