import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import Summary from "./Summary";
import axios from "axios";
const SearchBar = () => {
  const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const options = {
    method: "GET",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    params: {
      url: article.url,
      length: "3",
    },
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.request(options);
      setArticle({ ...article, summary: response.data.summary });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        className="w-full flex justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="h-10 w-96 dark:bg-white shadow-xl focus:outline-none p-2 text-lg rounded-l-md "
          placeholder="paste the article link"
          type="url"
          required
          onChange={(e) => {
            setArticle({ ...article, url: e.target.value });
          }}
        />
        <button
          className="h-10 dark:text-gray-400 p-3 bg-white border-l-2 hover:bg-gray-200 dark:hover:bg-gray-500 hover:dark:text-white"
          type="submit"
        >
          <ImSearch className="hover:animate-bounce" />
        </button>
      </form>
      {article.summary !== "" && <Summary summary={article.summary} />}
    </div>
  );
};

export default SearchBar;
