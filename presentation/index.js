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
  Fill,Code,
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
    action: require('raw!../code-examples/action.js'),
    reducer1: require('raw!../code-examples/reducer1.js'),
    nested: require('raw!../code-examples/nested-view-in-composition.js'),
    composed: require('raw!../code-examples/composed-view.js'),
    nested1:require('raw!../code-examples/nested-reducer-in-composition.js'),
    composed1: require('raw!../code-examples/composed-reducers.js'),
};
const images = {
  edi: require("../assets/edi.png"),
  monitoring: require("../assets/monitoring.png"),
  monitoring1: require("../assets/monitoring_1.png"),
  monitoringOld: require("../assets/monitoring_old.png"),
  filterNew: require("../assets/new_filter.png"),
  react: require("../assets/react.png"),
  redux: require("../assets/redux.png"),
  reduxScheme: require('../assets/reduxScheme.png'),
  pic9: require('../assets/pic-9.png'),
  pic8: require('../assets/pic-8.png'),
  pic3: require('../assets/pic-3.png'),
  pic4: require('../assets/pic-4.png'),

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
                <Slide {...slideStyle}>
                    <Image height='30rem' src={images.reduxScheme} />
                </Slide>
                <Slide {...slideStyle}>
                    <Heading size={4}>Reelm</Heading>
                </Slide>
                <Slide {...slideStyle}>
                    <Image height='30rem' src={images.pic9} />
                </Slide>
                <Slide {...slideStyle}>
                    <CodePane
                        lang='js'
                        textSize={20}
                        source={examples.action}
                    />
                    <Text> action </Text>
                        <CodePane
                            lang='js'
                            textSize={20}
                            source={examples.reducer1}
                        />
                    <Text> reducer </Text>
                </Slide>
                <Slide {...slideStyle}>
                    <Image height='30rem' src={images.pic8} />
                </Slide>
                <Slide {...slideStyle}>
                    <Image height='30rem' src={images.pic3} />
                </Slide>
                <Slide {...slideStyle}>
                    <CodePane
                        lang='js'
                        textSize={40}
                        source={examples.nested}
                    />
                </Slide>
                <Slide {...slideStyle}>
                    <CodePane
                        lang='js'
                        textSize={40}
                        source={examples.composed}
                    />
                </Slide>
                <Slide {...slideStyle}>
                    <CodePane
                        lang='js'
                        textSize={40}
                        source={examples.composed1}
                    />
                </Slide>
                <Slide {...slideStyle}>
                    <CodePane
                        lang='js'
                        textSize={40}
                        source={examples.nested1}
                    />
                </Slide>
                <Slide {...slideStyle}>
                    <Image height='30rem' src={images.pic4} />
                </Slide>
                <Slide {...slideStyle}>
                        <Heading size={4}>Reelm</Heading>
                        <div style={{ textAlign: 'left', display: 'inline-block' }}>
                            <Text lineHeight={2}>Документация: <Link href='https://reelm.github.io/ru/intro/'>https://reelm.github.io/ru/intro/</Link></Text>
                            <Text lineHeight={2}>Исходный код: <Link href='https://github.com/tihonove/reelm'>https://github.com/tihonove/reelm</Link></Text>
                        </div>
                        <br />
                        <br />
                        <Code textSize='2rem'>npm install reelm --save</Code>
                </Slide>
                <Slide {...slideStyle}>
                        <Heading size={4}>Спасибо за внимание</Heading>
                </Slide>
            </Deck>
      </Spectacle>
    );
  }
}
