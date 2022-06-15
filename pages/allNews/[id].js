import axios from "../../api/axios.news";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { compareAsc, format } from "date-fns";

export default function PostPage({ newsPost }) {
  const [fontSize, setFontSize] = useState("");
  const [news, setNews] = useState([]);
  const [dateMainNews, setDateMainNews] = useState();
  const [postImage, setPostImage] = useState({
    width: newsPost.image.width,
    height: newsPost.image.height,
  });
  const changeHandler = (e) => {
    localStorage.setItem("fontSize", e.target.value);
    setFontSize(e.target.value);
  };

  useEffect(() => {
    const getAllNews = async () => {
      try {
        const res = await axios.get(
          "/news-id?sort=publishedAt:DESC&pagination[pageSize]=10&populate=image"
        );
        if (!res.data) {
          throw new Error();
        }
        const resData = res.data.data.map((item) => {
          let mainDate = format(new Date(item.publishedAt), "MMMM dd");
          return {
            mainDate: mainDate,
            ...item,
          };
        });
        setNews([...resData]);
      } catch (error) {
        console.log(error);
      }
    };
    getAllNews();
    if (postImage.width > 800) {
      setPostImage({
        ...postImage,
        width: 800,
      });
    }
    let postFontSize = localStorage.getItem("fontSize");
    setFontSize(postFontSize);
  }, []);

  return (
    <>
      <Head>
        <title>{newsPost.newsTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="postPage__container">
        <main className="post--page">
          <section className="description">
            <img src={newsPost.image.url} alt={newsPost.image.name} />
            <div className="form--for-font">
              <h2>{newsPost.newsTitle}</h2>
              <select onChange={changeHandler} defaultValue={fontSize}>
                <option>14px</option>
                <option>16px</option>
                <option>18px</option>
                <option>20px</option>
              </select>
            </div>
            <div className="description__text">
              <p>{newsPost.postDescription}</p>
              <p>{newsPost.mainDate}</p>
            </div>
          </section>
          <div className="news__sidebar">
            {news.map(({ id, postDescription, mainDate }) => {
              return (
                <Link key={id} href={`/allNews/${id}`}>
                  <a>
                    <span>{mainDate}</span>
                    <p>{postDescription}</p>
                  </a>
                </Link>
              );
            })}
          </div>
        </main>
      </header>
      <style jsx>{`
        .postPage__container {
          max-width: ${postImage.width + 450 + "px"};
          margin: 110px auto;
        }
        .form--for-font {
          margin: 35px 0;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .description {
          width: ${postImage.width + "px"};
        }
        .description img {
          width: 100%;
          object-fit: cover;
        }
        .description h2 {
          max-width: 550px;
          font-size: 24px;
          font-weight: bold;
        }
        .description__text p {
          font-weight: 400;
          font-size: ${fontSize};
          line-height: 30px;
        }
        .description__text p:nth-child(2) {
          font-size: 0.875rem;
          margin-top: 100px;
          background-color: #0c4083;
          color: #fff;
          display: inline-block;
          padding: 5px 25px;
          border-radius: 5px;
          margin-left: auto;
        }
        .post--page {
          display: flex;
          justify-content: space-between;
        }
        .news__sidebar {
          width: 400px;
        }
        .news__sidebar a {
          position: relative;
          list-style: none;
          width: 100%;
          height: 100px;
          padding: 20px 10px 10px 10px;
          display: flex;
          align-items: flex-start;
          border-bottom: 1px solid #9f9f9f;
          overflow: hidden;
        }
        .news__sidebar a::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          transform: translateX(-100%);
          transition: 0.5s ease;
          background-color: #0c4083;
        }
        .news__sidebar a:hover::before {
          transform: translateX(0);
        }
        .news__sidebar a span {
          min-width: 50px;
          text-align: center;
          margin-right: 20px;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0em;
          color: #767676;
          align-self: center;
        }
        .news__sidebar p {
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 30px;
          letter-spacing: 0em;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-wrap: break-word;
        }
      `}</style>
    </>
  );
}
export async function getStaticPaths() {
  const res = await axios.get(`/news-id`);
  const paths = res.data.data.map((res) => {
    return {
      params: { id: String(res.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { id } }) {
  const res = await axios.get(`/news-id/${id}?populate=image`);
  const newsPost = res.data.data;
  let mainDate = format(new Date(res.data.data.publishedAt), "MMMM dd");

  return {
    props: {
      newsPost: {
        mainDate,
        ...newsPost,
      },
    },
    revalidate: 200,
  };
}
