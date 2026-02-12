const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/axiscolleges",
    iconClass: "fa-brands fa-instagram",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/axiscolleges",
    iconClass: "fa-brands fa-facebook-f",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/axiscolleges",
    iconClass: "fa-brands fa-x-twitter",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/school/axis-colleges/posts/?feedView=all",
    iconClass: "fa-brands fa-linkedin-in",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Axis Colleges</h2>
        <p>Building a future-ready learning ecosystem since 2013.</p>
      </div>
      <div className="footer__links">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={link.iconClass} aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="footer__copy">
        Copyright © 2024 Axis Colleges. All rights reserved.
      </p>
    </footer>
  );
}
