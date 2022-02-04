import { Container, MenuGroup } from './style'
import logoIMG from '../../assets/images/logo.png'
import homeIcon from '../../assets/icons/icon-home.png'
import discoverIcon from '../../assets/icons/icon-discover.png'
import libraryIcon from '../../assets/icons/icon-library.png'
import playlistIcon from '../../assets/icons/icon-playlist.png'
import trendIcon from '../../assets/icons/icon-trend.png'


export function Menu() {
    return (
        <Container>
            <img src={logoIMG} alt="Dream Music"/>
            <MenuGroup>
            <small>Menu</small>
                <div>
                    <img src={homeIcon}/>
                    <p>Home</p>
                </div>
                <div>
                    <img src={trendIcon}/>
                    <p>Trends</p>
                </div>
                <div>
                    <img src={libraryIcon}/>
                    <p>Libary</p>
                </div>
                <div>
                    <img src={discoverIcon}/>
                    <p>Discover</p>
                </div>
            </MenuGroup>
        </Container>
    )
}