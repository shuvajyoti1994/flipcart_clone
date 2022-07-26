import { InputBase, Box, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display:flex;
`
const InputSearch = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`

const SearchIconWrapper= styled(Box)`
    color: #2874f0;
    padding: 5px;
`

const Search = () => {
    return (
        <>
            <SearchContainer>
                <InputSearch placeholder='Search for product, brands and more' />
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
            </SearchContainer>

        </>
    )
}

export default Search