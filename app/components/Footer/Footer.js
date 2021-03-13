'use strict';

import React from 'react';

const Footer = (props) => (
  <footer className="credits">
    Made with <span className="heart"></span>by <a href={props.link} className="link" target="_blank">{props.copyright}</a>
  </footer>
);

export default Footer;
