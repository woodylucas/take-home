import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import InfiniteScroll from "react-infinite-scroll-component";
import unsplash from "./api/unsplash";
import axios from "axios";

function App() {
  const [pins, setNewPins] = useState([]);
  const [images, setImages] = useState([]);
  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  const handleSubmit = (term) => {
    getImages(term).then((resp) => {
      let results = resp.data.results;
      const newPins = [...results, ...pins];

      newPins.sort((a, b) => {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };

  useEffect(() => {
    const url = "https://api.unsplash.com";
    const accesskey = process.env.REACT_APP_ACCESSKEY;
    const getData = async () => {
      const { data } = await axios.get(
        `${url}/photos/random?client_id=${accesskey}&count=10`
      );
      setImages(data);
    };
    getData();
  }, []);

  const fetchImages = () => {
    const url = "https://api.unsplash.com";
    const accesskey = process.env.REACT_APP_ACCESSKEY;
    axios
      .get(`${url}/photos/random?client_id=${accesskey}&count=10`)
      .then((resp) => setImages([...images, ...resp.data]));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // const getNewPins = () => {
  //   const promises = [];
  //   let pinData = [];

  //   const pins = ["San Francisco", "California", "Dogs", "Cats"];
  //   pins.forEach((pinTerm) => {
  //     promises.push(
  //       getImages(pinTerm).then((resp) => {
  //         const results = resp.data.results;
  //         pinData = pinData.concat(results);
  //         pinData.sort((a, b) => {
  //           return 0.5 - Math.random();
  //         });
  //       })
  //     );
  //   });
  //   Promise.all(promises).then(() => {
  //     setNewPins(pinData);
  //   });
  // };

  // useEffect(() => {
  //   getNewPins();
  // }, []);

  return (
    <div className="App">
      {/* Header */}
      <Header onSubmit={handleSubmit} />
      {/* Mainboard */}
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
      >
        <MainBoard pins={images} />
      </InfiniteScroll>
    </div>
  );
}

export default App;
