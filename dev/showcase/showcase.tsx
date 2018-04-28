import * as React from 'react';
import {DynaFontIcon} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import "./showcase.less";

export default {
  logo: <Logo />,
  views: [
    {
      slug: 'intro',
      faIconName: 'circle-o-notch',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>dyna-font-icon</h3>
          <h4>make web font icons inline icons with css and height from css class</h4>
        </div>
      ),
    },
    {
      slug: 'font-32-grav',
      faIconName: 'flask',
      title: 'gravity - font width 32',
      center: true,
      component: (
        <DynaFontIcon
          className="my-icon-32"
          fontClassName="fa fa-grav"
          onClick={() => console.log('button pressed')}
        >dyna button</DynaFontIcon>
      ),
    },
    {
      slug: 'font-64-grav',
      faIconName: 'flask',
      title: 'gravity - font width 64',
      center: true,
      component: (
        <DynaFontIcon
          className="my-icon-64"
          fontClassName="fa fa-grav"
          onClick={() => console.log('button pressed')}
        >dyna button</DynaFontIcon>
      ),
    },
    {
      slug: 'font-js-style-grav',
      faIconName: 'flask',
      title: 'gravity - font width 96 from javascript',
      center: true,
      component: (
        <DynaFontIcon
          style={{width: "96px", height: "96px"}}
          fontClassName="fa fa-grav"
          onClick={() => console.log('button pressed')}
        >dyna button</DynaFontIcon>
      ),
    },
    {
      slug: 'font-32-therm',
      faIconName: 'flask',
      title: 'thermometer - font width 32',
      center: true,
      component: (
        <DynaFontIcon
          className="my-icon-32"
          fontClassName="fa fa-thermometer-three-quarters"
          onClick={() => console.log('button pressed')}
        >dyna button</DynaFontIcon>
      ),
    },
    {
      slug: 'font-64-therm',
      faIconName: 'flask',
      title: 'thermometer - font width 64',
      center: true,
      component: (
        <DynaFontIcon
          className="my-icon-64"
          fontClassName="fa fa-thermometer-three-quarters"
          onClick={() => console.log('button pressed')}
        >dyna button</DynaFontIcon>
      ),
    },
    {
      slug: 'font-js-style-therm',
      faIconName: 'flask',
      title: 'thermometer - font width 96 from javascript',
      center: true,
      component: (
        <DynaFontIcon
          style={{width: "96px", height: "96px"}}
          fontClassName="fa fa-thermometer-three-quarters"
          onClick={() => console.log('button pressed')}
        >dyna button</DynaFontIcon>
      ),
    },
    {
      slug: 'font-32-fighter-jet',
      faIconName: 'flask',
      title: 'fighter-jet - font width 32',
      center: true,
      component: (
        <DynaFontIcon
          className="my-icon-32"
          fontClassName="fa fa-fighter-jet"
          onClick={() => console.log('button pressed')}
        >dyna button</DynaFontIcon>
      ),
    },
    {
      slug: 'font-64-fighter-jet',
      faIconName: 'flask',
      title: 'fighter-jet - font width 64',
      center: true,
      component: (
        <DynaFontIcon
          className="my-icon-64"
          fontClassName="fa fa-fighter-jet"
          onClick={() => console.log('button pressed')}
        >dyna button</DynaFontIcon>
      ),
    },
    {
      slug: 'font-js-style-fighter-jet',
      faIconName: 'flask',
      title: 'fighter-jet - font width 96 from javascript',
      center: true,
      component: (
        <DynaFontIcon
          style={{width: "96px", height: "96px"}}
          fontClassName="fa fa-fighter-jet"
          onClick={() => console.log('button pressed')}
        >dyna button</DynaFontIcon>
      ),
    },
    {
      slug: 'the-end',
      title: 'the end',
      description: 'Thank you',
      center: true,
      component: (
        <div style={{textAlign: 'center'}}>
          <h1>The end</h1>
          <div style={{fontSize: '20px'}}>
            <p><a href="https://github.com/aneldev/dyna-font-icon">{faIcon('github')} Github</a></p>
            <p><a href="https://www.npmjs.com/package/dyna-font-icon">{faIcon('square')} npm</a></p>
          </div>
        </div>
      ),
    },
  ]
}as IShowcase;
