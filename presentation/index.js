/* eslint-disable */
// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from '../theme';

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("../theme/index.css");
const examples = {
    react: require('raw!../code-examples/react.js'),
    redux: require('raw!../code-examples/redux.js'),
    reducer: require('raw!../code-examples/reducer.js'),

};

const images = {
  edi: require("../assets/edi.png"),
  monitoring: require("../assets/monitoring.png"),
  monitoring1: require("../assets/monitoring_1.png"),
  monitoringOld: require("../assets/monitoring_old.png"),
  filterNew: require("../assets/new_filter.png"),
  react: require("../assets/react.png"),
  redux: require("../assets/redux.png"),
pic1: require('../assets/pic-1.png'),
};

preloader(images);

const theme = createTheme();

const Chars = {
    mdash: '\u2014',
};

const slideStyle = {
    maxWidth: 1800,
    maxHeight: 1000,
};
export default class Presentation extends React.Component {
  render() {
    return (
        <Spectacle theme={theme}>
            <Deck transition={["zoom", "slide"]} transitionDuration={500}>
                <Slide {...slideStyle}>
                    <Heading size={5}>Пишем сложное</Heading>
                    <Heading size={5}>single-page приложение</Heading>
                </Slide>
                <Slide {...slideStyle}>
                    <Image height='30rem' src={images.edi} />
                </Slide>
                <Slide {...slideStyle}>
                    <Image height='30rem' src={images.monitoring} />
                </Slide>
                <Slide {...slideStyle}>
                    <Image height='20rem' src={images.monitoring1} />
                </Slide>
                <Slide {...slideStyle}>
                    <Heading size={5}>Почему отказались</Heading>
                </Slide>
                <Slide {...slideStyle} align='flex-start'>
                    <Heading size={5}>Не гибкая верстка</Heading>
                    <Image height='20rem' src={images.monitoringOld} />
                </Slide>
                <Slide {...slideStyle}>
                    <Image height='30rem' src={images.filterNew} />
                </Slide>
                <Slide {...slideStyle}>
                    <List>
                        <ListItem>React & Redux & Reelm</ListItem>
                        <ListItem>Как писать приложение</ListItem>
                    </List>
                </Slide>
                <Slide {...slideStyle}>
                    <Image width='5.5em' height='5em' src={images.react} />
                    <Heading size={4}>React</Heading>
                </Slide>
                <Slide {...slideStyle}>
                   <Image width='5.5em' height='5em' src={images.redux} />
                   <Heading size={4}>Redux</Heading>
               </Slide>
               <Slide {...slideStyle}>
                    <CodePane
                        lang='js'
                        textSize={20}
                        source={examples.react}
                    />
                    <Text>React</Text>
                    <CodePane
                        lang='js'
                        textSize={20}
                        source={examples.redux}
                     />
                     <Text>Redux</Text>
                </Slide>
                <Slide {...slideStyle}>
                    <CodePane
                        lang='js'
                        textSize={40}
                        source={examples.reducer}
                    />
                </Slide>
                <Slide {...slideStyle}>
                    <List>
                        <ListItem>Нет манипуляций с DOM-ом</ListItem>
                        <ListItem>Логика приложения становится очевидной</ListItem>
                    </List>
                </Slide>
            </Deck>
      </Spectacle>
    );
  }
}
