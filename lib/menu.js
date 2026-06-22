// Single source of truth for primary navigation, shared by the navbar and
// footer so they can't drift out of sync. The navbar additionally injects a
// dynamic "Products" entry (with CMS-driven sub-ranges) at runtime.
export const baseMenuItems = [
  { id: 1, title: 'Home', url: '/' },
  {
    id: 2,
    title: 'About Us',
    url: '/about',
    submenu: [
      { title: 'CEO Greetings', url: '/about?q=ceo-greetings' },
      { title: 'Brief History', url: '/about?q=history' },
      { title: 'Facility', url: '/about?q=facility' },
      { title: 'Quality Policy', url: '/about?q=quality-policy' },
    ],
  },
  { id: 4, title: 'Certification', url: '/certification' },
  { id: 5, title: 'Contact Us', url: '/contact' },
];

export function buildMenuItems(range) {
  if (!range || range.length === 0) return baseMenuItems;

  const submenu = [...range]
    .sort((x, y) => x.id - y.id)
    .map((element) => ({
      title: element.title,
      url: '/products?q=' + element.sys.id,
    }));

  const product = {
    id: 3,
    title: 'Products',
    url: '/products',
    submenu,
  };

  // Insert "Products" right after "About Us".
  const index = 2;
  return [
    ...baseMenuItems.slice(0, index),
    product,
    ...baseMenuItems.slice(index),
  ];
}
