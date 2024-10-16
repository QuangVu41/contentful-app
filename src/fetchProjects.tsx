import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 'x9ml1yb436ku',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<{ id: string; title: string; url: string; img: string }[]>([]);

  const getData = async () => {
    try {
      const res = await client.getEntries({
        content_type: 'projects',
      });
      const projects = res.items.map((item) => {
        const { title, url, image } = item.fields;
        const titleE = title as string;
        const urlE = url as string;
        const id = item.sys.id;
        const img = image as { fields: { file: { url: string } } };

        return { id, title: titleE, url: urlE, img: img.fields.file.url };
      });
      setProjects(projects);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

export { useFetchProjects };
