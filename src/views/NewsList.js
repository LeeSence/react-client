import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

import axios from "axios";
import NewsContents from "./NewsContents";
import NewsDetail from "./NewsDetail";

const TableBasic = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/messages/118413609210214538557/msg/99999"
        );
        setResults(response.data.results);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  if (!results) {
    return null;
  }

  return (
    <Table responsive>
      <thead>
        <tr>
          <th className="px-1 fs-5">IDX</th>
          <th className="px-0 fs-5">제목</th>
          <th className="px-2 fs-5">내용</th>
          <th className="px-0 fs-5">조회수</th>
          <th className="px-0 fs-5">등록일자</th>
          <th className="ps-1 fs-5">등록IP</th>
          <th className="px-0 fs-5">관리</th>
        </tr>
      </thead>
      <tbody>
        {results.map((content) => (
          <NewsContents key={content.idx} content={content} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableBasic;
