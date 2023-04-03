import React from 'react';

const Footer = () => {
return (
<footer className="bg-dark text-white py-4">
<div className="container">
<div className="row">
<div className="col-md-4">
<h5 className="mb-3">About Us</h5>
<p>We are a company dedicated to selling high-quality electronic products. We are passionate about technology and strive to offer the best shopping experience to our customers.</p>
</div>
<div className="col-md-4">
<h5 className="mb-3">Contact</h5>
<ul className="list-unstyled">
<li>Address: 123 Main St, City, Country</li>
<li>Phone: +1 234 567890</li>
<li>Email: info@example.com</li>
</ul>
</div>
<div className="col-md-4">
<h5 className="mb-3">Follow us on social media</h5>
<ul className="list-unstyled list-inline mb-0">
<li className="list-inline-item">
<a href="https://facebook.com/" className="text-white">
<i className="fab fa-facebook-f"></i>
</a>
</li>
<li className="list-inline-item">
<a href="https://twitter.com/" className="text-white">
<i className="fab fa-twitter"></i>
</a>
</li>
<li className="list-inline-item">
<a href="https://instagram.com/" className="text-white">
<i className="fab fa-instagram"></i>
</a>
</li>
<li className="list-inline-item">
<a href="https://linkedin.com/" className="text-white">
<i className="fab fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
</div>
</footer>
);
};

export default Footer;