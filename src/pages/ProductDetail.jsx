import React from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
import { useState, useEffect } from "react";
import ProductService from "../services/productService";


export default function ProductDetail() {
  let { name } = useParams();

  const [products, setProducts] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService.getByProductName(name).then((result) => setProducts(result.data));
  }, []);

  return (
    <div>    
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
            <Card.Header>{products.productName}</Card.Header>
            <Card.Meta>{products.category.categoryName}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>        
      </Card.Group>
    </div>
  );
}
