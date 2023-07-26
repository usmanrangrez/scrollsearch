import React, { useState } from "react";
import { ChakraProvider, Heading, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setItem(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prev) => [...prev, item]);
    setFilteredItems((prev) => [...prev, item]);
    setItem("");
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setFilteredItems(
      items.filter((x) => {
        return x.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  return (
    <>
      <Button>
        <Link to={"/apidemo"}>Next Demo</Link>
      </Button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search: </label>
        <Input onChange={handleSearch} type="search" id="search" />
        <br />
        <br />
        <label htmlFor="add">AddItem: </label>
        <Input value={item} onChange={handleChange} type="text" id="add" />
        <Button type="submit">Submit</Button>
      </form>
      <Heading as="h4">Items:</Heading>
      {filteredItems.map((x) => (
        <p key={x}>{x}</p>
      ))}
    </>
  );
};

export default Home;
