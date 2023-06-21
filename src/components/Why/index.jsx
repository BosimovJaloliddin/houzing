import React from "react";
import { Container, Wrapper, Title, Items, Item, Icons } from "./style";

const Why = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <div className="title">Why Choose Us?</div>
          <div className="infoDark">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </div>
        </Title>
        <Items>
          <Item>
            <Icons.Message />
            <div className="subTitle">Trusted By Thousands</div>
            <div className="infoDark">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </div>
          </Item>
          <Item>
            <Icons.Location />
            <div className="subTitle">Wide Renge Of Properties</div>
            <div className="infoDark">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </div>
          </Item>
          <Item>
            <Icons.Home />
            <div className="subTitle">Financing Made Easy</div>
            <div className="infoDark">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </div>
          </Item>
          <Item>
            <Icons.Phone />
            <div className="subTitle">See Neighborhoods</div>
            <div className="infoDark">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </div>
          </Item>
        </Items>
      </Wrapper>
    </Container>
  );
};

export default Why;
