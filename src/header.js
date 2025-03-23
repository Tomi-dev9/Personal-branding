import React from 'react';

function Header() {
  return (
    <header>
      <h1>Nama Anda</h1>
      <p>Deskripsi singkat tentang Anda.</p>
      <p>Email: <a href="mailto:email@example.com">email@example.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/username">LinkedIn</a></p>
      <p>GitHub: <a href="https://github.com/username">GitHub</a></p>
    </header>
  );
}

export default Header;
