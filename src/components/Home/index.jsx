import React, { Component } from "react";
import Brands from "../Brands";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [
        {
          id: 1,
          name: "Ferrari",
          imageUrl: "https://i.blogs.es/96633b/140013_cor/450_1000.jpg",
        },
        {
          id: 2,
          name: "Porshe",
          imageUrl:
            "https://1000marcas.net/wp-content/uploads/2019/12/Porsche-logotipo.jpg",
        },
        {
          id: 3,
          name: "Lamborghini",
          imageUrl:
            "http://assets.stickpng.com/images/580b585b2edbce24c47b2c89.png",
        },
        {
          id: 4,
          name: "BMW",
          imageUrl:
            "https://1000marcas.net/wp-content/uploads/2019/12/BMW-Logo-1963.jpg",
        },
        {
          id: 5,
          name: "Mercedes-Benz",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mercedes_Benz_Logo_11.jpg/1200px-Mercedes_Benz_Logo_11.jpg",
        },
        {
          id: 6,
          name: "Alfa-Romeo",
          imageUrl:
            "https://1000marcas.net/wp-content/uploads/2019/12/Alfa-Romeo-Logo-2000.jpg",
        },
        {
          id: 7,
          name: "Cadillac",
          imageUrl:
            "http://www.brandemia.org/wp-content/uploads/2014/03/cadillac_logo.jpg",
        },
        {
          id: 8,
          name: "Aston-Martin",
          imageUrl:
            "https://1000marcas.net/wp-content/uploads/2020/01/Aston-Martin-logo-1939.jpg",
        },
      ],
    };
  }
  render() {
    const { brands } = this.state;
    return (
      <div>
        <Brands brands={brands} />
      </div>
    );
  }
}

export default Home;
