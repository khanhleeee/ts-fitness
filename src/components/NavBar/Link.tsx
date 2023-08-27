import AnchorLink from "react-anchor-link-smooth-scroll"

import { ActivePage } from "~/shared/types"


type Props = {
  page: string;
  activePage: ActivePage;
  setActivePage: (value: ActivePage) => void;
}

const Link = (props: Props) => {
  const { page, activePage, setActivePage } = props
  
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as ActivePage

  return (
    <AnchorLink
      className={activePage === lowerCasePage ? 'text-primary-dark transition-opacity duration-500 hover:opacity-70' : 'hover:opacity-70 transition-opacity duration-500'}
      href={`#${lowerCasePage}`}
      onClick={() => setActivePage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link