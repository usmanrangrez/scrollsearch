import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  Box,
  Button,
  Divider,
} from "@chakra-ui/react";
import { data } from "./data";
import { Link, useNavigate } from "react-router-dom";

const Api = () => {
  const navigate = useNavigate();
  const initialItemsToShow = 30; // Initial number of items to show
  const [apiData, setApiData] = useState(data.slice(0, initialItemsToShow));
  const [copyApiData, setCopyApiData] = useState([]);
  const handleSearch = (e) => {
    const value = e.target.value;
    console.log(value);
    setCopyApiData(
      apiData.filter((x) =>
        x.first_name.toLowerCase().includes(value.toLowerCase())
      )
    );
    if (value === "") {
      setCopyApiData(data);
    }
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (Math.abs(scrollHeight - scrollTop - clientHeight) <= 1) {
      setApiData((prev) => {
        const newLength = prev.length + 5;
        return [...data.slice(0, newLength)];
      });
    }
  };

  return (
    <Box margin={"20px"}>
      <Button>
        <Link onClick={() => navigate(-1)}>Go Back</Link>
      </Button>
      <Divider />
      <Divider />
      <Input onChange={handleSearch} width={"390px"} placeholder="Search" />
      <TableContainer
        onScroll={handleScroll}
        sx={{
          margin: "42px",
          height: "700px",
          weight: "400px",
          overflow: "auto",
        }}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>FirstName</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {copyApiData.length > 0
              ? copyApiData.map((val, item) => (
                  <Tr key={item}>
                    <Td>{val.id}</Td>
                    <Td>{val.first_name}</Td>
                    <Td>{val.email}</Td>
                  </Tr>
                ))
              : apiData.map((val, item) => (
                  <Tr key={item}>
                    <Td>{val.id}</Td>
                    <Td>{val.first_name}</Td>
                    <Td>{val.email}</Td>
                  </Tr>
                ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Api;
