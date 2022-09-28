import { Container } from "@mui/material";
import React from "react";
import "./category.scss";

function Category() {
  return (
    <div className="category">
      <Container maxWidth="lg">
        <div className="category-container">
          <ul className="list">
            <li className="list-item">
              <a href="./">moda </a>
            </li>
            <li className="list-item">
              <a href="./">elektronik </a>
            </li>
            <li className="list-item">
              <a href="./">beyaz eşya</a>
            </li>
            <li className="list-item">
              <a href="./">mobilya </a>
            </li>
            <li className="list-item">
              <a href="./">sağlık </a>
            </li>
            <li className="list-item">
              <a href="./">spor </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Category;
