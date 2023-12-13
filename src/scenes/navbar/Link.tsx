 import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
    isMenuToggled:boolean;
    setIsMenuToggled:(isMenuToggled:boolean)=>void
}

const Link = ({page, selectedPage,setSelectedPage,isMenuToggled,setIsMenuToggled}: Props) => {

    const lowerCasePage = page.toLowerCase().replace(/ /g,"") as SelectedPage;
  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : "" }
        transtion duration-500 hover:text-primary-300
        `}
        href={`#${lowerCasePage}`}
        onClick={()=>{setSelectedPage(lowerCasePage);setIsMenuToggled(!isMenuToggled)}}
    >
        {page}
    </AnchorLink>
  )
}

export default Link