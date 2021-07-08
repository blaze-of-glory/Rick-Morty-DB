import {Box} from "@material-ui/core";


const Footer = () => {
    return (
        <footer>
            <Box px={{xs:3, sm:10}} py={{xs:5,sm:10}} bgcolor="#3f51b5" color="white">
                <Box textAlign="center" pt={{xs:5,md:10}} pb={{xs:5,sm:0}}>
                    Mikhail Petrunenko &reg; {new Date().getFullYear()}
                </Box>
            </Box>
        </footer>
    )
}

export default Footer;