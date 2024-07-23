/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(3);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://saurav.tech/NewsAPI/top-headlines/category/business/us.json`
      );
      const data = await response.json();
      setNews(data.articles);
    };

    getData();
  }, []);

  return (
    <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2">
      <h4 className="font-bold text-xl px-4">What is happening</h4>
      {news.slice(0, articleNum).map((article) => (
        <div key={article.url}>
          <Link href={article.url} target="_blank">
            <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-grey-200 transition-all duration-200">
              <div className="space-y-0.5">
                <h6 className="text-sm font-bold">{article.title}</h6>
                <p className="text-xs font-medium text-gray-500">
                  {article.source.name}
                </p>
              </div>
              <img src={article.urlToImage} width={70} className="rounded-xl" />
            </div>
          </Link>
        </div>
      ))}
      <button
        className="text-blue-300 pl-4 pb-3 hover:text-blue-500"
        onClick={() => setArticleNum((articleNum) => articleNum + 3)}
      >
        Load more
      </button>
    </div>
  );
};

export default News;
