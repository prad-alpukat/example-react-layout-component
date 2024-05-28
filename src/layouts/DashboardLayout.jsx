/* eslint-disable react/prop-types */
export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <nav className="w-44 bg-red-200 px-4 relative">
        <ul>
          <li>
            <a href="0">adsfasdf</a>
          </li>
        </ul>

        {/* menus logout */}
        <div className="absolute w-full bottom-0">
          <ul>
            <li>menu`</li>
          </ul>
        </div>
      </nav>
      <div className="w-full container mx-auto px-4 flex flex-col">
        <main>{children}</main>
        <footer className="mt-auto">footer</footer>
      </div>
    </div>
  );
}
