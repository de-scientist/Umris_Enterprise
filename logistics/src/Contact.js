import React from "react";
import { Box, Button, Grid, IconButton, Link, Typography } from "@mui/material";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  return (
    <Box id="contact" sx={{ mt: 4, color: "white", textAlign: "center" }}>
      <Grid container spacing={4} maxWidth="lg" sx={{ mx: "auto", p: 2 }}>
        {/* Left Image Overlay */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Box
            component="img"
            src="person-making-phone-call.jpg"
            alt="Contact Us Background"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.7)",
              borderRadius: 2,
            }}
          />
        </Grid>

        {/* Right Text Container */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: 3,
            bgcolor: "#292728",
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "left",
          }}
        >
          {/* New paragraph */}
          <Typography variant="body1" sx={{ mb: 4 }}>
            Have questions or need assistance? Reach out to Umris Enterprise! 
            Our dedicated team is ready to provide prompt, helpful support and 
            ensure all your logistics needs are met with care and professionalism.
          </Typography>

          <Typography variant="h4" sx={{ color: "#a74a88", fontWeight: "bold", mb: 2 }}>
            Contact Us
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Lorien Building | P.O Box 2240-20300 Nyahururu
            <br />
            Tel:{" "}
            <Link href="tel:+254721885902" sx={styles.link}>
              +254721885902
            </Link>{" "}
            /{" "}
            <Link href="tel:+254764268280" sx={styles.link}>
              +254764268280
            </Link>
            <br />
            Email:{" "}
            <Link href="mailto:umris.enterprises@gmail.com" sx={styles.link}>
              umris.enterprises@gmail.com
            </Link>
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 4, justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => (window.location.href = "tel:+254721885902")}
            >
              Call Us
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => (window.location.href = "mailto:umris.enterprises@gmail.com")}
            >
              Email Us
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <IconButton
              component="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.socialIcon}
            >
              <FaFacebook />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.socialIcon}
            >
              <FaTwitter />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.socialIcon}
            >
              <FaInstagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Map Container */}
      <Box
        sx={{
          mt: 4,
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 3,
          maxWidth: "1000px",
          mx: "auto",
        }}
      >
        <iframe
          title="Map of Kenya"
          style={{
            width: "100%",
            height: "400px",
            border: 0,
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1191663.8369534934!2d37.906193!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d92e0a8a4f%3A0xe5b095752366ba39!2sKenya!5e0!3m2!1sen!2ske!4v1600000000000"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s",
    "&:hover": {
      color: "#a74a88",
    },
  },
  socialIcon: {
    color: "white",
    "&:hover": {
      color: "#a74a88",
    },
  },
};

export default ContactUs;
