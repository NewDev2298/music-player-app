import React from 'react';

const styles = {
  footer: {
    display: "inline-flex",
    justifyContent: "center",
    postition: "absolute",
    bottom: 0,
    width: "100%",
    padding: "5px",
    marginTop: "30px"
  },
}

const Footer = () => {
  return (
    <footer style={styles.footer} className="footer">
      <h4>Made with React</h4>
    </footer>
  );
};

export default Footer;
