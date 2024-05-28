/* eslint-disable react/prop-types */
export default function MainLayout({ children }) {
  return (
    <>
      <nav>navbar</nav>

      <main>{children}</main>

      <footer>footer</footer>
    </>
  );
}
