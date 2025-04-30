<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>About Umri's Enterprises</h3>
          <p>
            We are a leading logistics company dedicated to providing efficient and reliable
            transportation solutions across East Africa. Our commitment to excellence and
            customer satisfaction sets us apart in the industry.
          </p>
        </div>

        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Contact Info</h3>
          <ul class="contact-info">
            <li>
              <i class="fas fa-map-marker-alt"></i>
              123 Logistics Way, Nairobi, Kenya
            </li>
            <li>
              <i class="fas fa-phone"></i>
              +254 123 456 789
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              info@umris.com
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="#" class="social-link">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Umri's Enterprises. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #212121;
  color: #fff;
  padding: 4rem 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-section h3 {
  color: var(--primary-color);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.footer-section p {
  line-height: 1.6;
  color: #bdbdbd;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: #bdbdbd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.contact-info {
  list-style: none;
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #bdbdbd;
}

.contact-info i {
  color: var(--primary-color);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--primary-color);
  transform: translateY(-3px);
}

.footer-bottom {
  text-align: center;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  color: #bdbdbd;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .contact-info li {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style>