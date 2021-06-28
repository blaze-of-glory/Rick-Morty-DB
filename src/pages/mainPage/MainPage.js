import Banner from "../../common/banner/Banner";
import DescriptionBlock from "../../common/description-block/DecriptionBlock";
import CharactersCardsListContainer from "../../components/charactersBlock/CharactersCardsListContainer";


const MainPage = () => {
    return(
        <main>
            <Banner/>
            <DescriptionBlock/>
            <CharactersCardsListContainer/>
        </main>
    )
}

export default MainPage;