import React, { useState } from "react";
import { log } from "./logger";
import './App.css'

export default function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    if (!url.startsWith("http")) {
      log("frontend", "error", "component", "Invalid URL entered");
      alert("Please enter a valid URL starting with http");
      return;
    }

    const code = Math.random().toString(36).substring(2, 7);
    const newShortUrl = `http://localhost:3000/${code}`;
    setShortUrl(newShortUrl);

    log("frontend", "info", "component", `Shortened URL: ${url} -> ${newShortUrl}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Simple URL Shortener</h2>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ padding: "8px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleShorten} style={{ padding: "8px 12px" }}>
        Shorten
      </button>

      {shortUrl && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Short URL:</strong> <a href={url}>{shortUrl}</a></p>
        </div>
      )}
    </div>
  );
}
