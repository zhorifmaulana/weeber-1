import React, { useState } from "react";

import "./styles/shorten-link-page.styles.scss";

import Button from "../components/button/button.component";

const ShortenItem = ({ link, i }) => (
  <div className="table__item">
    <span>{i + 1}</span>
    <span>{link.link}</span>
    <span>/{link.short_link}</span>
  </div>
);

const ShortenLinkPage = ({ linkTree, url }) => {
  const [link, setLink] = useState("");
  const [shorten, setShorten] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [isFail, setFail] = useState(false);

  const handleChangeLink = (event) => {
    const { value } = event.target;
    setLink(value);
  };

  const handleChangeShorten = (event) => {
    const { value } = event.target;
    setShorten(value);
  };

  const handleSubmit = (event) => {
    const body = JSON.stringify({ link, short_link: shorten });

    fetch(url, {
      method: "POST",
      body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        setSuccess(true);
        setInterval(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((err) => {
        setFail(true);
        setInterval(() => {
          setFail(false);
        }, 5000);
      });

    setLink("");
    setShorten("");
  };

  return (
    <div className="shorten-link">
      <div className="shorten-link__form">
        {isSuccess ? (
          <h3 className="shorten-link__success">
            Link has successfully created
          </h3>
        ) : null}

        {isFail ? (
          <h3 className="shorten-link__fail">Opps there is an error :(</h3>
        ) : null}

        <h1 style={{ marginBottom: "20px" }}>Generate Link Tree</h1>

        <input
          className="shorten-link__input"
          type="text"
          placeholder="Link Url"
          value={link}
          onChange={handleChangeLink}
        />
        <input
          className="shorten-link__input"
          type="text"
          placeholder="Shorten Url"
          value={shorten}
          onChange={handleChangeShorten}
        />
        <Button onClick={handleSubmit} className="btn--dark-blue">
          Generate
        </Button>
      </div>
      <div className="table">
        <h1 style={{ marginBottom: "20px" }}>Data Link Tree</h1>
        <div className="table__header">
          <span>No.</span>
          <span>Link</span>
          <span>Shorten Link</span>
        </div>
        {linkTree.map((link, i) => (
          <ShortenItem link={link} key={link.id} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ShortenLinkPage;
