import Link from 'next/link';

const MenuItemMobile = ({ menu, active, dropdown, setDropdown }) => {
  const selectDropdown = (title) => {
    if (title === dropdown) setDropdown('');
    else setDropdown(title);
  };

  return (
    <li
      className={`w-full text-sm ${active ? 'text-blue-700' : 'text-gray-800'}`}
      onClick={() => selectDropdown(menu.title)}
    >
      {menu.submenu ? (
        <div className='w-full'>
          <div className='block w-full p-2 uppercase text-left'>
            {menu.title}
          </div>
          {dropdown === menu.title && <Dropdown submenus={menu.submenu} />}
        </div>
      ) : (
        <Link href={menu.url} className='block p-2'>
          <span className='uppercase'>{menu.title}</span>
        </Link>
      )}
    </li>
  );
};

const Dropdown = ({ submenus }) => {
  return (
    <ul className='w-full rounded-sm bg-blue-700 bg-opacity-90'>
      {submenus.map((submenu, index) => (
        <Link key={index} className='w-full' href={submenu.url}>
          <li
            className={`p-2 mx-2 v text-white ${
              index + 1 !== submenus.length && 'border-b-2 border-white'
            } hover:font-bold cursor-pointer`}
          >
            {submenu.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MenuItemMobile;
