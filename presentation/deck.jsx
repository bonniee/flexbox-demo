import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

import Skeleton from "./skeleton";
import ThreePiece from "./three_piece";
import Example2 from "./example2";

const images = {
  flexbox: require("./flexbox.png"),
  angular: require("./angular.png"),
  angular_toplevel: require("./angular_toplevel.png"),
  angular_grid: require("./angular_grid.png")
};

preloader([images.flexbox, images.angular, images.angular_toplevel, images.angular_grid]);

export default class extends React.Component {

  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={800}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Flexbox!
          </Heading>
          <Heading size={4} fit caps margin="-20px 0px">
            (is awesome)
          </Heading>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4}>a presentation by <a href="http://bit.ly/1Kgx0bk">Bonnie Eisenman</a></Heading>
          <Heading size={4}>
            & with many thanks to <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">css-tricks</a> (images are theirs)
            </Heading>          
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Heading size={1} caps textColor="primary">
            CSS positioning is painful
          </Heading>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={1} caps textColor="primary">
            Enter Flexbox
          </Heading>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">"Flexible boxes" for layout</Appear></ListItem>
            <ListItem><Appear fid="2">
              <Link href="http://caniuse.com/#feat=flexbox">Can I Use It?</Link> Yes.</Appear>
            </ListItem>
            <ListItem><Appear fid="4">Easier, simpler layout CSS</Appear></ListItem>
            <ListItem><Appear fid="3">Vertical centering!!!</Appear></ListItem>
          </List>
        </Slide>

        <Slide notes="Everything in flexbox is based around this model, which gives us a way of describing stuff">
          <Text textSize="1.5em" textColor="tertiary" margin="20px 10px 20px" bold>
            Flexible Box Model
          </Text>
          <Image src={images.flexbox.replace('/','')} margin="0px auto 40px"/>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Heading size={4}>Flex Container Properties</Heading>
          <List>
            <ListItem><Appear fid="1">display: flex</Appear></ListItem>
            <ListItem><Appear fid="2">
              flex-direction: column-reverse | column | row | row-reverse

              <img src="https://cdn.css-tricks.com/wp-content/uploads/2014/05/flex-direction1.svg"/>
              </Appear>
            </ListItem>
            <ListItem><Appear fid="3">align-items</Appear></ListItem>
            <ListItem><Appear fid="4">justify-content</Appear></ListItem>
            <ListItem><Appear fid="3">align-content</Appear></ListItem>
          </List>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="secondary">Flex Child Properties</Heading>
          <List>
            <ListItem>
              order: integer <br/>
              <img src="https://cdn.css-tricks.com/wp-content/uploads/2013/04/order-2.svg" height="350px"/>
              </ListItem>
          </List>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="secondary">Flex Child Properties</Heading>
          <List>
            <ListItem>
              flex: integer <br/>
              <img src="https://cdn.css-tricks.com/wp-content/uploads/2014/05/flex-grow.svg" />
              </ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./skeleton.example")}
            margin="20px auto"/>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={1} textColor="primary">
            Plz experiment with the CSS using Developer Tools -->
          </Heading>
        </Slide>

        <Slide bgColor="tertiary" notes="add display flex, and change flex-direction. What happens if I do row, or column, or column-reverse? What about flex-grow?">
          <Skeleton/>
        </Slide>

        <Slide>
          <Image src={images.angular.replace('/','')} height="500px"/>
        </Slide>

        <Slide>
          <Image src={images.angular_toplevel.replace('/','')} height="500px"/>
        </Slide>

        <Slide bgColor="tertiary" notes="Header, footer">

          <ThreePiece />
        </Slide>

        <Slide bgColor="tertiary" notes="Header, footer">
          <ThreePiece showAnswer={true} />
        </Slide>

        <Slide>
          <Image src={images.angular_grid.replace('/','')} height="500px"/>
        </Slide>

        <Slide bgColor="tertiary" notes="Header, footer">
          <Example2 />
        </Slide>

        <Slide bgColor="tertiary" notes="Header, footer">
          <Example2 showAnswer={true}/>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
        <Heading size={4}>
        TLDR; Flexbox is cool.
          </Heading>          
          <Heading size={4}>Feedback? Tweet to me: <a href="http://bit.ly/1Kgx0bk">@brindelle</a></Heading>
        </Slide>

      </Deck>
    );
  }
}
