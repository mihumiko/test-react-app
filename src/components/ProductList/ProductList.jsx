import { Link } from "react-router-dom";
import { products } from "../../data";
import {
  Grid2,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
// import "./ProductList.css";

export default function ProductList() {
  return (
    <Box
      sx={{
        maxWidth: "70vw",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Grid2
        container
        spacing={2}
        sx={{
          justifyContent: "flex-start",
          padding: 2,
        }}
      >
        {products.map((product) => (
          <Grid2
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "transparent",
                maxWidth: 300, // Ограничение ширины карточки
                width: "100%",
              }}
            >
              <CardActionArea component={Link} to={`/product/${product.id}`}>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    borderRadius: "8px 8px 0 0",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>

    // <div className="grid-container">
    //   {products.map((product) => (
    //     <Link
    //       to={`/product/${product.id}`}
    //       key={product.id}
    //       className="product"
    //     >
    //       <img src={product.image} alt={product.name} />
    //       <h2>{product.name}</h2>
    //     </Link>
    //   ))}
    // </div>
  );
}
