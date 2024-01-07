function Layout({ children }) {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="left text-2xl font-bold">
          <ul>
            <li>Bangladeshi News</li>
            <li>Bangladeshi News</li>
            <li>Bangladeshi News</li>
            <li>Bangladeshi News</li>
            <li>Bangladeshi News</li>
            <li>Bangladeshi News</li>
            <li>Bangladeshi News</li>
            <li>Bangladeshi News</li>
            <li>Bangladeshi News</li>
          </ul>
        </div>
        <div className="content col-span-4">{children}</div>
      </div>
    </>
  );
}

export default Layout;
